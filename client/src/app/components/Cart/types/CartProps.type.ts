export type CartProps = {
  changeCartVisibility: () => void
  isCartVisible: boolean
  display: "cart" | "checkout"
}