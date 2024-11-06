"use client"
import React, { useEffect } from "react"
import AdminLayout from "./components/AdminLayout"
import { useAuth } from "../contexts/auth.context"
import { useRouter } from "next/navigation"

const AdminDashboard = () => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user?.role != "owner") {
      console.log("Not is owner", user?.role)
      router.back()
    }
  }, [user, router])

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold">
        Bienvenido al Panel de Administración
      </h1>
      <p>Aquí podrás gestionar pedidos, productos, categorías y promociones.</p>
    </AdminLayout>
  )
}

export default AdminDashboard
