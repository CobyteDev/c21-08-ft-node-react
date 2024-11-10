import { Dispatch, SetStateAction } from "react"
type Address = {
  address: string
  city: string
  number: number
  cp: number
  floor?: number
  dpto?: string
}
export type CardAddressProp = {
  address: Address
  checked: boolean
  setSelectedAddress: Dispatch<SetStateAction<number>>
  index: number
}
