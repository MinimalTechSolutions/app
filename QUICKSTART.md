# ⚡ Quick Start Guide

Get your Minimal DAO landing page up and running in 5 minutes!

## 🚀 Installation (2 minutes)

```bash
# 1. Navigate to project directory
cd minimal-dao-landing

# 2. Install dependencies
npm install
# or
yarn install
# or
pnpm install

# 3. Create environment file
cp .env.example .env.local
```

## 🎨 Add Your Assets (2 minutes)

Place your images in the following locations:

```
public/images/
├── logo/
│   └── minimal-wide-logo-trans.png    ← Your logo here
├── hero/
│   └── minimal-wallpaper00.png        ← Hero background
├── services/
│   ├── minimal-mobile-dev.png         ← Mobile service image
│   ├── minimal-web-dev.png            ← Web service image
│   └── minimal-iot-dev.png            ← IoT service image
└── og-image.png                       ← Social sharing image (1200x630)
```

**Don't have images yet?** The site will work with placeholder images.

## 🏃 Run Development Server (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

## ✏️ Customize Content (30 seconds)

### Update Your Information

Edit `src/lib/constants.ts`:

```typescript
// Change email
export const CONTACT_INFO = {
  email: 'your-email@example.com',  // ← Update this
  // ... rest stays the same
}
```

### Update Homepage Text

Edit `src/components/sections/Hero.tsx`:

```typescript
// Change main heading
<h1>
  Your Headline,
  <br />
  <span className="text-gradient">
    Your Subheadline
  </span>
</h1>
```

## 🚀 Deploy to Production (2 minutes)

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Option 2: GitHub + Vercel

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"

Done! 🎉

## 📋 Essential Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Check for code issues |

## 🆘 Troubleshooting

### Port 3000 already in use?
```bash
# Use a different port
npm run dev -- -p 3001
```

### Build errors?
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### TypeScript errors?
```bash
# Check for type issues
npm run type-check
```

## 📚 Next Steps

1. ✅ Customize content in `src/lib/constants.ts`
2. ✅ Update meta tags in `src/app/layout.tsx`
3. ✅ Add your images to `public/images/`
4. ✅ Test on mobile devices
5. ✅ Run production build
6. ✅ Deploy to Vercel

## 📖 Full Documentation

- **Project Structure**: See `PROJECT_STRUCTURE.md`
- **Implementation Guide**: See `IMPLEMENTATION_GUIDE.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Full README**: See `README.md`

## 💡 Pro Tips

1. **Hot Reload**: Save any file to see changes instantly
2. **TypeScript**: Types help prevent bugs - use them!
3. **Components**: Reuse components from `src/components/`
4. **Tailwind**: Use utility classes for quick styling
5. **Performance**: Check with Lighthouse regularly

## 🎯 Ready to Go?

```bash
npm run dev
```

Your site is now running at `http://localhost:3000`!

---

**Need Help?**
- 📧 Email: byteminimal@gmail.com
- 📖 Docs: Check the guides in this folder
- 🐛 Issues: Create a GitHub issue

**Happy Building! 🚀**
