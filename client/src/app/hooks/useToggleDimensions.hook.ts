import { RefObject, useEffect } from 'react'
import { useDimensions } from './useDimensions.hook'

export const useToggleDimensions = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  cond: boolean
): void => {
  const { height } = useDimensions(ref)

  useEffect(() => {
    if (cond) {
      ref.current?.setAttribute('style', `height: ${height}px`)
    } else {
      ref.current?.setAttribute('style', `height: 0px`)
    }
  }, [cond, height, ref])
}
