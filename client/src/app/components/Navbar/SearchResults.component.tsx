"use client"

import { APP_BASE_URL } from "@/app/consts/api.consts"

import { Dispatch, SetStateAction } from "react"
import { strForData } from "@/app/utils/strFormatting.util"
import Link from "next/link"
import { ProductResult } from "@/app/types/Product.type"

type SearchResultsProps = {
  show: boolean
  results: ProductResult[]
  setResults: Dispatch<SetStateAction<ProductResult[]>>
  mobile?: boolean
}

const SearchResults = ({
  show,
  results,
  setResults,
  mobile,
}: SearchResultsProps) => {
  return (
    <div
      className={`${mobile ? "" : ""} left-0 flex w-full flex-col self-start rounded-b-md bg-white shadow-xl xs:fixed xs:rounded-none`}
    >
      {show
        ? results.map((r, idx) => {
            const {
              category: { categoryName },
            } = r
            return (
              <Link
                key={`product-result-${idx}`}
                className={`px-4 py-3 hover:bg-gray100 ${results.length - 1 === idx ? "rounded-b-md" : ""}`}
                href={`${APP_BASE_URL}/categoria/${strForData(decodeURIComponent(categoryName))}/${r.productId}`}
                onClick={() => setResults([])}
              >
                {r.name}
              </Link>
            )
          })
        : ""}
    </div>
  )
}

export default SearchResults
