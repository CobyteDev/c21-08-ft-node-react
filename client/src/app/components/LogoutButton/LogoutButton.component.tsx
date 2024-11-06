import { useAuth } from "@/app/contexts/auth.context"
import { useRouter } from "next/navigation"

const LogoutButton = () => {
  const router = useRouter()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-lg border-[1px] border-solid border-krRed px-5 py-2 text-krRed"
    >
      Cerrar Sesión
    </button>
  )
}

export default LogoutButton
