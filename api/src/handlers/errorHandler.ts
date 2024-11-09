import express from 'express';

import { CategoryException } from '../exceptions/CategoryException';
import { ClientOrderException } from '../exceptions/ClientOrderException';
import { PreferenceException } from '../exceptions/PreferenceException';
import { ProductException } from '../exceptions/ProductException';
import { PromotionException } from '../exceptions/PromotionException';
import { UserException } from '../exceptions/UserException';
import { WebHookException } from '../exceptions/webHooksException';
import { OrderProductException } from '../exceptions/OrderProductException';

export const errorHandler = (
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): any => {
  if (
    err instanceof UserException ||
    err instanceof ClientOrderException ||
    err instanceof ProductException ||
    err instanceof CategoryException ||
    err instanceof PromotionException ||
    err instanceof PreferenceException ||
    err instanceof WebHookException ||
    err instanceof OrderProductException
  ) {
    return res
      .status(err.statusCode)
      .json({ message: err.message, statusCode: err.statusCode });
  }

  return res.status(500).json({
    message: 'Server error',
    error: err.message,
  });
};
