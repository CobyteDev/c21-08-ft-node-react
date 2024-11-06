import { MercadoPagoConfig, Preference } from "mercadopago";
import { PreferenceResponse } from "mercadopago/dist/clients/preference/commonTypes";
import { AddToCartDto } from "../dto/AddToCart.dto";
import { ClientOrder } from "../entities/ClientOrder.entity";
import { ClientOrderException } from "../exceptions/ClientOrderException";
import { PreferenceException } from "../exceptions/PreferenceException";
import { ProductException } from "../exceptions/ProductException";
import { ClientOrderService } from "./clientOrder.service";
import { ProductService } from "./product.service";
import { OrderProductService } from "./orderProduct.service";
import { OrderProductException } from "../exceptions/OrderProductException";

export class PreferenceService {
  private readonly client: MercadoPagoConfig;
  private readonly productService: ProductService;
  private readonly orderProductService: OrderProductService;

  constructor() {
    this.client = new MercadoPagoConfig({
      accessToken: process.env.ACCESS_TOKEN_MP || "",
    });
    this.productService = new ProductService();
    this.orderProductService = new OrderProductService();
  }

  async createPreference(clientOrderId: string): Promise<PreferenceResponse> {
    try {
      const preference = new Preference(this.client);

      //Obtenemos todos los productos desde la orden.
      const products = await this.orderProductService.getCartByOrderId(
        clientOrderId
      );

      const itemsPromises = products.map(async (product) => {
        const foundProduct = await this.productService.getProductById(
          product.product.productId
        );

        return {
          id: foundProduct.productId,
          title: foundProduct.name,
          unit_price: foundProduct.price,
          quantity: product.quantity,
          currency_id: "ARS",
          description: foundProduct.description,
        };
      });

      const items = await Promise.all(itemsPromises);

      return await preference.create({
        body: {
          items,
          back_urls: {
            success: "http://localhost:3170/success",
            failure: "http://localhost:3170/failure",
            pending: "http://localhost:3170/pending",
          },
          notification_url: `${process.env.LOCAL_HOST_TUNNEL}/webhook`,
          external_reference: clientOrderId,
        },
      });
    } catch (error) {
      if (
        error instanceof ProductException ||
        error instanceof ClientOrderException ||
        error instanceof OrderProductException
      ) {
        throw error;
      }
      throw new PreferenceException(
        "Error creating Mercado Pago preference",
        500
      );
    }
  }
}
