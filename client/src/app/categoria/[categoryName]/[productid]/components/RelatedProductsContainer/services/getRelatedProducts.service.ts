import { Product } from "@/app/types/Product.type"
import { API_BASE_URL } from "@/app/consts/api.consts"

export const getRelatedProducts = async (
  productid: string,
  categoryid: string,
) => {
  const res = await fetch(`${API_BASE_URL}/product/category/${categoryid}`, {
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
  const productsByCategory: Product[] = await res.json()
  const remainingProducts = productsByCategory.filter(
    (p) => p.productId !== productid,
  )
  return [...remainingProducts, ...remainingProducts, ...remainingProducts]
}
