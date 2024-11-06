import WrappedContent from "./components/WrappedContent"
import { Suspense } from "react"

// type KramyState = "greeting" | "waiting" | "thinking" | "answering"

const KramyPage = () => {
  return (
    <Suspense>
      <WrappedContent />
    </Suspense>
  )
}

export default KramyPage
