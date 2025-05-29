import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import {
  Monitor,
  CheckCircle,
  Star,
  Shield,
  ArrowRight,
  Phone,
  Award,
  Zap,
  Smartphone,
  Tablet,
  Laptop,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Ekran Değişimi Hizmetleri - iPhone iPad MacBook Ekran Tamiri | Masterfix",
  description:
    "Profesyonel ekran değişimi hizmetleri: iPhone OLED ekran, iPad Retina ekran, MacBook ekran tamiri. Orijinal kalitede parçalar, True Tone desteği, aynı gün teslimat.",
  keywords:
    "ekran değişimi, iphone ekran tamiri, ipad ekran değişimi, macbook ekran tamiri, oled ekran, retina ekran, true tone",
  openGraph: {
    title: "Ekran Değişimi Hizmetleri - iPhone iPad MacBook Ekran Tamiri",
    description: "Tüm Apple cihazları için profesyonel ekran değişimi hizmeti. Orijinal kalite garantisi.",
    url: "https://masterfix.com.tr/ekran-degisimi",
  },
  alternates: {
    canonical: "https://masterfix.com.tr/ekran-degisimi",
  },
}

const screenServices = [
  {
    title: "iPhone Ekran Değişimi",
    icon: Smartphone,
    description: "OLED/LCD ekran, True Tone, 3D Touch desteği",
    priceRange: "₺699 - ₺1.299",
    duration: "30-45 dk",
    warranty: "6 ay",
    features: ["OLED kalitesi", "True Tone", "3D Touch", "Su geçirmezlik"],
  },
  {
    title: "iPad Ekran Değişimi",
    icon: Tablet,
    description: "Retina ekran, Apple Pencil uyumluluğu korunur",
    priceRange: "₺999 - ₺1.899",
    duration: "45-60 dk",
    warranty: "6 ay",
    features: ["Retina kalite", "Apple Pencil", "Multi-touch", "True Tone"],
  },
  {
    title: "MacBook Ekran Tamiri",
    icon: Laptop,
    description: "Retina ekran, P3 renk gamı, ProMotion desteği",
    priceRange: "₺2.199 - ₺3.499",
    duration: "1-2 gün",
    warranty: "6 ay",
    features: ["Retina kalite", "P3 renk", "ProMotion", "True Tone"],
  },
]

const screenFeatures = [
  "Orijinal kalitede ekranlar",
  "True Tone teknolojisi",
  "Dokunmatik hassasiyeti",
  "Renk kalibrasyonu",
  "Su geçirmezlik korunur",
  "Face ID/Touch ID uyumlu",
  "Apple Pencil desteği",
  "Ücretsiz teşhis",
  "Aynı gün teslimat",
  "6 ay garanti",
  "Profesyonel montaj",
  "Kalite kontrol testi",
]

const repairProcess = [
  {
    step: 1,
    title: "Teşhis ve İnceleme",
    description: "Ekran hasarını detaylı olarak değerlendiriyoruz",
    duration: "5-10 dk",
  },
  {
    step: 2,
    title: "Parça Seçimi",
    description: "Cihazınıza uygun orijinal kalitede ekran seçimi",
    duration: "5 dk",
  },
  {
    step: 3,
    title: "Profesyonel Değişim",
    description: "Uzman teknisyenlerimiz ekranı dikkatli şekilde değiştirir",
    duration: "30-60 dk",
  },
  {
    step: 4,
    title: "Test ve Kalibrasyon",
    description: "Dokunmatik test, renk kalibrasyonu ve fonksiyon kontrolü",
    duration: "10-15 dk",
  },
]

export default function EkranDegisimiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Monitor className="w-4 h-4" />
              <span>Ekran Değişimi Uzmanı</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Ekran Değişimi
              </span>{" "}
              <span className="text-gray-900 dark:text-white">Hizmetleri</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              iPhone, iPad ve MacBook cihazlarınız için profesyonel ekran değişimi hizmetleri. Orijinal kalitede OLED,
              LCD ve Retina ekranlar ile cihazınızın tüm özelliklerini geri kazandırıyoruz. True Tone teknolojisi,
              dokunmatik hassasiyeti ve su geçirmezlik özelliği korunarak, yeni gibi bir deneyim sunuyoruz.
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
                <Zap className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">30dk</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Ortalama Süre</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">6 Ay</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Garanti</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">%99</div>
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
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-16 text-center">
              <Monitor className="w-32 h-32 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">Ekran Değişimi Görseli</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Ekran Değişimi Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Tüm Apple cihazları için orijinal kalitede ekranlar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {screenServices.map((service, index) => (
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
                    <span className="font-bold text-blue-600">{service.priceRange}</span>
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

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Özellikler</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="btn-primary w-full">Randevu Al</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Ekran Değişimi Sürecimiz</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">4 adımda ekranınızı yeniliyoruz</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {repairProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{process.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{process.description}</p>
                <span className="text-sm text-blue-600 font-medium">{process.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Neden Ekran Değişimi İçin Bizi Tercih Etmelisiniz?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Orijinal kalitede ekranlar, profesyonel montaj ve tüm özelliklerin korunması ile cihazınızı yeni gibi
                yapıyoruz.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {screenFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white dark:bg-gray-900 p-4 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ekranınızı Yenilemeye Hazır mısınız?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Orijinal kalitede ekranlar ile cihazınızın tüm özelliklerini geri kazandırıyoruz. True Tone, dokunmatik
              hassasiyeti ve su geçirmezlik korunur.
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
