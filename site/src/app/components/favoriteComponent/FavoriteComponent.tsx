"use client"
import { useState } from "react"
import Icon from "../Icon/Icon.component"

const FavoriteComponent = () => {
  const [favorite, setFavorite] = useState(false)
  const handleFavorite = () => {
    setFavorite((prev) => !prev)
  }
  return (
    <>
      <button onClick={() => handleFavorite()}>
        <Icon iconType={favorite ? "heart" : "heartFilled"}></Icon>
      </button>
    </>
  )
}

export default FavoriteComponent
