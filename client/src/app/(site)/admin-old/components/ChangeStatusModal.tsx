"use client"
import React from "react"

const statuses = [
  "Pendiente de Pago",
  "Pagado",
  "Sin Preparar",
  "Preparado",
  "Entregado",
]

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
  products: { name: string; quantity: number; price: number }[]
}

interface ChangeStatusModalProps {
  order: Order
  onClose: () => void
  onConfirm: (id: number, newStatus: string) => void
}

const ChangeStatusModal: React.FC<ChangeStatusModalProps> = ({
  order,
  onClose,
  onConfirm,
}) => {
  const [newStatus, setNewStatus] = React.useState(order.status)

  const handleConfirm = () => {
    onConfirm(order.id, newStatus)
    onClose()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-white p-6">
        <h2 className="mb-4 text-xl font-bold">
          Cambiar Estado de la Orden #{order.id}
        </h2>
        <label htmlFor="status" className="mb-2 block">
          Nuevo Estado:
        </label>
        <select
          id="status"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
          className="mb-4 w-full border p-1"
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <div className="flex justify-between">
          <button
            onClick={handleConfirm}
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            Confirmar
          </button>
          <button
            onClick={onClose}
            className="rounded bg-red-500 px-4 py-2 text-white"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChangeStatusModal
