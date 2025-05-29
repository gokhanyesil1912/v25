import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Cpu, Star, Shield, ArrowRight, Phone, Database } from "lucide-react"

export const metadata: Metadata = {
  title: "Anakart Onarım Hizmetleri - iPhone iPad MacBook Anakart Tamiri | Masterfix",
  description:
    "Profesyonel anakart onarım hizmetleri: Logic board tamiri, mikroişlemci onarımı, M1/M2 çip desteği. Veri korunur, 6 ay garanti.",
  keywords:
    "anakart onarım, logic board tamiri, mikroişlemci onarım, m1 m2 çip tamiri, iphone anakart, ipad logic board",
  openGraph: {
    title: "Anakart Onarım Hizmetleri - Logic Board Tamiri",
    description: "Mikroişlemci seviyesinde onarım. Veri korunur, M1/M2 çip desteği.",
    url: "https://masterfix.com.tr/anakart-onarim",
  },
  alternates: {
    canonical: "https://masterfix.com.tr/anakart-onarim",
  },
}

export default function AnakartOnarimPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Cpu className="w-4 h-4" />
              <span>Anakart Onarım Uzmanı</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Anakart Onarım
              </span>{" "}
              <span className="text-gray-900 dark:text-white">Hizmetleri</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              iPhone, iPad ve MacBook cihazlarınız için mikroişlemci seviyesinde anakart onarım hizmetleri. Logic board
              tamiri, M1/M2 çip desteği ve karmaşık devresel sorunların çözümü. Verileriniz korunarak, cihazınızın tam
              performansını geri kazandırıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="btn-primary group">
                <Phone className="w-5 h-5 mr-2" />
                Ücretsiz Teşhis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">Detaylı Bilgi</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Database className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">%95</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Veri Kurtarma</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">6 Ay</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Garanti</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Cpu className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">M1/M2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Çip Desteği</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">4.8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Müşteri Puanı</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-16 text-center">
              <Cpu className="w-32 h-32 text-orange-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">Anakart Onarım Görseli</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Anakartınız Onarıma Hazır mı?</h2>
            <p className="text-xl text-orange-100 mb-8">
              Mikroişlemci seviyesinde onarım ile cihazınızın performansını maksimuma çıkarıyoruz. Verileriniz korunur,
              M1/M2 çip desteği mevcuttur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary group">
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara: (212) 123 45 67
              </button>
              <Link href="/sss" className="btn-outline-white">
                S.S.S Sayfası
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
