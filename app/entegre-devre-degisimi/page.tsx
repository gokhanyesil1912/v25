import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Zap, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Entegre Devre Değişimi - IC Chip Tamiri | Masterfix",
  description:
    "Profesyonel entegre devre değişimi hizmetleri. IC chip tamiri, mikroişlemci değişimi, devresel onarımlar.",
  keywords: "entegre devre değişimi, ic chip tamiri, mikroişlemci değişimi, devresel onarım",
}

export default function EntegreDevreKlasörPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Entegre Devre Değişimi
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Profesyonel IC chip değişimi ve mikroişlemci tamiri hizmetleri. Devresel sorunların uzman çözümü.
          </p>
          <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-16 max-w-4xl mx-auto">
            <Zap className="w-32 h-32 text-red-600 mx-auto mb-4" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Uzman IC Chip Tamiri</h2>
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
