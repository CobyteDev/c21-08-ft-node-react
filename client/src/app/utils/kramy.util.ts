export const splitIngredients = (ingredients: string[]) => {
  const l = ingredients.length
  const half = Math.round(l / 2)
  const firstRow = ingredients.slice(0, half - 1)
  const secondRow = ingredients.slice(half)
  return [firstRow, secondRow]
}
