// import Arrow from "../components/Arrow/Arrow.component"
import CustomerStep from "../../components/CustomerStep/CustomerStep.component"
import Icon from "../../components/Icon/Icon.component"

const CustomerSteps = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1000px] lg:px-10 md:px-10 sm:px-5">
        <h2 className="text-center text-4xl font-bold xs:text-3xl">
          Cómo trabajamos
        </h2>
        <div className="mt-20 flex flex-col gap-10 sm:mt-10">
          <div className="m-auto flex justify-center gap-10 lg:gap-8 md:flex-row md:flex-col md:gap-14">
            <CustomerStep
              icon={<Icon iconType="step-1" />}
              title={"Elijes lo que necesitas"}
            />
            <CustomerStep
              icon={<Icon iconType="step-2" />}
              title={"Nos confirmas por whatsapp"}
            />
            <CustomerStep
              icon={<Icon iconType="step-3" />}
              title={"Preparamos tu pedido"}
            />
          </div>
          <div className="m-auto flex justify-center gap-10 lg:gap-8 md:flex-row md:gap-2">
            <CustomerStep
              icon={<Icon iconType="delivery" />}
              labelStyle="sm:text-xl sm:w-full"
              title={"Te lo llevamos a tu casa"}
            />
            <CustomerStep
              icon={<Icon iconType="shop" />}
              labelStyle="sm:text-xl sm:w-full"
              title={"Lo recojes en tienda"}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerSteps
