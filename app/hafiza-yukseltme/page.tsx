import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { HardDrive, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Hafıza Yükseltme Hizmetleri - SSD RAM Yükseltme | Masterfix",
  description: "MacBook SSD ve RAM yükseltme hizmetleri. Performansınızı artırın, depolama alanınızı genişletin.",
  keywords: "hafıza yükseltme, ssd yükseltme, ram yükseltme, macbook hafıza, performans artırma",
  openGraph: {
    title: "Hafıza Yükseltme Hizmetleri - SSD RAM Yükseltme",
    description: "MacBook performansınızı ve depolama alanınızı artırın.",
    url: "https://masterfix.com.tr/hafiza-yukseltme",
  },
}

export default function HafizaYukseltmePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Hafıza Yükseltme
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            MacBook SSD ve RAM yükseltme hizmetleri ile performansınızı artırın, depolama alanınızı genişletin.
          </p>
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-16 max-w-4xl mx-auto">
            <HardDrive className="w-32 h-32 text-purple-600 mx-auto mb-4" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Performansınızı Artırmaya Hazır mısınız?</h2>
          <div className="flex gap-4 justify-center">
            <button className="btn-secondary">
              <Phone className="w-5 h-5 mr-2" />
              Hemen Ara: (212) 123 45 67
            </button>
            <Link href="/sss" className="btn-outline-white">
              S.S.S
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
