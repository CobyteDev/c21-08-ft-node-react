import { ProductInCart } from "./ProductInCart.type"

export type CartCardProps = {
  product: ProductInCart
  incrementProductQty: (id: string) => void
  decrementProductQty: (id: string) => void
  removeProduct: (id: string) => void
  link: string
}
