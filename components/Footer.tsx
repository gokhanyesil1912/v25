import Link from "next/link"
import { Wrench, MapPin, Phone, Mail } from "lucide-react"
import ScrollToTopArrow from "./ScrollToTopArrow"
import WhatsAppIcon from "./WhatsAppIcon"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div>
            <Link href="/" className="flex items-center text-2xl font-bold text-white mb-4">
              <Wrench className="w-8 h-8 mr-2 text-blue-500" />
              Masterfix
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Apple cihazlarınız için profesyonel onarım hizmetleri. Güvenilir, hızlı ve kaliteli çözümler.
            </p>

            {/* Sosyal Medya - iOS Stili Orijinal Renkler */}
            <div className="flex space-x-4">
              <a
                href="https://www.google.com/maps/place/masterfix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Google My Business"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/masterfix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://youtube.com/@masterfix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="https://facebook.com/masterfix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://tiktok.com/@masterfix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black border-2 border-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/iphone-onarim" className="text-gray-300 hover:text-white transition-colors">
                  iPhone Onarım
                </Link>
              </li>
              <li>
                <Link href="/ipad-onarim" className="text-gray-300 hover:text-white transition-colors">
                  iPad Onarım
                </Link>
              </li>
              <li>
                <Link href="/macbook-onarim" className="text-gray-300 hover:text-white transition-colors">
                  MacBook Onarım
                </Link>
              </li>
              <li>
                <Link href="/ekran-degisimi" className="text-gray-300 hover:text-white transition-colors">
                  Ekran Değişimi
                </Link>
              </li>
              <li>
                <Link href="/batarya-degisimi" className="text-gray-300 hover:text-white transition-colors">
                  Batarya Değişimi
                </Link>
              </li>
              <li>
                <Link href="/anakart-onarim" className="text-gray-300 hover:text-white transition-colors">
                  Anakart Onarım
                </Link>
              </li>
              <li>
                <Link href="/hafiza-yukseltme" className="text-gray-300 hover:text-white transition-colors">
                  Hafıza Yükseltme
                </Link>
              </li>
              <li>
                <Link href="/su-hasari-onarim" className="text-gray-300 hover:text-white transition-colors">
                  Su Hasarı Onarım
                </Link>
              </li>
              <li>
                <Link href="/entegre-devre-degisimi" className="text-gray-300 hover:text-white transition-colors">
                  Entegre Devre Değişimi
                </Link>
              </li>
              <li>
                <Link href="/camera-replacement" className="text-gray-300 hover:text-white transition-colors">
                  Kamera Değişimi
                </Link>
              </li>
              <li>
                <Link href="/software-update" className="text-gray-300 hover:text-white transition-colors">
                  Yazılım Güncelleme
                </Link>
              </li>
              <li>
                <Link href="/rear-glass-replacement" className="text-gray-300 hover:text-white transition-colors">
                  Arka Pano Değişimi
                </Link>
              </li>
            </ul>
          </div>

          {/* Şirket */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Şirket</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hakkimizda" className="text-gray-300 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/kariyer" className="text-gray-300 hover:text-white transition-colors">
                  Kariyer
                </Link>
              </li>
              <li>
                <Link href="/garanti" className="text-gray-300 hover:text-white transition-colors">
                  Garanti
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div id="iletisim">
            <h3 className="text-lg font-semibold mb-4 text-white">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Maslak Mahallesi, Büyükdere Caddesi
                  <br />
                  No: 123, Sarıyer/İstanbul
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-green-500 mr-2" />
                <a href="tel:+902121234567" className="text-gray-300 hover:text-white transition-colors">
                  +90 (212) 123 45 67
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-red-500 mr-2" />
                <a href="mailto:info@masterfix.com.tr" className="text-gray-300 hover:text-white transition-colors">
                  info@masterfix.com.tr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Masterfix. Tüm hakları saklıdır.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/gizlilik" className="text-gray-400 hover:text-white text-sm transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kullanım Koşulları
              </Link>
              <Link href="/cerez-politikasi" className="text-gray-400 hover:text-white text-sm transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
      <a
  href="https://wa.me/905345740909"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-4 left-4 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-opacity duration-300 z-50"
  aria-label="WhatsApp ile iletişime geç"
>
  <WhatsAppIcon className="w-6 h-6" />
</a>

      <ScrollToTopArrow />
    </footer>
  )
}
