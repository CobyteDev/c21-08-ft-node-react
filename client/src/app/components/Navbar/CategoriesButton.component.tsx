import Icon from "../Icon/Icon.component"
import { CategoriesButtonProps } from "./types/CategoriesButtonProps.type"

const CategoriesButton = ({
  changeCategoriesVisibility,
}: CategoriesButtonProps) => {
  return (
    <button
      onClick={changeCategoriesVisibility}
      className="flex items-center gap-2 rounded-lg border-[1px] border-solid border-krRed px-3 py-2 text-krRed lg:gap-1 lg:px-2"
    >
      <Icon iconType="category" />
      <span className="lg:text-sm sm:hidden">Productos</span>
    </button>
  )
}

export default CategoriesButton
