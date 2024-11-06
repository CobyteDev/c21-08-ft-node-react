import { IsClientProvider } from "@/app/contexts/isClient.context"
import CarouselContainer from "@/app/components/CarouselContainer/CarouselContainer.component"
import { getRelatedProducts } from "./services/getRelatedProducts.service"
import { Product } from "@/app/types/Product.type"
import Card from "@/app/components/Card/Card.component"
import { strForData } from "@/app/utils/strFormatting.util"

type RelatedProductsContainerProps = {
  product: Product
}

const RelatedProductsContainer = async ({
  product,
}: RelatedProductsContainerProps) => {
  const relatedProducts = await getRelatedProducts(
    product.productId,
    product.category.categoryId,
  )

  return (
    <IsClientProvider>
      <CarouselContainer content="products">
        {relatedProducts.map((p, idx) => (
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

export default RelatedProductsContainer
