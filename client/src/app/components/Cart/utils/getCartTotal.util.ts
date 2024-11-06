import { ProductInCart } from "../types/ProductInCart.type"
import { computeDiscount } from "@/app/utils/price.util"

export const getCartTotal = (productsInCart: ProductInCart[]) => {
  let total = 0
  for (const product of productsInCart) {
    const finalPrice = product.promotion
      ? computeDiscount(product.price, product.promotion.percentage)
      : product.price
    total += finalPrice * product.productQty
  }
  return Number(total.toFixed(2))
}
