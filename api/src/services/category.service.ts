import { Category } from "../entities/Category.entity";
import { CategoryException } from "../exceptions/CategoryException";
import { categoryRepository } from "../repositories/category.repository";

export class CategoryService {
  async getAllCategories() {
    try {
      return await categoryRepository.find();
    } catch (error) {
      throw new CategoryException("Error getting all categories", 500);
    }
  }

  async getCategoryById(categoryId: string): Promise<Category | undefined> {
    try {
      const category = await categoryRepository.findOne({
        where: { categoryId },
      });

      if (!category) {
        throw new CategoryException("Category not found", 404);
      }

      return category;
    } catch (error) {
      if (error instanceof CategoryException) {
        throw error;
      }

      throw new CategoryException("Error getting category by id", 500);
    }
  }
}
