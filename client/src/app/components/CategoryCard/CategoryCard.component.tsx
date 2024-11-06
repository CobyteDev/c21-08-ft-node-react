import Link from "next/link"

type CategoryCardProps = {
  name: string
  link: string
  icon: React.ReactNode
  additionalStyles?: string
}

const CategoryCard = ({
  name,
  icon,
  link,
  additionalStyles,
}: CategoryCardProps) => {
  return (
    <Link
      className={`categoryCard flex w-full flex-col items-center justify-center gap-3 rounded-2xl bg-gray100 py-4 md:gap-1 sm:rounded-none ${additionalStyles || ""}`}
      href={link}
    >
      {icon}
      <h2 className="w-[60%] text-center text-2xl font-semibold leading-6 text-gray1000 lg:text-xl md:w-[80%] md:text-lg sm:text-base xs:w-[90%]">
        {name}
      </h2>
    </Link>
  )
}

export default CategoryCard
