import { MenuProps } from "./types/MenuProps.type"
import CategoriesButton from "./CategoriesButton.component"
import Icon from "../Icon/Icon.component"
import Overlay from "../Overlay/Overlay.component"

const Menu = ({ isMenuVisible, changeCategoriesVisibility, changeMenuVisibility }: MenuProps) => {
  return (
    <>
      <Overlay
        isVisible={isMenuVisible}
        changeVisibility={changeMenuVisibility}
      />
      <div
        className={`${isMenuVisible ? "flex" : "hidden"} fixed left-0 top-[96px] z-50 w-full flex-col bg-gray100 py-2`}
      >
        <nav>
          <ul className="flex flex-col items-center gap-2">
            <li className="flex h-8 w-1/3 items-center justify-start gap-2">
              <CategoriesButton
                changeCategoriesVisibility={changeCategoriesVisibility}
              />
            </li>
            <li className="flex h-8 w-1/3 items-center justify-start gap-2">
              <Icon iconType="user" />
              <span>Joel</span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Menu
