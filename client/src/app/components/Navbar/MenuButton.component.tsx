import Icon from "../Icon/Icon.component"
import { MenuButtonProps } from "./types/MenuButtonProps.type"

const MenuButton = ({ changeMenuVisibility }: MenuButtonProps) => {
  return (
    <button onClick={changeMenuVisibility} className="hidden p-2 xs:block">
      <Icon iconType="hamburger" />
    </button>
  )
}

export default MenuButton
