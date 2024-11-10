import { PropsComponents } from "../types/propsComponents.types"

const RegisterInvite = ({ active, handleActive }: PropsComponents) => {
  const style = active
    ? "opacity-100 z-30 translate-x-[-100%]"
    : "translate-x-[0px] opacity-0 z-10"

  return (
    <div
      id="RegisterInvite"
      className={`absolute left-1/2 top-0 flex h-full w-1/2 flex-col items-center justify-center bg-krOrange transition-all duration-500 ease-in-out rounded-customRight ${style}`}
    >
      <h3 className="h3 mb-4 font-bold">¿Todavía no tienes una cuenta?</h3>
      <p className="w-72">
        Es indispensable si quieres completar tus compras de manera segura, solo
        tomara unos minutos
      </p>
      <button
        className="mt-6 cursor-pointer rounded-md bg-gray100 px-3 py-2 font-bold"
        onClick={handleActive}
      >
        Registrate ahora
      </button>
    </div>
  )
}

export default RegisterInvite
