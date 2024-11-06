import { TipoEntrega } from "../../types/checkoutForm.type"
import KramerRadioButton from "../KramerRadioButton/KramerRadioButton.component"

type DeliveryFormSectionProps = {
  tipoEntrega: TipoEntrega
  handleTipoEntregaChange: (tipoEntrega: TipoEntrega) => void
}

const DeliveryFormSection = ({
  tipoEntrega,
  handleTipoEntregaChange,
}: DeliveryFormSectionProps) => {
  return (
    <div>
      <h3 className="mb-2">¿Lo retira o se lo llevamos?</h3>
      <div className="flex gap-2">
        <KramerRadioButton
          isSelected={tipoEntrega === "retiro"}
          name="loRetiro"
          id="loRetiro"
          value="retiro"
          onChange={() => handleTipoEntregaChange("retiro")}
          text="Lo retiro"
          widthStyle="w-1/2"
        />
        <KramerRadioButton
          isSelected={tipoEntrega === "delivery"}
          name="delivery"
          id="delivery"
          value="delivery"
          onChange={() => handleTipoEntregaChange("delivery")}
          text="Delivery"
          widthStyle="w-1/2"
        />
      </div>
    </div>
  )
}

export default DeliveryFormSection