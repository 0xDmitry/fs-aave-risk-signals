import type { Metadata } from "next"
import { Header } from "@/components/Header"
import "./globals.css"
import "@functionspace/ui/src/styles/base.css"

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
      </body>
    </html>
  )
}
