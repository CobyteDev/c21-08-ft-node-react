import { IsClientProvider } from "@/app/contexts/isClient.context"
import CarouselContainer from "../CarouselContainer/CarouselContainer.component"
import Card from "../Card/Card.component"
import { strForData } from "@/app/utils/strFormatting.util"
import { getDiscountedProducts } from "./services/getDiscountedProducts.service"

const DiscountsContainer = async () => {
  const discountedProducts = await getDiscountedProducts()

  return (
    <IsClientProvider>
      <CarouselContainer content="products">
        {discountedProducts.map((p, idx) => (
          <Card
            key={`products-${idx}`}
            additionalStyles="keen-slider__slide"
            product={p}
            link={`/categoria/${strForData(p.category.categoryName)}/${p.productId}`}
            imgUrl={p.imgUrl.medium}
          />
        ))}
      </CarouselContainer>
    </IsClientProvider>
  )
}

export default DiscountsContainer
