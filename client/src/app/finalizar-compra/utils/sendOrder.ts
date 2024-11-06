import { useSendOrderTypes } from "../types/useSendOrder.types"

export const sendOrder = async ({
  userId,
  delivery,
  methodOfPayment,
  products,
}: useSendOrderTypes) => {
  try {
    const res = await fetch("http://localhost:3170/order/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, delivery, methodOfPayment, products }),
    })
    console.log(res)
    const resOrder = await res.json()
    return resOrder
  } catch (error) {
    console.log(error)
  }
}
