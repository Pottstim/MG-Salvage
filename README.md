# MG Salvage — Cash for Junk Cars Landing Page

High-performance, conversion-optimized single-page lead generation website for **MG Salvage**, a cash-for-junk-cars operation serving Sanford, NC and a 50-mile radius.

## 🚗 Business Overview

- **Service**: Cash for salvage/junk/wrecked vehicles — same-day free pickup, cash on spot
- **Location**: Sanford, NC + 50-mile radius (Lee, Moore, Chatham, Harnett, Cumberland counties)
- **Payouts**: $300–$2,500
- **Accepts**: No title, non-running, rusted, totaled, flooded vehicles

## 🎯 Target Audiences

- **Homeowners** — driveway eyesores, neighbor complaints, towing costs
- **B2B** — body shops, dealerships, fleets needing volume removal

## ⚙️ Tech Stack

- **HTML5** — semantic, accessibility-minded markup
- **Tailwind CSS** (via CDN) — utility-first styling
- **Vanilla JavaScript** — no framework dependencies
- **Google Fonts** — Inter (body) + Montserrat (headings)
- **FontAwesome 6** — iconography
- **JSON-LD Schema** — LocalBusiness, Service, FAQPage, HowTo

## 🎨 Design System

| Role | Color |
|------|-------|
| Primary Background | `#0A0A0A` |
| Secondary Background | `#1A1A1A` |
| Primary Accent | `#D4500A` (burnt orange) |
| Secondary Accent | `#2E7D32` (eco green) |
| Text Primary | `#F5F5F5` |
| Text Secondary | `#9CA3AF` |
| Borders | `#2A2A2A` |

## 📦 Features

### Page Sections
1. Sticky header with logo, phone, and CTA
2. Hero with H1 + dual CTAs + embedded valuation tool
3. Trust bar (Licensed & Insured, 500+ vehicles, Same-day, No title)
4. Problem agitation (driveway eyesore, neighbors, dealer lowballs, tow fees)
5. How It Works (4 numbered steps)
6. 6 authentic testimonials with names, cities, dollar amounts, vehicles
7. B2B section with 3-tier wholesale pricing
8. Service area map (counties + 18 cities)
9. FAQ accordion (8 questions, vanilla JS)
10. Urgency section (limited slots, scrap prices, 24hr expiry)
11. Footer with eco-friendly recycling badge
12. Sticky mobile CTA bar

### Interactive Valuation Tool
- 3-step form (Vehicle Info → Details → Location/Photos)
- Fake drag-drop photo upload with animated progress bar
- 3-second loading state with rotating messages
- Dynamic offer calculation:

```js
const baseValues = {
  'runs-drives': { min: 800, max: 2500 },
  'starts-only': { min: 400, max: 1200 },
  'dead-totaled': { min: 200, max: 600 }
};

// Modifiers
if (hasCleanTitle)                       offer += 200;
if (bodyType === 'truck' || 'suv')       offer += 150;
if (year >= 2015)                        offer += 300;
else if (year >= 2010)                   offer += 150;
if (mileage === 'under-100k')            offer += 100;
if (titleStatus === 'no-title')          offer -= 200;
```

- Live 24-hour countdown timer after quote
- "Lock In This Offer" conversion CTA

## 🔍 SEO

**Target keywords** (naturally integrated):
- Primary: *cash for junk cars Sanford NC*
- Secondary: *junk car removal*, *salvage vehicle pickup*, *sell junk car for cash*
- LSI: *we buy wrecked cars NC*, *free junk car towing*, *cash for cars Lee County*

**Structured Data** (JSON-LD embedded in `<head>`):
- `AutomotiveBusiness` with geo, hours, ratings
- `Service` with offer price range
- `FAQPage` with 8 Q&A pairs
- `HowTo` with 4-step process

## 🚀 Getting Started

No build step required. Just open or serve `index.html`.

### Local preview

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Visit `http://localhost:8000`.

### Deployment

Drop `index.html` on any static host: Cloudflare Pages, Netlify, Vercel, GitHub Pages, S3, etc.

## 📝 Placeholders to Replace Before Launch

- `[PHONE]` — MG Salvage's business phone number (used in `tel:` links and schema)
- `[EMAIL]` — Business contact email

## ⚖️ License

© 2026 MG Salvage. All rights reserved.
