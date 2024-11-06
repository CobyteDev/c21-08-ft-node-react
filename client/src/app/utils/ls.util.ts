import { ProductInCart } from "../components/Cart/types/ProductInCart.type"

export const updateCartLS = (cartState: ProductInCart[]) => {
  window.localStorage.setItem("cart", JSON.stringify(cartState))
}

export const getCartItems = () => {
  const localStorageLecture = window.localStorage.getItem("cart")
  const parsedCart: ProductInCart[] = localStorageLecture
    ? JSON.parse(localStorageLecture)
    : []
  return parsedCart
}
