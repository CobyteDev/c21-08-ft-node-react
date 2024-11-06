"use client"

import Image from "next/image"
import { strForDisplay } from "@/app/utils/strFormatting.util"
import Spinner from "../../Spinner/Spinner.component"
import { useSearchParams } from "next/navigation"

const KramyDialogue = () => {
  const searchParams = useSearchParams()
  const recipe = searchParams.get("recipequery")
  const kramyState = searchParams.get("kramystate")

  return (
    <div className="flex items-end justify-between gap-5">
      {kramyState === "waiting" ? (
        <Image
          alt="Asistenta virtual kramy saludando y esperando una consulta"
          src="/images/kramy/kramy-waiting_transparent_small-size.png"
          width={122}
          height={200}
          className="h-full w-16"
        />
      ) : kramyState === "thinking" ? (
        <Image
          alt="Asistenta virtual kramy esperando mientras procesa el pedido"
          src="/images/kramy/kramy-button_transparent_small-size.png"
          width={103}
          height={200}
          className="h-full w-16"
        />
      ) : kramyState === "answering" ? (
        <Image
          alt="Asistenta virtual kramy mostrando los ingredientes, instrucciones de preparación y los productos que tiene para ofrecer"
          src="/images/kramy/kramy-response_transparent_small-size.png"
          width={102}
          height={200}
          className="h-full w-16"
        />
      ) : (
        <Image
          alt="Asistenta virtual kramy saludando y esperando una consulta"
          src="/images/kramy/kramy-waiting_transparent_small-size.png"
          width={122}
          height={200}
          className="h-full w-16"
        />
      )}
      <h2 className="flex flex-col gap-5 text-xl md:gap-4 sm:gap-1 sm:text-lg xs:text-base">
        {kramyState === "thinking" ? <Spinner /> : ""}
        {kramyState === "answering" ? (
          <>
            <span className="leading-4">
              Esto es lo que necesitas para preparar
            </span>
            <span className="text-2xl font-bold leading-3 sm:text-xl xs:text-lg">
              {strForDisplay(recipe || "")}
            </span>
          </>
        ) : (
          <>
            <span className="text-2xl font-bold leading-3 sm:text-xl xs:text-lg">
              {kramyState === "waiting"
                ? "Hola! Soy Kramy,"
                : kramyState === "thinking"
                  ? "Un momento porfavor,"
                  : "Hola! Soy Kramy,"}
            </span>
            <span className="leading-4">
              {kramyState === "waiting"
                ? "en qué te puedo ayudar hoy?"
                : kramyState === "thinking"
                  ? "Estoy buscando en mi base de datos"
                  : "en qué te puedo ayudar hoy? :)"}
            </span>
          </>
        )}
      </h2>
    </div>
  )
}

export default KramyDialogue
