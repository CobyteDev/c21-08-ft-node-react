import Icon from "@/app/components/Icon/Icon.component"
import { strForDisplay } from "@/app/utils/strFormatting.util"
import { Filters, FiltersVisibility } from "../types/page.types"

type FilterHeaderProps = {
  filterId: Filters
  filtersVisibility: FiltersVisibility
  handleFiltersVisibility: (filterId: Filters) => void
}

const FilterHeader = ({
  filterId,
  filtersVisibility,
  handleFiltersVisibility,
}: FilterHeaderProps) => {
  return (
    <button
      className="flex w-full cursor-pointer justify-between border-none p-0"
      onClick={() => handleFiltersVisibility(filterId)}
    >
      <h3 className="text-xl font-semibold">{strForDisplay(filterId)}</h3>
      <Icon
        iconType="chev"
        style={`${filtersVisibility[filterId] ? "rotate-0" : "rotate-180"} transition-all ease-in-out transform duration-200`}
      />
    </button>
  )
}

export default FilterHeader
