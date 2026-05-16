# Baytown Open MRI — Official Website

Production-ready website for **Baytown Open MRI**, an ACR-accredited Open MRI imaging center in Baytown, TX.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and shadcn/ui. Optimized for local SEO, mobile performance, and accessibility.

## Highlights

- Next.js 14 App Router + React Server Components
- TypeScript end-to-end with strict mode
- Tailwind CSS with a clean medical palette (white / blue / gray / teal)
- shadcn/ui primitives (Radix-based) — accessible by default
- Mobile-first, fully responsive (iPhone, Android, tablet, desktop)
- JSON-LD structured data (LocalBusiness, MedicalBusiness, MedicalClinic, FAQ)
- Open Graph + Twitter card metadata
- Auto-generated sitemap.xml and robots.txt
- HIPAA-conscious forms (no PHI requested)
- Optimized for Vercel deployment

## Pages

- `/` — Homepage with hero, advantages, services preview, insurance, PI/LOP/WC, map, FAQ preview
- `/services` — Full service catalog (Brain, Spine, Knee, Shoulder, ACL, Extremity, contrast options, Open MRI)
- `/about` — About Baytown Open MRI and the open MRI experience
- `/patient-information` — What to expect, preparation, scheduling
- `/referring-providers` — Information and online referral form for clinicians
- `/faq` — Frequently asked questions
- `/contact` — Contact info, map, appointment request form

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Copy env template and edit if needed
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

Open <http://localhost:3000>.

## Build & run

```bash
npm run build
npm run start
```

## Type checking & linting

```bash
npm run type-check
npm run lint
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in Vercel.
3. Set the production domain to `baytownopenmri.com` and add the `www` redirect.
4. Add environment variables from `.env.example` (only `NEXT_PUBLIC_SITE_URL` is required).
5. Deploy.

Vercel will automatically:
- Run `next build`
- Detect the App Router
- Serve `sitemap.xml`, `robots.txt`, and all routes with edge caching where applicable

## SEO checklist

- Set `NEXT_PUBLIC_SITE_URL=https://baytownopenmri.com` in Vercel.
- Submit `https://baytownopenmri.com/sitemap.xml` to Google Search Console.
- Claim and verify the Google Business Profile for **Baytown Open MRI** (4310 Garth Rd # A, Baytown, TX 77521).
- Embed reviews from the verified Google Business Profile only — never invent testimonials.

## Compliance notes

- Forms collect contact info and reason for visit only. **No PHI is requested or stored.**
- ACR Accreditation is referenced based on the provided business information.
- All medical wording is informational; no diagnostic claims are made.

## Project structure

```
src/
├── app/
│   ├── (pages)/...
│   ├── api/                 # Form submission handlers
│   ├── layout.tsx
│   ├── page.tsx             # Home
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/                  # shadcn primitives
│   ├── layout/              # header, footer
│   ├── sections/            # homepage sections
│   └── forms/               # appointment / contact / referral
└── lib/
    ├── constants.ts         # Business info, services, FAQ data
    ├── schema.ts            # JSON-LD structured data
    └── utils.ts
```
