type CustomerStepProps = {
  icon: React.ReactNode
  title: string
  labelStyle?: string
}

const CustomerStep = ({ icon, title, labelStyle }: CustomerStepProps) => {
  return (
    <div className="relative flex flex-1 flex-col items-center gap-2 sm:gap-1">
      <div>{icon}</div>
      <h3
        className={`w-44 text-2xl font-semibold leading-none sm:text-center xs:leading-5 ${labelStyle || ""}`}
      >
        {title}
      </h3>
    </div>
  )
}

export default CustomerStep
