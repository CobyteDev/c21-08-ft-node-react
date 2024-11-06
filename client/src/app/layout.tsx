import type { Metadata } from "next"
// import localFont from "next/font/local";
import { Suspense } from "react"
import "./globals.css"
import Navbar from "./components/Navbar/Navbar.component"
import { CartContextProvider } from "./contexts/cart.context"
import Footer from "./components/Footer/Footer.component"
import { AuthProvider } from "./contexts/auth.context"
import MobileNavbar from "./components/MobileNavbar/MobileNavbar.component"

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="mt-[96px] bg-gray100">
        <CartContextProvider>
          <AuthProvider>
            <Suspense>
              <div className="hidden md:block">
                <MobileNavbar />
              </div>
              <div className="md:hidden">
                <Navbar />
              </div>
            </Suspense>
            {children}
          </AuthProvider>
        </CartContextProvider>
        <Footer />
      </body>
    </html>
  )
}
