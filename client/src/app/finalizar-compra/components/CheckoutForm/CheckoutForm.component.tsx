'use client'

import { useContext } from "react"
import { CheckoutContext } from "../../contexts/checkout.context"
import DeliveryFormSection from "./DeliveryFormSection.component"
import AddressFormSection from "./AddressFormSection.component"
import { addresses } from "@/mocks/addresses.mock"
import PaymentMethodFormSection from "./PaymentMethodFormSection.component"

const CheckoutForm = () => {
  const {
    tipoEntrega,
    selectedAddress,
    paymentMethod,
    handleTipoEntregaChange,
    handleSelectedAddressChange,
    handlePaymentMethodChange,
    handleSubmit,
  } = useContext(CheckoutContext)

  return (
    <section className="w-1/2 md:w-full px-4 py-4">
      <form
        id="checkoutForm"
        onSubmit={async (e) => {
          e.preventDefault()
          await handleSubmit()
        }}
        className="flex flex-col gap-4"
      >
        <h1>Confirma tus datos</h1>
        <DeliveryFormSection
          tipoEntrega={tipoEntrega}
          handleTipoEntregaChange={handleTipoEntregaChange}
        />
        {tipoEntrega === "delivery" && (
          <AddressFormSection
            addresses={addresses}
            handleSelectedAddressChange={handleSelectedAddressChange}
            selectedAddress={selectedAddress}
          />
        )}
        <PaymentMethodFormSection
          paymentMethod={paymentMethod}
          handlePaymentMethodChange={handlePaymentMethodChange}
        />
      </form>
    </section>
  )
}

export default CheckoutForm
