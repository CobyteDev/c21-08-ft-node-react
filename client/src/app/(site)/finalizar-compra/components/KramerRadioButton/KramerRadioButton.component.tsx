type KramerRadioButtonProps = {
  isSelected: boolean
  onChange: () => void
  name: string
  value: string
  text: string
  id: string
  children?: React.ReactNode
  widthStyle: "w-full" | "w-1/2"
}

const KramerRadioButton = ({
  isSelected,
  name,
  onChange,
  text,
  value,
  id,
  children,
  widthStyle,
}: KramerRadioButtonProps) => {
  return (
    <label
      htmlFor={id}
      className={`${widthStyle} flex cursor-pointer gap-4 rounded-lg border-2 px-4 py-4 text-[16px] leading-4 ${isSelected ? "border-krOrange font-medium" : ""} `}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={isSelected}
        className="cursor-pointer accent-krOrange"
        id={id}
        onChange={onChange}
      />
      <div className="flex flex-col gap-2">
        <p>{text}</p>
        {children}
      </div>
    </label>
  )
}

export default KramerRadioButton
