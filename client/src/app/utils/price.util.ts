export const computeDiscount = (price: number, percentage: number) => {
  return price - price * percentage
}
