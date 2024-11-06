import { sortPromotions } from "@/app/utils/sortPromotions.util"
import { API_BASE_URL } from "@/app/consts/api.consts"
import { PromotionPayload } from "@/app/types/Promotion.type"

export const getDiscountedProducts = async () => {
  const res = await fetch(`${API_BASE_URL}/promotion`, {
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
  const discountedProducts: PromotionPayload[] = await res.json()
  const discountedProductsSorted = sortPromotions(discountedProducts)
  return discountedProductsSorted
}
