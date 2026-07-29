# Cipherware runbook

## Product
Local Mississippi tech business site for [cipherware.tech](https://cipherware.tech): IT/network consulting, device repair & support, website design, hosting, domains, IoT, AI, and software development.

## Site map
- `index.html` — Home
- `about.html` — About
- `services.html` — Services
- `contact.html` — Contact + Cal.com booking (`#book`)

## Shared UI kit
- Source of truth: `/home/nate/Documents/dev/cipherware-kit` (separate repo)
- Vendored copy for static deploy: `vendor/cipherware-kit/cipherware.css` (kit `0.1.0`)
- Marketing `styles.css` `@import`s the kit, then adds page-specific rules
- Re-copy from kit when bumping:  
  `cp ../cipherware-kit/packages/css/cipherware.css vendor/cipherware-kit/cipherware.css`

## App / auth / invoicing
- Laravel app: `/home/nate/Documents/dev/cipherware-app` (separate repo)
- Planned subdomain: `app.cipherware.tech` → Laravel `public/`
- Node reserved for later IoT / realtime services

## Stack
- Marketing: static HTML + CSS + small JS (no build step)
- Kit: tokens + HTML/CSS patterns (Astro/React components later)
- App: Laravel 12.x skeleton (`composer install` once PHP is available)
- Google Fonts: Syne (display), Outfit (body)
- Accent: electric cyan `#00E5FF` on near-black `#0A0A0A`
- Booking: Cal.com inline embed (`js/cal-embed.js`)

## Business contact
- Email: `nate@cipherware.tech`
- Phone: `(601) 678-8555`
- Address: `5456 Hopewell Rd, Little Rock, MS 39337`
- Hours: Monday–Friday, 9:00 AM – 6:00 PM

## Version
- Shown in the site footer as `vX.Y.Z`
- Set in [`js/config.js`](../../js/config.js) as `window.CIPHERWARE_VERSION`
- Keep in sync with the release branch name (e.g. `release/1.1.0` → `1.1.0`)
- Current: `1.1.0`

## Cal.com
- Config: [`js/config.js`](../../js/config.js) — `window.CIPHERWARE_CAL_LINK`
- Current link path: `nathaniel-more-4e9oew` → https://cal.com/nathaniel-more-4e9oew
- If the username or event slug changes, update `CIPHERWARE_CAL_LINK` only (fallback link on Contact updates from the same value).

## Hosting
- Domain registrar / host: Namecheap (cPanel)
- Deploy marketing site to `public_html`:
  - HTML pages, `styles.css`, `favicon.svg`, `js/*`
  - `vendor/cipherware-kit/cipherware.css` (required by `@import`)
- No build step for marketing site.

## Brand notes
- Display name: Cipherware
- Mark: sad-computer SVG (inline on Home; `favicon.svg` in nav)
- Tone: playful
- Hero aside: “Your Wi‑Fi called. It’s embarrassed.”
