"use client"

import useCardLogic from "@/app/components/Card/hooks/useCardLogic.hook"
import { Product } from "@/app/types/Product.type"
import Icon from "../Icon/Icon.component"
import { useAuth } from "@/app/contexts/auth.context"

type AddButtonProps = {
  product: Product
  withIcon?: boolean
}

const AddButton = ({ product, withIcon }: AddButtonProps) => {
  const { handleAddToCart, productsInCart } = useCardLogic(product)
  const productExistInCart = productsInCart.some(
    (item) => item.productId === product.productId,
  )
  const { isOwner } = useAuth()
  return (
    <button
      className={`relative flex h-10 items-center gap-2 rounded-md bg-krOrange px-3 py-1 font-bold text-white hover:bg-[#EB6B42] md:text-[14px] md:font-semibold md:leading-[14px] xs:h-8 xs:text-[12px] xs:leading-[12px] ${withIcon ? "justify-start" : "justify-center"}`}
      onClick={handleAddToCart}
      disabled={isOwner || productExistInCart || product.stock === 0}
    >
      <span
        className={`absolute inset-0 rounded-md bg-gray400 transition-all duration-[450ms] ease-out ${productExistInCart || product.stock === 0 ? "w-full" : "w-0"}`}
        style={{ zIndex: 1 }}
      ></span>
      {productExistInCart ? (
        <span className="z-20 text-gray1000">Producto agregado</span>
      ) : product.stock === 0 ? (
        <span className="z-20 text-gray1000">no hay stock</span>
      ) : (
        <span>Añadir al carrito</span>
      )}

      {withIcon && !productExistInCart && product.stock > 0 && (
        <Icon iconType="plus" />
      )}
    </button>
  )
}

export default AddButton

//
