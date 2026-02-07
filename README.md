# SkoolCatch Marketing Website

Marketing website for SkoolCatch — transforming WhatsApp school group chaos into calm morning briefings.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)
- **Hosting:** Vercel (recommended)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles + Tailwind
│   ├── layout.tsx       # Root layout with SEO
│   └── page.tsx         # Landing page
├── components/
│   ├── Navbar.tsx       # Sticky navigation
│   ├── Hero.tsx         # Hero section with phone mockup
│   ├── Problem.tsx      # WhatsApp chaos visualization
│   ├── Solution.tsx     # App solution preview
│   ├── Features.tsx     # 6 feature cards
│   ├── HowItWorks.tsx   # 3-step process
│   ├── Pricing.tsx      # Pricing plans
│   ├── Testimonials.tsx # Reviews + stats
│   ├── FAQ.tsx          # Accordion FAQ
│   ├── FinalCTA.tsx     # Download CTA
│   └── Footer.tsx       # Footer with links
public/
├── robots.txt
├── sitemap.xml
└── (add og-image.png, favicon.ico, etc.)
```

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Brand Navy | `#1E3A5F` | Primary, CTAs, headers |
| Calm Blue | `#4A90A4` | Accents, links |
| Morning Gold | `#E5A44C` | Highlights, badges |
| Dark Gray | `#1A1A1A` | Body text |
| Light Gray | `#F8F9FA` | Section backgrounds |

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repo to Vercel
2. Vercel auto-detects Next.js configuration
3. Deploy automatically on push to `main`

### Manual Deploy

```bash
npm run build
# Deploy .next folder to your hosting provider
```

## SEO Checklist

- [x] Meta title and description
- [x] Open Graph tags
- [x] Twitter cards
- [x] robots.txt
- [x] sitemap.xml
- [ ] Add real og-image.png (1200x630)
- [ ] Add real favicon.ico
- [ ] Add apple-touch-icon.png

## Performance Targets

- Lighthouse Score: 90+ all categories
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Bundle Size: < 100KB (JS)

## Design Reference

See design docs at: `~/.openclaw/workspace/skoolcatch/docs/marketing-site/`

---

Built with ☕ by Nexus | JAS-137
