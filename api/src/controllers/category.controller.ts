import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";
import { CategoryException } from "../exceptions/CategoryException";
import { Category } from "../entities/Category.entity";
import { CategoryDto } from "../dto/Category.dto";

export class CategoryController {
  private readonly categoryService: CategoryService;
  constructor() {
    this.categoryService = new CategoryService();
  }

  async getAllCategories(req: Request, res: Response): Promise<any> {
    try {
      const categories: Category[] =
        await this.categoryService.getAllCategories();

      return res.status(200).json(categories);
    } catch (error) {
      if (error instanceof CategoryException) {
        throw error;
      }
      throw new CategoryException("Error getting all categories", 502);
    }
  }

  async createCategory(req: Request, res: Response): Promise<any> {
    try {
      const categoryData: CategoryDto = req.body;
      const newCategory = await this.categoryService.createCategory(categoryData);
      return res.status(201).json(newCategory);
    } catch (error) {
      if (error instanceof CategoryException) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: "Error creating new category" });
    }
  }

  async deleteCategory(req: Request, res: Response): Promise<any> {
    try {
      const { categoryId } = req.params; // Obtener el ID de la categoría de los parámetros
      await this.categoryService.deleteCategory(categoryId); // Llamar al servicio para eliminarla
      return res.status(200).json({ message: "Category deleted successfully" }); // Responder con éxito
    } catch (error) {
      if (error instanceof CategoryException) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: "Error deleting category" });
    }
  }
}
