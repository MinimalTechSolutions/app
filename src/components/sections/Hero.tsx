'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-minimal-white pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/minimal-wallpaper00.png"
          alt="Minimal abstract background"
          fill
          priority
          className="object-cover opacity-5"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Complex Imagination,
            <br />
            <span className="text-gradient">
              Minimalist Execution
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-xl md:text-2xl text-minimal-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            MTS-DAO: The unified core of Minimal Technology Solutions. 
            High-performance solutions for AI-Driven Security, SaaS development, 
            and agentic intelligence.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <a
              href="mailto:byteminimal@gmail.com"
              className="btn-primary px-12 py-4 text-base w-full sm:w-auto"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="btn-secondary px-12 py-4 text-base w-full sm:w-auto"
            >
              Explore Services
            </a>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`pt-16 transition-all duration-1000 delay-600 ${
              isVisible
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          >
            <div className="inline-flex flex-col items-center space-y-2 text-minimal-gray-400">
              <span className="text-xs font-mono uppercase tracking-wider">Scroll to explore</span>
              <svg
                className="w-6 h-6 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-minimal-gray-200 rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-minimal-gray-300 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
    </section>
  )
}
