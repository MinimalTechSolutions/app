import Hero from '@/components/sections/Hero'
import PricingCards from '@/components/sections/PricingCards'
import Services from '@/components/sections/Services'
import CTA from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Pricing Cards Section */}
      <section className="py-20 md:py-32 bg-minimal-gray-50">
        <div className="container-custom">
          <PricingCards />
        </div>
      </section>
      
      {/* Tagline Section */}
      <section className="py-16 md:py-24 bg-minimal-black text-minimal-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-balance animate-fade-in">
            MinimalDAO is the place where your Dreams becomes clean software.
          </h2>
        </div>
      </section>
      
      {/* Services Section */}
      <Services />
      
      {/* Final CTA Section */}
      <CTA />
    </>
  )
}
