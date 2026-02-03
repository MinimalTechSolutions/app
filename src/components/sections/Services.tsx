'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Smartphone, Globe, Cpu } from 'lucide-react'

const services = [
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Applications',
    description:
      'Have your mobile app developed in the best way, our expert team have undergone a meticulous approval process to be able to deliver to you the best possible solution.',
    image: '/images/services/minimal-mobile-dev.png',
  },
  {
    id: 'web',
    icon: Globe,
    title: 'Web Development',
    description:
      'Whether you need a simple brochure website or an advanced e-commerce solution, our web development services deliver robust, scalable, and secure websites optimized for search engines and conversions. We employ HTML5, CSS3, and JavaScript to create engaging user experiences that drive results.',
    image: '/images/services/minimal-web-dev.png',
  },
  {
    id: 'iot',
    icon: Cpu,
    title: 'IOT Solutions',
    description:
      'Leverage the power of connected devices with our cutting-edge IoT solutions. We specialize in developing smart applications that integrate seamlessly with existing infrastructure, enabling businesses to collect valuable data, automate processes, and enhance operational efficiency.',
    image: '/images/services/minimal-iot-dev.png',
  },
]

export default function Services() {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    const elements = document.querySelectorAll('[data-service-item]')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 md:py-32 bg-minimal-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Plan your software
          </h2>
          <p className="text-xl text-minimal-gray-600">
            From concept to deployment, we bring your vision to life with 
            precision and minimalist elegance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20 md:space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleItems.has(service.id)
            const isEven = index % 2 === 0

            return (
              <div
                key={service.id}
                id={service.id}
                data-service-item
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                } ${isEven ? '' : 'lg:grid-flow-dense'}`}
              >
                {/* Image */}
                <div className={`relative ${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-minimal-gray-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  {/* Icon Badge */}
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-minimal-black rounded-full flex items-center justify-center shadow-xl">
                    <Icon className="w-10 h-10 text-minimal-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    {service.title}
                  </h3>
                  <p className="text-lg text-minimal-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="mailto:byteminimal@gmail.com"
                    className="inline-flex items-center text-minimal-black font-medium group"
                  >
                    <span className="underline decoration-2 underline-offset-4 group-hover:decoration-4 transition-all">
                      Learn more
                    </span>
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
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
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
