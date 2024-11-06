import { AddToCartDto } from "../dto/AddToCart.dto";
import { ClientOrder } from "../entities/ClientOrder.entity";
import { OrderProduct } from "../entities/OrderProduct.entity";
import { ClientOrderException } from "../exceptions/ClientOrderException";
import { OrderProductException } from "../exceptions/OrderProductException";
import { ProductException } from "../exceptions/ProductException";
import { UserException } from "../exceptions/UserException";
import { orderProductRepository } from "../repositories/orderProduct.repository";
import { ClientOrderService } from "./clientOrder.service";
import { ProductService } from "./product.service";

export class OrderProductService {
  private readonly clientOrderService: ClientOrderService;
  private readonly productService: ProductService;
  constructor() {
    this.clientOrderService = new ClientOrderService();
    this.productService = new ProductService();
  }

  //Metodo para asignar uno o mas productos a una orden existente.
  async addProductToOrder(
    orderId: string,
    products: AddToCartDto[]
  ): Promise<void> {
    try {
      //Traemos la orden recibida por parametro (orderId)
      const order: ClientOrder | null =
        await this.clientOrderService.getOrderById(orderId);

      //Verificamos que exista, de lo contrario enviamos un error.
      if (!order) {
        throw new OrderProductException("Order not found", 404);
      }

      //Descomentar esto en caso que se quiera verificar que confirmen la orden antes de seguir.
      // if (!order.isConfirmed) {
      //   throw new OrderProductException("Order not confirmed", 400);
      // }

      //Recorremos la lista de productos enviada por el cliente y agregamos en el array un objeto de tipo OrderProduct con cada iteracion
      const orderProductsPromises = products.map(async (item) => {
        const orderProductId = crypto.randomUUID();
        const product = await this.productService.getProductById(
          item.productId
        );

        return {
          orderProductId,
          quantity: item.productQty,
          clientOrder: order,
          product,
        };
      });

      //Esperamos que se resuelvan todas las promesas de la linea 41 y lo almacenamos en una variable
      const orderProducts = await Promise.all(orderProductsPromises);

      await orderProductRepository.save(orderProducts);
    } catch (error) {
      if (
        error instanceof ClientOrderException ||
        error instanceof ProductException
      ) {
        throw error;
      }

      throw new OrderProductException("Error adding product in cart", 500);
    }
  }

  //Metodo para obtener un pedido completo por id de la orden.
  async getCartByOrderId(clientOrderId: string): Promise<OrderProduct[]> {
    try {
      const order: ClientOrder = await this.clientOrderService.getOrderById(
        clientOrderId
      );

      const cart: OrderProduct[] = await orderProductRepository.find({
        where: { clientOrder: order },
      });

      if (cart.length === 0) {
        throw new OrderProductException("This order is empty", 400);
      }

      return cart;
    } catch (error) {
      if (
        error instanceof OrderProductException ||
        error instanceof ClientOrderException
      ) {
        throw error;
      }

      throw new OrderProductException(
        "Error trying to get cart by orderId",
        500
      );
    }
  }

  //Metodo para obtener el historial de compras por usuario
  async getPurchaseHistory(userId: string) {
    try {
      const orders: ClientOrder[] =
        await this.clientOrderService.getOrdersByUserId(userId);

      const purchaseByEachOrderPromise = orders.map(async (order, index) => {
        const cart = await orderProductRepository.find({
          where: { clientOrder: order },
        });

        return {
          date: order.createdAt,
          cart,
        };
      });

      const purchaseByEachOrder = Promise.all(purchaseByEachOrderPromise);

      return purchaseByEachOrder;
    } catch (error) {
      if (
        error instanceof ClientOrderException ||
        error instanceof OrderProductException ||
        error instanceof UserException
      ) {
        throw error;
      }

      throw new OrderProductException(
        "Error getting purchase history of a user",
        500
      );
    }
  }
}
