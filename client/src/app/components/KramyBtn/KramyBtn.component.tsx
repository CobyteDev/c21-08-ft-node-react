"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

type KramyBtnProps = {
  clickFn: () => void
  placement: "navbar" | "float"
  imgStyle?: string
  textStyle?: string
}

const KramyBtn = ({
  clickFn,
  placement,
  imgStyle,
  textStyle,
}: KramyBtnProps) => {
  const router = useRouter()

  return placement === "float" ? (
    <div className="pointer-events-none fixed bottom-0 right-0 z-40 w-full">
      <div className="pointer-events-none m-auto flex max-w-[1000px] justify-end">
        <button className="pointer-events-auto mb-20" onClick={clickFn}>
          <Image
            src="/images/kramy/kramy-button_transparent_small-size_effects.png"
            alt="botón de asistenta virtual Kramy"
            width={223}
            height={236}
            className="h-28 w-full"
          />
        </button>
      </div>
    </div>
  ) : (
    // <button className="flex items-center gap-0" onClick={clickFn}>
    <button
      className="flex items-center gap-0 md:items-end"
      onClick={() => router.push("/kramy")}
    >
      <Image
        src="/images/kramy/kramy-button-navbar.png"
        alt="Asistenta virtual Kramy"
        width={80}
        height={80}
        className={imgStyle || "h-full w-[70px]"}
      />
      <h2 className={textStyle || "text-lg"}>Kramy</h2>
    </button>
  )
}

export default KramyBtn
