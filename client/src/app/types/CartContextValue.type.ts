import { ProductInCart } from "../components/Cart/types/ProductInCart.type";
import { Product } from "./Product.type";

export type CartContextValue = {
    productsInCart: ProductInCart[];
    addToCart: (product: Product) => void;
    incrementProductQty: (id: string) => void;
    decrementProductQty: (id: string) => void;
    removeProduct: (id: string) => void
}