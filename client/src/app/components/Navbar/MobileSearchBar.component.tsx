"use client"

import SearchResults from "./SearchResults.component"
import { useState } from "react"
import { ProductResult } from "@/app/types/Product.type"
import useGetAllProducts from "./hooks/useGetAllProducts.hook"
import useSearch from "./hooks/useSearch.hook"
import useShowResults from "./hooks/useShowResults.hook"
import { Product } from "@/app/types/Product.type"

const MobileSearchBar = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [results, setResults] = useState<ProductResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const [search, setSearch] = useState<string>("")

  useSearch(search, products, showResults, setResults)
  useGetAllProducts(setProducts)
  useShowResults(search, setShowResults)

  return (
    <div className="fixed left-0 top-[96px] w-full">
      <input
        className="w-full px-4 py-3"
        type="text"
        name=""
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar en Kramer..."
        onFocus={() => {
          if (search === "Buscar en Kramer...") setSearch("")
        }}
      />
      <SearchResults
        mobile
        show={showResults}
        results={results}
        setResults={setResults}
      />
    </div>
  )
}

export default MobileSearchBar
