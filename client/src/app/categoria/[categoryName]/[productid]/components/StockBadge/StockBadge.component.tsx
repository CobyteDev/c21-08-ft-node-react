import Icon from "@/app/components/Icon/Icon.component"
import { StockBadgeProps } from "./types/StockBadge.type"

const StockBadge = ({ stock }: StockBadgeProps) => {
    const hasStock = stock > 0
  
    return (
      <div
        className={`flex gap-2 self-start rounded-md ${hasStock ? "bg-krBlue" : "bg-krRed"} px-3 py-2 font-bold text-white`}
      >
        {hasStock ? (
          <>
            <span>En stock</span>
            <Icon iconType="check" />
          </>
        ) : (
          <>
            <span>Sin stock</span>
            <Icon iconType="plus" style="rotate-90" />
          </>
        )}
      </div>
    )
  }

  export default StockBadge