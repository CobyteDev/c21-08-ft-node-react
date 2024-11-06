import { API_BASE_URL } from "@/app/consts/api.consts"
import Image from "next/image"
import { Category } from "@/app/types/Category.type"

const getCategories = async () => {
  const res = await fetch(`${API_BASE_URL}/category`)
  const categories: Category[] = await res.json()
  return categories
}

const Footer = async () => {
  const categories = await getCategories()
  return (
    <footer className="w-full bg-gray200" id="footer">
      <div className="max-h-500px mx-auto mt-20 flex min-h-[340px] max-w-[1000px] justify-between gap-10 px-8 pt-20 md:mt-16 md:flex-col md:items-center md:gap-4 md:px-[25%] md:py-16 sm:px-[10%] xs:mt-10 xs:py-10">
        <div className="w-[40%] md:w-full">
          <Image
            alt={"logo"}
            src={"/images/logo-positivo.png"}
            width={184.1}
            height={41.741}
            className="mb-10"
          />
          <address className="flex flex-col gap-4 font-light not-italic">
            <p className="w-[80%]">
              Calle Los Robles 123, Piso 2, Dpto. 4, Colonia El Bosque, Ciudad
              Sol, CP 56789, País del Este.
            </p>
          </address>
        </div>
        <div className="w-[40%] md:w-full">
          <h2 className="mb-5 text-2xl font-bold">¿Qué necesitas hoy?</h2>
          <nav className="flex gap-6 font-light">
            <ul className="flex flex-col gap-3">
              {categories.slice(0, 4).map((c, idx) => (
                <li key={`footer-category-${idx}`}>
                  <a
                    href={`/categoria/${c.categoryName}?categoryid=${c.categoryId}&categorylabel=${c.categoryLabel}`}
                  >
                    {c.categoryLabel}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3">
              {categories.slice(4).map((c, idx) => (
                <li key={`footer-category-${idx}`}>
                  <a
                    href={`/categoria/${c.categoryName}?categoryid=${c.categoryId}&categorylabel=${c.categoryLabel}`}
                  >
                    {c.categoryLabel}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="w-[20%] md:w-full">
          <h2 className="mb-5 text-2xl font-bold">Conversémos</h2>
          <ul className="flex flex-col gap-3 font-light">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>945 9867 9697</li>
            <li>consultas@kramer.com</li>
          </ul>
        </div>{" "}
      </div>{" "}
      <div className="mx-auto w-fit pb-20 sm:px-14">
        <a href="" className="me-3 ms-auto font-semibold text-krBlue">
          Terminos y condiciones
        </a>
        <a href="" className="me-3 font-semibold text-krBlue">
          Defensa al consumidor
        </a>
        <a href="" className="me-3 font-semibold text-krBlue">
          Libros de quejas online
        </a>
        <a href="" className="font-semibold text-krBlue">
          Ayuda
        </a>
      </div>
    </footer>
  )
}

export default Footer
