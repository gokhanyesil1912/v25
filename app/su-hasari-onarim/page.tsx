import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Droplets, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Su Hasarı Onarım Hizmetleri - Sıvı Teması Tamiri | Masterfix",
  description: "iPhone, iPad, MacBook su hasarı onarımı. Acil müdahale, veri kurtarma, temizlik ve kurutma işlemleri.",
  keywords: "su hasarı onarım, sıvı temas tamiri, veri kurtarma, acil müdahale, temizlik kurutma",
}

export default function SuHasariOnarimPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Su Hasarı Onarım
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Acil müdahale ile su hasarı gören cihazlarınızı kurtarıyoruz. İlk 24 saat kritik öneme sahiptir.
          </p>
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-16 max-w-4xl mx-auto">
            <Droplets className="w-32 h-32 text-blue-600 mx-auto mb-4" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Acil Su Hasarı Müdahalesi</h2>
          <div className="flex gap-4 justify-center">
            <button className="btn-secondary">
              <Phone className="w-5 h-5 mr-2" />
              Acil Hat: (212) 123 45 67
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
