import { Dispatch, SetStateAction, useEffect } from "react"

const useShowResults = (
  search: string,
  setShowResults: Dispatch<SetStateAction<boolean>>,
) => {
  useEffect(() => {
    if (search.length > 3) {
      setShowResults(true)
    } else {
      setShowResults(false)
    }
  }, [search, setShowResults])
}

export default useShowResults
