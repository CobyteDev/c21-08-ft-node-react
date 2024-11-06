import { PropsComponents } from "../types/propsComponents.types"

const Toggle = ({ active }: PropsComponents) => {
  const style = active
    ? "w-1/2 rounded-customRight translate-x-[-100%]"
    : "w-1/2 rounded-customLeft translate-x-100"

  return (
    <div
      id="toggle"
      className={`absolute left-1/2 top-0 z-20 h-full w-full bg-krOrange transition-all duration-500 ease-in-out ${style}`}
    >
      <div className=""></div>
    </div>
  )
}

export default Toggle
