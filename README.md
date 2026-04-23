# MG Salvage — mgsalvage.com

Conversion-optimized multi-page lead generation site for **MG Salvage**, a cash-for-junk-cars operation serving Sanford, NC and a 50-mile radius (Lee, Moore, Chatham, Harnett, Cumberland counties).

**Live site**: https://mgsalvage.com

## 🚗 Business

- **Service**: Cash for salvage / junk / wrecked vehicles — same-day free pickup, cash on spot
- **Payouts**: $300 – $2,500 (2026 market rates)
- **Accepts**: No title, non-running, rusted, totaled, flooded vehicles
- **Audiences**: Homeowners + B2B (body shops, dealers, fleets)

## ⚙️ Tech Stack

- **Framework**: [Astro 4](https://astro.build/) (static output)
- **Styling**: Tailwind CSS via `@astrojs/tailwind`
- **Sitemap**: Auto-generated via `@astrojs/sitemap` (3.2.1 for Astro 4 compatibility)
- **Forms**: API routes in `src/pages/api/` (Resend integration for email)
- **Fonts**: Google Fonts (Inter + Montserrat)
- **Hosting**: Cloudflare Pages

## 📁 Project Structure

```
.
├── astro.config.mjs        # Astro + Tailwind + sitemap config
├── tailwind.config.mjs     # Custom brand colors (charcoal, graphite, brand orange/teal)
├── public/                 # Static assets served as-is
│   ├── CNAME               # mgsalvage.com (GitHub Pages fallback)
│   ├── _headers            # Cloudflare Pages security & caching headers
│   ├── _redirects          # www → apex redirect
│   ├── robots.txt          # Allow all + explicit AI crawler allows + sitemap ref
│   └── llms.txt            # LLM-friendly business description
├── src/
│   ├── pages/
│   │   ├── index.astro                          # Home
│   │   ├── about.astro
│   │   ├── areas.astro
│   │   ├── business-vehicle-removal.astro
│   │   ├── cash-for-junk-cars-sanford-nc.astro  # Primary SEO landing page
│   │   ├── contact.astro
│   │   ├── faq.astro
│   │   ├── reviews.astro
│   │   ├── sell-your-junk-car.astro
│   │   ├── api/                                 # Form submission endpoints
│   │   │   ├── submit-consumer.ts
│   │   │   ├── submit-business.ts
│   │   │   └── submit-urgent.ts
│   │   ├── business/                            # B2B vertical landing pages
│   │   │   ├── auto-body-collision.astro
│   │   │   ├── fleet-commercial.astro
│   │   │   ├── mechanic-shops.astro
│   │   │   ├── other-business.astro
│   │   │   ├── towing-recovery.astro
│   │   │   └── used-car-dealers.astro
│   │   ├── cities/                              # Local-SEO city pages (10)
│   │   │   ├── sanford.astro
│   │   │   ├── pittsboro.astro
│   │   │   ├── fayetteville.astro
│   │   │   └── ... (7 more)
│   │   └── services/
│   │       └── junk-car-removal.astro
│   ├── components/         # Reusable sections & forms
│   ├── layouts/            # MainLayout.astro
│   ├── styles/             # global.css
│   └── utils/
│       ├── constants.ts    # BUSINESS, SERVICE_AREAS, SEO, schemas
│       └── helpers.ts      # formatPhoneLink, etc.
└── dist/                   # Build output (gitignored)
```

## 🏗️ Build Output

- **26 static HTML pages** generated per build
- Auto-generated `sitemap-index.xml` + `sitemap-0.xml`
- Hashed, fingerprinted CSS/JS assets in `/_astro/`
- Static files from `public/` copied verbatim to root

## 🚀 Local Development

```bash
npm install
npm run dev        # dev server on http://localhost:4321
npm run build      # production build to dist/
npm run preview    # preview the built site
```

## ☁️ Deployment — Cloudflare Pages

### Option A: Connect the GitHub repo (recommended)

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Select `Pottstim/MG-Salvage` → `main` branch
3. Build settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
   - **Node version**: `20` (set via env var `NODE_VERSION=20`)
4. Environment variables (if using Resend for form submissions):
   - `RESEND_API_KEY` = *your key*
5. Deploy — first build takes ~2 min; subsequent builds ~30 sec.
6. **Custom domain**: Pages project → **Custom domains** → add `mgsalvage.com` and `www.mgsalvage.com`. Cloudflare auto-provisions SSL.

### Included Cloudflare config

- `public/_headers` — security headers (HSTS, X-Frame-Options, etc.) + aggressive caching for hashed `/_astro/*` assets, short cache for HTML
- `public/_redirects` — 301 `www.mgsalvage.com/*` → `mgsalvage.com/*`

## 🔍 SEO

**Keywords**: cash for junk cars Sanford NC, junk car removal, salvage vehicle pickup, sell junk car for cash, we buy wrecked cars NC, free junk car towing, cash for cars Lee County

**Per-page SEO**:
- Unique title / meta description / canonical / Open Graph tags per route
- JSON-LD schema (`AutoPartsStore`, `Service`, `FAQPage`, `HowTo`, `BreadcrumbList`) injected via `MainLayout.astro`
- 10 local-SEO city pages (Sanford, Pittsboro, Fayetteville, Lillington, Carthage, Aberdeen, Hope Mills, Siler City, Southern Pines, Spring Lake)
- 6 B2B vertical pages (auto body, fleets, mechanic shops, towing, used-car dealers, other)

**AI / LLM**:
- `public/llms.txt` — structured business description, pricing formula, process, FAQ
- `public/robots.txt` — explicit allow rules for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, OAI-SearchBot

## 📝 Placeholders to Replace Before Launch

- `[PHONE]` references throughout (check `src/utils/constants.ts` for the canonical source)
- `[EMAIL]` references throughout
- `RESEND_API_KEY` in Cloudflare env vars (if keeping the contact form flow)

## ⚖️ License

© 2026 MG Salvage. All rights reserved. Licensed NC Auto Salvage Dealer.
