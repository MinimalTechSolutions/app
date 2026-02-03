/**
 * Type definitions for Minimal DAO
 */

export interface NavigationLink {
  name: string
  href: string
  external?: boolean
}

export interface Service {
  id: string
  icon: any
  title: string
  description: string
  image: string
}

export interface PricingTier {
  name: string
  price: string
  subtitle: string
  features: string[]
  cta: string
  highlight: boolean
}

export interface ContactInfo {
  email: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  hours: {
    weekdays: string
    weekend: string
    description: string
  }
}

export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  ogImage: string
  links: {
    github: string
    email: string
    faq: string
  }
}

export interface TeamMember {
  name: string
  role: string
  github?: string
  linkedin?: string
  twitter?: string
  image?: string
}

export interface SEOMetadata {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonical?: string
}

export interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export interface AnimationConfig {
  duration: number
  delay?: number
  easing?: string
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export interface CardProps {
  title?: string
  description?: string
  image?: string
  className?: string
  children?: React.ReactNode
}

export interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
  children: React.ReactNode
}
