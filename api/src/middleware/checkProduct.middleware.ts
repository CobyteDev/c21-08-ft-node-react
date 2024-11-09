import { Request, Response, NextFunction } from 'express';
import {
  UnitOfMeasurement,
  CategoriesEnum,
  PromotionEnum,
} from '../types/product.types';
import validatorFields from '../utils/validatorFields';
export const validateCreateProduct = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response<any, Record<string, any>> => {
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
  const missings = [];
  const errors = [];
  if (!name) {
    missings.push('name is missing');
  } else {
    const error = validatorFields.checkField(name, 'string');
    if (error) errors.push(error);
  }
  if (!price) {
    missings.push('price is missing');
  } else {
    const error = validatorFields.checkField(price, 'number');
    if (error) errors.push(error);
  }
  if (!unitOfMeasurement) {
    missings.push('unit of measurement is missing');
  } else {
    const error = validatorFields.checkFieldEnum(
      unitOfMeasurement,
      UnitOfMeasurement
    );
    if (error) errors.push(error);
  }
  if (!description) {
    missings.push('descripton is missing');
  } else {
    const error = validatorFields.checkField(description, 'string');
    if (error) errors.push(error);
  }
  if (!stock) {
    missings.push('stock is missing');
  } else {
    const error = validatorFields.checkField(stock, 'number');
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
    const error = validatorFields.checkField(brand, 'string');
    if (error) errors.push(error);
  }
  if (!categoryId) {
    missings.push('categoryId is missing');
  } else {
    const error = validatorFields.checkFieldEnum(categoryId, CategoriesEnum);
    if (error) errors.push(error);
  }
  if (promotionId) {
    const error = validatorFields.checkFieldEnum(promotionId, PromotionEnum);
    if (error) errors.push(error);
  }

  if (missings.length > 0) {
    return res.status(400).json({ errors: missings });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors });
  }
  return next();
};
