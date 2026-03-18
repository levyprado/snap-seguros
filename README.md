# Snap Seguros

Landing page for **Snap Seguros**, a health insurance brokerage specializing in corporate plans for MEI, ME, and PJ. Built to serve as a Google Ads destination page, optimized for conversion and fast load times.


<img width="1606" height="916" alt="Snap Seguros Home Page Screenshot" src="https://github.com/user-attachments/assets/6c75128c-9c77-4da4-8c7c-43faab08888a" />

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Icons | [@hugeicons/react](https://hugeicons.com/) |
| Fonts | Montserrat (headings) · Inter (body) via `next/font` |
| Components | CVA (class-variance-authority) + clsx + tailwind-merge |

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind setup, CSS variables, keyframes
│   ├── layout.tsx         # Root layout, font loading, metadata
│   └── page.tsx           # Page composition
├── assets/
│   └── images/            # Static images (hero, contact, operadora logos, etc.)
├── config/
│   └── site.ts            # Single source of truth: WHATSAPP_URL, CONTACT info
├── components/
│   ├── layout/
│   │   ├── header.tsx           # Sticky header with mobile nav
│   │   ├── footer.tsx           # Footer with nav links and contact
│   │   └── sticky-mobile-cta.tsx  # Fixed WhatsApp CTA for mobile
│   ├── sections/
│   │   ├── hero.tsx             # Hero with price, CTAs, social proof
│   │   ├── trust-bar.tsx        # Stats bar (lives protected, rating, etc.)
│   │   ├── operadoras.tsx       # Infinite-scroll logos carousel
│   │   ├── benefits.tsx         # Benefits grid
│   │   ├── process.tsx          # How-it-works steps
│   │   ├── testimonials.tsx     # Customer testimonials
│   │   ├── cta-banner.tsx       # Mid-page CTA banner
│   │   ├── faq.tsx              # Accordion FAQ
│   │   └── contact.tsx          # Contact section with WhatsApp card
│   └── ui/
│       ├── section/
│       │   ├── section.tsx        # Base <section> wrapper
│       │   ├── section-header.tsx # Tagline + Headline + Body composition
│       │   ├── headline.tsx
│       │   ├── tagline.tsx
│       │   └── body.tsx
│       ├── button.tsx         # Polymorphic button/anchor with CVA variants
│       ├── container.tsx      # Centered max-width wrapper
│       ├── icon.tsx           # HugeIcons wrapper with defaults
│       └── whatsapp-icon.tsx  # WhatsApp SVG icon
├── data/
│   ├── benefits.ts
│   ├── contact.ts
│   ├── faq.ts
│   ├── navigation.ts
│   ├── operadoras.ts
│   ├── process.ts
│   ├── stats.ts
│   └── testimonials.ts
└── lib/
    └── utils.ts         # cn() helper (clsx + tailwind-merge)
```

## Configuration

All URLs, phone numbers, emails, and addresses live in one file:

```ts
// src/config/site.ts
export const WHATSAPP_URL = 'https://wa.me/...'

export const CONTACT = {
  phone: '(21) 99227-0686',
  phoneTel: 'tel:+5521992270686',
  email: 'adm@snapseguros.com.br',
  emailMailto: 'mailto:adm@snapseguros.com.br',
  address: 'Barra da Tijuca, Rio de Janeiro - RJ',
  addressFull: 'Av. das Americas, 7899...',
  hours: 'Seg a Sex: 8h às 18h',
}
```

## Design System

Colors are defined as CSS variables in `globals.css` and exposed to Tailwind via `@theme inline`:

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#1a3f7a` | Brand navy — backgrounds, buttons |
| `--accent` | `#0ea5e9` | Sky blue — highlights, CTAs |
| `--secondary` | `#f0f7ff` | Light blue tint — section backgrounds |
| `--whatsapp` | `#25d366` | WhatsApp green |
| `--foreground` | `#0f172a` | Body text |
| `--muted-foreground` | `#475569` | Secondary text |

Fonts are loaded via `next/font/google` and mapped to `--font-sans` (Inter) and `--font-heading` (Montserrat).

## License

Private — All rights reserved © Snap Seguros.
