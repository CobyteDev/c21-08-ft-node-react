import { Product } from "@/app/types/Product.type";

export type ProductInCart = {
    productQty: number
} & Product

export type CartFromBackend = Pick<Product, "productId"> &{
    productQty:number
}