import { NextFunction, Request, Response } from "express";
import { ClientOrderService } from "../services/clientOrder.service";
import { CreateOrderDto } from "../dto/CreateOrder.dto";
import { ClientOrderException } from "../exceptions/ClientOrderException";
import { ClientOrder } from "../entities/ClientOrder.entity";

export class ClientOrderController {
  private readonly clientOrderService: ClientOrderService;

  constructor() {
    this.clientOrderService = new ClientOrderService();
  }

  async createOrder(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { userId, delivery, methodOfPayment } = req.body;

    try {
      const order = await this.clientOrderService.createOrder(
        userId,
        delivery,
        methodOfPayment
      );

      res.status(201).json({
        message: "Order succesfully created",
        orderId: order?.clientOrderId,
      });
    } catch (error) {
      next(error);
    }
  }

  async confirmOrder(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const orderId = req.query.orderId;
      await this.clientOrderService.confirmOrder(orderId);

      res
        .status(200)
        .json({ message: "Order has been confirmed", order: orderId });
    } catch (error) {
      next(error);
    }
  }

  async getOrderById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { clientOrderId } = req.params;
      const order = await this.clientOrderService.getOrderById(clientOrderId);

      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }

  async getOrdersByUserId(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { userId } = req.params;
      const orders = await this.clientOrderService.getOrdersByUserId(userId);

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }

  async getAllConfirmedOrders(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const orders: ClientOrder[] =
        await this.clientOrderService.getAllConfirmedOrders();

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
}
