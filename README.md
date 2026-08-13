# rajagopalan.com

Personal site for Jai Rajagopalan. Next.js **static export**, no server, deployed to
**Firebase Hosting** on the apex domain.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build        # emits ./out — plain static files
```

## Deploy

One-time setup:

```bash
npm install -g firebase-tools
firebase login
firebase use jai-rajagopalan-website
```

Preview on a temporary URL before touching production:

```bash
npm run preview      # build + deploy to a 7-day preview channel
```

Ship it:

```bash
npm run deploy       # build + deploy to production hosting
```

## Custom domain

Connect `rajagopalan.com` (and `www`) in the Firebase console under Hosting. Firebase
issues and renews the TLS certificate automatically, at no cost.

**When updating DNS at Network Solutions, change only the A/AAAA records.** Leave `MX`,
the SPF `TXT`, and the `google-site-verification` `TXT` exactly as they are — mail for
`jai@rajagopalan.com` is delivered to Network Solutions and will break otherwise.

## Conventions worth keeping

- **The copyright year is hardcoded** in `src/lib/site.ts`. It is not computed. A
  build-time `new Date().getFullYear()` on a statically rendered page freezes at build
  time — that is why the previous site displayed "© 2025" indefinitely.
- **No dead links.** Every `href` goes somewhere real; every nav anchor resolves to a
  section id that exists on the page.
- **No placeholder copy.** If content is not ready, the section does not ship.
- Site-wide facts (name, email, URLs, year) live in `src/lib/site.ts`. Change them once.

## Structure

```
src/app/layout.tsx      metadata, Open Graph, pre-paint theme script
src/app/page.tsx        section composition
src/app/globals.css     design tokens + all styling (no CSS framework)
src/app/sitemap.ts      generated sitemap.xml
src/app/robots.ts       generated robots.txt
src/lib/site.ts         shared site constants
src/components/         Header, Hero, Work, Interests, Education, Contact, Footer
```

Work history lives as a typed array at the top of `src/components/Work.tsx`.
