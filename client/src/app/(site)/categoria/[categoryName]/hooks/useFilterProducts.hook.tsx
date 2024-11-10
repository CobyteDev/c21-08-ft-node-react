import { useEffect, Dispatch, SetStateAction } from "react"
import { Product } from "@/app/types/Product.type"
import { Fields } from "../types/page.types"

const useFilterProducts = (
  source: Product[],
  formValues: Fields,
  setCurrentProducts: Dispatch<SetStateAction<Product[]>>,
) => {
  useEffect(() => {
    const filterByPrice = (products: Product[]) => {
      return products.filter((p) => Number(p.price) <= Number(formValues.price))
    }

    const filterByDiscount = (products: Product[]) => {
      if (!formValues.discount) return products
      return products.filter((p) => p.promotion)
    }

    const filterByBrand = (products: Product[]) => {
      if (!formValues.brand.length) return products
      return products.filter((p) => formValues.brand.includes(p.brand))
    }
    const byBrand = filterByBrand(source)
    const byPrice = filterByPrice(byBrand)
    const byDiscount = filterByDiscount(byPrice)

    setCurrentProducts(byDiscount)
  }, [formValues, source, setCurrentProducts])
}

export default useFilterProducts
