import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Masterfix - Profesyonel Apple Cihaz Onarım Hizmetleri | iPhone iPad MacBook Tamiri",
  description:
    "iPhone, iPad ve MacBook onarım hizmetleri. Ekran değişimi, batarya değişimi, anakart onarımı. Hızlı, güvenilir ve profesyonel Apple cihaz tamiri.",
  keywords:
    "iphone onarım, ipad onarım, macbook onarım, ekran değişimi, batarya değişimi, anakart onarımı, apple servis, cep telefonu tamiri",
  authors: [{ name: "Masterfix" }],
  creator: "Masterfix",
  publisher: "Masterfix",
  robots: "index, follow",
  openGraph: {
    title: "Masterfix - Profesyonel Apple Cihaz Onarım Hizmetleri",
    description: "iPhone, iPad ve MacBook onarım hizmetleri. Profesyonel ve güvenilir çözümler.",
    url: "https://masterfix.com.tr",
    siteName: "Masterfix",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://masterfix.com.tr",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
