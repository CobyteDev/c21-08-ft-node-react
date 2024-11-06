"use client"

import AdminLayout from "../components/AdminLayout"
import OrderTable from "../components/OrderTable"

const OrderManagement = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold">Gestión de Pedidos</h1>
      <p>Aquí podrás gestionar los pedidos realizados.</p>
      <OrderTable />
    </AdminLayout>
  )
}

export default OrderManagement
