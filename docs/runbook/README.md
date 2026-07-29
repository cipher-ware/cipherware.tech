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
- Subdomain: `app.cipherware.tech`
- cPanel domain created with **Share document root unchecked**
- Document root: `/home/ciphhabn/app.cipherware.tech/public` (Laravel `public/`, not the project root)
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
- Keep in sync with the release branch name (e.g. `release/1.2.0` → `1.2.0`)
- Current: `1.2.0`

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
- FTP for deploys/validation: use an account whose Directory is `public_html` (not a nested `/cursor` jail). Recreate the FTP account if cPanel won’t let you change the path.

## SSL (Namecheap purchased cert + cPanel)
Namecheap **issues** the cert; cPanel must **install** it on the vhost. Both steps are required.

1. **CSR / activate** in Namecheap SSL Certificates (or use cPanel auto-installer / “Server-side automation”).
2. **DCV (HTTP file upload):**  
   - Create `public_html/.well-known/pki-validation/`  
   - Upload Namecheap’s `verify.txt` unchanged  
   - Confirm `http://cipherware.tech/.well-known/pki-validation/verify.txt` returns 200  
   - Click **Verify** in Namecheap  
3. **Install in cPanel:** Namecheap → cPanel → **Namecheap SSL**.  
   - If status is **in progress**, hit **Sync** on that page (easy to miss — it’s a separate cPanel tool/tab from Domain List / SSL Certificates in the Namecheap account). Sync often finishes install without a manual CRT paste.  
   - Until install finishes, HTTPS may still serve the shared host cert (`*.web-hosting.com`) and browsers will warn (SAN mismatch).  
4. When status is installed/active: enable **HTTPS by default** / **HTTPS Redirect**.  
5. Confirm `https://cipherware.tech` shows a padlock / cert for `cipherware.tech` (not `*.web-hosting.com`).

**Gotchas**
- Duplicate SSL rows for the same domain are common if you activate more than once or mix auto-installer + manual. Prefer **one Active** cert; cancel leftovers after HTTPS works with the correct CN.
- If Namecheap shows **Active** + **Download**, install that CRT (and CA bundle) in cPanel → **SSL/TLS** → Install, even if another row is still Pending via the shared-hosting tool.
- cPanel install is a separate step from Namecheap “Active” issuance — don’t skip it.
- Auto-installer can take up to ~25 minutes after DCV.
- Until the domain cert is installed, HTTPS may present `*.web-hosting.com` (browser warning / SAN mismatch).

## Brand notes
- Display name: Cipherware
- Mark: sad-computer SVG (inline on Home; `favicon.svg` in nav)
- Tone: playful
- Hero aside: “Your Wi‑Fi called. It’s embarrassed.”
