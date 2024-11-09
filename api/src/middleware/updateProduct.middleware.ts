import { Request, Response, NextFunction } from 'express';
import { UnitOfMeasurement } from '../types/product.types';
import validatorFields from '../utils/validatorFields';
import { PromotionService } from '../services/promotion.service';
import { CategoryService } from '../services/category.service';
const promotionService = new PromotionService();
const categoryService = new CategoryService();

export const validateUpdateProduct = async (
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

  const errors = [];
  if (name) {
    console.log('name');
    const error = validatorFields.checkField({ name }, 'string');
    if (error) errors.push(error);
  }
  if (price) {
    const error = validatorFields.checkField({ price }, 'number');
    if (error) errors.push(error);
  }
  if (unitOfMeasurement) {
    const error = validatorFields.checkFieldEnum(
      unitOfMeasurement,
      UnitOfMeasurement
    );
    if (error) errors.push(error);
  }
  if (description) {
    const error = validatorFields.checkField({ description }, 'string');
    if (error) errors.push(error);
  }
  if (stock) {
    const error = validatorFields.checkField({ stock }, 'number');
    if (error) errors.push(error);
  }
  if (imgUrl) {
    const error = validatorFields.checkImgUrl('imgUrl', imgUrl);
    if (error) errors.push(error);
  }
  if (brand) {
    const error = validatorFields.checkField({ brand }, 'string');
    if (error) errors.push(error);
  }
  if (categoryId) {
    const error = validatorFields.checkFieldServices(
      { categoryId },
      categoryID
    );
    if (error) errors.push(error);
  }
  if (promotionId) {
    const error = validatorFields.checkFieldServices(
      { promotionId },
      promotionID
    );
    if (error) errors.push(error);
  }

  if (errors.length > 0) {
    res.status(422).json({ errors });
    return;
  }
  return next();
};
