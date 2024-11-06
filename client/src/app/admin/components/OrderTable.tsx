"use client"
import React, { useState } from "react"
import OrderModal from "./OrderModal"
import ChangeStatusModal from "./ChangeStatusModal"

// Simulamos datos de órdenes
const initialOrders = [
  {
    id: 1,
    createdAt: "2023-10-01",
    user: { name: "Juan Pérez", phone: "555-1234" },
    deliveryType: "Entrega",
    amount: 150.0,
    status: "Pendiente de Pago",
    products: [
      { name: "Pizza", quantity: 2, price: 30.0 },
      { name: "Refresco", quantity: 2, price: 5.0 },
    ],
  },
  {
    id: 2,
    createdAt: "2023-10-02",
    user: { name: "Ana Gómez", phone: "555-5678" },
    deliveryType: "Retiro",
    amount: 100.0,
    status: "Pagado",
    products: [
      { name: "Sushi", quantity: 1, price: 50.0 },
      { name: "Sopa", quantity: 2, price: 25.0 },
    ],
  },
  {
    id: 3,
    createdAt: "2023-10-05",
    user: { name: "Carlos López", phone: "555-8765" },
    deliveryType: "Entrega",
    amount: 200.0,
    status: "Sin Preparar",
    products: [
      { name: "Hamburguesa", quantity: 2, price: 40.0 },
      { name: "Papas fritas", quantity: 1, price: 20.0 },
    ],
  },
  {
    id: 4,
    createdAt: "2023-10-07",
    user: { name: "Lucía Torres", phone: "555-4321" },
    deliveryType: "Entrega",
    amount: 80.0,
    status: "Preparado",
    products: [
      { name: "Ensalada", quantity: 1, price: 30.0 },
      { name: "Agua", quantity: 2, price: 5.0 },
    ],
  },
  {
    id: 5,
    createdAt: "2023-10-10",
    user: { name: "Pedro Martínez", phone: "555-6543" },
    deliveryType: "Retiro",
    amount: 120.0,
    status: "Entregado",
    products: [
      { name: "Tacos", quantity: 4, price: 15.0 },
      { name: "Cerveza", quantity: 2, price: 25.0 },
    ],
  },
  {
    id: 6,
    createdAt: "2023-10-12",
    user: { name: "María Fernández", phone: "555-9876" },
    deliveryType: "Entrega",
    amount: 250.0,
    status: "Pendiente de Pago",
    products: [
      { name: "Paella", quantity: 1, price: 90.0 },
      { name: "Vino", quantity: 2, price: 80.0 },
    ],
  },
  {
    id: 7,
    createdAt: "2023-10-15",
    user: { name: "Fernando Ruiz", phone: "555-2468" },
    deliveryType: "Retiro",
    amount: 75.0,
    status: "Pagado",
    products: [
      { name: "Burrito", quantity: 1, price: 25.0 },
      { name: "Chips", quantity: 1, price: 10.0 },
      { name: "Guacamole", quantity: 1, price: 15.0 },
    ],
  },
  {
    id: 8,
    createdAt: "2023-10-18",
    user: { name: "Sofía Castro", phone: "555-1357" },
    deliveryType: "Entrega",
    amount: 90.0,
    status: "Sin Preparar",
    products: [
      { name: "Pasta", quantity: 1, price: 50.0 },
      { name: "Pan", quantity: 1, price: 5.0 },
    ],
  },
  {
    id: 9,
    createdAt: "2023-10-20",
    user: { name: "Diego Herrera", phone: "555-8642" },
    deliveryType: "Retiro",
    amount: 45.0,
    status: "Preparado",
    products: [
      { name: "Tortilla", quantity: 3, price: 10.0 },
      { name: "Salsa", quantity: 1, price: 5.0 },
    ],
  },
  {
    id: 10,
    createdAt: "2023-10-22",
    user: { name: "Clara Jiménez", phone: "555-5432" },
    deliveryType: "Entrega",
    amount: 300.0,
    status: "Entregado",
    products: [
      { name: "Asado", quantity: 1, price: 150.0 },
      { name: "Postre", quantity: 2, price: 75.0 },
    ],
  },
]

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
type SortKey = keyof Order

const OrderTable = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders)
  const [statusFilter, setStatusFilter] = useState<string>("")
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [changingStatusOrder, setChangingStatusOrder] = useState<Order | null>(
    null,
  )
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey | "userName" | "userPhone"
    direction: "ascending" | "descending"
  }>({
    key: "id",
    direction: "ascending",
  })

  const handleStatusChange = (id: number, newStatus: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order,
      ),
    )
  }

  const filteredOrders = orders.filter((order) =>
    statusFilter ? order.status === statusFilter : true,
  )

  const getSortValue = (
    order: Order,
    key: SortKey | "userName" | "userPhone",
  ) => {
    if (key === "userName") return order.user.name
    if (key === "userPhone") return order.user.phone
    return order[key]
  }

  const sortedOrders = React.useMemo(() => {
    const sortableOrders = [...filteredOrders]
    sortableOrders.sort((a, b) => {
      const aValue = getSortValue(a, sortConfig.key)
      const bValue = getSortValue(b, sortConfig.key)

      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1
      }
      return 0
    })
    return sortableOrders
  }, [filteredOrders, sortConfig])

  const requestSort = (key: SortKey | "userName" | "userPhone") => {
    let direction: "ascending" | "descending" = "ascending"
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="statusFilter" className="mr-2">
          Filtrar por estado:
        </label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-1"
        >
          <option value="">Todos</option>
          <option value="Pendiente de Pago">Pendiente de Pago</option>
          <option value="Pagado">Pagado</option>
          <option value="Sin Preparar">Sin Preparar</option>
          <option value="Preparado">Preparado</option>
          <option value="Entregado">Entregado</option>
        </select>
      </div>

      <table className="min-w-full border border-gray-200 bg-white">
        <thead>
          <tr>
            <th
              onClick={() => requestSort("id")}
              className="cursor-pointer border px-4 py-2"
            >
              ID{" "}
              {sortConfig.key === "id" &&
                (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => requestSort("createdAt")}
              className="cursor-pointer border px-4 py-2"
            >
              Fecha{" "}
              {sortConfig.key === "createdAt" &&
                (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => requestSort("userName")}
              className="cursor-pointer border px-4 py-2"
            >
              Nombre{" "}
              {sortConfig.key === "userName" &&
                (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => requestSort("userPhone")}
              className="cursor-pointer border px-4 py-2"
            >
              Teléfono{" "}
              {sortConfig.key === "userPhone" &&
                (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => requestSort("deliveryType")}
              className="cursor-pointer border px-4 py-2"
            >
              Tipo{" "}
              {sortConfig.key === "deliveryType" &&
                (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => requestSort("amount")}
              className="cursor-pointer border px-4 py-2"
            >
              Monto{" "}
              {sortConfig.key === "amount" &&
                (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </th>
            <th
              onClick={() => requestSort("status")}
              className="cursor-pointer border px-4 py-2"
            >
              Estado{" "}
              {sortConfig.key === "status" &&
                (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sortedOrders.map((order) => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.createdAt}</td>
              <td className="border px-4 py-2">{order.user.name}</td>
              <td className="border px-4 py-2">{order.user.phone}</td>
              <td className="border px-4 py-2">{order.deliveryType}</td>
              <td className="border px-4 py-2">${order.amount}</td>
              <td className="border px-4 py-2">{order.status}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => setChangingStatusOrder(order)}
                  className="rounded bg-blue-500 px-2 py-1 text-white"
                >
                  Cambiar Estado
                </button>
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="ml-2 rounded bg-green-500 px-2 py-1 text-white"
                >
                  Ver Detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && (
        <OrderModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}

      {changingStatusOrder && (
        <ChangeStatusModal
          order={changingStatusOrder}
          onClose={() => setChangingStatusOrder(null)}
          onConfirm={handleStatusChange}
        />
      )}
    </div>
  )
}

export default OrderTable
