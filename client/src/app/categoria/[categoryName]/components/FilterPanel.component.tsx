"use client"

import { useState, useEffect, useRef, ChangeEvent } from "react"
import { useToggleDimensions } from "@/app/hooks/useToggleDimensions.hook"
import { strForDisplay } from "@/app/utils/strFormatting.util"
import FilterHeader from "./FilterHeader.component"
import { FiltersVisibility } from "../types/page.types"
import { FilterPanelProps } from "../types/page.types"
import { Filters } from "../types/page.types"

const priceOptions = [1000, 1500, 3000]
const MAX_PRICE = 99999

const FilterPanel = ({
  setFormValues,
  formValues,
  categoryName,
  source,
  isFiltersVisible,
}: FilterPanelProps) => {
  const [brands, setBrands] = useState<string[]>([])
  const [checkedPrice, setCheckedPrice] = useState(formValues.price)
  const [filtersVisibility, setFiltersVisibility] = useState<FiltersVisibility>(
    {
      marca: true,
      ofertas: true,
      precio: true,
    },
  )

  useEffect(() => {
    const sourceBrands = source.map((p) => p.brand)
    const uniqueBrands = [...new Set(sourceBrands)]
    setBrands([...uniqueBrands])
  }, [source])

  useEffect(() => {
    setCheckedPrice(MAX_PRICE)
  }, [categoryName])

  const marcaRef = useRef<HTMLUListElement>(null)
  useToggleDimensions(marcaRef, filtersVisibility["marca"])

  const ofertasRef = useRef<HTMLDivElement>(null)
  useToggleDimensions(ofertasRef, filtersVisibility["ofertas"])

  const precioRef = useRef<HTMLDivElement>(null)
  useToggleDimensions(precioRef, filtersVisibility["precio"])

  const handleFiltersVisibility = (filterId: Filters) => {
    setFiltersVisibility((prevFiltersVisibility) => ({
      ...prevFiltersVisibility,
      [filterId]: !prevFiltersVisibility[filterId],
    }))
  }

  // this function is not generic at all but for now its ok since the only
  // checkbox we handle other than the brand one is discount, brand checkbox
  // requrie special treatment
  const handleCheckbox = () => {
    setFormValues((prev) => ({ ...prev, discount: !prev.discount }))
  }

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, price: Number(e.target.value) }))
    setCheckedPrice(Number(e.target.value))
  }

  const handleBrandToggle = (brand: string) => {
    if (formValues.brand.includes(brand)) {
      setFormValues((prev) => {
        const remainingBrands = prev.brand.filter((b) => b !== brand)
        return { ...prev, brand: remainingBrands }
      })
    } else {
      setFormValues((prev) => ({
        ...prev,
        brand: [...prev.brand, brand],
      }))
    }
  }

  return (
    <aside
      id="hola soy un aside"
      className={`flex w-1/4 flex-col gap-9 bg-gray100 sm:fixed sm:top-[150px] sm:z-20 sm:h-dvh sm:w-full sm:gap-4 sm:px-5 ${isFiltersVisible ? "" : "sm:hidden"}`}
    >
      <h2 className="text-2xl font-bold sm:px-2">Filtros</h2>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          <FilterHeader
            filterId="marca"
            filtersVisibility={filtersVisibility}
            handleFiltersVisibility={handleFiltersVisibility}
          />
          {/* this needs conditional rendering because we need to know when 'brand' array is populated */}
          {/* otherwise if the 'brands' array is empty the JSX corresponding to the brands will not be rendered*/}
          {/* the first time, therefore the useToggleDimensions hook will get the height of this part as if there*/}
          {/* were not brand rendered effectively have a lesser height than it should have */}
          {brands.length > 0 && (
            <ul
              ref={marcaRef}
              className={
                "duration-400 flex flex-col gap-4 overflow-hidden transition-all ease-in-out sm:px-2"
              }
            >
              {brands.map((brand, idx) => (
                <BrandCheckbox
                  key={`brand-filter-${idx}`}
                  brand={brand}
                  handleBrandToggle={() => handleBrandToggle(brand)}
                  activeBrands={formValues.brand}
                />
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-col gap-7 border-t-2 border-solid pt-7">
          <FilterHeader
            filterId="ofertas"
            filtersVisibility={filtersVisibility}
            handleFiltersVisibility={handleFiltersVisibility}
          />
          <div
            ref={ofertasRef}
            className={
              "flex cursor-pointer items-center gap-2 overflow-hidden transition-all duration-200 ease-in-out sm:px-2"
            }
            onClick={handleCheckbox}
          >
            <input
              type="checkbox"
              name="discount"
              checked={formValues.discount}
              onChange={handleCheckbox}
              onClick={handleCheckbox}
              className="cursor-pointer"
            />
            <label htmlFor="discount" className="cursor-pointer">
              Descuento
            </label>
          </div>
        </div>

        <div className="border-t-2 border-solid pt-7">
          <FilterHeader
            filterId="precio"
            filtersVisibility={filtersVisibility}
            handleFiltersVisibility={handleFiltersVisibility}
          />
          <div
            ref={precioRef}
            className={
              "overflow-hidden transition-all duration-200 ease-in-out sm:px-2"
            }
          >
            {priceOptions.map((op, idx) => (
              <div key={`price-option-${idx}`} className="flex gap-2">
                <input
                  id={`price-${idx}`}
                  type="radio"
                  name="price"
                  checked={checkedPrice === op}
                  value={op}
                  onChange={handlePriceChange}
                />
                <label htmlFor={`price-${idx}`}>Hasta ${op}</label>
              </div>
            ))}
            <div className="flex gap-2">
              <input
                id="price-all"
                type="radio"
                name="price"
                checked={checkedPrice === MAX_PRICE}
                value={MAX_PRICE}
                onChange={handlePriceChange}
              />
              <label htmlFor="price-all">Todo</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

type BrandCheckboxProps = {
  brand: string
  handleBrandToggle: (brand: string) => void
  activeBrands: string[]
}

const BrandCheckbox = ({
  brand,
  handleBrandToggle,
  activeBrands,
}: BrandCheckboxProps) => {
  return (
    <li
      className="flex cursor-pointer items-center gap-2"
      onClick={() => handleBrandToggle(brand)}
    >
      <input
        type="checkbox"
        name={brand}
        checked={activeBrands.includes(brand)}
        onChange={() => handleBrandToggle(brand)}
        className="cursor-pointer"
      />
      <label htmlFor={brand} className="cursor-pointer">
        {strForDisplay(brand)}
      </label>
    </li>
  )
}

export default FilterPanel
