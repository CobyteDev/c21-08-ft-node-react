import { useReducer, useEffect } from "react"
import { cartReducer } from "../reducers/cartReducer.reducer"
import { Product } from "../types/Product.type"

export const getCartItems = () => {
  const localStorageLecture = window.localStorage.getItem("cart")
  const parsedCart = localStorageLecture ? JSON.parse(localStorageLecture) : []
  return parsedCart
}
export const cartInitialState = []

export const useCartReducer = () => {
  const [productsInCart, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", product })
  }

  const incrementProductQty = (id: string) => {
    dispatch({ type: "INCREMENT_QTY", id })
  }

  const decrementProductQty = (id: string) => {
    dispatch({ type: "DECREMENT_QTY", id })
  }

  const removeProduct = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", id })
  }

  useEffect(() => {
    dispatch({ type: "INIT_CART" })
  }, [])
  return {
    productsInCart,
    addToCart,
    incrementProductQty,
    decrementProductQty,
    removeProduct,
  }
}
