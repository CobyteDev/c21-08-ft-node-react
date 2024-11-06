export type ProductQtyInputProps = {
  productId: string
  productQty: number
  incrementProductQty: (id: string) => void
  decrementProductQty: (id: string) => void
}
