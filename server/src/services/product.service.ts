import { Product } from "../entities/Product.entity";
import { productRepository } from "../repositories/productRepository";

export class ProductService {
  async getAllProducts(): Promise<Product[]> {
    try {
      return await productRepository.find();
    } catch (error) {
      throw new Error("Error getting all products");
    }
  }
}
