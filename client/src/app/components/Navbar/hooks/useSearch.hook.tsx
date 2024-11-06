import { Product, ProductResult } from "@/app/types/Product.type"
import { useEffect, Dispatch, SetStateAction } from "react"
import Fuse from "fuse.js"

const useSearch = (
  search: string,
  products: Product[],
  showResults: boolean,
  setResults: Dispatch<SetStateAction<ProductResult[]>>,
) => {
  useEffect(() => {
    // this can be problematic in the long run because the whole code depends
    // on a value that I don't know for certain when will be updated
    if (!(search.length > 2)) return
    if (!showResults) return

    const fuse = new Fuse(products, { includeScore: true, keys: ["name"] })
    const result = fuse.search(search)

    const sorted = result.sort((a, b) => {
      if (!a.score || !b.score) return 1
      return a.score - b.score
    })

    const filtered = sorted.slice(0, 5).map((p) => p.item)
    setResults(filtered)
  }, [search, products, showResults, setResults])
}

export default useSearch
