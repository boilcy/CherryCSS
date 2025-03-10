import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cherry Studio Theme Gallery",
  description: "选择并复制你喜欢的主题",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon-light.ico" type="image/x-icon" sizes="64x64"></link>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'
