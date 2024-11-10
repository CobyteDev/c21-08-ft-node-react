import { PaymentMethod } from "../../types/checkoutForm.type"
import KramerRadioButton from "../KramerRadioButton/KramerRadioButton.component"

type PaymentMethodFormSectionProps = {
  paymentMethod: PaymentMethod
  handlePaymentMethodChange: (paymentMethod: PaymentMethod) => void
}

const PaymentMethodFormSection = ({
  paymentMethod,
  handlePaymentMethodChange,
}: PaymentMethodFormSectionProps) => {
  return (
    <div>
      <h3 className="mb-2">¿Que metodo de pago prefieres?</h3>
      <div className="flex gap-2">
        <KramerRadioButton
          isSelected={paymentMethod === "electronic"}
          name="mercado-pago"
          id="mercado-pago"
          value="electronic"
          onChange={() => handlePaymentMethodChange("electronic")}
          text="Mercado Pago"
          widthStyle="w-1/2"
        />
        <KramerRadioButton
          isSelected={paymentMethod === "cash"}
          name="whatsapp"
          id="whatsapp"
          value="cash"
          onChange={() => handlePaymentMethodChange("cash")}
          text="Efectivo"
          widthStyle="w-1/2"
        />
      </div>
    </div>
  )
}

export default PaymentMethodFormSection
