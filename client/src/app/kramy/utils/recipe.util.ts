import { splitIngredients } from "@/app/utils/kramy.util"
import { KramyResponse } from "../kramy.types"

export const getRecipe = async (query: string) => {
  const res = await fetch(`/api/recipe?recipequery=${query}`)
  const kramyResponse: KramyResponse = await res.json()
  const splittedIngredients = splitIngredients(kramyResponse.allIngredients)
  const finalResponse = {
    ...kramyResponse,
    allIngredients: splittedIngredients,
  }

  return finalResponse
}
