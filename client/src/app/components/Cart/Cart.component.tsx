"use client"

import { useContext } from "react"
import CartHeader from "./CartHeader.component"
import CartFooter from "./CartFooter.component"
import CartProductList from "./CartProductList.component"
import { CartContext } from "@/app/contexts/cart.context"
import { CartProps } from "./types/CartProps.type"
import Overlay from "../Overlay/Overlay.component"

const Cart = ({ changeCartVisibility, isCartVisible, display }: CartProps) => {
  const {
    productsInCart,
    incrementProductQty,
    decrementProductQty,
    removeProduct,
  } = useContext(CartContext)

  const positionStyles =
    display === "cart"
      ? "fixed right-0 top-[96px] h-[calc(100%-96px)] w-[496px] z-50 bg-white md:w-2/3"
      : "min-h-[300px] w-1/2 z-0 bg-transparent md:w-full"

  return (
    <>
      {display === "cart" && (
        <Overlay
          isVisible={isCartVisible}
          changeVisibility={changeCartVisibility}
        />
      )}
      <div
        className={`${isCartVisible ? "flex" : "hidden"} ${positionStyles} flex-col gap-4 p-4 sm:w-full xs:gap-2 xs:p-2`}
      >
        <CartHeader
          changeCartVisibility={changeCartVisibility}
          display={display}
        />
        <CartProductList
          productsInCart={productsInCart}
          incrementProductQty={incrementProductQty}
          decrementProductQty={decrementProductQty}
          removeProduct={removeProduct}
        />
        <CartFooter productsInCart={productsInCart} display={display} />
      </div>
    </>
  )
}

export default Cart
