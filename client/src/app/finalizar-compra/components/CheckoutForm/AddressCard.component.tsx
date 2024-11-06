import { Address } from "../../types/checkoutForm.type"
import KramerRadioButton from "../KramerRadioButton/KramerRadioButton.component"

type AddressCardProps = {
  address: Address
  onChange: () => void
  selectedAddress: Address | null
}

const AddressCard = ({
  address,
  onChange,
  selectedAddress,
}: AddressCardProps) => {
  return (
    <KramerRadioButton
      isSelected={
        selectedAddress !== null && address.name === selectedAddress.name
      }
      name="address"
      id={address.name}
      value={address.name}
      onChange={onChange}
      text={address.name}
      widthStyle="w-full"
    >
      <p className="font-normal text-gray-600">{address.city}</p>
    </KramerRadioButton>
  )
}

export default AddressCard