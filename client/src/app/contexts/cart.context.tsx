"use client"

import { createContext } from "react"
import { useCartReducer } from "../hooks/useCartReducer.hook"
import { CartContextValue } from "../types/CartContextValue.type"
import { CartContextProviderProps } from "../types/CartContextProviderProps.type"

export const CartContext = createContext<CartContextValue>(
  {} as CartContextValue,
)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const {
    productsInCart,
    addToCart,
    incrementProductQty,
    decrementProductQty,
    removeProduct,
  } = useCartReducer()

  return (
    <CartContext.Provider
      value={{
        productsInCart,
        addToCart,
        incrementProductQty,
        decrementProductQty,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
