import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import {
  Battery,
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
  title: "Batarya Değişimi Hizmetleri - iPhone iPad MacBook Batarya Tamiri | Masterfix",
  description:
    "Profesyonel batarya değişimi hizmetleri: iPhone, iPad, MacBook batarya tamiri. Yüksek kapasiteli bataryalar, 12 ay garanti, aynı gün teslimat. Pil ömrü %40 artırılır.",
  keywords:
    "batarya değişimi, iphone batarya tamiri, ipad batarya değişimi, macbook batarya tamiri, pil değişimi, batarya ömrü",
  openGraph: {
    title: "Batarya Değişimi Hizmetleri - iPhone iPad MacBook Batarya Tamiri",
    description: "Yüksek kapasiteli bataryalar ile cihazınızın pil ömrünü %40 artırıyoruz.",
    url: "https://masterfix.com.tr/batarya-degisimi",
  },
  alternates: {
    canonical: "https://masterfix.com.tr/batarya-degisimi",
  },
}

const batteryServices = [
  {
    title: "iPhone Batarya Değişimi",
    icon: Smartphone,
    description: "Yüksek kapasiteli batarya, %40 daha uzun kullanım",
    priceRange: "₺299 - ₺499",
    duration: "20-30 dk",
    warranty: "12 ay",
    features: ["Yüksek kapasite", "Hızlı şarj", "Optimized charging", "Güvenlik sertifikası"],
    improvement: "%40 daha uzun pil ömrü",
  },
  {
    title: "iPad Batarya Değişimi",
    icon: Tablet,
    description: "10 saate kadar kullanım, güvenli batarya",
    priceRange: "₺549 - ₺799",
    duration: "30-45 dk",
    warranty: "12 ay",
    features: ["10 saat kullanım", "Hızlı şarj", "Güvenli batarya", "Optimized performance"],
    improvement: "10 saate kadar kullanım",
  },
  {
    title: "MacBook Batarya Değişimi",
    icon: Laptop,
    description: "8 saate kadar çalışma, cycle count reset",
    priceRange: "₺999 - ₺1.499",
    duration: "45-60 dk",
    warranty: "12 ay",
    features: ["8 saat kullanım", "Hızlı şarj", "Cycle count reset", "Thermal management"],
    improvement: "8 saate kadar çalışma",
  },
]

const batteryFeatures = [
  "Yüksek kapasiteli bataryalar",
  "12 ay garanti süresi",
  "Hızlı şarj desteği",
  "Optimized charging teknolojisi",
  "Güvenlik sertifikalı bataryalar",
  "Cycle count sıfırlama",
  "Thermal management",
  "Şişme koruması",
  "Aynı gün teslimat",
  "Ücretsiz teşhis",
  "Profesyonel montaj",
  "Kalite kontrol testi",
]

const batteryWarning = [
  {
    title: "Batarya Sağlığı %80'in Altında",
    description: "Cihazınızın performansı düşüyor ve pil çabuk bitiyor",
    action: "Hemen değiştirilmeli",
  },
  {
    title: "Batarya Şişmesi",
    description: "Güvenlik riski oluşturuyor, cihaza zarar verebilir",
    action: "Acil değişim gerekli",
  },
  {
    title: "Beklenmedik Kapanmalar",
    description: "Batarya yetersizliği nedeniyle cihaz kapanıyor",
    action: "En kısa sürede değişim",
  },
]

export default function BataryaDegisimiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-lime-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Battery className="w-4 h-4" />
              <span>Batarya Değişimi Uzmanı</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                Batarya Değişimi
              </span>{" "}
              <span className="text-gray-900 dark:text-white">Hizmetleri</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              iPhone, iPad ve MacBook cihazlarınız için yüksek kapasiteli batarya değişimi hizmetleri. Pil ömrünüzü
              %40'a kadar artırıyoruz. Güvenlik sertifikalı bataryalar, hızlı şarj desteği ve 12 ay garanti ile
              cihazınızı yeniden canlandırıyoruz. Şişmiş bataryalar için acil servis mevcuttur.
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
                <div className="text-2xl font-bold text-gray-900 dark:text-white">20dk</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Ortalama Süre</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">12 Ay</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Garanti</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">%40</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Pil Ömrü Artışı</div>
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
            <div className="bg-gradient-to-r from-green-100 to-lime-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-16 text-center">
              <Battery className="w-32 h-32 text-green-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">Batarya Değişimi Görseli</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-16 bg-red-50 dark:bg-red-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Bataryanızı Ne Zaman Değiştirmelisiniz?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Bu belirtilerden birini görüyorsanız batarya değişimi zamanı gelmiştir
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {batteryWarning.map((warning, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-l-4 border-red-500"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{warning.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{warning.description}</p>
                <div className="bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {warning.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Batarya Değişimi Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Tüm Apple cihazları için yüksek kapasiteli bataryalar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {batteryServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-green-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>

                <div className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium inline-block mb-6">
                  {service.improvement}
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Fiyat:</span>
                    <span className="font-bold text-green-600">{service.priceRange}</span>
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

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Batarya Değişiminde Neden Bizi Tercih Etmelisiniz?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Yüksek kapasiteli bataryalar, 12 ay garanti ve profesyonel montaj ile cihazınızın pil ömrünü maksimuma
                çıkarıyoruz.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {batteryFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-lime-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Bataryanızı Yenilemeye Hazır mısınız?</h2>
            <p className="text-xl text-green-100 mb-8">
              Yüksek kapasiteli bataryalar ile pil ömrünüzü %40 artırıyoruz. Şişmiş bataryalar için acil servis
              mevcuttur.
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
