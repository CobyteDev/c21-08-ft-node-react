import { PromotionPayload } from "../types/Promotion.type"

export const sortPromotions = (promotions: PromotionPayload[]) => {
  const sorted = promotions.sort((a, b) => b.percentage - a.percentage)
  const flatted = sorted.map((p) => p.product).flat()
  return flatted
}
