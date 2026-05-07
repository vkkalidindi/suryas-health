# CLAUDE.md — suryas-health

Website for **Surya's Health Organization** / Teja Rehabilitation & De-Addiction Centre, Nizamabad, Telangana.

```bash
npm run dev       # dev server
npm run build     # static export → out/
npx wrangler pages deploy out --project-name=suryas-health --branch=main --commit-dirty=true
```

## Deploy
- Hosted on **Cloudflare Pages** → https://suryas-health.pages.dev
- GitHub repo: https://github.com/vkkalidindi/suryas-health
- Every deploy: build locally → wrangler pages deploy (until GitHub CI wired up)

## Env
- `NEXT_PUBLIC_WEB3FORMS_KEY=fced2829-a850-4d83-8449-cb269be13bb3` — in `.env.local` (gitignored)
- Must pass as env var on build or set in Cloudflare Pages dashboard for CI

## Lead capture
- Form → Web3Forms → delivers to shorg712017@gmail.com
- Cloudflare Turnstile not yet added (future spam protection)

## Assets
- Logo: `public/3e4a9bc9-08c6-4d21-b517-676ffd4016b0.jpeg`
- Flyer: `public/cfe1411b-3e0d-4eab-a8fd-ccd90faf56b0.jpeg`
- Favicon: `app/favicon.ico` + `app/icon.png` (32×32 RGBA from logo)

## Stack
- Next.js 16, TailwindCSS 4, TypeScript, static export (`output: 'export'`)
- No backend, no database — pure static + Web3Forms

## Contact details
- Phone/WhatsApp: +91 83176 48543
- Address: Bypass Road, Behind Vector School, Nizamabad
- Registration: Regd. No 71/2017
