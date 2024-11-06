import { IsNull, Not } from "typeorm";
import { promotionRepository } from "../repositories/promotion.repository";

export class PromotionService {
  async getAllPromotions() {
    try {
      const promotions = await promotionRepository.find({
        relations: ["product"],
      });

      return promotions;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error al obtener las promociones: ${error.message}`);
      } else {
        throw new Error("Error desconocido al obtener las promociones.");
      }
    }
  }
}
