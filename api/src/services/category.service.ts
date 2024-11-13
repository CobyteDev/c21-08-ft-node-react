import { Category } from "../entities/Category.entity";
import { CategoryException } from "../exceptions/CategoryException";
import { categoryRepository } from "../repositories/category.repository";
import { CategoryDto } from "../dto/Category.dto";

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

  async createCategory(categoryData: CategoryDto): Promise<Category> {
    try {
      // Crear la nueva categoría usando el DTO
      const newCategory = categoryRepository.create({
        categoryName: categoryData.categoryLabel,
        categoryLabel: categoryData.categoryLabel,
        order: categoryData.order,
      });

      // Guardar la categoría en la base de datos
      return await categoryRepository.save(newCategory);
    } catch (error) {
      throw new CategoryException("Error creating new category", 500);
    }
  }

  async deleteCategory(categoryId: string): Promise<void> {
    try {
      const category = await categoryRepository.findOne({
        where: { categoryId },
      });

      if (!category) {
        throw new CategoryException("Category not found", 404); // Lanzar un error si no existe
      }

      await categoryRepository.remove(category); // Eliminar la categoría de la base de datos
    } catch (error) {
      if (error instanceof CategoryException) {
        throw error;
      }
      throw new CategoryException("Error deleting category", 500);
    }
  }  

  async updateCategory(categoryId: string, categoryData: CategoryDto): Promise<Category> {
    try {
      // Encontrar la categoría sin hacer comprobaciones
      const category = await categoryRepository.findOneOrFail({
        where: { categoryId },
      });
  
      // Actualizar los campos de la categoría con los datos del DTO
      category.categoryName = categoryData.categoryLabel;
      category.categoryLabel = categoryData.categoryLabel;
      category.order = categoryData.order;
  
      // Guardar la categoría actualizada en la base de datos
      return await categoryRepository.save(category);
    } catch (error) {
      throw new CategoryException("Error updating category", 500);
    }
  }
}
