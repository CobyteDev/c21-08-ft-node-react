import { Dispatch, SetStateAction } from "react"
type Form = {
  isDeliverySelected: boolean
  isPaymentSelected: string
}
export type DeliveryProps = {
  isDeliverySelected: boolean
  setIsDeliverySelected: Dispatch<SetStateAction<boolean>>
  setForm: Dispatch<SetStateAction<Form>>
}
