import { Request, Response, NextFunction } from 'express';
import { Measurement } from '../common/measurement.enum';
import { CategoryService } from '../services/category.service';
import { promotionRepository } from '../repositories/promotion.repository';
import { error } from 'console';
import { ProductEntry } from '../types/product.types';

export const validateCreateProduct = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const {
    name,
    price,
    unitOfMeasurement,
    description,
    stock,
    imgUrl,
    brand,
    categoryId,
    promotionId,
  } = req.body;

  // Validación de 'name'
  if (!name || typeof name !== 'string' || name.trim() === '') {
    res.status(400).json({
      message: 'Product name is required and must be a non-empty string.',
    });
    return;
  }

  // Validación de 'price'
  if (price === undefined || typeof price !== 'number' || price <= 0) {
    res.status(400).json({
      message:
        'Product price is required, must be a number, and must be greater than zero.',
    });
    return;
  }

  // Validación de 'unitOfMeasurement'
  if (!unitOfMeasurement) {
    res
      .status(400)
      .json({ message: 'Unit of measurement is required and must be valid.' });
    return;
  }

  // Validación de 'description'
  if (
    !description ||
    typeof description !== 'string' ||
    description.trim() === ''
  ) {
    res.status(400).json({
      message:
        'Product description is required and must be a non-empty string.',
    });
    return;
  }

  // Validación de 'stock'
  if (stock === undefined || typeof stock !== 'number' || stock < 0) {
    res.status(400).json({
      message:
        'Stock quantity is required, must be a number, and must be zero or greater.',
    });
    return;
  }

  // Validación de 'imgUrl'
  if (!imgUrl) {
    res
      .status(400)
      .json({ message: 'Image URL is required and must be a string.' });
    return;
  }

  // Validación de 'brand'
  if (!brand || typeof brand !== 'string') {
    res
      .status(400)
      .json({ message: 'Brand is required and must be a string.' });
    return;
  }

  // Validación de 'categoryId'
  // if (
  //   !category || typeof category.categoryId !== 'string' || category.categoryId.trim() === ''
  // ) {
  //   res.status(400).json({
  //     message: 'Category ID is required and must be a non-empty string.',
  //   });
  //   return;
  // }

  // // Validación de 'promotionId'
  // if (!promotion || typeof promotion.promotionId !== 'string') {
  //   res
  //     .status(400)
  //     .json({ message: 'Promotion ID is required and must be a string.' });
  //   return;
  // }

  // Validacion de de "categoryId"
  if (!categoryId) throw new Error('Category ID is required.');

  // Validación de 'promotionId'
  if (!promotionId) throw new Error('Promotion ID is required.');

  next();
};
