export const getIntAndDecSplited = (price: number) => {
  const [int, dec = "00"] = String(price).split(".")

  const formatedDec = dec.length > 2 ? dec.slice(0, 2) : dec.padEnd(2, "0");

  return { int, dec: formatedDec }
}
