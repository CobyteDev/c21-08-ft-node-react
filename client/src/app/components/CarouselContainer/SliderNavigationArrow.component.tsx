import { SliderNavigationArrowProps } from "./types/SliderNavigationArrowProps.type"
import Icon from "../Icon/Icon.component"

const SliderNavigationArrow = ({
  isDisabled,
  type,
  onClick,
}: SliderNavigationArrowProps) => {
  const iconTypeStyle = type === "right" ? "rotate-90" : "-rotate-90"
  const positionTypeStyle = type === "right" ? "right-0" : "left-0"

  return (
    <div
      className={`${isDisabled ? "hidden" : "flex"} z-10 h-full w-8 cursor-pointer items-center justify-center${positionTypeStyle} xs:top-8 xs:scale-75`}
      onClick={() => {
        if (isDisabled) return
        onClick()
      }}
    >
      <Icon iconType="chev" style={`${iconTypeStyle} scale-150 sm:scale-100`} />
    </div>
  )
}

export default SliderNavigationArrow
