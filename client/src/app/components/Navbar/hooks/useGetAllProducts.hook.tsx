import { Dispatch, SetStateAction, useEffect } from "react"
import { Product } from "@/app/types/Product.type"
import { API_BASE_URL_FROM_BROWSER } from "@/app/consts/api.consts"

const useGetAllProducts = (
  setProducts: Dispatch<SetStateAction<Product[]>>,
) => {
  useEffect(() => {
    const getAllProducts = async () => {
      const res = await fetch(`${API_BASE_URL_FROM_BROWSER}/product`)
      const products: Product[] = await res.json()

      setProducts(products)
    }
    getAllProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useGetAllProducts
