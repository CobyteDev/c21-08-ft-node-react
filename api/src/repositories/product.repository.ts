import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product.entity";

export const productRepository = AppDataSource.getRepository(Product);
