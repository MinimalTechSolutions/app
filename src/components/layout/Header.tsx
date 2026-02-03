'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, ShoppingCart } from 'lucide-react'
import MobileMenu from './MobileMenu'

const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Articles', href: '/articles' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'About us', href: '/about' },
  { name: 'FAQ', href: 'https://help.minimalbyte.vercel.app', external: true },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom py-4 md:py-6" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative z-10 flex-shrink-0 transition-opacity hover:opacity-80"
              aria-label="Minimal DAO Home"
            >
              <Image
                src="/images/logo/minimal-wide-logo-trans.png"
                alt="MinimalDAO Logo"
                width={180}
                height={40}
                priority
                className="h-8 md:h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-minimal-gray-700 hover:text-minimal-black transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-minimal-gray-700 hover:text-minimal-black transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* CTA and Cart */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/cart"
                className="relative p-2 text-minimal-gray-700 hover:text-minimal-black transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-minimal-black text-minimal-white text-xs flex items-center justify-center rounded-full">
                  0
                </span>
              </Link>
              <a
                href="mailto:byteminimal@gmail.com"
                className="btn-primary text-sm"
              >
                CREATE NOW
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-minimal-gray-700 hover:text-minimal-black transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
