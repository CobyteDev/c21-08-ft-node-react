import { KramyResponse } from "@/app/kramy/kramy.types"
import { API_BASE_URL_FROM_BROWSER } from "@/app/consts/api.consts"
import { splitIngredients } from "@/app/utils/kramy.util"

export const getRecipe = async (query: string) => {
  const res = await fetch(`${API_BASE_URL_FROM_BROWSER}/kramy?recipequery=${query}`)
  const kramyResponse: KramyResponse = await res.json()
  console.log("kramyResponse: ", kramyResponse)
  const splittedIngredients = splitIngredients(kramyResponse.allIngredients)
  const finalResponse = {
    ...kramyResponse,
    allIngredients: splittedIngredients,
  }

  return finalResponse
}
