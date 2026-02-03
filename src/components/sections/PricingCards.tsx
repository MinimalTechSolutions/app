'use client'

import { Check } from 'lucide-react'

const pricingTiers = [
  {
    name: 'Basic version',
    price: '$666',
    subtitle: 'take it, or leave it.',
    features: [
      'Essential features',
      'Standard support',
      'Basic integrations',
      'Clean, minimal code',
      'Mobile responsive',
    ],
    cta: 'Create Now',
    highlight: false,
  },
  {
    name: 'Hardcore version',
    price: '1 BTC',
    subtitle: 'for the ambitious',
    features: [
      'Everything in Basic',
      'Advanced AI security',
      'Priority support',
      'Custom integrations',
      'Red team protocols',
      'Agentic intelligence',
    ],
    cta: 'Create Now',
    highlight: true,
  },
]

export default function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {pricingTiers.map((tier, index) => (
        <div
          key={tier.name}
          className={`card-minimal p-8 md:p-10 transition-all duration-500 ${
            tier.highlight
              ? 'border-2 border-minimal-black shadow-2xl scale-105'
              : ''
          }`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Header */}
          <div className="space-y-2 mb-8">
            <h3 className="text-3xl md:text-4xl font-bold">{tier.name}</h3>
            <p className="text-minimal-gray-600 text-sm">{tier.subtitle}</p>
          </div>

          {/* Price */}
          <div className="mb-8">
            <div className="text-5xl md:text-6xl font-bold mb-2">
              {tier.price}
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-8">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-minimal-black flex-shrink-0 mt-0.5" />
                <span className="text-minimal-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="mailto:byteminimal@gmail.com"
            className={`block w-full text-center py-4 font-medium transition-all duration-300 ${
              tier.highlight
                ? 'btn-primary'
                : 'btn-secondary'
            }`}
          >
            {tier.cta}
          </a>
        </div>
      ))}
    </div>
  )
}
