import { MouseEvent } from "react"
export type PropsComponents = {
  active: boolean
  handleActive?: (event: MouseEvent<HTMLButtonElement>) => void
}
