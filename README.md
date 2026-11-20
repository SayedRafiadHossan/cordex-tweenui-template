# Cortexa: AI agent SaaS template

A one-page landing site for a fictional AI agent platform, built with
**Next.js 16, React 19, Tailwind CSS v4 and GSAP**, using animated components
from [Tween UI](https://tween-ui.staticmania.com/) (MIT).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's inside

| Section | Built with |
| --- | --- |
| Navbar with gliding pill + full-screen mobile menu | Tween UI Navbar Pill Glide |
| Hero with morphing headline and a live agent console demo | Morphing Text, Shiny / Magnetic Button, Package Command + custom console |
| Logo strip and stats | Logo Wave, Number Counter |
| Platform features bento | Custom |
| Agent templates | Card Spotlight Grid |
| How it works | Process Sticky Steps (adapted to page scroll) |
| Integrations orbit | Custom layout using Integration Hub's animation |
| Testimonials | Column Drift |
| Pricing with monthly / yearly switch | Pricing Plan Switch |
| FAQ | FAQ Accordion |
| Call to action and footer | CTA Starfall, Footer Wordmark Rise |

Smooth scrolling uses [Lenis](https://lenis.darkroom.engineering/), synced with GSAP ScrollTrigger.

## Customising

- **Copy and content:** `src/components/site/landing.tsx` (nav, templates, steps, testimonials, pricing, FAQ, footer).
- **Colours:** obsidian `#0a0a0b`, surface `#141414`, ivory `#f5f1e8`, stone `#a39e94`, champagne `#c9a96e`, pale gold `#ecd9b0`.
- **Logo:** `src/components/site/logo.tsx` and `src/app/icon.svg` (keep them in sync).
- **Tween UI sources** live in `src/components/tweenui/` and are meant to be edited.

Images are from Unsplash and integration icons from Simple Icons; replace them before shipping.
Company names, people and numbers on the page are placeholders.
