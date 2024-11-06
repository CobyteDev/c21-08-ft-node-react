import Icon from "../Icon/Icon.component"
import { ProductQtyInputProps } from "./types/ProductQtyInputProps.type"

const ProductQtyInput = ({
  productId,
  productQty,
  incrementProductQty,
  decrementProductQty,
}: ProductQtyInputProps) => {
  return (
    <div className="h-au flex items-center gap-1 rounded-lg outline outline-1 outline-gray300">
      {productQty !== 1 && (
        <button
          onClick={() => decrementProductQty(productId)}
          disabled={productQty === 1}
          className="flex h-8 w-8 items-center justify-center rounded-l-[4px] border-r border-gray300 hover:bg-gray300"
        >
          <Icon iconType="minus" />
        </button>
      )}
      <p className="w-6 text-center text-[20px] xs:w-4 xs:text-base">
        {productQty}
      </p>
      <button
        onClick={() => incrementProductQty(productId)}
        className="flex h-8 w-8 items-center justify-center rounded-r-[4px] border-l border-gray300 hover:bg-gray300"
      >
        <Icon iconType="plus" />
      </button>
    </div>
  )
}

export default ProductQtyInput
