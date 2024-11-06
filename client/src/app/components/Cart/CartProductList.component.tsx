"use client"
import { CartProductListProps } from "./types/CartProductListProps.type"
import CartCard from "./CartCard.component"
import style from "./styles/CartProductList.style.module.css"
import { APP_BASE_URL } from "@/app/consts/api.consts"

const CartProductList = ({
  productsInCart,
  incrementProductQty,
  decrementProductQty,
  removeProduct,
}: CartProductListProps) => {
  return (
    <ul
      className={`flex grow scroll-pr-4 flex-col gap-4 overflow-y-auto overflow-x-hidden ${style.cartProductList} px-2 xs:gap-3 xs:px-1`}
    >
      {productsInCart.map((productInCart, i) => (
        <li key={i}>
          <CartCard
            link={`${APP_BASE_URL}/categoria/${productInCart.category.categoryName}/${productInCart.productId}`}
            product={productInCart}
            incrementProductQty={incrementProductQty}
            decrementProductQty={decrementProductQty}
            removeProduct={removeProduct}
          />
        </li>
      ))}
    </ul>
  )
}

export default CartProductList
