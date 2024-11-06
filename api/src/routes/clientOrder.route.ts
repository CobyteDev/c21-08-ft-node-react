import { Router } from "express";
import { ClientOrderController } from "../controllers/clientOrder.controller";

const router = Router();
const clientOrderController = new ClientOrderController();

router.post("/create", (req, res, next) =>
  clientOrderController.createOrder(req, res, next)
);

router.get("/confirm", (req, res, next) =>
  clientOrderController.confirmOrder(req, res, next)
);

router.get("/:clientOrderId", (req, res, next) =>
  clientOrderController.getOrderById(req, res, next)
);

router.get("/user/:userId", (req, res, next) =>
  clientOrderController.getOrdersByUserId(req, res, next)
);

router.get("/all/confirmed", (req, res, next) =>
  clientOrderController.getAllConfirmedOrders(req, res, next)
);

export default router;
