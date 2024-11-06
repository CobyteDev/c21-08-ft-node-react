import { RefObject, useEffect, useState } from 'react'

type Res = {
  width: number | undefined
  height: number | undefined
}

export const useDimensions = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>): Res => {
  const [dimensions, setDimensions] = useState<Res>({ width: undefined, height: undefined })

  useEffect(() => {
    setDimensions({ width: ref.current?.offsetWidth, height: ref.current?.offsetHeight })
  }, [ref])

  return dimensions
}
