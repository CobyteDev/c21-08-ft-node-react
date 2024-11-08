import CategoryCard from "../components/CategoryCard/CategoryCard.component"
import { IconProps } from "../components/Icon/types/IconProps.type"
import { Category } from "@/app/types/Category.type"
import { API_BASE_URL } from "@/app/consts/api.consts"
import Icon from "../components/Icon/Icon.component"
import { IsClientProvider } from "../contexts/isClient.context"
import CarouselContainer from "../components/CarouselContainer/CarouselContainer.component"

const getCategories = async () => {
  const res = await fetch(`${API_BASE_URL}/category`, {
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
  const categories: Category[] = await res.json()
  return categories
}

const Categories = async () => {
  const categories = await getCategories()
  console.log('categories from server: ', categories);
  return (
    <section className="relative z-40 -mt-36 w-full lg:-mt-48 md:-mt-16 xs:-mt-8">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-10 lg:px-10 md:gap-5 md:px-5 sm:px-0">
        <h2 className="h2 font-bold sm:px-5 xs:px-2">Productos</h2>
        <div>
          <IsClientProvider>
            <CarouselContainer content="categories">
              {categories.map((c, idx) => (
                <CategoryCard
                  key={`featured-category-${idx}`}
                  icon={
                    <Icon
                      iconType={
                        `${c.categoryName}-md-color` as IconProps["iconType"]
                      }
                      style="md:w-7"
                    />
                  }
                  name={c.categoryLabel}
                  link={`/categoria/${c.categoryName}?categoryid=${c.categoryId}&categorylabel=${c.categoryLabel}`}
                  additionalStyles="keen-slider__slide"
                />
              ))}
            </CarouselContainer>
          </IsClientProvider>
        </div>
      </div>
    </section>
  )
}

export default Categories
