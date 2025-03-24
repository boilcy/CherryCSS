import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { Locale, NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { isRTL } from '@/i18n/config';
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
  const isRtl = isRTL(locale);
  const dir = isRtl ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="icon" href="/favicon-light.ico" type="image/x-icon" sizes="64x64" />
      </head>
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
