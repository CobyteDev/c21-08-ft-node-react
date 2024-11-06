"use client"

import useFirstQuery from "../hooks/useFirstQuery.hook"
import { KramyFinalResponse } from "../kramy.types"
import { useState } from "react"
import Kramy from "@/app/components/Kramy/Kramy.component"
import KramySection from "../sections/KramySection.section"

const WrappedContent = () => {
  const [kramyResponse, setKramyResponse] = useState<KramyFinalResponse>()
  useFirstQuery(setKramyResponse)
  return (
    <div className="w-full">
      <section className="m-auto min-h-[calc(100vh-96px-430px)] max-w-[1000px] lg:px-10 md:px-5">
        <Kramy mode="page" setKramyResponse={setKramyResponse} />
        <KramySection response={kramyResponse} />
      </section>
    </div>
  )
}

export default WrappedContent
