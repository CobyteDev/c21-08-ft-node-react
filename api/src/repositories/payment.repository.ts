import { AppDataSource } from "../data-source";
import { Payment } from "../entities/Payment.entity";

export const paymentRepository = AppDataSource.getRepository(Payment);
