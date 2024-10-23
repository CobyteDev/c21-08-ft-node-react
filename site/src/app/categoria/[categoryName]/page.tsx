"use client"

import { useState } from "react"
import FilterPanel from "./components/FilterPanel.component"
import ProductsPanel from "./components/ProductsPanel.component"
import { Product } from "../../types/Product.type"
import { useParams, useSearchParams } from "next/navigation"
import { strForDisplay } from "@/app/utils/strFormatting.util"
import { FilterFields } from "./types/page.types"
import useFilterProducts from "./hooks/useFilterProducts.hook"
import useResetFilters from "./hooks/useResetFilters.hook"
import useFetch from "@/app/hooks/useFetch.hook"
import { API_BASE_URL } from "@/app/consts/api.consts"
import FiltersMobileDisplayer from "./components/FiltersMobileDisplayer.component"

const formInitialState: FilterFields = {
  price: 99999,
  brand: [],
  discount: false,
}

export default function CategoriaPage() {
  const [currentProducts, setCurrentProducts] = useState<Product[]>([])
  const [formValues, setFormValues] = useState<FilterFields>(formInitialState)
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  const params = useParams<{ categoryName: string }>()
  const searchParams = useSearchParams()
  const categoryName = strForDisplay(params.categoryName)

  const products =
    useFetch<Product[]>(
      `${API_BASE_URL}/product/category/${searchParams.get("categoryid")}`,
    ) || ([] as Product[])

  useFilterProducts(products, formValues, setCurrentProducts)
  useResetFilters(formInitialState, categoryName, setFormValues)

  const changeFiltersVisibility = () => {
    setIsFiltersVisible((prevIsFiltersVisible) => !prevIsFiltersVisible)
  }

  return (
    <main className={`mt-24 w-full overflow-y-hidden`}>
      <div className="mx-auto max-w-[1000px] sm:flex-col">
        <FiltersMobileDisplayer
          isFiltersVisible={isFiltersVisible}
          changeFiltersVisibility={changeFiltersVisibility}
        />
        <div className="flex">
          <FilterPanel
            setFormValues={setFormValues}
            formValues={formValues}
            setCurrentProducts={setCurrentProducts}
            categoryName={categoryName}
            source={products}
            isFiltersVisible={isFiltersVisible}
          />
          <ProductsPanel
            products={currentProducts}
            categoryName={categoryName}
          />
        </div>
      </div>
    </main>
  )
}
