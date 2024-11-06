import { PriceProps } from "./types/PriceProps.type"
import { getIntAndDecSplited } from "./utils/getIntAndDecSplited.util"

const Price = ({ price, size, additionalStyles }: PriceProps) => {
  const { int, dec } = getIntAndDecSplited(price)

  const sizeClasses = {
    L: {
      int: "text-[32px] leading-[32px] font-semibold xs:text-[24px] xs:leading-[24px]",
      dec: "text-[16px] leading-[16px] font-semibold xs:text-[12px] xs:leading-[12px]",
    },
    M: {
      int: "text-[24px] leading-[24px] font-semibold xs:text-[16px] xs:leading-[16px]",
      dec: "text-[12px] leading-[12px] font-semibold xs:text-[8px] xs:leading-[8px]",
    },
    S: {
      int: "text-[16px] leading-[16px] font-medium xs:text-[12px] xs:leading-[12px]",
      dec: "text-[8px] leading-[8px] font-medium xs:text-[6px] xs:leading-[6px]",
    },
  }

  return (
    <p className="flex items-center">
      <span className={`${sizeClasses[size].int} ${additionalStyles}`}>
        ${int}
      </span>
      <span className={`${sizeClasses[size].dec} ${additionalStyles}`}>
        {dec}
      </span>
    </p>
  )
}

export default Price
