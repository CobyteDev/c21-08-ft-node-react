import { ReactNode, Dispatch, SetStateAction } from "react"

export type CheckoutContextType = {
  isDeliverySelected: boolean
  setIsDeliverySelected: Dispatch<SetStateAction<boolean>>
  isPaymentSelected: string
  setIsPaymentSelected: Dispatch<SetStateAction<string>>
  disabledButton: boolean
  handleSubmit: () => void
}

export type CheckoutProviderType = {
  children: ReactNode
}
