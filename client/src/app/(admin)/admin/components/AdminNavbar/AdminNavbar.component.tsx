import Icon from "@/app/components/Icon/Icon.component"
import CategoriesButton from "./CategoriesButton.component"
import SearchBar from "./SearchBar.components"
import Logo from "@/app/components/Navbar/Logo.component"

const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b-[1px] border-solid border-gray300 bg-gray100">
        <div className="mx-auto flex min-h-24 max-w-[1000px] items-center justify-between lg:gap-6 lg:px-5 md:gap-3 md:px-5 xs:gap-4 xs:px-2">
          <Logo />
          <nav className="flex gap-5">
            <ul className="flex items-center gap-6 lg:gap-4 sm:gap-2">
              <li className="flex gap-2">
                <Icon iconType="goto" />
                <span>Ir al sitio web</span>
              </li>
              <li className="flex gap-2">
                <Icon iconType="logout" />
                <span>Cerrar sesión</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
