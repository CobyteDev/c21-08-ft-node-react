import { useEffect, Dispatch, SetStateAction } from "react"
import { Fields } from "../types/page.types"

const useResetFilters = (
  formInitialState: Fields,
  cond: string,
  setter: Dispatch<SetStateAction<Fields>>,
) => {
  useEffect(() => {
    setter(formInitialState)
  }, [cond, formInitialState, setter])
}

export default useResetFilters
