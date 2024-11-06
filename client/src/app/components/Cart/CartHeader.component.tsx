import { CartHeaderProps } from "./types/CartHeaderProps.type"
import Icon from "../Icon/Icon.component"

const CartHeader = ({ changeCartVisibility, display }: CartHeaderProps) => {
  return (
    <div>
      {display === "cart" ? (
        <button className="cursor-pointer" onClick={changeCartVisibility}>
          <Icon style="rotate-45 scale-[2] text-gray1000" iconType="plus" />
        </button>
      ) : (
        <h3>Tus productos</h3>
      )}
    </div>
  )
}

export default CartHeader
