"use client"
import { useEffect, useState } from "react"
import Login from "./components/Login.component"
import Register from "./components/Register.component"
import Toggle from "./components/Toggle.component"
import LoginInvite from "./components/LoginInvite.component"
import RegisterInvite from "./components/RegisterInvite.component"
import { useAuth } from "../contexts/auth.context"
import { useRouter } from "next/navigation"

const LoginComponent = () => {
  const [active, setActive] = useState(true)
  const { user } = useAuth()
  const router = useRouter()

  const handleActive = () => {
    setActive((prev) => !prev)
  }
  console.log(active)

  useEffect(() => {
    if (user) {
      // Redirigir según el rol del usuario
      if (user.role === "owner") {
        router.push("/admin")
      } else {
        router.push("/profile")
      }
    } else {
      router.push("/auth")
    }
  }, [user, router])

  return (
    <div
      className="relative mx-auto mt-32 min-h-[480px] w-[768px] max-w-[100%] overflow-hidden rounded-xl border-2 border-slate-300"
      id="container-profile"
    >
      <Login active={active} handleActive={handleActive}></Login>
      <Register active={active} handleActive={handleActive}></Register>
      <Toggle active={active}></Toggle>
      <LoginInvite active={active} handleActive={handleActive}></LoginInvite>
      <RegisterInvite
        active={active}
        handleActive={handleActive}
      ></RegisterInvite>
    </div>
  )
}

export default LoginComponent
