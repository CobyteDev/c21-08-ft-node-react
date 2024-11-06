import { Request, Response } from "express";
import { ProductService } from "../services/product.service";
import { Product } from "../entities/Product.entity";
import { ProductException } from "../exceptions/ProductException";
import { CreateProductDto } from "../dto/ProductDto";

export class ProductController {
  private readonly productService: ProductService;
  constructor() {
    this.productService = new ProductService();
  }

  async createProduct(req: Request, res: Response): Promise<any> {
    try {
      const createProductDto: CreateProductDto = req.body;
      const newProduct = await this.productService.createProduct(
        createProductDto
      );

      return res.status(201).json(newProduct);
    } catch (error) {
      if (error instanceof ProductException) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: "Error creating product" });
    }
  }

  // Obtener todos los productos
  async getAllProducts(req: Request, res: Response): Promise<any> {
    try {
      const products = await this.productService.getAllProducts();

      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ message: "Error getting all products" });
    }
  }

  async getProductById(req: Request, res: Response): Promise<any> {
    try {
      const productId: string = req.params.productId;
      const product: Product | null = await this.productService.getProductById(
        productId
      );

      if (!product) {
        return res.status(404).json({ message: "Product ID not found" });
      }

      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ message: "Error getting a product by Id" });
    }
  }

  // Obtener todos los productos por categoria
  async getProductsByCategory(req: Request, res: Response): Promise<any> {
    try {
      const categoryId: string = req.params.categoryId;
      const products: Product[] | undefined =
        await this.productService.getProductsByCategory(categoryId);

      return res.status(200).json(products);
    } catch (error) {
      if (error instanceof ProductException) {
        throw error;
      }
      throw new ProductException("Error getting all products", 500);
    }
  }

  //Obtener todos los productos que tienen una promocion activa
  async getProductsWithPromotion(req: Request, res: Response) {
    try {
      const products: Product[] =
        await this.productService.getProductsWithPromotion();

      res.status(200).json(products);
    } catch (error) {
      if (error instanceof ProductException) {
        throw error;
      }

      throw new ProductException("Error getting products in promotion", 500);
    }
  }

  async updateProduct(req: Request, res: Response): Promise<void> {
    const { productId } = req.params;
    const productData = req.body;

    try {
      const updatedProduct = await this.productService.updateProduct(
        productId,
        productData
      );
      res.status(200).json(updatedProduct);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async deleteProduct(req: Request, res: Response): Promise<Response> {
    const productId = req.params.productId;

    try {
      await this.productService.deleteProduct(productId);

      return res.status(200).json({
        message: "Producto eliminado exitosamente",
      });
    } catch (error: any) {
      return res.status(500).json({
        message: "Error al eliminar el producto",
        error: error.message,
      });
    }
  }

  async updateProductStatus(req: Request, res: Response): Promise<Response> {
    const { productId } = req.params;
    const { status } = req.body; // Extrae el estado del cuerpo de la solicitud

    try {
      const updatedProduct = await this.productService.statusProduct(
        productId,
        status
      );
      return res.status(200).json(updatedProduct);
    } catch (error) {
      if (error instanceof ProductException) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
