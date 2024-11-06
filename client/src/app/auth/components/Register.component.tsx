"use client"

import React, { useState, useContext } from "react"
import { CartContext } from "@/app/contexts/cart.context"
import { useRouter } from "next/navigation"
import { API_BASE_URL } from "@/app/consts/api.consts"
import { PropsComponents } from "../types/propsComponents.types"

const Register = ({ active }: PropsComponents) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { productsInCart } = useContext(CartContext)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = { name, email, password }
    console.log(data)
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const responseData = await response.json()
      console.log("DATA", responseData)
      if (response.ok) {
        console.log("Registro correcto!!!")
        if (!productsInCart) {
          router.push("/profile")
        }
        router.push("/finalizar-compra")
      } else {
        console.error(responseData.message)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const style = active
    ? "w-1/2 h-full flex absolute z-10 justify-center items-center top-0 left-0 -translate-x-full opacity-0"
    : "w-1/2 h-full flex absolute z-30 justify-center items-center top-0 left-0 opacity-100"

  return (
    <div
      className={`h-full w-1/2 transition-all duration-500 ease-in-out ${style}`}
      id="Register"
    >
      <div
        className="" /*"w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md"*/
      >
        <h2 className="mb-3 text-center text-2xl font-bold">Crear Cuenta</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-krBlue py-2 font-medium text-white focus:outline-none"
          >
            Registrarse
          </button>
        </form>
        <div className="mt-4 flex justify-center"></div>
      </div>
    </div>
  )
}

export default Register
