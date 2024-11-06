"use-client"
import { createContext, useState } from "react"
import {
  CheckoutProviderType,
  CheckoutContextType,
} from "../finalizar-compra/types/checkoutContext.types"

export const CheckoutContext = createContext<CheckoutContextType>(
  {} as CheckoutContextType,
)

export const CheckoutProvider = ({ children }: CheckoutProviderType) => {
  const [isDeliverySelected, setIsDeliverySelected] = useState<boolean>(false)

  const [isPaymentSelected, setIsPaymentSelected] = useState("electronic")

  const disabledButton = !(
    isPaymentSelected !== null && isDeliverySelected !== null
  )
    ? true
    : false

  const handleSubmit = () => {
    const order = {
      delivery: isDeliverySelected,
      payment: isPaymentSelected,
    }
    console.log(order)
  }
  return (
    <CheckoutContext.Provider
      value={{
        setIsDeliverySelected,
        isDeliverySelected,
        isPaymentSelected,
        setIsPaymentSelected,
        disabledButton,
        handleSubmit,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
