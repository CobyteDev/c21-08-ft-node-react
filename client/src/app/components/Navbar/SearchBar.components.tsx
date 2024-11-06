"use client"

import useClickOutside from "@/app/hooks/useClickOutside.hook"
import Icon from "../Icon/Icon.component"
import { useState, useRef } from "react"
import { Product, ProductResult } from "@/app/types/Product.type"
import useSearch from "./hooks/useSearch.hook"
import SearchResults from "./SearchResults.component"
import useGetAllProducts from "./hooks/useGetAllProducts.hook"
import useShowResults from "./hooks/useShowResults.hook"

const SearchBar = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState<string>("")
  const [results, setResults] = useState<ProductResult[]>([])
  const [showResults, setShowResults] = useState(false)

  const resultsRef = useRef<HTMLDivElement>(null)

  useClickOutside(resultsRef, () => setShowResults(false))
  useSearch(search, products, showResults, setResults)
  useGetAllProducts(setProducts)
  useShowResults(search, setShowResults)

  return (
    <div ref={resultsRef} className="relative">
      <div className="flex items-center">
        <input
          className="relative w-full rounded-md px-4 py-3"
          type="text"
          name=""
          id=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar en Kramer..."
          onFocus={() => {
            if (search === "Buscar en Kramer...") setSearch("")
          }}
        />
        <button className="absolute inset-y-0 right-0 mr-4">
          <Icon iconType="search" />
        </button>
      </div>
      <div className="absolute flex w-full flex-col rounded-b-md bg-white shadow-xl">
        <SearchResults
          show={showResults}
          results={results}
          setResults={setResults}
        />
      </div>
    </div>
  )
}

export default SearchBar
