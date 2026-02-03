# 💠 Minimal DAO - Landing Page

> **"Complex imagination, minimalist execution."**

A high-performance, production-ready landing page for **Minimal Technology Solutions (MTS-DAO)** - built with Next.js 15, TypeScript, and Tailwind CSS. This project represents the unified core of our community of thinkers focused on solving high-stakes technology problems.

![License](https://img.shields.io/badge/license-AGPL--3.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

---

## ✨ Features

- **🚀 Next.js 15** - Latest App Router with React Server Components
- **📘 TypeScript** - Strict mode for type safety and better DX
- **🎨 Tailwind CSS** - Utility-first CSS with custom design system
- **♿ Accessible** - WCAG 2.1 AA compliant
- **📱 Responsive** - Mobile-first design, pixel-perfect on all devices
- **⚡ Performance** - Optimized for Lighthouse score 95+
- **🔍 SEO Optimized** - Comprehensive meta tags, Open Graph, Twitter Cards
- **🎭 Animations** - Smooth scroll reveals and micro-interactions
- **🔒 Secure** - Security headers and best practices
- **📦 Modular** - Clean, maintainable component architecture

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.1.0 | React framework |
| React | 19.0.0 | UI library |
| TypeScript | 5.3.3 | Type safety |
| Tailwind CSS | 3.4.0 | Styling |
| Framer Motion | 11.0.0 | Animations |
| Lucide React | 0.263.1 | Icons |

---

## 📁 Project Structure

```
minimal-dao-landing/
│
├── public/                    # Static assets
│   ├── images/               # Images and graphics
│   └── robots.txt            # SEO robots file
│
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   ├── globals.css       # Global styles
│   │   └── [routes]/         # Page routes
│   │
│   ├── components/
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/         # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── PricingCards.tsx
│   │   │   ├── Services.tsx
│   │   │   └── CTA.tsx
│   │   │
│   │   └── ui/              # Reusable UI components
│   │
│   ├── lib/                 # Utilities and helpers
│   │   ├── utils.ts
│   │   └── constants.ts
│   │
│   └── types/               # TypeScript definitions
│       └── index.ts
│
├── .env.example             # Environment variables template
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.17.0
- **npm** >= 9.0.0 (or yarn/pnpm)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/MinimalTechSolutions/app.git
cd app
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration.

4. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Check TypeScript types |
| `npm run format` | Format code with Prettier |

---

## 🎨 Design System

### Colors

```css
--color-background: #FFFFFF
--color-foreground: #000000
--color-border: #E5E5E5
--color-muted: #737373
--color-accent: #000000
```

### Typography

- **Display Font**: Space Grotesk
- **Body Font**: Inter
- **Mono Font**: JetBrains Mono

### Spacing Scale

```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
```

---

## 🔧 Configuration

### Next.js Config

The `next.config.js` includes:
- Image optimization (AVIF/WebP)
- Security headers
- Performance optimizations
- SWC minification

### Tailwind Config

Custom design tokens in `tailwind.config.ts`:
- Extended color palette
- Custom animations
- Typography utilities
- Responsive breakpoints

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import to Vercel
3. Configure environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MinimalTechSolutions/app)

### Other Platforms

This project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

---

## 📈 Performance

Target metrics:
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

---

## ♿ Accessibility

- Semantic HTML5
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance (WCAG 2.1 AA)
- Focus indicators

---

## 🔒 Security

Security measures implemented:
- Strict Content Security Policy
- HSTS headers
- XSS protection
- No sensitive data exposure
- Regular dependency updates

---

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **AGPL-3.0 License** - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**System Architect**: [Lucas H. Mulato](https://github.com/lucasmulato)

---

## 🙏 Acknowledgments

- Inspired by minimalist design principles
- Built with the Next.js community's best practices
- Follows accessibility guidelines from W3C

---

## 📞 Contact

- **Email**: byteminimal@gmail.com
- **GitHub**: [@MinimalTechSolutions](https://github.com/MinimalTechSolutions)
- **Location**: Guarulhos, São Paulo, Brazil

---

## 🗺️ Roadmap

- [ ] Add blog functionality
- [ ] Implement i18n (internationalization)
- [ ] Add dark mode toggle
- [ ] Integrate CMS for content management
- [ ] Add analytics dashboard
- [ ] Implement A/B testing
- [ ] Add newsletter subscription
- [ ] Create case studies section

---

**Built with ❤️ by Minimal Technology Solutions**
