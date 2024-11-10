import type { Metadata } from "next"
import Link from "next/link"
import AdminNavbar from "./components/AdminNavbar/AdminNavbar.component"
import "../../globals.css"
import { strForDisplay } from "@/app/utils/strFormatting.util"

export const metadata: Metadata = {
  title: "Kramer Minimarket",
  description: "Minimarket",
}

const sections = [ "categorias", "productos", "promociones" ];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="mt-[96px] bg-gray100">
              <div>
                <AdminNavbar />
              </div>
    <div className="w-full">
      <main className="w-[1000px] mx-auto flex gap-10">
        <div className="w-1/4">
          <ul className="flex flex-col">
            { sections.map(s => (
              <li className="h-14 border-b-[1px] border-solid border-gray300 flex items-center">
                <Link key={`admin-section-${s}`} href={`/admin/${s}`}>{strForDisplay(s)}</Link>
              </li>
            )) }
          </ul>
        </div>
        <div className="bg-gray200 w-3/4">{children}</div>
      </main>
    </div>
      </body>
    </html>
  )
}
