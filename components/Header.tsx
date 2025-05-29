"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Wrench, Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
        } border-b border-gray-200 dark:border-gray-700`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 font-bold text-xl flex-shrink-0">
              <Wrench className="w-7 h-7 text-blue-600" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Masterfix
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="#ozellikler"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Özellikler
              </Link>
              <Link
                href="#onarim-servisleri"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Onarım Servisleri
              </Link>
              <Link
                href="#yorumlar"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Yorumlar
              </Link>
              <Link
                href="#iletisim"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                İletişim
              </Link>
            </nav>

            {/* Desktop CTA & Theme Toggle */}
            <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
              <ThemeToggle />
              <Link href="#hemen-basla" className="btn-primary">
                Hemen Başla
              </Link>
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="lg:hidden flex items-center space-x-2 flex-shrink-0">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Menü"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={closeMenu}></div>
          <div className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <Link
                href="#ozellikler"
                className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
                onClick={closeMenu}
              >
                Özellikler
              </Link>
              <Link
                href="#onarim-servisleri"
                className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
                onClick={closeMenu}
              >
                Onarım Servisleri
              </Link>
              <Link
                href="#yorumlar"
                className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
                onClick={closeMenu}
              >
                Yorumlar
              </Link>
              <Link
                href="#iletisim"
                className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
                onClick={closeMenu}
              >
                İletişim
              </Link>
              <div className="pt-4">
                <Link href="#hemen-basla" className="btn-primary w-full" onClick={closeMenu}>
                  Hemen Başla
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
