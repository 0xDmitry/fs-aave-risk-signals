import type { Metadata } from "next"
import "@functionspace/ui/src/styles/base.css"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aave Risk Signals",
  description: "Forward yield and reserve stress signals for Aave.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
