import DiscountsContainer from "../components/DiscountsContainer/DiscountsContainer.component"

const Discounts = () => {
  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-10 lg:px-10 md:gap-8 sm:px-5 xs:gap-4 xs:gap-8 xs:px-2">
        <h2 className="h2 font-bold leading-[32px] xs:text-[24px] xs:leading-[24px]">
          Descuentos
        </h2>
        <DiscountsContainer />
      </div>
    </section>
  )
}

export default Discounts
