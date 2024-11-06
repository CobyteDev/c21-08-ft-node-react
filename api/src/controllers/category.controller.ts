import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";
import { CategoryException } from "../exceptions/CategoryException";
import { Category } from "../entities/Category.entity";

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
}
