import { NextFunction, Request, Response } from "express";
import { OrderProductService } from "../services/orderProduct.service";

export class OrderProductController {
  private readonly orderProductService: OrderProductService;
  constructor() {
    this.orderProductService = new OrderProductService();
  }

  async addProductToOrder(req: Request, res: Response, next: NextFunction) {
    const { orderId } = req.params;
    const { products } = req.body;

    try {
      await this.orderProductService.addProductToOrder(orderId, products);

      res.status(200).json({ message: "Products added to cart succesfully" });
    } catch (error) {
      next(error);
    }
  }

  async getCartByOrderId(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { clientOrderId } = req.params;
    try {
      const cart = await this.orderProductService.getCartByOrderId(
        clientOrderId
      );

      return res.status(200).json(cart);
    } catch (error) {
      next(error);
    }
  }

  async getPurchaseHistory(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const purchaseHistory = await this.orderProductService.getPurchaseHistory(
        userId
      );

      res.status(200).json(purchaseHistory);
    } catch (error) {
      next(error);
    }
  }
}
