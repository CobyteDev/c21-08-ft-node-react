import { Category } from "./Category.type"
import { Promotion } from "./Promotion.type"

type ImageSizes = "medium" | "full"

type KramerImage = {
  [key in ImageSizes]: string
}

export type Product = {
  productId: string
  name: string
  description: string
  price: number
  imgUrl: KramerImage
  category: Category
  stock: number
  brand: string
  promotion: Promotion | null
}

export type ProductResult = Pick<Product, "productId" | "name" | "category">
