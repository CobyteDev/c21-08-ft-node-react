"use client"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "@/app/contexts/cart.context"
import Icon from "../Icon/Icon.component"
import { CartButtonProps } from "./types/CartButtonProps.type"
import { getTotalProductsInCart } from "./utils/getTotalProductsInCart.util"
import { usePathname } from "next/navigation"

const CartButton = ({ changeCartVisibility }: CartButtonProps) => {
  const { productsInCart } = useContext(CartContext)
  const path = usePathname()
  const totalProductsInCart = getTotalProductsInCart(productsInCart)
  const [animationState, setAnimationState] = useState("empty")
  useEffect(() => {
    if (totalProductsInCart > 0) {
      setAnimationState("filled")
      const timer = setTimeout(() => {
        setAnimationState("empty")
      }, 300) // Duración de la animación
      return () => clearTimeout(timer)
    } else {
      setAnimationState("empty")
    }
  }, [totalProductsInCart])

  return (
    <div className="overflow:hidden relative flex items-center rounded-md p-1">
      <button
        className="z-10 me-1 flex justify-end gap-2"
        disabled={path === "/finalizar-compra"}
        onClick={changeCartVisibility}
      >
        <span
          className={`left-0 transition-all duration-500 ${animationState === "empty" ? "opacity-100" : "opacity-0"}`}
        >
          <Icon iconType="cartSmall" />
        </span>

        <span
          className={`absolute left-[4px] top-[1px] scale-x-90 transition-all duration-500 ${animationState === "filled" ? "opacity-100" : "opacity-0"}`}
        >
          <Icon iconType="cart-color" />
        </span>
      </button>
      <span className="z-10">{totalProductsInCart}</span>
    </div>
  )
}

export default CartButton
