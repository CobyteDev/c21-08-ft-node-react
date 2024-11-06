"use client"
import React, { useEffect } from "react"
import { useAuth } from "../contexts/auth.context"
import { useRouter } from "next/navigation"

const AdminPage = () => {
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      // Si hay un usuario autenticado, redirige al perfil
      router.push("/")
    }
  }, [user, router])

  return (
    <div>
      <h1>Página de Perfil</h1>
      <h2>Hola, {user?.name}. Bienvenido ! </h2>
      <a onClick={logout}> Cerrar sesión</a>
    </div>
  )
}

export default AdminPage
