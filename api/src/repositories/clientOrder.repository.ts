import { AppDataSource } from "../data-source";
import { ClientOrder } from "../entities/ClientOrder.entity";

export const clientOrderRepository = AppDataSource.getRepository(ClientOrder);
