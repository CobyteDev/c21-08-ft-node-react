import { AppDataSource } from "../data-source";
import { OrderProduct } from "../entities/OrderProduct.entity";

export const orderProductRepository = AppDataSource.getRepository(OrderProduct);
