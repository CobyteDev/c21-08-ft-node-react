import { PropsComponents } from "../types/propsComponents.types"

const LoginInvite = ({ active, handleActive }: PropsComponents) => {
  const style = active
    ? "z-10 opacity-0 translate-x-[200%]"
    : "z-100 z-30 translate-x-[100%]"

  return (
    <div
      id="LoginInvite"
      className={`absolute top-0 flex h-full w-1/2 flex-col items-center justify-center transition-all duration-500 ease-in-out ${style}`}
    >
      <h3 className="h3 mb-4 font-bold">¿Ya tienes una cuenta?</h3>
      <p className="w-72">
        Si ya tienes una cuenta solo necesitarás de tu Email y contraseña para
        ingresar
      </p>
      <button
        className="mt-6 cursor-pointer rounded-md bg-gray100 px-3 py-2 font-bold"
        onClick={handleActive}
      >
        Iniciar sesion
      </button>
    </div>
  )
}

export default LoginInvite
