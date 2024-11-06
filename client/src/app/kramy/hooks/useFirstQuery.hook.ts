import { useEffect, Dispatch, SetStateAction } from "react"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { KramyFinalResponse } from "@/app/kramy/kramy.types"
import { getRecipe } from "../../components/Kramy/utils/query.utils"

const useFirstQuery = (
  setKramyResponse: Dispatch<SetStateAction<KramyFinalResponse | undefined>>,
) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const recipeQuery = searchParams.get("recipequery")

  useEffect(() => {
    const query = searchParams.get("recipequery")
    if (!query) return
    ;(async function () {
      router.push(`${pathname}?kramystate=thinking`)
      const res = await getRecipe(query)
      router.push(`${pathname}?kramystate=answering&recipequery=${recipeQuery}`)
      setKramyResponse(res)
    })()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useFirstQuery
