import { Product } from "../../../types/Product.type"
import { useContext } from "react"
import { CartContext } from "../../../contexts/cart.context"
import { computeDiscount } from "@/app/utils/price.util"

const useCardLogic = (product: Product) => {
  const { addToCart, productsInCart } = useContext(CartContext)
  const { promotion, price } = product
  const handleAddToCart = () => {
    addToCart(product)
  }
  const finalPrice =
    promotion !== null ? computeDiscount(price, promotion.percentage) : price
  const discount = promotion !== null ? promotion.percentage * 100 : null
  return {
    finalPrice,
    discount,
    handleAddToCart,
    productsInCart,
  }
}

export default useCardLogic
