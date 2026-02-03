'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'

const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Articles', href: '/articles' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: 'https://help.minimalbyte.vercel.app', external: true },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-minimal-gray-200">
            <Link href="/" onClick={onClose}>
              <Image
                src="/images/logo/minimal-wide-logo-trans.png"
                alt="MinimalDAO Logo"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              className="p-2 text-minimal-gray-700 hover:text-minimal-black transition-colors"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-6">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-lg font-medium text-minimal-gray-700 hover:text-minimal-black hover:bg-minimal-gray-50 rounded-lg transition-all"
                      onClick={onClose}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-lg font-medium text-minimal-gray-700 hover:text-minimal-black hover:bg-minimal-gray-50 rounded-lg transition-all"
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="p-6 border-t border-minimal-gray-200">
            <a
              href="mailto:byteminimal@gmail.com"
              className="btn-primary w-full text-center block"
              onClick={onClose}
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
