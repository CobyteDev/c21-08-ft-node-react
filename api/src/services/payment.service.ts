import { PaymentStatus } from "../common/paymentStatus.enum";
import { ClientOrder } from "../entities/ClientOrder.entity";
import { Payment } from "../entities/Payment.entity";
import { ClientOrderException } from "../exceptions/ClientOrderException";
import { PaymentException } from "../exceptions/PaymentException";
import { paymentRepository } from "../repositories/payment.repository";
import { ClientOrderService } from "./clientOrder.service";

export class PaymentService {
  private readonly clientOrderService: ClientOrderService;

  constructor() {
    this.clientOrderService = new ClientOrderService();
  }

  //Crear pago (desde el web hook).
  async createPayment(
    paymentId: string,
    amount: number,
    clientOrderId: string
  ): Promise<Payment> {
    try {
      const clientOrder: ClientOrder =
        await this.clientOrderService.getOrderById(clientOrderId);

      const newPayment: Payment = paymentRepository.create({
        paymentId,
        amount,
        clientOrder,
      });

      return paymentRepository.save(newPayment);
    } catch (error) {
      if (error instanceof ClientOrderException) {
        throw error;
      }
      throw new PaymentException("Error creating new payment", 500);
    }
  }

  //Buscar pago (para verificar desde el webhook si el pago existe).
  async getPaymentById(paymentId: string): Promise<Payment | null | undefined> {
    try {
      return paymentRepository.findOne({ where: { paymentId } });
    } catch (error) {
      throw new PaymentException("Error getting payment by id", 500);
    }
  }

  //Obtener payment por id de la orden.
  async getPaymentByOrderId(clientOrderId: string): Promise<Payment | null> {
    try {
      const clientOrder = await this.clientOrderService.getOrderById(
        clientOrderId
      );

      return paymentRepository.findOne({ where: { clientOrder } });
    } catch (error) {
      if (error instanceof ClientOrderException) {
        throw error;
      }

      throw new PaymentException("Error getting payment by clientOrderId", 500);
    }
  }

  //Para cambiar el estado del pago una vez enviado el webhook.
  async changePaymentStatus(
    paymentId: string,
    status: PaymentStatus
  ): Promise<void> {
    try {
      const payment: Payment | null | undefined = await this.getPaymentById(
        paymentId
      );

      if (!payment) {
        throw new PaymentException("Payment not found", 404);
      }

      payment.status = status;

      await paymentRepository.save(payment);
    } catch (error) {
      if (error instanceof PaymentException) {
        throw error;
      }
      throw new PaymentException("Error getting payment by id", 500);
    }
  }
}
