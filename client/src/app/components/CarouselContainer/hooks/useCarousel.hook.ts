import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import { ContentType } from "../types/CarouselContainerProps.type"

export const useCarousel = (content: ContentType) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const [silderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    created: () => setIsLoaded(true),
    loop: true,
    slides: {
      perView: content === "categories" ? 4.4 : 3.6,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 920px)": {
        slides: {
          perView: content === "categories" ? 4.4 : 2.6,
          spacing: 16,
        },
      },
      "(max-width: 639px)": {
        slides: {
          perView: content === "categories" ? 3.6 : 2.6,
          spacing: content === "categories" ? 0 : 16,
        },
      },
      "(max-width: 584px)": {
        slides: {
          perView: content === "categories" ? 3.6 : 2.2,
          spacing: content === "categories" ? 0 : 16,
        },
      },
      "(max-width: 336px)": {
        slides: {
          perView: content === "categories" ? 3.6 : 2,
          spacing: content === "categories" ? 0 : 8,
        },
      },
    },
  })

  const next = () => {
    if (instanceRef.current === null) return

    instanceRef.current.next()
  }

  const prev = () => {
    if (instanceRef.current === null) return

    instanceRef.current.prev()
  }

  return { silderRef, isLoaded, next, prev }
}
