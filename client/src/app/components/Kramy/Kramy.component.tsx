"use client"

import KramyDialogue from "./components/KramyDialogue"
import { strForDisplay } from "@/app/utils/strFormatting.util"
import { useState, Dispatch, SetStateAction } from "react"
import { usePathname, useRouter } from "next/navigation"
import Icon from "../Icon/Icon.component"
import { KramyFinalResponse } from "@/app/(site)/kramy/kramy.types"
import { getRecipe } from "./utils/query.utils"
import KramyInput from "./components/KramyInput.component"
// import Overlay from "../Overlay/Overlay.component"
import { Suspense } from "react"

export type KramyState = "greeting" | "waiting" | "thinking" | "answering"
type KramyProps = {
  setDisplay?: Dispatch<SetStateAction<boolean>>
  setKramyResponse?: Dispatch<SetStateAction<KramyFinalResponse | undefined>>
  mode: "float" | "page"
}

const Kramy = ({ setDisplay, setKramyResponse, mode }: KramyProps) => {
  const [userQuery, setUserQuery] = useState<string>("")
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = async () => {
    if (pathname === "/") {
      if (!setDisplay)
        throw new Error("you forgot to send the setKramyResponse prop")

      router.push(`/kramy?recipequery=${userQuery}`)
      setDisplay(false)
    } else {
      if (!setKramyResponse)
        throw new Error("you forgot to send the setKramyResponse prop")

      router.push(`${pathname}?kramystate=thinking`)
      const res = await getRecipe(userQuery)
      setKramyResponse(res)
      router.push(
        `${pathname}?kramystate=answering&recipequery=${strForDisplay(res.recipe)}`,
      )
    }
  }

  return (
    <>
      {/* {pathname !== "/kramy" && ( */}
      {/*   <Overlay */}
      {/*     changeVisibility={() => { */}
      {/*       if (!setDisplay) throw new Error("you forgot to pass setDisplay") */}
      {/*       setDisplay((prev) => !prev) */}
      {/*     }} */}
      {/*   /> */}
      {/* )} */}
      <div
        className={`${mode === "float" ? "fixed max-w-[750px]" : "w-max-[1000px]"} z-50 flex justify-center`}
      >
        <div
          className={`pointer-events-auto flex ${mode === "float" ? "px-8 py-8 shadow-xl" : "px-0 py-8"} m-auto flex-col gap-5 rounded-lg bg-gray100 sm:p-5`}
        >
          <div className="flex items-start justify-between gap-10 sm:gap-5">
            <Suspense>
              <KramyDialogue />
            </Suspense>
            {mode === "float" ? (
              <button
                onClick={() => {
                  if (!setDisplay)
                    throw new Error("you forgot to pass setDisplay")
                  setDisplay((prev) => !prev)
                }}
              >
                <Icon
                  iconType="plus"
                  style="rotate-45 scale-[2] xs:scale-[1.4]"
                />
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="flex gap-10 md:flex-col md:gap-5">
            <KramyInput
              setKramyResponse={setKramyResponse}
              userQuery={userQuery}
              setUserQuery={setUserQuery}
            />
            <button
              className="rounded-lg bg-krOrange px-5 py-2 font-bold text-white"
              onClick={handleClick}
            >
              ¿Cómo lo preparo?
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Kramy
