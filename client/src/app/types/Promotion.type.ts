import { Product } from "./Product.type"

export type Promotion = {
  promotionId: string
  percentage: number
}

export type PromotionPayload = {
  promotionId: number
  percentage: number
  product: Product[]
}
