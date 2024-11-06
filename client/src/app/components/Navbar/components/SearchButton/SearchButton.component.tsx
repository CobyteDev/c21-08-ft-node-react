import { useState } from "react"
import MobileSearchBar from "../../MobileSearchBar.component"
import Icon from "@/app/components/Icon/Icon.component"

const SearchButton = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  return (
    <>
      <button
        className="mr-4 bg-white"
        onClick={() => setShowMobileSearch((prev) => !prev)}
      >
        <Icon iconType="search" />
      </button>
      {showMobileSearch && <MobileSearchBar />}
    </>
  )
}

export default SearchButton
