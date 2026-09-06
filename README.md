# iNikola — website

Corporate site for **iNikola**, repositioned from home automation to
**Enterprise AI Engineering + Secure AI Enablement**.

React 18 · Vite 5 · Tailwind 3 · Framer Motion · React Router 7 — deployed as a
static bundle to S3.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # → dist/ (bundle + per-route HTML + sitemap + robots)
npm run preview
```

---

## Before you go live — the three things that need your input

Everything else works out of the box. These need a value only you have.

### 1. Where leads go  → `VITE_LEAD_ENDPOINT`

Every form on the site (Contact, Book a demo, the ad landing page) posts JSON to
one URL. Set it in `.env` and rebuild:

```
VITE_LEAD_ENDPOINT=https://…
```

Any of these work — pick whichever your sales team already uses:

| Option | What to paste |
| --- | --- |
| **Google Sheets** (free, ~3 min) | Deploy `scripts/lead-endpoint.gs` as an Apps Script web app and paste its `/exec` URL. Setup steps are in the file. Writes every lead to a sheet and emails the team. |
| Formspree | `https://formspree.io/f/xxxxxxx` |
| Web3Forms | `https://api.web3forms.com/submit` |
| Zapier / Make | A catch-hook URL that writes into your CRM |
| Your own CRM | Any endpoint accepting a JSON POST |

Each submission carries `name, email, company, role, phone, companySize,
interest, message` plus `submittedAt`, `source` (which form), `page`,
`referrer` and all `utm_*` / `gclid` / `fbclid` parameters, so campaign
attribution works automatically.

**Without this set the forms still work** — the lead is stored in the visitor's
browser and their mail client opens pre-filled to `contact@inikola.com`. Nothing
is lost, but it is a worse experience. Set the variable.

### 2. Demo scheduling  → `VITE_BOOKING_URL` (optional)

Paste a Cal.com or Calendly link and `/book` embeds the live scheduler. Leave it
blank and `/book` shows a request form instead — which also works.

### 3. Testimonials

`src/data/testimonials.js` is **empty on purpose**. The section is built and
styled but hidden. Add real, written-approval client quotes there, then set
`features.testimonials: true` in `src/data/site.js`. Do not ship invented
quotes — a fabricated testimonial is the fastest way to lose an enterprise deal.

---

## Content — where to edit what

All copy lives in plain data files. You will rarely need to touch a component.

| File | Controls |
| --- | --- |
| `src/data/site.js` | Company details, email, phone, nav, footer, feature flags |
| `src/data/solutions.js` | The 8 service pillars, control plane, deployment modes, pilot plan, commercial ladder |
| `src/data/products.js` | **Products — available today only** |
| `src/data/rnd.js` | **R&D — in development only** |
| `src/data/portfolio.js` | Shipped work and reference architectures |
| `src/data/team.js` | People, values, capabilities, open roles |
| `src/data/faq.js` | FAQ (rendered with FAQPage schema) |
| `src/data/insights.js` | Long-form articles |
| `src/data/industries.js` | Sector list |
| `src/data/routes.js` | Per-route title/description — **add new routes here** so they get meta tags and a sitemap entry |

### The Products / R&D rule

Anything a client can buy or deploy **today** lives in `products.js`. Anything
still being built lives in `rnd.js`. They are never rendered in the same listing,
and the R&D page states in-development status on every card. Keep it that way —
it is the single content rule with no exceptions.

---

## SEO

- `npm run build` writes a static HTML file per route with real `<title>`,
  description, canonical and Open Graph tags, so crawlers and link unfurlers get
  correct metadata without executing JavaScript.
- `sitemap.xml` and `robots.txt` are generated from `src/data/routes.js`.
- Structured data: Organization, FAQPage, Article, Service, SoftwareApplication
  and BreadcrumbList.
- `dist/404.html` and `dist/_redirects` are emitted for SPA fallback.

**S3 setup:** in bucket properties → Static website hosting, set both the index
document and the **error document** to `index.html`. Without the error document,
deep links like `/solutions/private-secure-ai` return 403 on refresh. If the site
sits behind CloudFront, add a custom error response mapping 403 and 404 to
`/index.html` with response code 200.

---

## The unlisted ad-campaign landing page

`/lp/private-ai` — built for paid campaigns:

- not in the navigation, the footer, or `sitemap.xml`
- `noindex, nofollow` in both the app and the prerendered HTML, and disallowed in
  `robots.txt`
- leads route to the same endpoint as everything else, tagged
  `ad-landing-private-ai` plus whatever UTM parameters brought the visitor in

Point ads at `https://inikola.com/lp/private-ai?utm_source=…&utm_campaign=…`.

---

## Brand assets

`node scripts/build-assets.mjs` regenerates, from the HTML sources in
`scripts/assets/`:

- `public/brochures/iNikola_Enterprise_AI_Brochure.pdf` — the 8-page company
  brochure behind the nav Brochure button
- `public/og-cover.png` — link-preview image
- `public/apple-touch-icon.png`

Edit the HTML, re-run, commit the output. Requires Google Chrome installed.

---

## Performance notes

- **No background video anywhere.** The hero is a bespoke canvas animation
  (~6 KB of code, no network request) that pauses off-screen and when the tab is
  hidden, and renders a single static frame under `prefers-reduced-motion`. There
  is no black-screen failure mode because there is nothing to fail to load.
- Every route below the homepage is code-split and lazily loaded.
- Images are lazy-loaded below the fold and served at sensible sizes.
- Smooth scrolling is loaded lazily and skipped entirely on touch devices and
  for reduced-motion visitors.

---

## Deployment

`.github/workflows/` builds on push to `main` and syncs `dist/` to S3.
`node_modules/` and `dist/` are no longer committed — CI installs and builds
them. If you previously cloned this repo, run `rm -rf node_modules && npm install`
once; the old tree contained Windows binaries that break macOS and Linux builds.
