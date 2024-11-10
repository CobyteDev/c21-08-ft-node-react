export type TipoEntrega = "retiro" | "delivery"

export type Address = {
  name: string
  street: string
  city: string
  number: string
  cp: string
  floor: string
  dpto: string
}

export type PaymentMethod = "electronic" | "cash"
