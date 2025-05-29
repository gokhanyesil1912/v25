import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {
  Smartphone,
  Tablet,
  Laptop,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Wrench,
  Zap,
  Award,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Onarım Servisleri - Masterfix Apple Cihaz Tamiri",
  description:
    "iPhone, iPad ve MacBook onarım hizmetleri. Ekran değişimi, batarya değişimi, anakart onarımı ve daha fazlası. Profesyonel Apple cihaz tamiri.",
  keywords:
    "iphone onarım, ipad onarım, macbook onarım, ekran değişimi, batarya değişimi, anakart tamiri, apple servis",
  openGraph: {
    title: "Onarım Servisleri - Masterfix Apple Cihaz Tamiri",
    description: "Profesyonel Apple cihaz onarım hizmetleri. iPhone, iPad ve MacBook tamiri.",
    url: "https://masterfix.com.tr/onarim-servisleri",
  },
  alternates: {
    canonical: "https://masterfix.com.tr/onarim-servisleri",
  },
}

const repairServices = {
  iphone: {
    title: "iPhone Onarımı",
    icon: Smartphone,
    color: "from-blue-500 to-blue-600",
    description: "iPhone modelleriniz için profesyonel onarım hizmetleri",
    image: "/placeholder.svg?height=400&width=600",
    services: [
      {
        name: "iPhone Ekran Değişimi",
        description: "Orijinal kalitede OLED/LCD ekran değişimi. Dokunmatik hassasiyeti ve True Tone özelliği korunur.",
        price: "₺899",
        originalPrice: "₺1.200",
        duration: "30 dk",
        warranty: "6 ay",
        features: ["Orijinal kalite", "Su geçirmezlik", "True Tone desteği", "3D Touch"],
        models: ["iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14", "iPhone 13 serisi", "iPhone 12 serisi"],
      },
      {
        name: "iPhone Batarya Değişimi",
        description: "Yüksek kapasiteli batarya ile günlük kullanımda %40 daha uzun pil ömrü.",
        price: "₺399",
        originalPrice: "₺550",
        duration: "20 dk",
        warranty: "12 ay",
        features: ["Yüksek kapasite", "Hızlı şarj", "Güvenlik sertifikası", "Optimized charging"],
        models: ["Tüm iPhone modelleri", "iPhone 6'dan günümüze", "Orijinal kapasiteli"],
      },
      {
        name: "iPhone Kamera Onarımı",
        description: "Ön ve arka kamera modülü onarımı. Profesyonel fotoğraf kalitesi geri kazanın.",
        price: "₺699",
        originalPrice: "₺900",
        duration: "45 dk",
        warranty: "6 ay",
        features: ["4K video", "Portre modu", "Gece modu", "Optik zoom"],
        models: ["iPhone 14 Pro kamera sistemi", "iPhone 13 Pro kameralar", "Tüm iPhone modelleri"],
      },
      {
        name: "iPhone Anakart Onarımı",
        description: "Mikroişlemci seviyesinde onarım. Veri kaybı olmadan profesyonel müdahale.",
        price: "₺1.499",
        originalPrice: "₺2.000",
        duration: "2-3 gün",
        warranty: "6 ay",
        features: ["Veri korunur", "Mikroişlemci", "Performans testi", "Kalite garantisi"],
        models: ["A15 Bionic çip", "A14 Bionic çip", "Tüm iPhone işlemcileri"],
      },
    ],
  },
  ipad: {
    title: "iPad Onarımı",
    icon: Tablet,
    color: "from-purple-500 to-purple-600",
    description: "iPad modelleriniz için uzman onarım çözümleri",
    image: "/placeholder.svg?height=400&width=600",
    services: [
      {
        name: "iPad Ekran Değişimi",
        description: "Retina kalitesinde dokunmatik ekran. Apple Pencil uyumluluğu ve hassasiyeti korunur.",
        price: "₺1.299",
        originalPrice: "₺1.800",
        duration: "45 dk",
        warranty: "6 ay",
        features: ["Retina kalite", "Apple Pencil", "Multi-touch", "True Tone"],
        models: ["iPad Pro 12.9", "iPad Pro 11", "iPad Air", "iPad mini"],
      },
      {
        name: "iPad Batarya Değişimi",
        description: "Uzun süreli kullanım için yüksek kapasiteli batarya değişimi. 10 saate kadar kullanım.",
        price: "₺699",
        originalPrice: "₺950",
        duration: "30 dk",
        warranty: "12 ay",
        features: ["10 saat kullanım", "Hızlı şarj", "Güvenli batarya", "Optimized performance"],
        models: ["Tüm iPad modelleri", "iPad Pro serisi", "iPad Air serisi"],
      },
      {
        name: "iPad Şarj Soketi Onarımı",
        description: "Lightning/USB-C şarj soketi onarımı. Hızlı şarj desteği ile tam performans.",
        price: "₺599",
        originalPrice: "₺800",
        duration: "25 dk",
        warranty: "6 ay",
        features: ["Hızlı şarj", "Veri aktarımı", "Dayanıklılık", "Su direnci"],
        models: ["USB-C modeller", "Lightning modeller", "Tüm iPad türleri"],
      },
      {
        name: "iPad Hoparlör Onarımı",
        description: "Stereo hoparlör sistemi onarımı. Kristal netliğinde ses kalitesi ve Dolby Atmos desteği.",
        price: "₺499",
        originalPrice: "₺650",
        duration: "35 dk",
        warranty: "6 ay",
        features: ["Stereo ses", "Yüksek kalite", "Dolby Atmos", "Spatial Audio"],
        models: ["iPad Pro hoparlörler", "iPad Air ses sistemi", "Tüm iPad modelleri"],
      },
    ],
  },
  macbook: {
    title: "MacBook Onarımı",
    icon: Laptop,
    color: "from-green-500 to-green-600",
    description: "MacBook modelleriniz için profesyonel teknik servis",
    image: "/placeholder.svg?height=400&width=600",
    services: [
      {
        name: "MacBook Klavye Değişimi",
        description: "Butterfly/Magic Keyboard değişimi. Sessiz ve duyarlı tuş deneyimi, backlight özelliği.",
        price: "₺1.899",
        originalPrice: "₺2.500",
        duration: "1-2 gün",
        warranty: "12 ay",
        features: ["Sessiz tuşlar", "Backlight", "Dayanıklılık", "Spill resistance"],
        models: ["MacBook Pro M2", "MacBook Air M2", "Intel MacBook modelleri"],
      },
      {
        name: "MacBook Batarya Değişimi",
        description: "Yüksek kapasiteli batarya ile 8 saate kadar kesintisiz çalışma. Optimized charging teknolojisi.",
        price: "₺1.199",
        originalPrice: "₺1.600",
        duration: "45 dk",
        warranty: "12 ay",
        features: ["8 saat kullanım", "Hızlı şarj", "Güvenli batarya", "Cycle count reset"],
        models: ['MacBook Pro 16"', 'MacBook Pro 14"', 'MacBook Air 13"'],
      },
      {
        name: "MacBook Ekran Onarımı",
        description: "Retina ekran onarımı. True Tone, P3 renk gamı ve ProMotion teknolojisi desteği.",
        price: "₺2.499",
        originalPrice: "₺3.200",
        duration: "1-2 gün",
        warranty: "6 ay",
        features: ["Retina kalite", "True Tone", "P3 renk", "ProMotion 120Hz"],
        models: ["MacBook Pro Liquid Retina", "MacBook Air Retina", "Tüm MacBook ekranları"],
      },
      {
        name: "MacBook Logic Board Onarımı",
        description: "Ana kart onarımı. M1/M2/Intel çip desteği ile yüksek performans ve veri güvenliği.",
        price: "₺3.499",
        originalPrice: "₺4.500",
        duration: "3-5 gün",
        warranty: "6 ay",
        features: ["M1/M2 çip", "Intel işlemci", "Veri korunur", "Performance test"],
        models: ["M2 MacBook Pro", "M1 MacBook Air", "Intel MacBook modelleri"],
      },
    ],
  },
}

export default function OnarimServisleriPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Wrench className="w-4 h-4" />
              <span>Profesyonel Onarım Hizmetleri</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Onarım Servisleri
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              iPhone, iPad ve MacBook cihazlarınız için profesyonel onarım hizmetleri. Orijinal kalitede parçalar, uzman
              ekip ve garanti ile hizmetinizdeyiz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">2 Saat</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Ortalama Onarım Süresi</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <Shield className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">12 Ay</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Garanti Süresi</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <Award className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">%98</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Başarı Oranı</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {Object.entries(repairServices).map(([key, category], categoryIndex) => (
        <section
          key={key}
          className={`py-24 ${categoryIndex % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}`}
        >
          <div className="container mx-auto px-4">
            {/* Category Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <category.icon className="w-12 h-12 text-blue-600" />
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{category.description}</p>
            </div>

            {/* Services Grid */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {category.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <CheckCircle className="w-6 h-6 text-green-500" />
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{service.name}</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{service.description}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="text-4xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                      <span className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-sm font-medium">
                        %25 İndirim
                      </span>
                    </div>

                    {/* Service Details */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
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

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Uyumlu Modeller</h4>
                        <div className="space-y-2">
                          {service.models.map((model, modelIndex) => (
                            <div key={modelIndex} className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{model}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Service Info */}
                    <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{service.warranty} garanti</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="btn-primary w-full group">
                      Hemen Randevu Al
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Cihazınızı Onarıma Hazır mısınız?</h2>
            <p className="text-xl text-green-100 mb-8">
              Uzman ekibimiz Apple cihazlarınızı en kısa sürede onarıp size teslim ediyor. Ücretsiz teşhis için hemen
              iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary group">
                Ücretsiz Teşhis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline-white">Fiyat Teklifi Al</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
