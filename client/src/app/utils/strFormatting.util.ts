export const strForDisplay = (str: string) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export const strForData = (str: string) => {
  return str.replaceAll(" ", "-").toLowerCase()
}

export const removeAccents = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

