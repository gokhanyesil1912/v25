import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import {
  Smartphone,
  CheckCircle,
  Star,
  Shield,
  ArrowRight,
  Phone,
  Award,
  Zap,
  Battery,
  Camera,
  Cpu,
} from "lucide-react"

export const metadata: Metadata = {
  title: "iPhone Onarım Hizmetleri - Profesyonel iPhone Tamiri | Masterfix",
  description:
    "iPhone onarım hizmetleri: ekran değişimi, batarya değişimi, kamera tamiri, anakart onarımı. Tüm iPhone modelleri için profesyonel tamir hizmeti. Aynı gün teslimat, 12 ay garanti.",
  keywords:
    "iphone onarım, iphone tamiri, iphone ekran değişimi, iphone batarya değişimi, iphone kamera onarımı, iphone anakart tamiri, apple servis istanbul",
  openGraph: {
    title: "iPhone Onarım Hizmetleri - Profesyonel iPhone Tamiri",
    description: "Tüm iPhone modelleri için profesyonel onarım hizmeti. Aynı gün teslimat ve garanti.",
    url: "https://masterfix.com.tr/iphone-onarim",
  },
  alternates: {
    canonical: "https://masterfix.com.tr/iphone-onarim",
  },
}

const iPhoneServices = [
  {
    title: "iPhone Ekran Değişimi",
    icon: Smartphone,
    description: "OLED/LCD ekran değişimi, dokunmatik hassasiyeti korunur",
    price: "₺899",
    duration: "30 dk",
    warranty: "6 ay",
  },
  {
    title: "iPhone Batarya Değişimi",
    icon: Battery,
    description: "Yüksek kapasiteli batarya, %40 daha uzun kullanım",
    price: "₺399",
    duration: "20 dk",
    warranty: "12 ay",
  },
  {
    title: "iPhone Kamera Onarımı",
    icon: Camera,
    description: "Ön/arka kamera modülü, 4K video kalitesi",
    price: "₺699",
    duration: "45 dk",
    warranty: "6 ay",
  },
  {
    title: "iPhone Anakart Onarımı",
    icon: Cpu,
    description: "Mikroişlemci seviyesinde onarım, veri korunur",
    price: "₺1.499",
    duration: "2-3 gün",
    warranty: "6 ay",
  },
]

const supportedModels = [
  "iPhone 15 Pro Max",
  "iPhone 15 Pro",
  "iPhone 15 Plus",
  "iPhone 15",
  "iPhone 14 Pro Max",
  "iPhone 14 Pro",
  "iPhone 14 Plus",
  "iPhone 14",
  "iPhone 13 serisi",
  "iPhone 12 serisi",
  "iPhone 11 serisi",
  "iPhone XS/XR serisi",
  "iPhone X",
  "iPhone 8/8 Plus",
  "iPhone 7/7 Plus",
  "iPhone 6s/6s Plus",
]

const features = [
  "Orijinal kalitede parçalar",
  "True Tone desteği korunur",
  "Su geçirmezlik özelliği",
  "Face ID/Touch ID uyumluluğu",
  "Ücretsiz teşhis hizmeti",
  "Aynı gün teslimat",
  "12 aya kadar garanti",
  "Veri güvenliği garantisi",
  "Apple sertifikalı teknisyenler",
  "Şeffaf fiyatlandırma",
  "7/24 müşteri desteği",
  "Kapıda servis seçeneği",
]

export default function iPhoneOnarimPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              <span>iPhone Onarım Uzmanı</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                iPhone Onarım
              </span>{" "}
              <span className="text-gray-900 dark:text-white">Hizmetleri</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              iPhone 6'dan iPhone 15 Pro Max'e kadar tüm modeller için profesyonel onarım hizmetleri. Ekran değişimi,
              batarya değişimi, kamera tamiri ve anakart onarımı konularında uzmanız. Orijinal kalitede parçalar, Apple
              sertifikalı teknisyenler ve 12 aya kadar garanti ile hizmetinizdeyiz.
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
                <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">30dk</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Ortalama Süre</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">12 Ay</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Garanti</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Award className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">%98</div>
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
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-16 text-center">
              <Smartphone className="w-32 h-32 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">iPhone Onarım Görseli</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">iPhone Onarım Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Tüm iPhone modelleri için kapsamlı çözümler</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {iPhoneServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Fiyat:</span>
                    <span className="font-bold text-blue-600">{service.price}</span>
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
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Neden iPhone Onarımı İçin Bizi Tercih Etmelisiniz?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  10+ yıllık deneyimimiz, Apple sertifikalı teknisyenlerimiz ve orijinal kalitede parçalarımızla
                  iPhone'unuzu yeniden hayata döndürüyoruz. Her iPhone modeli için özel çözümler sunuyoruz.
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
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Desteklenen iPhone Modelleri</h3>
                <div className="grid grid-cols-2 gap-3">
                  {supportedModels.map((model, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{model}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">iPhone Onarım Sürecimiz</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              4 adımda iPhone'unuzu yeniden hayata döndürüyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Ücretsiz Teşhis</h3>
              <p className="text-gray-600 dark:text-gray-400">iPhone'unuzu detaylı olarak inceliyoruz</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Fiyat Teklifi</h3>
              <p className="text-gray-600 dark:text-gray-400">Şeffaf ve net fiyat bildirimi</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Profesyonel Onarım</h3>
              <p className="text-gray-600 dark:text-gray-400">Uzman teknisyenlerimiz işe başlıyor</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Test ve Teslimat</h3>
              <p className="text-gray-600 dark:text-gray-400">Kalite kontrolü ve güvenli teslimat</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">iPhone'unuz Onarıma Hazır mı?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Uzman ekibimiz iPhone'unuzu en kısa sürede onarıp size teslim ediyor. Ücretsiz teşhis için hemen iletişime
              geçin.
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
