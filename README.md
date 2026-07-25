# Roaring Tigers Shotokan Karate Club

A cinematic, high-contrast marketing website for **Roaring Tigers Shotokan Karate Club** — a traditional Shotokan Karate academy based in Sheikhupura, Punjab, Pakistan.

> Empowering Minds • Strengthening Bodies

## Tech Stack

- **[Next.js 16](https://nextjs.org/)** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals & micro-interactions
- **Embla Carousel** — gallery & testimonials sliders
- **Lenis** — smooth scrolling
- **React Hook Form + Zod** — validated contact form
- **Lucide React** — icons
- Fonts: **Bebas Neue** & **Oswald** (headings), **Inter** (body)

## Sections

Single-page experience with smooth-scroll anchor navigation:

Hero · About (Mission / Vision / Core Values) · Programs · Benefits & Belt System · Gallery · Schedule · Pricing / Join · Testimonials · FAQ · Contact · Footer

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Fonts, metadata, smooth-scroll provider
│   ├── page.tsx          # Assembles all sections
│   └── globals.css       # Design tokens (colors, fonts, utilities)
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── smooth-scroll.tsx # Lenis wrapper
│   ├── reveal.tsx        # Framer Motion reveal helpers
│   ├── section-heading.tsx
│   ├── ui/button.tsx
│   └── sections/         # Hero, About, Programs, Benefits, Gallery, …
└── lib/
    ├── site.ts           # All club content (single source of truth)
    └── utils.ts
```

## Content & Configuration

All club data (name, contact details, programs, pricing, schedule, FAQs, etc.)
lives in [`src/lib/site.ts`](src/lib/site.ts) so copy can be updated in one place.

## Design System

| Role        | Color        | Hex       |
| ----------- | ------------ | --------- |
| Primary     | Rich Black   | `#0A0A0A` |
| Brand Red   | Tiger Red    | `#D62828` |
| Accent      | Burnt Orange | `#C65A1E` |
| White       | Off White    | `#F8F8F8` |
| Surface     | Dark Gray    | `#1A1A1A` |
| Border      | Gray         | `#3A3A3A` |
| Achievements| Gold         | `#D4AF37` |

## SEO

Configured out of the box:

- Full metadata (title template, description, keywords, canonical, robots)
- Open Graph + Twitter large cards (`/opengraph-image`, `/twitter-image`)
- App icons + web manifest
- `robots.txt` + `sitemap.xml`
- JSON-LD for LocalBusiness / SportsClub, FAQPage, WebSite, BreadcrumbList
- Geo meta tags for Sheikhupura

Set your production domain before deploy:

```bash
cp .env.example .env.local
# NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Notes

- The contact form is wired for validation but has **no backend** — submissions
  are simulated client-side. Connect it to an email service or API route before
  going live.
- Schedule times and pricing are from public listings and include a
  "please verify" note; confirm before publishing.
- Gallery currently uses the club banner as a placeholder across categories —
  swap in real training/kata/kumite photography in `public/images`.
