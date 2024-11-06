import { Product } from "@/app/types/Product.type"

export type CartAction =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; id: string }
  | { type: "INCREMENT_QTY"; id: string }
  | { type: "DECREMENT_QTY"; id: string }
  | { type: "INIT_CART" }
