import { Dispatch, SetStateAction } from "react"
export type PaymentMethodType = {
  isPaymentSelected: string
  setIsPaymentSelected: Dispatch<SetStateAction<string>>
}
