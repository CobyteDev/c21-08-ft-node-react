import Link from "next/link"

type CategoryProps = {
  name: string
  route: string
  children: React.ReactNode
}

const Category = ({ name, route, children: icon }: CategoryProps) => {
  return (
    <Link
      href={route}
      // className={`flex flex-col items-center justify-center gap-2 rounded-lg border border-gray1000 hover:bg-gray300`}
      className={`flex flex-col items-center justify-center gap-2 rounded-lg border border-gray1000 px-3 hover:bg-gray300 md:rounded-none md:border-none`}
    >
      {icon}
      <h3 className="line-clamp-1 text-lg">{name}</h3>
      {/* <h3 className="text-lg">{name}</h3> */}
    </Link>
  )
}

export default Category
