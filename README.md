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

Content reveals section by section as it scrolls into view. Add `data-reveal` to an element, or `data-reveal-stagger` to a container to reveal its children one by one (`src/components/site/scroll-reveal.tsx`).

## Pages

| Route | What's on it |
| --- | --- |
| `/` | The full product tour (sections above) |
| `/platform` | Features, how it works, deploy options with an SDK sample, production controls |
| `/agents` | Template gallery filterable by team |
| `/integrations` | Integrations orbit, searchable directory, bring-your-own-tools (OpenAPI / MCP) |
| `/pricing` | Plan switch, feature comparison table, billing FAQ |
| `/customers` | Case studies with metrics, testimonials |
| `/about` | Story, stats, values, milestones, leadership |
| `/careers` | Benefits and open roles |
| `/contact` | Contact channels and a validated form (UI only: connect it to your email service or API) |
| `/blog`, `/blog/[slug]` | Post index and article pages |
| `/changelog` | Release timeline |
| `/legal/[slug]` | Privacy, Terms and Security (placeholder text: replace before launch) |

Every page shares the navbar, footer, smooth scrolling and reveal animations through `src/app/(site)/layout.tsx` and `template.tsx`. All page content (nav links, templates, plans, posts, roles and so on) lives in `src/data/site.ts`.

## Customising

- **Copy and content:** `src/data/site.ts` for everything shared; each page's own text is in `src/app/(site)/<page>/page.tsx`.
- **Colours:** obsidian `#0a0a0b`, surface `#141414`, ivory `#f5f1e8`, stone `#a39e94`, champagne `#c9a96e`, pale gold `#ecd9b0`.
- **Logo:** `src/components/site/logo.tsx` and `src/app/icon.svg` (keep them in sync).
- **Tween UI sources** live in `src/components/tweenui/` and are meant to be edited.

Photos are free images from [Lummi](https://www.lummi.ai/license) (free for commercial use, no credit required; they can't be resold on their own), stored in `public/images/`. Integration icons are loaded from Simple Icons.
Company names, people and numbers on the page are placeholders.
