import Icon from "@/app/components/Icon/Icon.component"

type FiltersMobileDisplayerProps = {
  isFiltersVisible: boolean
  changeFiltersVisibility: () => void
}

const FiltersMobileDisplayer = ({
  isFiltersVisible,
  changeFiltersVisibility,
}: FiltersMobileDisplayerProps) => {
  return (
    <section className="fixed z-30 hidden w-full bg-gray100 py-2 sm:block">
      <div>
        <button
          onClick={changeFiltersVisibility}
          className="ml-auto mr-2 flex cursor-pointer gap-2 rounded-lg px-2 py-2 hover:bg-gray300"
        >
          <Icon iconType="variados" />
          <p>Filtros</p>
          <Icon
            iconType="chev"
            style={`${isFiltersVisible ? "rotate-0" : "rotate-180"} duration-500 transition-all ease-in-out`}
          />
        </button>
      </div>
    </section>
  )
}

export default FiltersMobileDisplayer
