"use client"

import { Address } from "../../types/checkoutForm.type"
import { useState } from "react"
import AddressCard from "./AddressCard.component"
import NewAddressForm from "./NewAddressForm.component"

type AddressFormSectionProps = {
  addresses: Address[]
  selectedAddress: Address | null
  handleSelectedAddressChange: (selectedAddress: Address | null) => void
}

const AddressFormSection = ({
  addresses,
  selectedAddress,
  handleSelectedAddressChange,
}: AddressFormSectionProps) => {
  const [isAddressFormVisible, setIsAddressFormVisible] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <h3>Tus direcciones</h3>
      <ul className="flex flex-col gap-2">
        {(addresses as Address[]).map((address, idx) => (
          <li key={`address ${idx}`}>
            <AddressCard
              address={address}
              onChange={() => {
                handleSelectedAddressChange(address)
                setIsAddressFormVisible(false)
              }}
              selectedAddress={selectedAddress}
            />
          </li>
        ))}
      </ul>
      <button
        className="ml-auto w-1/3 min-w-max rounded-lg bg-gray1000 px-4 py-2 text-lg text-white xs:w-full"
        onClick={() => {
          handleSelectedAddressChange(null)
          setIsAddressFormVisible(true)
        }}
      >
        Agregar direccion
      </button>
      {isAddressFormVisible && <NewAddressForm />}
    </div>
  )
}

export default AddressFormSection
