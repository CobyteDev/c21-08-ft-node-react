import { KramyFinalResponse } from "@/app/(site)/kramy/kramy.types"
import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { useRouter, usePathname } from "next/navigation"

type KramyInputProps = {
  userQuery: string
  setUserQuery: Dispatch<SetStateAction<string>>
  setKramyResponse?: Dispatch<SetStateAction<KramyFinalResponse | undefined>>
}

const KramyInput = ({
  userQuery,
  setUserQuery,
  setKramyResponse,
}: KramyInputProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleChange = (e: ChangeEvent) => {
    setUserQuery((e.target as HTMLInputElement).value)
    if (setKramyResponse) setKramyResponse(undefined)
    router.push(`${pathname}?kramystate=waiting`)
  }

  return (
    <div className="space-between items-between flex gap-10 sm:flex-col sm:gap-5">
      <input
        type="text"
        name="recipe-query"
        value={userQuery}
        onChange={handleChange}
        className="flex-1 rounded-lg border-[1px] border-solid border-gray400 px-5 py-2"
        placeholder="Escríbelo aquí..."
      />
    </div>
  )
}

export default KramyInput
