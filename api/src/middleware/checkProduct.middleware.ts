import { Request, Response, NextFunction } from 'express';
import {
  UnitOfMeasurement,
  CategoriesEnum,
  PromotionEnum,
} from '../types/product.types';
import validatorFields from '../utils/validatorFields';
import { PromotionService } from '../services/promotion.service';
import { CategoryService } from '../services/category.service';
const promotionService = new PromotionService();
const categoryService = new CategoryService();

export const validateCreateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
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
  const promotionID = await promotionService.getAllPromotions();
  const categoryID = await categoryService.getAllCategories();
  const missings = [];
  const errors = [];
  if (!name) {
    missings.push('name is missing');
  } else {
    const error = validatorFields.checkField({ name }, 'string');
    if (error) errors.push(error);
  }
  if (!price) {
    missings.push('price is missing');
  } else {
    const error = validatorFields.checkField({ price }, 'number');
    if (error) errors.push(error);
  }
  //   if (!unitOfMeasurement) {
  //     missings.push('unit of measurement is missing');
  //   } else {
  //     const error = validatorFields.checkFieldEnum(
  //       { unitOfMeasurement },
  //       UnitOfMeasurement
  //     );
  //     if (error) errors.push(error);
  //   }
  if (!description) {
    missings.push('descripton is missing');
  } else {
    const error = validatorFields.checkField({ description }, 'string');
    if (error) errors.push(error);
  }
  if (!stock) {
    missings.push('stock is missing');
  } else {
    const error = validatorFields.checkField({ stock }, 'number');
    if (error) errors.push(error);
  }
  if (!imgUrl) {
    missings.push('imgUrl is missing');
  } else {
    const error = validatorFields.checkImgUrl('imgUrl', imgUrl);
    if (error) errors.push(error);
  }
  if (!brand) {
    missings.push('brand is missing');
  } else {
    const error = validatorFields.checkField({ brand }, 'string');
    if (error) errors.push(error);
  }
  if (!categoryId) {
    missings.push('categoryId is missing');
  } else {
    const error = validatorFields.checkFieldEnum({ categoryId }, categoryID);
    if (error) errors.push(error);
  }
  if (promotionId) {
    const error = validatorFields.checkFieldEnum({ promotionId }, promotionID);
    if (error) errors.push(error);
  }

  if (missings.length > 0) {
    res.status(400).json({ errors: missings });
    return;
  }
  if (errors.length > 0) {
    res.status(422).json({ errors });
    return;
  }
  return next();
};
