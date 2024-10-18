import { Promotion } from "../types/Product.type"

export const strForDisplay = (str: string) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export const strForData = (str: string) => {
  return str.replaceAll(" ", "-").toLowerCase()
}

export const cleanStr = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export const sortPromotions = (promotions: Promotion[]) => {
  const sorted = promotions.sort((a, b) => b.percentage - a.percentage)
  const flatted = sorted.map((p) => p.product).flat()
  return flatted
}
