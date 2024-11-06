import { Router } from "express";
import { OrderProductController } from "../controllers/orderProduct.controller";

const router = Router();
const orderProductController = new OrderProductController();

router.post("/:orderId", (req, res, next) =>
  orderProductController.addProductToOrder(req, res, next)
);

router.get("/:clientOrderId", (req, res, next) =>
  orderProductController.getCartByOrderId(req, res, next)
);

router.get("/history/:userId", (req, res, next) =>
  orderProductController.getPurchaseHistory(req, res, next)
);

export default router;
