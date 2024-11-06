export type ContentType = "categories" | "products"

export type CarouselContainerProps = {
  children: React.ReactNode
  arrows?: boolean
  content: ContentType
}
