import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Tablet, CheckCircle, Star, Shield, ArrowRight, Phone, Award, Zap, Battery, Speaker } from "lucide-react"

export const metadata: Metadata = {
  title: "iPad Onarım Hizmetleri - Profesyonel iPad Tamiri | Masterfix",
  description:
    "iPad onarım hizmetleri: ekran değişimi, batarya değişimi, şarj soketi tamiri, hoparlör onarımı. Tüm iPad modelleri için profesyonel tamir hizmeti. Apple Pencil uyumluluğu korunur.",
  keywords:
    "ipad onarım, ipad tamiri, ipad ekran değişimi, ipad batarya değişimi, ipad şarj soketi, apple pencil uyumluluk, ipad pro onarım",
  openGraph: {
    title: "iPad Onarım Hizmetleri - Profesyonel iPad Tamiri",
    description: "Tüm iPad modelleri için profesyonel onarım hizmeti. Apple Pencil uyumluluğu korunur.",
    url: "https://masterfix.com.tr/ipad-onarim",
  },
  alternates: {
    canonical: "https://masterfix.com.tr/ipad-onarim",
  },
}

const iPadServices = [
  {
    title: "iPad Ekran Değişimi",
    icon: Tablet,
    description: "Retina kalitesinde ekran, Apple Pencil uyumluluğu",
    price: "₺1.299",
    duration: "45 dk",
    warranty: "6 ay",
  },
  {
    title: "iPad Batarya Değişimi",
    icon: Battery,
    description: "10 saate kadar kullanım, yüksek kapasiteli batarya",
    price: "₺699",
    duration: "30 dk",
    warranty: "12 ay",
  },
  {
    title: "iPad Şarj Soketi Onarımı",
    icon: Zap,
    description: "Lightning/USB-C soket, hızlı şarj desteği",
    price: "₺599",
    duration: "25 dk",
    warranty: "6 ay",
  },
  {
    title: "iPad Hoparlör Onarımı",
    icon: Speaker,
    description: "Stereo ses sistemi, Dolby Atmos desteği",
    price: "₺499",
    duration: "35 dk",
    warranty: "6 ay",
  },
]

const supportedModels = [
  'iPad Pro 12.9" (6. nesil)',
  'iPad Pro 11" (4. nesil)',
  "iPad Air (5. nesil)",
  "iPad (10. nesil)",
  "iPad mini (6. nesil)",
  'iPad Pro 12.9" (5. nesil)',
  'iPad Pro 11" (3. nesil)',
  "iPad Air (4. nesil)",
  "iPad (9. nesil)",
  'iPad Pro 12.9" (4. nesil)',
  'iPad Pro 11" (2. nesil)',
  "iPad Air (3. nesil)",
  "iPad mini (5. nesil)",
  "iPad (8. nesil)",
  'iPad Pro 12.9" (3. nesil)',
  'iPad Pro 11" (1. nesil)',
]

const features = [
  "Retina ekran kalitesi",
  "Apple Pencil uyumluluğu",
  "True Tone desteği",
  "Multi-touch hassasiyeti",
  "10 saate kadar pil ömrü",
  "Dolby Atmos ses kalitesi",
  "Hızlı şarj desteği",
  "USB-C/Lightning uyumluluk",
  "Ücretsiz teşhis hizmeti",
  "Aynı gün teslimat",
  "12 aya kadar garanti",
  "Veri güvenliği garantisi",
]

export default function iPadOnarimPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Tablet className="w-4 h-4" />
              <span>iPad Onarım Uzmanı</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                iPad Onarım
              </span>{" "}
              <span className="text-gray-900 dark:text-white">Hizmetleri</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              iPad mini'den iPad Pro 12.9"'a kadar tüm modeller için profesyonel onarım hizmetleri. Retina ekran
              değişimi, batarya değişimi, şarj soketi tamiri ve hoparlör onarımı konularında uzmanız. Apple Pencil
              uyumluluğu korunarak, cihazınızın tüm özelliklerini geri kazanmasını sağlıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="btn-primary group">
                <Phone className="w-5 h-5 mr-2" />
                Hemen Randevu Al
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">Ücretsiz Teşhis</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Zap className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">45dk</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Ortalama Süre</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">12 Ay</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Garanti</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Award className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">%97</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Başarı Oranı</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Star className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">4.8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Müşteri Puanı</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-16 text-center">
              <Tablet className="w-32 h-32 text-purple-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">iPad Onarım Görseli</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">iPad Onarım Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Tüm iPad modelleri için kapsamlı çözümler</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {iPadServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Fiyat:</span>
                    <span className="font-bold text-purple-600">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Süre:</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Garanti:</span>
                    <span className="font-medium">{service.warranty}</span>
                  </div>
                </div>

                <button className="btn-primary w-full">Randevu Al</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">iPad Onarımında Neden Biz?</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  iPad'inizin tüm özelliklerini koruyarak profesyonel onarım hizmeti sunuyoruz. Apple Pencil uyumluluğu,
                  Retina ekran kalitesi ve True Tone özelliği onarım sonrası da korunur. Uzman teknisyenlerimiz her iPad
                  modeli için özel çözümler sunar.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Desteklenen iPad Modelleri</h3>
                <div className="grid grid-cols-1 gap-3">
                  {supportedModels.map((model, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{model}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">iPad'iniz Onarıma Hazır mı?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Apple Pencil uyumluluğu korunarak, iPad'inizin tüm özelliklerini geri kazandırıyoruz. Ücretsiz teşhis için
              hemen iletişime geçin.
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
