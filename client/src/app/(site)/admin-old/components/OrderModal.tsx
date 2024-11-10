"use client"

import React from "react"

interface Product {
  name: string
  quantity: number
  price: number
}

interface User {
  name: string
  phone: string
}

interface Order {
  id: number
  createdAt: string
  user: User
  deliveryType: string
  amount: number
  status: string
  products: Product[]
}

interface OrderModalProps {
  order: Order | null
  onClose: () => void
}

const OrderModal: React.FC<OrderModalProps> = ({ order, onClose }) => {
  if (!order) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-white p-6">
        <h2 className="text-xl font-bold">Detalles del Pedido #{order.id}</h2>
        <p>
          <strong>Fecha:</strong> {order.createdAt}
        </p>
        <p>
          <strong>Nombre:</strong> {order.user.name}
        </p>
        <p>
          <strong>Teléfono:</strong> {order.user.phone}
        </p>
        <p>
          <strong>Tipo:</strong> {order.deliveryType}
        </p>
        <p>
          <strong>Monto:</strong> ${order.amount}
        </p>
        <p>
          <strong>Estado:</strong> {order.status}
        </p>
        <h3 className="mt-4">Productos:</h3>
        <ul>
          {order.products.map((product, index) => (
            <li key={index}>
              {product.name} - {product.quantity} x ${product.price} = $
              {product.quantity * product.price}
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 rounded bg-red-500 px-2 py-1 text-white"
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default OrderModal
