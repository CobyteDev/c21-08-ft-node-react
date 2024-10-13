import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Icon from "./components/Icon/Icon.component";
import CartWithContext from "./components/Cart/CartWithContext.component";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Kramer Minimarket",
  description: "Minimarket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="bg-gray100">
        <div className="w-full bg-gray100 flex items-center fixed z-[100]">
          <nav className='w-[1000px] h-24 bg-gray flex justify-between gap-9 m-auto border border-t-4'>
            <Link href="/" className="flex items-center">
              <Image 
                alt={ "logo" } 
                src={ '/images/logo-final-color.png' } 
                width={184.1} 
                height={41.741}
              />
            </Link>
            <div className="relative flex-1 flex items-center">
              <input type="text" className="w-full h-10 rounded border border-gray-300" />
              <div className="absolute end-0">
                <Icon iconType="search"/>
              </div>
            </div>
            <div className="flex gap-4 justify-end items-center flex-1">
              <div className="flex gap-2 items-center">
                <Icon iconType="category"/>
                <span>Categorías</span>
              </div>
              <div className="flex gap-2 items-center">
                <Icon iconType="user"/>
                <span>Joel</span>
              </div>
              <div className="flex gap-2 items-center">
                <CartWithContext />
              </div>
            </div>
          </nav>
        </div>

        {children}

        <div className="w-full bg-gray200">
          <footer className="w-[1000px] m-auto flex py-20 mt-20 gap-24 justify-between">
            <div>
              <Image 
                alt={ "logo" } 
                src={ '/images/logo-positivo.png' } 
                width={184.1} 
                height={41.741}
                className='-z-50'
              />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-bold">¿Qué necesitas hoy?</h2>
              <div className="flex gap-12">
                <ul>
                  <li>Frutas</li>
                  <li>Verduras</li>
                  <li>Lácteos</li>
                  <li>Carnes</li>
                </ul>
                <ul>
                  <li>Legumbres</li>
                  <li>Licones</li>
                  <li>Embutidos</li>
                  <li>Cereales</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-bold">Conversemos</h2>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
