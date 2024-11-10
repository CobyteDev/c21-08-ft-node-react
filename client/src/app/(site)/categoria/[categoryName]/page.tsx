"use client"

import { useState } from "react"
import FilterPanel from "./components/FilterPanel.component"
import ProductsPanel from "./components/ProductsPanel.component"
import { Product } from "../../../types/Product.type"
import { useParams, useSearchParams } from "next/navigation"
import { strForDisplay } from "@/app/utils/strFormatting.util"
import { FilterFields } from "./types/page.types"
import useFilterProducts from "./hooks/useFilterProducts.hook"
import useResetFilters from "./hooks/useResetFilters.hook"
import useFetch from "@/app/hooks/useFetch.hook"
import { API_BASE_URL } from "@/app/consts/api.consts"
import FiltersMobileDisplayer from "./components/FiltersMobileDisplayer.component"
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs.component"

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
      `/product/category/${searchParams.get("categoryid")}`,
    ) || ([] as Product[])

  useFilterProducts(products, formValues, setCurrentProducts)
  useResetFilters(formInitialState, categoryName, setFormValues)

  const changeFiltersVisibility = () => {
    setIsFiltersVisible((prevIsFiltersVisible) => !prevIsFiltersVisible)
  }

  return (
    <main className="md:mt-27 w-full overflow-y-hidden">
      <div className="mx-auto max-w-[1000px] sm:flex-col">
        <FiltersMobileDisplayer
          isFiltersVisible={isFiltersVisible}
          changeFiltersVisibility={changeFiltersVisibility}
        />
        <div className="flex flex-col gap-12 md:gap-10 sm:gap-8">
          <Breadcrumbs />
          <div className="flex gap-10 lg:px-10 md:gap-4 md:px-4 sm:px-0">
            <FilterPanel
              setFormValues={setFormValues}
              formValues={formValues}
              setCurrentProducts={setCurrentProducts}
              categoryName={categoryName}
              source={products}
              isFiltersVisible={isFiltersVisible}
            />
            <ProductsPanel products={currentProducts} />
          </div>
        </div>
      </div>
    </main>
  )
}
