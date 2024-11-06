"use client"

import Icon from "../Icon/Icon.component"
import Cart from "../Cart/Cart.component"
import { useEffect, useState } from "react"
import CartButton from "../Navbar/CartButton.component"
import { IsClientProvider } from "@/app/contexts/isClient.context"
import { usePathname } from "next/navigation"
import Line from "../Line/Line.component"
import SearchBar from "../Navbar/SearchBar.components"
import UserButton from "../UserButton/UserButton.component"
import useFetch from "@/app/hooks/useFetch.hook"
import { Category as CategoryT } from "@/app/types/Category.type"
import Category from "../CategoriesPanel/Category.component"
import { API_BASE_URL } from "@/app/consts/api.consts"
import { IconProps } from "../Icon/types/IconProps.type"
import Logo from "../Navbar/Logo.component"
import LogoutButton from "../LogoutButton/LogoutButton.component"
import styles from "./MobileNavbar.module.css"
import KramyBtn from "../KramyBtn/KramyBtn.component"
import Kramy from "../Kramy/Kramy.component"
import { Suspense } from "react"

const MobileNavbar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const pathname = usePathname()
  const categories =
    useFetch<CategoryT[]>(`${API_BASE_URL}/category`) || ([] as CategoryT[])
  const [displayKramy, setDisplayKramy] = useState(false)

  useEffect(() => {
    setIsMenuVisible(false)
    setDisplayKramy(false)
  }, [pathname])

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (!isMenuVisible) return
  //
  //     const width = window.innerWidth
  //
  //     if (width < 450) return
  //
  //     setIsMenuVisible(false)
  //   }
  //
  //   window.addEventListener("resize", handleResize)
  //
  //   handleResize()
  //
  //   return () => {
  //     window.removeEventListener("resize", handleResize)
  //   }
  // }, [isMenuVisible])

  // useEffect(() => {
  //   setIsMenuVisible(false)
  //   setIsCartVisible(false)
  //   setIsCategoriesVisible(false)
  // }, [pathname])

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

  // const changeCategoriesVisibility = () => {
  //   if (isCartVisible)
  //     setIsCartVisible((prevIsCartVisible) => !prevIsCartVisible)
  //   if (isMenuVisible)
  //     setIsMenuVisible((prevIsMenuVisible) => !prevIsMenuVisible)
  //   setIsCategoriesVisible(
  //     (prevIsCategoriesVisible) => !prevIsCategoriesVisible,
  //   )
  // }

  const handleKramyClick = () => {
    if (pathname === "/") {
      setDisplayKramy(true)
    } else {
      setIsMenuVisible(false)
    }
  }

  useEffect(() => {
    console.log("isMenuVisible: ", isMenuVisible)
  }, [isMenuVisible])

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b-[1px] border-solid border-gray300 bg-gray100">
        <nav className="mx-auto flex min-h-24 max-w-[1000px] items-center justify-between gap-5 lg:gap-6 lg:px-10 md:gap-3 md:px-5 xs:gap-2 xs:gap-4 xs:px-2">
          <button onClick={() => setIsMenuVisible((prev) => !prev)}>
            <Icon iconType="hamburger" />
          </button>
          <SearchBar />
          <CartButton changeCartVisibility={changeCartVisibility} />
        </nav>
      </header>

      {isMenuVisible && (
        <div className="fixed z-50 flex h-[calc(100vh-96px)] w-full flex-col items-center gap-5 bg-gray200 p-5">
          <Logo />
          <KramyBtn placement="navbar" clickFn={handleKramyClick} />
          {displayKramy && (
            <Suspense>
              <Kramy setDisplay={setDisplayKramy} mode="float" />
            </Suspense>
          )}

          <Line />
          <div className="flex w-full items-center justify-between px-5">
            <UserButton />
            <LogoutButton />
          </div>
          <Line />
          <div
            className={`grid w-full flex-1 grid-cols-2 grid-rows-4 ${styles.categoryContainer}`}
          >
            {categories.map((c, idx) => {
              return (
                <Category
                  key={`category-${idx}`}
                  name={c.categoryLabel}
                  route={`/categoria/${c.categoryName}?categoryid=${c.categoryId}&categorylabel=${c.categoryLabel}`}
                >
                  <Icon iconType={c.categoryName as IconProps["iconType"]} />
                </Category>
              )
            })}
          </div>
        </div>
      )}
      <IsClientProvider>
        <Cart
          changeCartVisibility={changeCartVisibility}
          isCartVisible={isCartVisible}
          display="cart"
        />
      </IsClientProvider>
    </>
  )
}

export default MobileNavbar
