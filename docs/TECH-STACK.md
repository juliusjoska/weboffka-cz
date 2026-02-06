# WEBOFFKA.CZ — Tech Stack

## Web Framework

| Komponenta | Technologie | Verze |
|------------|-------------|-------|
| **Framework** | Next.js | 15.x (App Router) |
| **Runtime** | Node.js | 20 LTS |
| **Jazyk** | TypeScript | 5.x |

---

## Styling & UI

| Komponenta | Technologie | Poznámka |
|------------|-------------|----------|
| **CSS Framework** | Tailwind CSS | v3.4 |
| **UI Komponenty** | shadcn/ui | Radix primitives |
| **Ikony** | Lucide React | + custom SVG |
| **Fonty** | Inter | Google Fonts |

---

## Animace

| Komponenta | Technologie | Použití |
|------------|-------------|---------|
| **Animace** | Framer Motion | Hero, transitions, scroll |
| **Micro-interactions** | CSS + Framer | Hover, focus states |

---

## Formuláře & Backend

| Komponenta | Technologie |
|------------|-------------|
| **Form Library** | React Hook Form |
| **Validace** | Zod |
| **Email** | Resend API |

---

## SEO & Analytics

| Komponenta | Technologie |
|------------|-------------|
| **Meta tags** | Next.js Metadata API |
| **Sitemap** | next-sitemap |
| **Analytics** | Umami (self-hosted) |
| **Structured Data** | JSON-LD |

---

## Hosting & Deploy

| Komponenta | Technologie | Detail |
|------------|-------------|--------|
| **Platforma** | Coolify | Self-hosted PaaS |
| **Server** | 10.10.10.107 | LXC na Proxmox |
| **CI/CD** | GitHub → Coolify | Auto-deploy |
| **SSL** | Let's Encrypt | Auto-renewal |
| **Tunnel** | Cloudflare | weboffka.cz |

---

## Struktura projektu

```
weboffka-cz/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── sluzby/
│   │   └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   ├── cenik/
│   │   └── page.tsx
│   ├── o-mne/
│   │   └── page.tsx
│   ├── kontakt/
│   │   └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts        # Contact form handler
├── components/
│   ├── ui/                     # shadcn components
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── MobileMenu.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── PainPoints.tsx
│       ├── Solution.tsx
│       ├── HowItWorks.tsx
│       ├── Services.tsx
│       ├── Portfolio.tsx
│       ├── Pricing.tsx
│       ├── About.tsx
│       └── CTA.tsx
├── lib/
│   ├── utils.ts
│   └── resend.ts               # Email client
├── styles/
│   └── globals.css
├── public/
│   ├── images/
│   │   └── portfolio/
│   ├── og-image.png
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Barevná paleta

```css
:root {
  /* Core */
  --background: #FAFAFA;
  --foreground: #1A1A1A;

  /* Primary - Black */
  --primary: #000000;
  --primary-foreground: #FFFFFF;

  /* Accent - Orange (ON/OFF motif) */
  --accent: #FF5500;
  --accent-light: #FF7733;
  --accent-dark: #CC4400;

  /* Neutral */
  --muted: #6B7280;
  --muted-foreground: #9CA3AF;
  --border: #E5E7EB;

  /* Semantic */
  --success: #10B981;
  --error: #EF4444;
}

/* Dark mode */
.dark {
  --background: #0A0A0A;
  --foreground: #FAFAFA;
  --border: #27272A;
  --muted: #A1A1AA;
}
```

---

## Typografie

```css
/* Headings */
font-family: 'Inter', sans-serif;
font-weight: 700;
letter-spacing: -0.02em;

/* Body */
font-family: 'Inter', sans-serif;
font-weight: 400;
line-height: 1.6;

/* Accent (code, tech) */
font-family: 'JetBrains Mono', monospace;

/* Sizes */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 2rem;
--text-4xl: 2.5rem;
--text-5xl: 3rem;
--text-6xl: 4rem;
```

---

## Animace

### Framer Motion variants

```typescript
// Fade in up
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Stagger children
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Scale on hover
export const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 }
}
```

---

## Performance cíle

| Metrika | Cíl |
|---------|-----|
| **Lighthouse Performance** | > 95 |
| **Lighthouse Accessibility** | > 95 |
| **Lighthouse Best Practices** | > 95 |
| **Lighthouse SEO** | > 95 |
| **LCP** | < 2.0s |
| **FID** | < 100ms |
| **CLS** | < 0.1 |
| **TTFB** | < 200ms |

---

## Bezpečnost

- **CSP Headers** — Content Security Policy
- **HTTPS Only** — Redirect HTTP → HTTPS
- **Rate Limiting** — Na kontaktním formuláři
- **Input Sanitization** — Všechny vstupy
- **Honeypot** — Anti-spam na formuláři
- **CORS** — Striktní origin policy

---

## Email integrace (Resend)

```typescript
// lib/resend.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData) {
  return resend.emails.send({
    from: 'Weboffka <web@weboffka.cz>',
    to: 'julius@weboffka.cz',
    subject: `Nová poptávka: ${data.name}`,
    html: `...`
  });
}
```

---

## Deploy pipeline

```yaml
# Coolify auto-deploy
1. Push to main branch
2. GitHub webhook → Coolify
3. Build Next.js
4. Deploy to container
5. Cloudflare tunnel active
```

---

*Tech Stack: 5. února 2026*
