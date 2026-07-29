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
- Subdomain: `app.cipherware.tech` (live)
- cPanel domain created with **Share document root unchecked**
- Document root: `/home/ciphhabn/app.cipherware.tech/public` (Laravel `public/`, not the project root)
- FTP: `app@app.cipherware.tech` → `/home/ciphhabn/app.cipherware.tech`
- Marketing nav **Login** → `https://app.cipherware.tech/login`
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
- Keep in sync with the release branch name (e.g. `release/1.3.0` → `1.3.0`)
- Current: `1.3.0`

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

## SSL (Namecheap free/shared SSL — two systems, both required)
Namecheap’s SSL UI and cPanel’s **Namecheap SSL** tool are **not the same step**. Treat it as:

1. **Namecheap issues** the cert (activate → DCV → status becomes Active/Installed in the *account* SSL list).
2. **cPanel installs** it on the vhost (cPanel → **Namecheap SSL** → **Sync** → status Active + HTTPS Redirect On).

Skipping either side leaves HTTPS on the shared `*.web-hosting.com` cert (browser warning).

### Per host
| Host | Docroot for DCV `verify.txt` |
|---|---|
| `cipherware.tech` | `public_html/.well-known/pki-validation/` |
| `app.cipherware.tech` | `app.cipherware.tech/public/.well-known/pki-validation/` (Laravel docroot — **not** the project root) |

### Checklist
1. Activate / order SSL for that hostname in Namecheap (Free SSL pool is fine — don’t buy a second paid cert for a subdomain if the free row already exists).
2. Upload Namecheap’s `verify.txt` unchanged into that host’s DCV path above.
3. Confirm `http://<host>/.well-known/pki-validation/verify.txt` returns **200**.
4. Click **Verify** in Namecheap (account SSL Certificates page).
5. In cPanel → **Namecheap SSL**, hit **Sync**. Wait until that row is **Active**.
6. Turn **HTTPS Redirect** On for that row (and “HTTPS by default” if you want it global).
7. Confirm the live cert CN matches the host (`openssl` / browser padlock — not `*.web-hosting.com`).

**Gotchas**
- Duplicate SSL rows are common (retry / re-activate). Prefer **one Installed/Active** cert per hostname; **cancel** leftover Pending/Canceled noise after the good one works.
- Apex HTTP may 301 to HTTPS once redirect is on — DCV usually still works, but if Verify fails, temporarily disable redirect or ensure the file is reachable over HTTP.
- Auto-installer / Sync can lag after DCV; Sync is the lever that often finishes install without pasting a CRT by hand.
- UX is clunky. Document what worked; don’t re-buy certs to “fix” a stuck Sync.

## Brand notes
- Display name: Cipherware
- Mark: sad-computer SVG (inline on Home; `favicon.svg` in nav)
- Tone: playful
- Hero aside: “Your Wi‑Fi called. It’s embarrassed.”
