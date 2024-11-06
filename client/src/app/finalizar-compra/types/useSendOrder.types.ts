import { CartFromBackend } from "@/app/components/Cart/types/ProductInCart.type"
export type useSendOrderTypes = {
  userId: string | undefined
  delivery: boolean
  methodOfPayment: string
  products: CartFromBackend[]
}
