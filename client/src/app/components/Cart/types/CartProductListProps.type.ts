import { ProductInCart } from "./ProductInCart.type"
import { CartCardProps } from "./CartCardProps.type"

export type CartProductListProps = {
    productsInCart: ProductInCart[]
} & Pick<CartCardProps, 'incrementProductQty' | 'decrementProductQty' | 'removeProduct'>
