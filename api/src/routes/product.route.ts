import { Router, Request, Response } from 'express';
import { ProductController } from '../controllers/product.controller';
import { validateCreateProduct } from '../middleware/checkProduct.middleware';
import { validateUpdateProduct } from '../middleware/updateProduct.middleware';

const router = Router();
const productController = new ProductController();

router.get('/', (req, res) => productController.getAllProducts(req, res));
router.get('/category/:categoryId', (req, res) =>
  productController.getProductsByCategory(req, res)
);
router.get('/:productId', (req, res) =>
  productController.getProductById(req, res)
);
router.get('/promotion', (req, res) =>
  productController.getProductsWithPromotion(req, res)
);
router.post('/createProduct', validateCreateProduct, (req, res) =>
  productController.createProduct(req, res)
);
router.put('/editProduct/:productId', validateUpdateProduct, (req, res) =>
  productController.updateProduct(req, res)
);
router.delete(
  '/deleteProduct/:productId',
  async (req: Request, res: Response) => {
    await productController.deleteProduct(req, res);
  }
);

router.put('/status/:productId', (req, res) => {
  productController.updateProductStatus(req, res);
});

export default router;
