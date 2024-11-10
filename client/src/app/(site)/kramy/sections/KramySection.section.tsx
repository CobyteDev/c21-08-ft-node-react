"use client"

import { strForDisplay } from "@/app/utils/strFormatting.util"
import { KramySectionProps } from "../kramy.types"
import Card from "@/app/components/Card/Card.component"
import { IsClientProvider } from "@/app/contexts/isClient.context"
import CarouselContainer from "@/app/components/CarouselContainer/CarouselContainer.component"
import { strForData } from "@/app/utils/strFormatting.util"

const KramySection = ({ response }: KramySectionProps) => {
  return response ? (
    <div className="flex flex-col gap-10">
      <div className="flex w-full gap-10 md:gap-5 sm:flex-col">
        <div className="flex flex-1 flex-col gap-5 rounded-xl border-[1px] border-solid border-gray400 p-5">
          <h3>Ingredientes:</h3>
          <div className="flex gap-10 md:gap-4">
            {response.allIngredients.map((row, rowIdx) => (
              <ul key={`ingredient-row-${rowIdx}`}>
                {row.map((i, ingIdx) => (
                  <li
                    key={`ingredient-${rowIdx}-{${ingIdx}}`}
                    className="ml-4 list-disc"
                  >
                    {strForDisplay(i)}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-5 rounded-xl border-[1px] border-solid border-gray400 p-5">
          <h3>Preparación:</h3>
          <ul>
            {response.instructions.map((i, idx) => (
              <li key={`ingredient-{${idx}}`} className="ml-4 list-decimal">
                {strForDisplay(i)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3>Te podemos ofrecer:</h3>
        <IsClientProvider>
          <CarouselContainer content="products">
            {response.owned.map((p, idx) => (
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
      </div>
    </div>
  ) : (
    ""
  )
}

export default KramySection
