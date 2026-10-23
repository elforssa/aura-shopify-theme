# CLAUDE.md — Aura Compression Socks

## Project
Building a premium Shopify store for Aura, a French 
compression sock brand targeting female nurses and 
healthcare workers on 10–12 hour shifts.
Base theme: Dawn. Every section must be fully editable 
in the Shopify theme editor — NO hardcoded HTML.

## Legal Entity
AURALEGION LLC — Wyoming Limited Liability Company
Registered agent : Maroine El Forssa
2403 Rooks Ave, Cheyenne, WY 82007, United States
Contact : contact@auralegs.com
(Foreign LLC selling to French/EU consumers — no SIRET.
 Use LLC details in mentions légales and policy footers.)

## Language — FRENCH ONLY
This is a French store. ALL customer-facing copy is in 
French: headings, body, buttons, schema labels, alt text, 
microcopy. Use proper typography: «  » guillemets, 
non-breaking spaces before : ; ! ?, en-dash for ranges 
(18–25 mmHg). Use «  infirmière  » (feminine) — the target 
is female. No English anywhere the customer can see.

## Target Customer (the StoryBrand "hero")
ONE customer: female nurse in France, 25–55, working 
10–12 hour shifts. Her problem: heavy, swollen, aching 
legs and red marks by the end of a shift. She is the 
hero of the story — Aura is the GUIDE that gives her 
a simple plan to relief. Never make Aura the hero.

## Brand Voice
- Confident and specific — never generic
- Warm but clinical — we respect nurses as professionals
- Evidence-based — every claim is backed (18–25 mmHg verified)
- StoryBrand framing: name the problem first, then the 
  outcome, then the simple next step (CTA)
- Premium, Apple-like restraint — never medical, never cheap, 
  never salesy. Reference tone: FIGS, Bombas, Wellow.

## Product — V2
NAMING (owner rule, June 2026): customer-facing copy says « Aura », never
« Aura V2 » or « V2 » (swept from theme).
PRODUCT TERM (owner rule, June 2026): the product is « chaussettes de compression »,
NEVER « bas de contention ». The term was swept from all theme copy — feminine
agreement matters (chaussettes f. → « tricotées », « pensées », « celles »,
« existantes »). Competitor references ("bas d'hôpital / de pharmacie / classiques")
are KEPT — they contrast Aura against the rigid products. ⚠️ Admin still needs work:
the product **title** ("Aura — Bas de contention"), **type**, and variant names carry
the old term. The theme MASKS every customer-VISIBLE spot with a defensive
`replace: 'Bas de contention', 'Chaussettes de compression'`:
  • product H1 + `<title>`/meta-description — layout/theme.liquid & aura-featured-product.liquid
  • og:title / twitter:title / og:description — snippets/meta-tags.liquid
  • JSON-LD `structured_data` name — aura-featured-product.liquid (piped through replace;
    the handle `aura-chaussettes-de-compression` doesn't match the pattern, so URLs stay intact)
  • cart drawer item names — aura-cart.js + snippets/aura-globals.liquid
What the theme CANNOT reach (only the admin rename fixes these): the **checkout**
(Shopify-hosted, renders admin product/variant titles), the **URL handle**, the
**product.type**, and the Shopify-injected analytics/variant JSON blobs
(`untranslatedTitle`, ShopifyAnalytics) — all machine-read, not visible. REAL FIX:
rename the admin product **title** → « Aura — Chaussettes de compression » and **type**
→ « Chaussettes de compression ». The **handle** was changed to
`aura-chaussettes-de-compression` (June 2026) — Shopify auto-301s the old URL, and all
internal theme links (CTAs, `featured_product`, nav) were updated to the new handle.
- 80% nylon / 20% spandex
- 2-thread construction — easier to put on, more breathable
- Seamless anatomical toe — no pressure points
- Wider cuff (+1cm) — zero red marks
- Verified 18–25 mmHg graduated compression
- 3 colors (Bordeaux #6E2C36 / Noir #16181D / Gris #A8A6A3 — this order everywhere), sizes XS/S/M/L. ⚠️ Admin variants may still carry the old Cream/Marine/Argile/Corail names — rename in admin; the swatch hex map keeps legacy names mapped until then.
- Pricing model — BOGO (owner's Shopify automatic discounts, ACTIVE as of June 2026):
  • 1 paire = plein tarif (base)
  • « 2 paires achetées, 2 offertes » → buy 2, get 2 free (4 pairs, pay for 2)
  • « 3 paires achetées, 3 offertes » → buy 3, get 3 free (6 pairs, pay for 3)
  These are REAL automatic discounts in admin (not display-only) — the cart applies
  them on its own. ✅ DONE (June 2026): the displayed buy-box tiers, the pack-CTA, and
  the announcement bar now MIRROR this model (1 paire / 2+2 / 3+3, −50 %), not the old
  1/3/6 −13/−22 % quantity tiers. Perks shown: k2 = « Livraison offerte », k3 =
  « Livraison offerte + cadeau surprise » (so k3 reads as best value — same per-pair
  price as k2 without the gift). Free shipping applies on orders ≥ 60 €.
- RETURNS (owner rule, Oct 2026): refund within **60 days, even worn**; return
  shipping is paid by the customer (free only if defective / our error). Never write
  « retour gratuit », « sans frais », « échange gratuit » or « 30 jours ». Shipping:
  « Commande expédiée sous 24 h », delivered in 5–7 jours ouvrés (the buy-box date
  counts working days + French public holidays). The seal is drawn by
  snippets/aura-guarantee-seal.liquid from the « days » setting (not the old
  assets/aura-guarantee-seal.svg, which has « 30 » baked in).
- PAYMENT METHODS (Oct 2026): Klarna is NOT enabled — never advertise it. Footer
  badges + cart note render snippets/aura-payment-methods.liquid from
  shop.enabled_payment_types (curated FR order: CB, Visa, Mastercard, Amex, PayPal,
  Apple Pay, Google Pay, Shop Pay). Keep any hand-written payment copy to that list.
- PACK CTA: #pack-cta-btn links to the product with ?pack=6 and carries
  data-pack-mix (Bordeaux×2 · Noir×2 · Gris×2, matching the card); aura-cart.js
  selects the tier + fires aura:packmix, the buy box pre-fills the pairs. The top
  SIZE copies only sizes to the pairs (colours kept); the top COLOUR copies colours.
  ⚠️ The admin refund POLICY page still says 30 days / unworn until the owner pastes
  docs/politique-remboursement-60-jours.md. « Garantie 12 mois » was REMOVED from the
  whole site (Oct 2026, owner) — not in any policy/CGV; never reintroduce it.
- Manufactured in China, stocked in France. NOTE (June 2026): all made-in-France
  origin claims have been REMOVED from customer-facing copy — the theme no longer
  states where the product is made. Do NOT reintroduce "tricoté/fabriqué en France
  / Vallée de la Loire / atelier près de Lyon". (Legitimate FR references kept:
  audience "tiennent la France debout", customer locations, company address.)

## Design System — v2 (Homepage v2 port)
The homepage now follows the "Aura Homepage v2" design. Tokens live in
assets/aura-v2.css under :root — that file is the source of truth; mirror it.
Colors:
  --navy:       #0E1B33  (primary — text, dark sections, buttons)
  --navy-deep:  #08122A
  --coral:      #E89379  (accent — CTAs, stars, ribbons, eyebrows)
  --coral-deep: #C76D54  (eyebrow text, accent hover)
  --cream:      #F4EFE7  (warm section bg)
  --paper:      #FBF8F3  (page bg — never pure white pages)
  --ink:        #161B26  (body text)
  --muted:      #6F6657  (secondary text)
  --line:       rgba(14,27,51,0.10)  (hairline dividers)
  --green:      #4A7C59  (verified / confirmations)
  --eyebrow:    #A3503A  (SMALL coral text — eyebrows, save-lines, chips: passes
                WCAG AA on cream/paper. Never use --coral-deep for text < 18px.)
  Coral allowlist (owner rule): eyebrows, star ratings, discount chips,
  purchase CTAs, the science gradient bars. Everything else (icon circles,
  badges, chart labels, dots) is navy/neutral — icon circles are navy-tint
  rgba(14,27,51,0.06) on light, white-tint on navy. Shadows allowed
  but soft (see --shadow). Pill buttons (999px radius), generous whitespace.

Fonts:
  Display/headlines: Geist 700 (var(--f-sans)) — confident DTC
  Serif accents: Instrument Serif italic in EXACTLY four places (owner rule,
  June 2026): wordmark, full doctor quote, pack-CTA "jour de garde.",
  newsletter "lettre de garde." NEVER add the last-word-italic flourish to
  any other headline.
  Body: Geist 400 (Google Fonts)

Spacing:
  TWO-TIER on both breakpoints — see "Chapter system" under the product page
  section. Never set per-section mobile padding/margins, and never give a
  section its own desktop width (everything sits on --desk/--desk-chrome).

Components:
  Buttons: pill (999px radius), navy fill, bold, full-width on mobile.
  Cards: var(--card-radius)=14px + 1px var(--line) border (one card style).
  Icons: line style, ~1.5px stroke, 24px grid. The 6 benefit icons in
  aura-feature-grid.liquid are the OWNER'S OWN ARTWORK (filled-outline SVGs
  they supplied June 2026), recolored navy via currentColor, shown WITHOUT the
  tinted circle so the detail reads: file1=compression bands, file2=bent leg
  +soft cuff, file3=leg+flow arrows, file6=leg+slimming lines, file5=knit
  mesh, file4=sock+pull arrows. Single-colour navy (the source files have no
  separate accent). NEVER redraw these — replace only with new owner-supplied
  vectors. aura-benefits-alternating.liquid ALSO uses owner-supplied emblems
  (June 2026): the `heart`/circulation slot renders snippets/aura-icon-circulation
  .liquid (spiral-in-ring) and the `run`/recovery slot renders
  snippets/aura-icon-recovery.liquid (runner-in-ring). Both are 1024×1024 emblems
  with `fill="currentColor"` (inherit navy) + class `ben-emblem`, which the generic
  `.ben-ic:has(.ben-emblem){background:none}` + `.ben-emblem{width:100%}` rules in
  aura-v2.css let FILL the icon circle (no tinted disc). Swap an emblem by replacing
  its snippet only — no CSS change. NEVER redraw. Other icon spots (trust pills,
  promise, hero checklist) stay navy line icons. Images: lifestyle, slightly desaturated.
  Shadows: soft var(--shadow) or none. Animations: subtle fade on scroll only.

## Mobile layout system (THE source of page cohesion — keep it shared)
Every product/content section obeys ONE mobile system, defined in a single
`@media (max-width: 749px)` block at the END of assets/aura-v2.css, driven by
:root tokens:
  --pdp-sec-y   : clamp(22px,6vw,36px)   section top/bottom rhythm
  --pdp-gutter  : 16px                    left/right edge for EVERY section
  --pdp-head-gap / --pdp-eyebrow-gap / --pdp-title-gap   heading rhythm
  --card-radius : 14px
On mobile, all sections share: the 16px gutter (one left edge down the whole
page), the vertical rhythm, LEFT-aligned headings (never centered), and one card
radius/border. The tag:"section" wrappers are zeroed there too (see Gotchas).
WHEN ADDING A SECTION: add its class to those shared selector lists, or it will
look "pasted on." Do not give a section its own mobile padding/alignment.

Background chapters (deliberate, not random):
  paper (quick benefits + video) → CREAM education band (stats, expert quote,
  science, benefits, softness, versus) → paper proof (ugc, reviews, details,
  faq) → cream guarantee (promise) → navy close (pack-cta). Navy inside
  content = emphasis ONLY (versus brand column, best material rung, final CTA).
  Homepage: personas is cream on desktop (continues the band) but paper on
  phone. NO horizontal divider lines between sections — ever (owner rule;
  see memory + the CHAPTER SYSTEM comment in aura-v2.css).

## Running & previewing locally
One-time setup — ALREADY DONE on this machine, do NOT repeat each session:
  - Shopify CLI installed globally via npm (Oct 2026, new Mac): `shopify` v4.9+ at
    /opt/homebrew/bin/shopify. (Only if ever missing: `npm i -g @shopify/cli` —
    Homebrew's shopify/shopify tap now needs `brew trust shopify/shopify` first.)
  - Authenticated to the store — login PERSISTS across sessions/tabs.
  - Node v18+ required (this machine has v22, Homebrew node@22). git + GitHub CLI
    (`gh`, logged in as elforssa) installed. No other plugins/extensions needed —
    theme dev/check/push are built into the CLI.

Each new session, just start the dev server (one command):
    cd /Users/elforssa/Desktop/aura-shopify
    shopify theme dev --store fb0dkf-0h.myshopify.com
  → Local:    http://127.0.0.1:9292/
  → Product:  http://127.0.0.1:9292/products/aura-chaussettes-de-compression
  → Phone/share: https://fb0dkf-0h.myshopify.com/ (the LIVE theme — see id below)

🟢 LIVE THEME = "Aura — Production (recompiled)"  #143022194786  (published July 2026).
  ALL pushes target THIS theme: `--theme 143022194786 --allow-live`. The previous
  "Aura — Production (fresh)" #142213742690 and older "Aura — Production" #142112555106
  are STALE/stuck-compile BACKUPS — do NOT push to or republish them. (Compiled-render
  snapshots froze on BOTH #142112555106 and later #142213742690; each time, duplicating
  the live theme + publishing the duplicate forced a clean recompile. If renders freeze
  again — files correct on the server but a fresh cookieless render shows old markup,
  and the served HTML still carries the OLD theme id — run:
  `shopify theme duplicate --theme <live-id> --name "…" --force --json` then
  `shopify theme publish --theme <new-id> --force` (retry publish for ~30–60s while the
  duplicate finishes installing: it errors "installation is complete … missing required
  file layout/theme.liquid" until ready). Then update this id. Server-side duplicate
  preserves the owner's uploaded images/settings. NOTE: after publish, the storefront
  full-page CDN cache for "/" can stay STALE 10–15+ min on BOTH auralegs.com and the
  myshopify URL — cache-buster query strings are ignored for the homepage, and the
  served HTML keeps the OLD theme id until the edge TTL expires. The theme EDITOR shows
  fresh immediately; the reliable manual purge is to open the homepage in the theme
  editor and click Save. Don't burn time polling — verify files on the server instead.)

🔴 PULL-BEFORE-PUSH (owner loses editor work otherwise): the owner uploads images and
  edits settings in the Shopify theme editor — those live ONLY in the theme's template
  JSON / section settings on the server, NOT in this local tree. Pushing a stale local
  template/section JSON CLOBBERS them. So BEFORE editing any template `*.json` or a
  section's saved settings/blocks, FIRST `shopify theme pull --theme 143022194786
  --only <file>`, apply edits on top of the freshly-pulled copy, then push only that
  file. Editing pure `.liquid`/`.css` markup is safe (image refs live in JSON, not there).

If it returns 401 / 500 / "token expired" / "Upload Errors": the temporary dev
token lapsed — just RESTART `shopify theme dev` (re-auths in the browser if asked).
You do not reinstall anything.

Before calling work done: `shopify theme check` (expect 0 errors) and verify on
mobile at 390px. Commit/push only when the user asks.

## Store Architecture

### Homepage sections (build in this order):
1. Announcement bar — pack deal or free shipping
2. Hero — DONE: sections/aura-hero.liquid. StoryBrand, FR.
   eyebrow → problem headline → outcome subheadline → CTA 
   → star trust line → 4 benefit bullets (icon blocks) 
   → reassurance line → lifestyle photo (right, stacks top 
   on mobile). Navy #071F5C, gold accent, warm bg.
3. Trust bar — 4 icons: verified mmHg / no red marks / 
   seamless toe / easy to put on
4. Problem section — "12 hours on your feet deserves 
   better than red marks and swollen legs"
5. Solution reveal — V2 features with icons
6. Before/After — cuff comparison (red marks vs none)
7. How compression works — simple diagram, nurse-specific
8. Social proof — nurse testimonials (photo + quote + role)
9. Pack pricing — 1/2/3 pair options
10. FAQ — mmHg explained, sizing, washing, EU shipping
11. Final CTA — urgency, warm tone

### Product page — BUILT (templates/product.json). Hollow-style long-form PDP.
Real section order (all `aura-*`, each editable in the customizer):
1.  aura-featured-product — DUAL-PURPOSE buy box. On a product template it binds
    to the page `product` (leave the featured_product setting blank); on the
    homepage it uses the picked product. Gallery (hero image + thumbnails,
    swipeable on touch) + Couleur swatches + Taille sizes (+ pointure note) +
    bundle/quantity rows + ATC + price anchor («À partir de
    17 €/paire», BOGO 3+3) + shipping strip (JS rewrites the right item to a live
    "Livré entre …" date range, Sundays skipped) + 30-day guarantee. NO size
    pre-selected (forced choice; guarded in assets/aura-cart.js). Variants read
    from a `<script data-aura-variants>` JSON island + an IIFE in the section.
    Sticky bar + cart drawer live in snippets/aura-globals.liquid; cart AJAX in
    assets/aura-cart.js; homepage-only behaviours in assets/aura-v2.js.
2.  aura-feature-grid          (6-icon benefit card)
3.  aura-video-reviews         (2 poster cards — ⚠️ needs real video/posters)
4.  aura-statistics            (4 stat cards — uniform white, navy is never used here)
5.  aura-expert-testimonial    (doctor quote — early proof beat; bg is
                               placement-aware: cream when right after stats,
                               paper back in the proof chapter — ⚠️ needs real photo)
6.  aura-science               (graduated-pressure bars + diagram slot)
7.  aura-benefits-alternating  (2 image/text rows — ⚠️ needs real images)
8.  aura-softness              (material ladder)
9.  aura-versus                (comparison table; mobile = 3-col grid)
10. aura-ugc                   (Instagram grid — ⚠️ needs real photos)
11. aura-reviews               (carousel; holds the #reviews anchor)
12. aura-product-details       (Description/Entretien/Livraison/Retours accordions,
                                extracted from the buy box so they sit low)
13. aura-faq
14. aura-promise               (guarantee band — mobile renders it as a list with row hairlines)
15. aura-pack-cta              (final offer)
Newsletter + footer are global, in sections/footer-group.json (not product.json).
ONE proof story everywhere: 4,8 ★ · 150+ avis (never 4,9 / 3 124 / 28 000+ —
those contradicted each other on one page and were purged June 2026).

### Chapter system (BOTH breakpoints — the core design discipline)
The PDP/homepage read as chapters: buy box → quick proof (feature grid +
videos) → education (stats, expert, science, benefits, softness) → comparison
(versus) → real proof (ugc, reviews) → faq/final offer (details, faq, promise,
pack-cta). Two tiers, NO divider lines (owner explicitly rejected them):
- Chapter starts get big top air (48px mobile / 88px desktop) + the only
  full-size h2 (26px mobile / 34–48px desktop).
- Internal blocks join tight (12px mobile / 44px desktop) with demoted
  subheads (18px mobile / 26px desktop) — science/benefits/softness/reviews.
- Desktop container: ALL section content = 1140px (--desk), chrome
  (header/footer/pills/hero) = 1240px (--desk-chrome). Never reintroduce
  full-bleed or per-section widths.
- Homepage chapter starts are placement-aware (`:has(...) + ...` rules keyed
  to section order) — they adapt if sections are reordered in the customizer.

## Gotchas (hard-won — don't relearn these)
- Schema `"default": ""` (empty string) → Shopify REJECTS the file on upload →
  the WHOLE theme 500s, even though `shopify theme check` passes. Omit the
  default key for optional settings. First thing to check on a 500 + "Upload
  Errors" page: grep new/edited sections for `'"default": ""'`.
- Sections with schema `"tag": "section"` render a `<section class="shopify-section">`
  WRAPPER; a bare `section{}` CSS rule then DOUBLE-pads them (content lands at
  ~34px instead of the 16px gutter). The mobile system zeroes those wrappers via
  `.shopify-section:has(> .X){padding:0}` — add new tag:section sections there.
- Dawn base.css `div:empty{display:none}` silently hides intentionally-empty
  <div>s (.ph image placeholders, colour dots, progress bars). Use
  `.x:empty{display:...}` overrides or a <span>.
- Dev server: `shopify theme dev` token expires (401/500) — just restart it.
  Local: http://127.0.0.1:9292/  Live store: https://fb0dkf-0h.myshopify.com/
  (live theme #143022194786 — push targets it; see "LIVE THEME" note above).
- Empty image placeholders use the light `.ph` hatch (kept subtle on purpose).
  Sections marked ⚠️ above need real media uploaded in the customizer. CONVENTION:
  any image slot with no uploaded image should render a `<div class="ph"><span
  class="ph-label">…</span></div>` (NOT nothing) so the owner can see where to drop
  each photo in the editor. E.g. aura-lp-advertorial gives every numbered reason a
  16:10 figure that falls back to a `.ph` labeled « Image · argument N », and the
  hero falls back to « Image éditoriale ». Mirror this for new image-bearing blocks.
- 🟢 PRICING IS BOGO & LIVE (June 2026): the owner created two ACTIVE automatic
  discounts in admin — « 2 paires achetées, 2 offertes » (buy 2 get 2 free) and
  « 3 paires achetées, 3 offertes » (buy 3 get 3 free). The cart applies them
  automatically. ✅ RESOLVED: the theme DISPLAY now matches — buy-box tiers, pack-CTA
  (102 € / 17 € la paire), and announcement (−50 %) all rebuilt to 1 paire / 2+2 /
  3+3. Cart adds `qty` items and Shopify frees half, so the display discount is 50 %
  for BOTH 2+2 and 3+3. If you ever re-touch these, keep all three surfaces in sync.
- Schema BLOCK `"name"` has a 25-character MAX. Exceed it and Shopify SILENTLY
  rejects the whole section file on upload — `theme check` passes, the push prints
  "Theme upload complete" + a success box, and `--json` reports `errors: NONE`. The
  real reason ("Invalid block 'x': name is too long (max 25 characters)") shows ONLY
  in the human-readable RED error box of a plain (non-`--json`) push. So: after pushing
  a NEW section, run a plain `shopify theme push --only <file>` and read the box, OR
  verify it actually persisted by re-pulling. A template that `{% render %}`s / lists a
  rejected section then fails with "Section type 'x' does not refer to an existing
  section file". Keep block names short (≤25 chars); put detail in setting labels.
- The versus table rows carry inline `style="display:contents"` — a stylesheet
  `display:none` on them needs `!important` to win.
- Adding a NEW block setting id: if the section file and the template JSON sync
  in the same second, Shopify validates the template against the OLD schema and
  silently STRIPS the new keys (renders schema defaults). Re-save the template
  AFTER the section is live (a byte-identical rewrite won't re-upload — change
  something real, e.g. trailing newline).

## ⚠️ Claims to reconcile before launch (legal / accuracy)
Do NOT present these as verified fact without the owner's sign-off:
- ✅ RESOLVED (June 2026): made-in-France origin claims removed from all copy —
  the theme no longer states where the product is made. Do not reintroduce them.
- CE marking + LPP/ordonnance eligibility ("éligibles LPP à partir de juin 2026").
- Review/customer counts (150+, 3 124 avis, 28 000+, 4,9★ / 92% recommend).
- ✅ RESOLVED (Oct 2026): survey stats (94 % / 8 h / 92 %, « 1 200 infirmières »)
  replaced on the PDP by guaranteed facts (18–25 mmHg · 30 nuits · 12 mois · 0
  couture); hero card « … dans 7 hôpitaux » → « pensées pour des gardes de 12 heures ».
  Don't reintroduce them without real data + a method link.
- Dr. Camille Roussel endorsement (real person, or disclose as illustrative?).
- Product admin meta description still says "compression médicale" (theme copy
  was switched to "graduée/vérifiée" — fix the admin product description too).

## Technical Rules
- Valid Liquid syntax always — run toolkit validation
- Schema blocks for every editable element
- LiquidDoc headers on every section file
- Mobile-first — test at 390px width
- Core Web Vitals: no layout shift, lazy load all images
- Font loading: preconnect Google Fonts in theme.liquid
- Build one section at a time — never batch multiple sections

## Reference Stores
- Color/typography confidence: Wellow (wearwellow.com)
- Warmth and whitespace: Sleepy Belly (sleepybelly.com.au)
- Page structure/flow: Everstride (everstridesocks.com)
- DO NOT replicate: Hushed Socks — too generic, 
  no clear target customer