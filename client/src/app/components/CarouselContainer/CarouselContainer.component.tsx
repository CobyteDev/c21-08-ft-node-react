"use client"

import "keen-slider/keen-slider.min.css"
import SliderNavigationArrow from "./SliderNavigationArrow.component"
import { CarouselContainerProps } from "./types/CarouselContainerProps.type"
import { useContext } from "react"
import { IsClient } from "@/app/contexts/isClient.context"
import { useCarousel } from "./hooks/useCarousel.hook"

const CarouselContainer = ({
  children,
  arrows,
  content,
}: CarouselContainerProps) => {
  const isClient = useContext(IsClient)
  const { silderRef, isLoaded, next, prev } = useCarousel(content)

  return (
    <div className="relative flex items-center">
      {arrows && isLoaded && (
        <SliderNavigationArrow type="left" onClick={prev} isDisabled={false} />
      )}

      {isClient ? (
        <div ref={silderRef} className="keen-slider">
          {children}
        </div>
      ) : (
        <h3 className="flex h-full w-full items-center justify-center text-center xs:text-[14px] xs:leading-[14px]">
          Cargando...
        </h3>
      )}

      {arrows && isLoaded && (
        <SliderNavigationArrow type="right" onClick={next} isDisabled={false} />
      )}
    </div>
  )
}

export default CarouselContainer
