import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cherry Studio Theme Gallery",
  description: "选择并复制你喜欢的Cherry Studio主题!",
  generator: 'boilcy'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <link rel="icon" href="/favicon-light.ico" type="image/x-icon" sizes="64x64" />
      <body className={inter.className}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'
