import { Request, Response } from "express";
import { PromotionService } from "../services/promotion.service";

export class PromotionController {
  constructor(private promotionService: PromotionService) {}

  async getAllPromotions(req: Request, res: Response): Promise<Response> {
    try {
      const promotions = await this.promotionService.getAllPromotions();
      return res.status(200).json(promotions);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res
        .status(500)
        .json({ message: "Error desconocido al obtener promociones." });
    }
  }
}
