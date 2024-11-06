import { ProductInCart } from '../../Cart/types/ProductInCart.type'

export const getTotalProductsInCart = (productsInCart: ProductInCart[]) => {
  const total = productsInCart.reduce((total, productInCart) => {
    return total + productInCart.productQty
  }, 0)

  return total
}
