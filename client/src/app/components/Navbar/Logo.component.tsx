import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center">
      <Image
        alt={"logo"}
        src={"/images/logo-final-color.png"}
        width={184.1}
        height={41.741}
      />
      {/* <Image */}
      {/*   alt={"logo"} */}
      {/*   src={"/images/isotipo.png"} */}
      {/*   width={143} */}
      {/*   height={136} */}
      {/*   className="hidden h-full w-12 md:block" */}
      {/* /> */}
    </Link>
  )
}

export default Logo
