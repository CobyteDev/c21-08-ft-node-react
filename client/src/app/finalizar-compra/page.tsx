"use client"
import Cart from "../components/Cart/Cart.component"
import { CheckoutContextProvider } from "./contexts/checkout.context"
import { useAuth } from "../contexts/auth.context"
import { useRouter } from "next/navigation"
import { useContext, useEffect } from "react"
import { CartContext } from "../contexts/cart.context"
import CheckoutForm from "./components/CheckoutForm/CheckoutForm.component"

const Checkout = () => {
  const { user } = useAuth()
  const router = useRouter()
  const { productsInCart } = useContext(CartContext)

  useEffect(() => {
    if (!user && productsInCart.length != 0) {
      router.push("/auth")
    }

    // User logeado

    if (productsInCart.length === 0) {
      // No hay productos en el
      // carrito, por lo tanto,
      // tampoco puede ingresar a la
      // pagina de checkout
      router.push("/")
    }

    // El user tiene permisos para entrar a la pagina de checkout
  }, [user, productsInCart, router])

  return (
    <div className="mt-32 w-full">
      <div className="px-auto mx-auto flex min-h-[500px] max-w-[1000px] justify-center gap-1 md:flex-col">
        <CheckoutContextProvider>
          <CheckoutForm />
          <Cart
            isCartVisible={true}
            changeCartVisibility={() => {}}
            display={"checkout"}
          />
        </CheckoutContextProvider>
      </div>
    </div>
  )
}

export default Checkout
