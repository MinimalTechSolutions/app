/**
 * Site-wide constants for Minimal DAO
 */

export const SITE_CONFIG = {
  name: 'Minimal DAO',
  title: 'Minimal DAO | Complex Imagination, Minimalist Execution',
  description: 'MTS-DAO: The unified core of Minimal Technology Solutions. High-performance solutions for AI-Driven Security, SaaS development, and agentic intelligence.',
  url: 'https://minimal-dao.vercel.app',
  ogImage: '/images/og-image.png',
  links: {
    github: 'https://github.com/MinimalTechSolutions',
    email: 'byteminimal@gmail.com',
    faq: 'https://help.minimalbyte.vercel.app',
  },
} as const

export const CONTACT_INFO = {
  email: 'byteminimal@gmail.com',
  address: {
    street: 'Ipacaeta Street, N 992',
    city: 'Guarulhos',
    state: 'São Paulo - SP',
    zip: '017171-150',
    country: 'Brazil',
  },
  hours: {
    weekdays: '9am - Midnight',
    weekend: '9am - Midnight',
    description: 'Seven days a week',
  },
} as const

export const NAVIGATION_LINKS = [
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Articles', href: '/articles' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'About us', href: '/about' },
  { name: 'FAQ', href: 'https://help.minimalbyte.vercel.app', external: true },
] as const

export const SOCIAL_LINKS = {
  github: 'https://github.com/MinimalTechSolutions',
  linkedin: '',
  twitter: '@minimaltechsolutions',
} as const

export const PRICING_TIERS = {
  basic: {
    name: 'Basic version',
    price: 666,
    currency: 'USD',
    display: '$666',
  },
  hardcore: {
    name: 'Hardcore version',
    price: 1,
    currency: 'BTC',
    display: '1 BTC',
  },
} as const

export const SERVICES = {
  mobile: {
    id: 'mobile',
    title: 'Mobile Applications',
    icon: 'smartphone',
  },
  web: {
    id: 'web',
    title: 'Web Development',
    icon: 'globe',
  },
  iot: {
    id: 'iot',
    title: 'IOT Solutions',
    icon: 'cpu',
  },
} as const

export const TECH_STACK = {
  framework: 'Next.js 15',
  language: 'TypeScript',
  styling: 'Tailwind CSS',
  license: 'AGPL-3.0',
} as const

export const SEO_KEYWORDS = [
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
] as const

export const TEAM = {
  architect: {
    name: 'Lucas H. Mulato',
    role: 'System Architect',
    github: 'https://github.com/lucasmulato',
  },
} as const
