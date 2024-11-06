"use client"

import Icon from "../Icon/Icon.component"
import Category from "./Category.component"
import { CategoriesPanelProps } from "./types/CategoriesPanelProps.type"
import Overlay from "../Overlay/Overlay.component"
import { removeAccents, strForData } from "@/app/utils/strFormatting.util"
import { IconProps } from "../Icon/types/IconProps.type"
import useFetch from "@/app/hooks/useFetch.hook"
import { Category as CategoryT } from "@/app/types/Category.type"
import { API_BASE_URL } from "@/app/consts/api.consts"

const CategoriesPanel = ({
  changeCategoriesVisibility,
  isCategoriesVisible,
  mobile,
}: CategoriesPanelProps) => {
  const categories =
    useFetch<CategoryT[]>(`${API_BASE_URL}/category`) || ([] as CategoryT[])

  return (
    <>
      {changeCategoriesVisibility && isCategoriesVisible && !mobile && (
        <Overlay
          isVisible={isCategoriesVisible}
          changeVisibility={changeCategoriesVisibility}
        />
      )}
      {mobile ? (
        <div
          className={`${isCategoriesVisible ? "grid" : "hidden"} grid w-full flex-1 grid-cols-2 grid-rows-4`}
        >
          {categories.map((c, idx) => {
            const cleanedName = removeAccents(c.categoryName)
            const dataName = strForData(cleanedName) as IconProps["iconType"]
            return (
              <Category
                key={`category-${idx}`}
                name={c.categoryLabel}
                route={`/categoria/${dataName}?categoryid=${c.categoryId}&categorylabel=${c.categoryLabel}`}
              >
                <Icon iconType={dataName} />
              </Category>
            )
          })}
        </div>
      ) : (
        <div
          className={`${isCategoriesVisible ? "block" : "hidden"} fixed left-0 top-[96px] z-50 h-[332px] w-full bg-white`}
        >
          <nav className="mx-auto grid h-full max-w-[1000px] grid-cols-4 grid-rows-2 gap-5 py-5 md:w-full md:grid-cols-2 md:grid-rows-4 md:gap-2 md:gap-x-10 md:px-10 sm:gap-x-1 xs:gap-y-6 xs:px-1">
            {categories.map((c, idx) => {
              const cleanedName = removeAccents(c.categoryName)
              const dataName = strForData(cleanedName) as IconProps["iconType"]
              return (
                <Category
                  key={`category-${idx}`}
                  name={c.categoryLabel}
                  route={`/categoria/${dataName}?categoryid=${c.categoryId}&categorylabel=${c.categoryLabel}`}
                >
                  <Icon iconType={dataName} />
                </Category>
              )
            })}
          </nav>
        </div>
      )}
      {/* <div */}
      {/*   className={`${isCategoriesVisible ? "block" : "hidden"} fixed left-0 top-[96px] z-50 h-[332px] w-full bg-white`} */}
      {/* > */}
      {/*   <nav className="mx-auto grid h-full max-w-[1000px] grid-cols-4 grid-rows-2 gap-5 py-5 md:w-full md:grid-cols-2 md:grid-rows-4 md:gap-2 md:gap-x-10 md:px-10 sm:gap-x-1 xs:gap-y-6 xs:px-1"> */}
      {/*     {categories.map((c, idx) => { */}
      {/*       const cleanedName = removeAccents(c.categoryName) */}
      {/*       const dataName = strForData(cleanedName) as IconProps["iconType"] */}
      {/*       return ( */}
      {/*         <Category */}
      {/*           key={`category-${idx}`} */}
      {/*           name={c.categoryLabel} */}
      {/*           route={`/categoria/${dataName}?categoryid=${c.categoryId}&categorylabel=${c.categoryLabel}`} */}
      {/*         > */}
      {/*           <Icon iconType={dataName} /> */}
      {/*         </Category> */}
      {/*       ) */}
      {/*     })} */}
      {/*   </nav> */}
      {/* </div> */}
    </>
  )
}

export default CategoriesPanel
