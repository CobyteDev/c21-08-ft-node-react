import Icon from "../Icon/Icon.component"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/contexts/auth.context"

const UserButton = () => {
  const { user } = useAuth()
  const router = useRouter()

  const handleUserClick = () => {
    if (user) {
      if (user.role === "owner") {
        router.push("/admin") // Redirige a la página de administración
      } else {
        router.push("/profile") // Redirige a la página de perfil para otros usuarios
      }
    } else {
      router.push("/auth") // Redirige a la página de autenticación si no hay usuario
    }
  }
  return (
    <div className="flex cursor-pointer gap-2" onClick={handleUserClick}>
      <Icon iconType="user" />
      {user ? (
        user.role === "owner" ? (
          <span>{user.name} - Panel Admin</span>
        ) : (
          <span>{user.name}</span>
        )
      ) : (
        <span>Iniciar sesión</span>
      )}
    </div>
  )
}

export default UserButton
