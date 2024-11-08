import { useState, useEffect, Dispatch, SetStateAction } from "react"
import { API_BASE_URL_FROM_BROWSER } from "../consts/api.consts"

const useFetch = <T>(
  endpoint: string,
  setter?: Dispatch<SetStateAction<T | null>>,
) => {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`${API_BASE_URL_FROM_BROWSER}${endpoint}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        const data: T = await res.json()

        setData(data)
      } catch (e) {
        console.log(`there was an error trying to fetch: ${endpoint}`, e)
      }
    }
    getData()
  }, [endpoint])

  if (setter) {
    setter(data)
  }

  return data
}

export default useFetch
