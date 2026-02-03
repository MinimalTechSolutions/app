# Deployment & Optimization Guide

## 🚀 Deployment Checklist

### Pre-Deployment

- [ ] Run production build locally: `npm run build`
- [ ] Test production build: `npm start`
- [ ] Check all environment variables are set
- [ ] Verify all images are optimized
- [ ] Run Lighthouse audit (target 95+ score)
- [ ] Test on multiple devices and browsers
- [ ] Verify all links work correctly
- [ ] Check meta tags and Open Graph images
- [ ] Test forms and CTAs
- [ ] Review analytics integration

### Vercel Deployment

1. **Connect GitHub Repository**
   ```bash
   # Push to GitHub
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Configure project settings

3. **Environment Variables**
   Set in Vercel Dashboard > Settings > Environment Variables:
   ```
   NEXT_PUBLIC_SITE_URL=your-domain.com
   NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
   ```

4. **Custom Domain**
   - Add your domain in Vercel Dashboard
   - Update DNS records as instructed
   - SSL certificate is automatic

### Post-Deployment

- [ ] Test live site thoroughly
- [ ] Submit sitemap to search engines
- [ ] Set up monitoring (Vercel Analytics)
- [ ] Configure error tracking
- [ ] Test performance with real users
- [ ] Monitor Core Web Vitals

---

## ⚡ Performance Optimization

### Image Optimization

```tsx
// Use Next.js Image component
import Image from 'next/image'

<Image
  src="/path/to/image.png"
  alt="Description"
  width={800}
  height={600}
  priority={false} // true for above-the-fold images
  quality={85} // 1-100, default 75
/>
```

**Best Practices:**
- Use WebP/AVIF formats
- Implement lazy loading
- Add proper dimensions
- Use `priority` for LCP images
- Optimize with tools like Squoosh

### Font Optimization

```tsx
// In layout.tsx - already implemented
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Prevents FOIT
  variable: '--font-inter',
})
```

### Code Splitting

Next.js automatically splits code, but you can optimize further:

```tsx
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false, // Disable SSR if not needed
})
```

### Bundle Analysis

```bash
# Install
npm install --save-dev @next/bundle-analyzer

# Analyze
ANALYZE=true npm run build
```

### Caching Strategy

In `next.config.js`:
```javascript
images: {
  minimumCacheTTL: 60, // Cache for 60 seconds
}
```

---

## 🔍 SEO Optimization

### Sitemap Generation

Create `app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://minimal-dao.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://minimal-dao.vercel.app/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add more pages...
  ]
}
```

### Robots.txt

Already created in `/public/robots.txt`

### Structured Data

Add to specific pages:
```tsx
export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Minimal DAO',
    url: 'https://minimal-dao.vercel.app',
    logo: 'https://minimal-dao.vercel.app/logo.png',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Page content */}
    </>
  )
}
```

---

## 📊 Analytics Integration

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```tsx
// In app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics 4

```tsx
// components/GoogleAnalytics.tsx
export function GoogleAnalytics({ gaId }) {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  )
}
```

---

## 🔒 Security Best Practices

### Content Security Policy

In `next.config.js`:
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline';"
        }
      ]
    }
  ]
}
```

### Rate Limiting

Consider implementing API rate limiting for contact forms:
```typescript
// lib/rateLimit.ts
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"),
})
```

---

## 🧪 Testing

### Lighthouse CI

```bash
npm install -g @lhci/cli

# Run audit
lhci autorun
```

### Browser Testing

Test on:
- Chrome, Firefox, Safari, Edge (latest versions)
- iOS Safari, Android Chrome
- Different screen sizes (mobile, tablet, desktop)

### Performance Monitoring

Set up in Vercel:
- Core Web Vitals tracking
- Real User Monitoring (RUM)
- Error tracking

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example

`.github/workflows/ci.yml`:
```yaml
name: CI
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build
```

---

## 📈 Monitoring

### Essential Metrics

Track these KPIs:
- Page load time
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Cumulative Layout Shift (CLS)
- Conversion rates
- Bounce rate

### Tools

- Vercel Analytics
- Google Search Console
- Google PageSpeed Insights
- WebPageTest
- GTmetrix

---

## 🐛 Debugging Production Issues

### Error Tracking

```bash
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
})
```

### Logging

Use structured logging:
```typescript
console.log('[Component]:', 'Info message', { data })
console.error('[Component]:', 'Error message', error)
```

---

## 📱 Progressive Web App (PWA)

Optional enhancement:

```bash
npm install next-pwa
```

```javascript
// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  // Your Next.js config
})
```

---

## 🎯 Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Score | 95+ | - |
| FCP | < 1.5s | - |
| LCP | < 2.5s | - |
| TTI | < 3.5s | - |
| CLS | < 0.1 | - |
| Bundle Size | < 200KB | - |

---

## 📝 Maintenance Schedule

### Weekly
- Monitor analytics
- Check error logs
- Review performance metrics

### Monthly
- Update dependencies
- Review and optimize images
- Check SEO rankings
- Audit accessibility

### Quarterly
- Major dependency updates
- Security audit
- Performance optimization review
- User feedback implementation

---

**Last Updated**: February 2026
