import { Router } from "express";
import { PromotionController } from "../controllers/promotion.controller";
import { PromotionService } from "../services/promotion.service";

const router = Router();

const promotionService = new PromotionService();
const promotionController = new PromotionController(promotionService);

router.get("/", async (req, res, next) => {
  try {
    await promotionController.getAllPromotions(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
