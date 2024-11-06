import { useState, useEffect, Dispatch, SetStateAction } from "react"

const useFetch = <T>(
  endpoint: string,
  setter?: Dispatch<SetStateAction<T | null>>,
) => {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(endpoint, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        const data: T = await res.json()

        setData(data)
      } catch (e) {
        console.log(e)
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
