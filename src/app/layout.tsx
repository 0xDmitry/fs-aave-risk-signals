import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@functionspace/ui/src/styles/base.css"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aave Risk Signals",
  description: "Forward yield and reserve stress signals for Aave.",
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} flex min-h-dvh flex-col font-sans antialiased`}
      >
        <Header />
        <div className="flex-1 bg-panel">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
