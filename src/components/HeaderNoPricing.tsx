import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function HeaderNoPricing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'GROUPS', href: '/groups', external: false },
    { name: 'FAQS', href: '/faqs', external: false },
    { name: 'ARTICLES', href: '/articles', external: false },
    { name: 'APPLICATIONS', href: '/applications', external: false },
    { name: 'TERMS', href: '/terms', external: false },
    { name: 'PREP TIPS', href: '/prep', external: false },
    { name: 'HAIR & MAKEUP', href: '/hair', external: false },
  ]

  return (
    <header className="sticky top-0 z-50">
      {/* Top section with logo and tagline */}
      <div className="bg-[#242424] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/images/Logo.jpg"
                  alt="Get Ahead Shot Logo"
                  width={128}
                  height={80}
                  className="object-contain w-20 h-12 md:w-24 md:h-16 lg:w-32 lg:h-20"
                />
              </Link>
              <span className="text-white text-sm md:text-lg md:italic lg:text-xl font-light -ml-2"><em>WOW</em> for headshots.</span>
            </div>

            {/* Empty div to maintain space balance */}
            <div></div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile menu button */}
          <div className="md:hidden flex justify-center items-center py-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-gray-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center space-x-4 py-1">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-red-600 px-3 py-2 text-sm font-semibold transition-colors uppercase tracking-wide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-red-600 px-3 py-2 text-sm font-semibold transition-colors uppercase tracking-wide"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-3">
              <div className="space-y-1">
                {navigation.map((item) => (
                  item.external ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-800 hover:text-red-600 block px-3 py-2 text-base font-semibold uppercase tracking-wide"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-800 hover:text-red-600 block px-3 py-2 text-base font-semibold uppercase tracking-wide"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}