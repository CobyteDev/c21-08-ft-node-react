import { PaymentStatus } from "../common/paymentStatus.enum";
import { PaymentException } from "../exceptions/PaymentException";
import { WebHookException } from "../exceptions/webHooksException";
import { PaymentService } from "./payment.service";

export class WebHooksService {
  private readonly paymentService: PaymentService;

  constructor() {
    this.paymentService = new PaymentService();
  }

  async handleWebHook(webHookData: any) {
    try {
      //Obtenemos el id proveniente del web hook.
      const paymentId = webHookData.data.id;

      //Obtenemos los detalles del pago y lo destructuramos.
      const paymentDetails = await this.getPaymentDetails(paymentId);
      const { id, transaction_amount, external_reference, status_detail } =
        paymentDetails;

      const paymentDB = await this.paymentService.getPaymentByOrderId(
        external_reference
      );

      console.log("PaymentDB - ", paymentDB);
      console.log("Id - ", id);

      //Creamos un registro en la columna de payment.
      if (paymentDB?.paymentId !== id) {
        console.log("entro")
        await this.paymentService.createPayment(
          id,
          transaction_amount,
          external_reference
        );
      }

      if (status_detail === "accredited") {
        await this.paymentService.changePaymentStatus(id, PaymentStatus.DONE);
        //Metodo para restar cantidad del stock.
      } else if (status_detail === "rejected") {
        await this.paymentService.changePaymentStatus(
          id,
          PaymentStatus.REJECTED
        );
      }
    } catch (error) {
      if (
        error instanceof WebHookException ||
        error instanceof PaymentException
      ) {
        throw error;
      }
      throw new WebHookException("Error handling web hook", 500);
    }
  }

  private async getPaymentDetails(paymentId: string) {
    try {
      const accessToken = process.env.ACCESS_TOKEN_MP;

      const response = await fetch(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      return await response.json();
    } catch (error) {
      throw new WebHookException(
        "Error getting payment details of web hook sent by Mercado Pago",
        500
      );
    }
  }
}
