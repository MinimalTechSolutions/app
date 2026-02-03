# Minimal DAO - Complete Project Structure

```
minimal-dao-landing/
│
├── public/                          # Static assets
│   ├── images/
│   │   ├── logo/
│   │   │   ├── minimal-wide-logo-trans.png
│   │   │   └── minimal-icon.png
│   │   ├── hero/
│   │   │   └── minimal-wallpaper00.png
│   │   ├── services/
│   │   │   ├── minimal-mobile-dev.png
│   │   │   ├── minimal-web-dev.png
│   │   │   └── minimal-iot-dev.png
│   │   └── favicon/
│   │       ├── favicon.ico
│   │       ├── favicon-16x16.png
│   │       ├── favicon-32x32.png
│   │       └── apple-touch-icon.png
│   │
│   ├── fonts/                       # Custom font files
│   │   └── (font files if self-hosting)
│   │
│   └── robots.txt                   # SEO robots file
│
├── src/
│   ├── app/                         # Next.js 15 App Router
│   │   ├── layout.tsx               # Root layout with metadata
│   │   ├── page.tsx                 # Homepage
│   │   ├── globals.css              # Global styles & CSS variables
│   │   ├── not-found.tsx            # 404 page
│   │   │
│   │   ├── products/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── articles/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   ├── careers/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── privacy-policy/
│   │   │   └── page.tsx
│   │   └── terms-of-service/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Main navigation
│   │   │   ├── MobileMenu.tsx       # Mobile navigation
│   │   │   └── Footer.tsx           # Footer component
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx             # Hero section
│   │   │   ├── PricingCards.tsx     # Pricing cards (Basic/Hardcore)
│   │   │   ├── Services.tsx         # Services grid
│   │   │   └── CTA.tsx              # Call-to-action sections
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx           # Reusable button component
│   │   │   ├── Card.tsx             # Card component
│   │   │   └── Container.tsx        # Container wrapper
│   │   │
│   │   └── animations/
│   │       └── ScrollReveal.tsx     # Scroll-triggered animations
│   │
│   ├── lib/
│   │   ├── utils.ts                 # Utility functions
│   │   └── constants.ts             # Site-wide constants
│   │
│   ├── styles/
│   │   ├── animations.css           # Animation keyframes
│   │   └── components.css           # Component-specific styles
│   │
│   └── types/
│       └── index.ts                 # TypeScript type definitions
│
├── .env.local                       # Environment variables
├── .env.example                     # Example environment file
├── .gitignore                       # Git ignore file
├── next.config.js                   # Next.js configuration
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
├── package.json                     # Dependencies & scripts
├── README.md                        # Project documentation
└── LICENSE                          # AGPL-3.0 License
```

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS + CSS Modules
- **Fonts**: Google Fonts (minimalist selections)
- **Icons**: Lucide React
- **Animations**: Framer Motion + CSS animations
- **SEO**: Next.js Metadata API
- **Performance**: Image optimization, lazy loading, code splitting

## Key Features

1. **Fully Responsive** - Mobile-first design
2. **SEO Optimized** - Meta tags, structured data, sitemap
3. **Performance** - Lighthouse score 95+
4. **Accessibility** - WCAG 2.1 AA compliant
5. **Modern Animations** - Smooth scroll reveals & interactions
6. **Type Safety** - Full TypeScript coverage
7. **Clean Code** - Modular, maintainable architecture
