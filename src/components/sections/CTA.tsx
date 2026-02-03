'use client'

import { Calendar } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-minimal-black text-minimal-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
            AN OASIS TO MAKE SOFTWARE
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-minimal-gray-300 max-w-2xl mx-auto">
            Transform your ideas into reality with our expert team. 
            Let's create something extraordinary together.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <a
              href="mailto:byteminimal@gmail.com"
              className="inline-flex items-center space-x-3 px-12 py-5 bg-minimal-white text-minimal-black font-semibold text-lg hover:bg-minimal-gray-100 transition-all duration-300 group"
            >
              <Calendar className="w-6 h-6" />
              <span>Make an appointment now!</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Additional Info */}
          <div className="pt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-minimal-gray-400">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>24/7 availability</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Expert team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
