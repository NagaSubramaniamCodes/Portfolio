# Nagasubramaniam G — Portfolio

Premium AI × Human personal portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4 design tokens
- Motion (Framer Motion)
- `next-themes` for appearance + custom palette selector (4 palettes × dark/light)

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL`.

## Contact form

The form posts to `/api/contact` with honeypot + basic rate limiting.

Configure **one** delivery path in `.env.local`:

- `CONTACT_WEBHOOK_URL`, or
- `RESEND_API_KEY` + `CONTACT_TO_EMAIL` (+ optional `CONTACT_FROM_EMAIL`)

Until configured, the UI reports that delivery is pending and LinkedIn remains the fallback.

## Resume

Place the AI/ML resume PDF at `public/resume/nagasubramaniam-g-aiml.pdf` and set `resumeReady: true` in `src/content/site.ts`.

## Deploy (Cloudflare Pages preferred)

1. Push this repository to GitHub under Nagasubramaniam G’s account.
2. Create a Cloudflare Pages project linked to the repo.
3. Build command: `npm run build`
4. Output/deployment: follow the Next.js Cloudflare adapter docs for your Next.js version, or use `@cloudflare/next-on-pages` / OpenNext Cloudflare when configuring production.
5. Set environment variables from `.env.example` in the Cloudflare dashboard.
6. Point `nagasubramaniamg.dev` (or `.com`) DNS to Cloudflare once the domain is owned.

Do not silently switch the intended hosting platform to Vercel unless Cloudflare is unavailable.

## Content sources

Verified copy comes from:

- Portfolio website final answers
- Project portfolio descriptions

Do not invent metrics, testimonials, employment history, or screenshots.
