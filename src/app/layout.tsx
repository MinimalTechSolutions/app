import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://minimal-dao.vercel.app'),
  title: {
    default: 'Minimal DAO | Complex Imagination, Minimalist Execution',
    template: '%s | Minimal DAO',
  },
  description: 'MTS-DAO: The unified core of Minimal Technology Solutions. High-performance solutions for AI-Driven Security, SaaS development, and agentic intelligence. Built for sovereignty.',
  keywords: [
    'Minimal DAO',
    'Minimal Technology Solutions',
    'AI Security',
    'SaaS Development',
    'Agentic Intelligence',
    'Next.js',
    'TypeScript',
    'Red Team',
    'Purple Team',
    'Software House',
    'Web Development',
    'Mobile Applications',
    'IoT Solutions',
  ],
  authors: [
    {
      name: 'Lucas H. Mulato',
      url: 'https://github.com/lucasmulato',
    },
  ],
  creator: 'Minimal Technology Solutions',
  publisher: 'Minimal Technology Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://minimal-dao.vercel.app',
    title: 'Minimal DAO | Complex Imagination, Minimalist Execution',
    description: 'The unified core of Minimal Technology Solutions. High-performance solutions for AI-Driven Security and agentic intelligence.',
    siteName: 'Minimal DAO',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Minimal DAO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minimal DAO | Complex Imagination, Minimalist Execution',
    description: 'High-performance solutions for AI-Driven Security and agentic intelligence.',
    images: ['/images/og-image.png'],
    creator: '@minimaltechsolutions',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
