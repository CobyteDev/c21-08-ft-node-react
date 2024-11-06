"use client"

import Icon from "../Icon/Icon.component"
import Cart from "../Cart/Cart.component"
import { useEffect, useState } from "react"
import CartButton from "./CartButton.component"
import CategoriesPanel from "../CategoriesPanel/CategoriesPanel.component"
import Logo from "./Logo.component"
import CategoriesButton from "./CategoriesButton.component"
import SearchBar from "./SearchBar.components"
// import Kramy from "../Kramy/Kramy.component"
import { usePathname } from "next/navigation"
import Image from "next/image"
import MobileSearchBar from "./MobileSearchBar.component"
import UserButton from "../UserButton/UserButton.component"
import KramyBtn from "../KramyBtn/KramyBtn.component"
// import { Suspense } from "react"

const Navbar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const pathname = usePathname()

  // const [displayKramy, setDisplayKramy] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (!isMenuVisible) return

      const width = window.innerWidth

      if (width < 450) return

      setIsMenuVisible(false)
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isMenuVisible])

  useEffect(() => {
    setIsMenuVisible(false)
    setIsCartVisible(false)
    setIsCategoriesVisible(false)
  }, [pathname])

  // const changeMenuVisibility = () => {
  //   if (isCartVisible)
  //     setIsCartVisible((prevIsCartVisible) => !prevIsCartVisible)
  //   if (isCategoriesVisible)
  //     setIsCategoriesVisible(
  //       (prevIsCategoriesVisible) => !prevIsCategoriesVisible,
  //     )
  //   setIsMenuVisible((prevIsMenuVisible) => !prevIsMenuVisible)
  // }

  const changeCartVisibility = () => {
    if (isCategoriesVisible)
      setIsCategoriesVisible(
        (prevIsCategoriesVisible) => !prevIsCategoriesVisible,
      )
    if (isMenuVisible)
      setIsMenuVisible((prevIsMenuVisible) => !prevIsMenuVisible)
    setIsCartVisible((prevIsCartVisible) => !prevIsCartVisible)
  }

  const changeCategoriesVisibility = () => {
    if (isCartVisible)
      setIsCartVisible((prevIsCartVisible) => !prevIsCartVisible)
    if (isMenuVisible)
      setIsMenuVisible((prevIsMenuVisible) => !prevIsMenuVisible)
    setIsCategoriesVisible(
      (prevIsCategoriesVisible) => !prevIsCategoriesVisible,
    )
  }

  // const handleUserClick = () => {
  //   if (user) {
  //     if (user.role === "owner") {
  //       router.push("/admin") // Redirige a la página de administración
  //     } else {
  //       router.push("/profile") // Redirige a la página de perfil para otros usuarios
  //     }
  //   } else {
  //     router.push("/auth") // Redirige a la página de autenticación si no hay usuario
  //   }
  // }

  const handleKramyClick = () => {
    // if (pathname === "/") {
    //   setDisplayKramy(true)
    // } else if (pathname === "/kramy") {
    //   return
    // } else {
    //   setDisplayKramy(true)
    //   setIsMenuVisible(false)
    // }
  }

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b-[1px] border-solid border-gray300 bg-gray100">
        <div className="mx-auto flex min-h-24 max-w-[1000px] items-center justify-between lg:gap-6 lg:px-5 md:gap-3 md:px-5 xs:gap-4 xs:px-2">
          <Logo />
          <nav className="flex gap-5">
            <div className="flex gap-2">
              <SearchBar />
              <KramyBtn
                placement="navbar"
                clickFn={handleKramyClick}
                imgStyle="h-full w-[50px]"
                textStyle="text-base"
              />
              {/* {displayKramy && ( */}
              {/*   <Suspense> */}
              {/*     <Kramy setDisplay={setDisplayKramy} mode="float" /> */}
              {/*   </Suspense> */}
              {/* )} */}
            </div>
            <div className="flex hidden items-center xs:flex">
              <button onClick={() => setShowMobileSearch((prev) => !prev)}>
                <Icon iconType="search" />
              </button>
              {showMobileSearch && <MobileSearchBar />}
            </div>
            <ul className="flex items-center gap-6 lg:gap-4 sm:gap-2">
              <li className="flex gap-2">
                <CategoriesButton
                  changeCategoriesVisibility={changeCategoriesVisibility}
                />
              </li>
              <li>
                <UserButton />
              </li>
              <li className="flex gap-2">
                <CartButton changeCartVisibility={changeCartVisibility} />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="fixed z-50 flex hidden h-[calc(100vh-96px)] w-full flex-col items-center gap-5 bg-gray200 md:flex">
        <Logo />
        <div className="flex w-full items-center justify-between">
          <UserButton />
          {/* why this image is not showing when Navbar is rendered?*/}
          <button className="flex items-center gap-0">
            <Image
              src="/images/kramy/kramy-button-navbar.png"
              alt="Asistenta virtual Kramy"
              width={80}
              height={80}
            />
            <h2 className="text-xl">Kramy</h2>
          </button>
        </div>
        <CategoriesPanel
          mobile
          changeCategoriesVisibility={changeCategoriesVisibility}
          isCategoriesVisible={isCategoriesVisible}
        />
      </div>
      <div className="md:hidden">
        <CategoriesPanel
          changeCategoriesVisibility={changeCategoriesVisibility}
          isCategoriesVisible={isCategoriesVisible}
        />
      </div>
      <Cart
        changeCartVisibility={changeCartVisibility}
        isCartVisible={isCartVisible}
        display="cart"
      />
    </>
  )
}

export default Navbar
