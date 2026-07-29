# Cipherware runbook

## Product
Local Mississippi tech business site for [cipherware.tech](https://cipherware.tech): IT/network consulting, device repair & support, IoT, AI, and software development.

## Site map
- `index.html` — Home
- `about.html` — About
- `services.html` — Services
- `contact.html` — Contact + Cal.com booking (`#book`)

## Stack
- Static HTML + CSS + small JS (no framework, no build step)
- Google Fonts: Syne (display), Outfit (body)
- Accent: electric cyan `#00E5FF` on near-black `#0A0A0A`
- Booking: Cal.com inline embed (`js/cal-embed.js`)

## Business contact
- Email: `nate@cipherware.tech`
- Phone: `(601) 678-8555`
- Address: `5456 Hopewell Rd, Little Rock, MS 39337`
- Hours: Monday–Friday, 9:00 AM – 6:00 PM

## Cal.com
- Config: [`js/config.js`](../../js/config.js) — `window.CIPHERWARE_CAL_LINK`
- Current link path: `cipherware` → https://cal.com/cipherware
- If the username or event slug changes, update `CIPHERWARE_CAL_LINK` only (fallback link on Contact updates from the same value).

## Hosting
- Domain registrar / host: Namecheap (cPanel)
- Deploy: upload the whole site root to `public_html`:
  - `index.html`, `about.html`, `services.html`, `contact.html`
  - `styles.css`, `favicon.svg`
  - `js/config.js`, `js/cal-embed.js`
- No build step.

## Brand notes
- Display name: Cipherware
- Mark: sad-computer SVG (inline on Home; `favicon.svg` in nav)
- Tone: playful
- Hero aside can still nod to “Something’s cooking.”
