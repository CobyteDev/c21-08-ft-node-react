'use client'

import { useContext } from 'react'
import CartHeader from './CartHeader.component'
import CartFooter from './CartFooter.component'
import CartProductList from './CartProductList.component'
import { CartContext } from '@/app/contexts/cart.context'
import { CartProps } from './types/CartProps.type'

const Cart = ({ changeCartVisibility, isCartVisible }: CartProps) => {
  const { productsInCart, incrementProductQty, decrementProductQty, removeProduct } =
    useContext(CartContext)

  return (
    <>
      <div
        onClick={changeCartVisibility}
        className='fixed left-0 top-[96px] z-[-1000] h-dvh w-dvw bg-black opacity-30'
      />
      <div
        className={`${isCartVisible ? 'flex' : 'hidden'} fixed right-0 top-[96px] h-[calc(100vh-96px)] w-[480px] flex-col gap-4 bg-white px-8 py-4 shadow-xl`}
      >
        <CartHeader changeCartVisibility={changeCartVisibility} />
        <CartProductList
          productsInCart={productsInCart}
          incrementProductQty={incrementProductQty}
          decrementProductQty={decrementProductQty}
          removeProduct={removeProduct}
        />
        <CartFooter productsInCart={productsInCart} />
      </div>
    </>
  )
}

export default Cart
