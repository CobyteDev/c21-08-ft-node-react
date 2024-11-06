import { AppDataSource } from "../data-source";
import { Promotion } from "../entities/Promotion.entity";

export const promotionRepository = AppDataSource.getRepository(Promotion);
