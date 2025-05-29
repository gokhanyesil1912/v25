import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import {
  Laptop,
  CheckCircle,
  Star,
  Shield,
  ArrowRight,
  Phone,
  Award,
  Zap,
  Battery,
  Monitor,
  Keyboard,
} from "lucide-react"

export const metadata: Metadata = {
  title: "MacBook Onarım Hizmetleri - Profesyonel MacBook Tamiri | Masterfix",
  description:
    "MacBook onarım hizmetleri: klavye değişimi, batarya değişimi, ekran tamiri, logic board onarımı. M1, M2 çipli MacBook'lar dahil tüm modeller için profesyonel tamir hizmeti.",
  keywords:
    "macbook onarım, macbook tamiri, macbook klavye değişimi, macbook batarya, macbook ekran tamiri, m1 macbook onarım, m2 macbook tamir",
  openGraph: {
    title: "MacBook Onarım Hizmetleri - Profesyonel MacBook Tamiri",
    description: "M1, M2 çipli MacBook'lar dahil tüm modeller için profesyonel onarım hizmeti.",
    url: "https://masterfix.com.tr/macbook-onarim",
  },
  alternates: {
    canonical: "https://masterfix.com.tr/macbook-onarim",
  },
}

const macBookServices = [
  {
    title: "MacBook Klavye Değişimi",
    icon: Keyboard,
    description: "Magic Keyboard/Butterfly klavye, backlight özelliği",
    price: "₺1.899",
    duration: "1-2 gün",
    warranty: "12 ay",
  },
  {
    title: "MacBook Batarya Değişimi",
    icon: Battery,
    description: "8 saate kadar kullanım, yüksek kapasiteli batarya",
    price: "₺1.199",
    duration: "45 dk",
    warranty: "12 ay",
  },
  {
    title: "MacBook Ekran Onarımı",
    icon: Monitor,
    description: "Retina ekran, True Tone ve P3 renk desteği",
    price: "₺2.499",
    duration: "1-2 gün",
    warranty: "6 ay",
  },
  {
    title: "Logic Board Onarımı",
    icon: Laptop,
    description: "M1/M2/Intel çip desteği, veri korunur",
    price: "₺3.499",
    duration: "3-5 gün",
    warranty: "6 ay",
  },
]

const supportedModels = [
  'MacBook Pro 16" M2 (2023)',
  'MacBook Pro 14" M2 (2023)',
  'MacBook Air 15" M2 (2023)',
  'MacBook Air 13" M2 (2022)',
  'MacBook Pro 16" M1 Pro/Max',
  'MacBook Pro 14" M1 Pro/Max',
  'MacBook Air 13" M1 (2020)',
  'MacBook Pro 13" M1 (2020)',
  'MacBook Pro 16" Intel (2019-2021)',
  'MacBook Pro 13" Intel (2016-2020)',
  'MacBook Air 13" Intel (2018-2020)',
  'MacBook 12" (2015-2017)',
]

const features = [
  "M1/M2 çip desteği",
  "Retina ekran kalitesi",
  "True Tone teknolojisi",
  "P3 renk gamı",
  "Magic Keyboard",
  "8 saate kadar pil ömrü",
  "Hızlı şarj desteği",
  "Logic board onarımı",
  "Veri güvenliği garantisi",
  "Aynı gün teslimat (basit işlemler)",
  "12 aya kadar garanti",
  "Apple sertifikalı teknisyenler",
]

export default function MacBookOnarimPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Laptop className="w-4 h-4" />
              <span>MacBook Onarım Uzmanı</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                MacBook Onarım
              </span>{" "}
              <span className="text-gray-900 dark:text-white">Hizmetleri</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              MacBook Air'den MacBook Pro'ya, Intel'den M1/M2 çipli modellere kadar tüm MacBook'lar için profesyonel
              onarım hizmetleri. Klavye değişimi, batarya değişimi, ekran tamiri ve logic board onarımı konularında
              uzmanız. Retina ekran kalitesi, True Tone ve tüm özellikler onarım sonrası korunur.
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
                <Zap className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">1-2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Gün Süre</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">12 Ay</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Garanti</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">%96</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Başarı Oranı</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Star className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">4.9</div>
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
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-16 text-center">
              <Laptop className="w-32 h-32 text-green-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">MacBook Onarım Görseli</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">MacBook Onarım Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Tüm MacBook modelleri için kapsamlı çözümler</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {macBookServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-green-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Fiyat:</span>
                    <span className="font-bold text-green-600">{service.price}</span>
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
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">MacBook Onarımında Neden Biz?</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  M1 ve M2 çipli MacBook'lar dahil tüm modeller için uzman onarım hizmeti sunuyoruz. Logic board
                  onarımından klavye değişimine, Retina ekran tamirinden batarya değişimine kadar her türlü sorunu
                  çözüyoruz. Verileriniz korunur, performans maksimum seviyeye çıkar.
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
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Desteklenen MacBook Modelleri</h3>
                <div className="grid grid-cols-1 gap-3">
                  {supportedModels.map((model, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-green-500" />
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
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">MacBook'unuz Onarıma Hazır mı?</h2>
            <p className="text-xl text-green-100 mb-8">
              M1, M2 çipli MacBook'lar dahil tüm modeller için profesyonel onarım hizmeti. Verileriniz korunur,
              performans maksimuma çıkar.
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
