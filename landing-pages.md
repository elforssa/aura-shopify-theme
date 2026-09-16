# Landing pages — Meta ads test log

One landing page = one Shopify **page** + a `templates/page.<handle>.json` template that
loads a chosen stack of `aura-*` sections. Each variant isolates **one variable**; everything
else is held identical so the test stays valid.

## Test design discipline
- **Shared tail (identical on every variant):** `aura-featured-product` (the buy box, bound to
  the Aura product) → `aura-reviews` → `aura-faq` → `aura-pack-cta`. This is the real converter;
  keeping it constant means the *format/head* is the only thing being measured.
- **Format-specific head** is what changes per test.
- Same offer everywhere: BOGO 1 / 2+2 / 3+3, −50 %, « 17 € la paire ». Same proof: 4,8 ★ · 150+ avis.
- On a page template the buy box needs `"featured_product": "aura-v2-bas-de-contention"` set
  (it does NOT auto-bind like it does on a product template).

## How a template becomes a live URL (manual, one-time per page — CLI can't do it)
The pushed `page.<handle>.json` is only the *template*. To get a public `/pages/<handle>` URL:
Admin → Online Store → **Pages** → **Add page** → set the handle to `<handle>` (Edit website SEO →
URL handle) → in **Template** (right sidebar) pick `page.<handle>` → Save.

## Navbar-free LPs (chrome-stripped for paid traffic)
`layout/theme.liquid` skips `header-group` for any template whose suffix contains `lp-format`
(and adds a `lp-page` body class). So every `page.lp-format-*` renders with **no navbar / no
announcement bar** — just the content + footer. Add `lp-format` to a new template's suffix to
opt it in; nothing else needed.

## CTA destination (decided): button → PRODUCT PAGE, not direct checkout
Socks need a **size** (XS–L) + colour — required variants with no valid default (theme forces
the choice). You can't pre-load checkout without a size. So advertorial CTAs link to
`/products/aura-v2-bas-de-contention` (2+2 tier is the default there); the buyer picks size on
the product page (last trust layer: reviews, guarantee) then checks out. Direct-to-checkout is
off the table for this reason.

## aura-lp-advertorial section — one engine, many formats
The `raison` block has a `numbered` checkbox (default **true** = listicle, the A/D variant). Set
it **false** for a flowing **story beat** (no number, no hairline rule) — that's how B's
narrative advertorial is built. The same section also has these reorderable BLOCK types and
section-level options (all optional, used heavily by **Variant D**, the Hollow clone):
- block `compare` — comparison table (Aura vs other), rows `r1l/r1b/r1o`…`r5l/r5b/r5o`.
- block `callout` — TL;DR box (`tag` + `body`).
- block `promo` — navy promo banner (`big`/`head`/`sub`/`deadline`/`label`/`link`).
- block `cta` — intercut CTA (used by B's mid-story button).
- settings `rating_quote`/`rating_author` (★ header line), `hide_hero`, `close_badge`/
  `close_badge_text` (round guarantee badge), `sticky_show`/`sticky_label`/`sticky_cta`/
  `sticky_link` (+ optional `sticky_deadline` ISO date → live JS countdown).
One section serves story, listicle, and full Hollow-clone formats.

⚠️ **Sticky bar = no fake timer by default.** Variant D's sticky bar shows a label + CTA but
**no countdown** (`sticky_deadline` left blank) — an evergreen/fake "sale ends in…" timer is a
Meta-ads + EU consumer-law (omnibus) risk. Only set `sticky_deadline` to a real end date if the
offer genuinely ends then.

## Running on Meta
One URL per variant, one ad set each, split budget, identical creative. Winner becomes the new
base; the next test isolates the next variable (hook → offer framing → hero image …).

## Test 1 — FORMAT (which page structure converts cold nurse traffic best)
3-way A/B/C. Head differs, shared tail identical.

| Variant | Handle | Head format | Status |
|---|---|---|---|
| A | `lp-format-advertorial` | Advertorial / listicle (`aura-lp-advertorial`) | ✅ live — **needs page created in admin** |
| B | `lp-format-direct` | **Story advertorial** (Hollow-style narrative, no buy box, CTA → product page) | ✅ live — **needs page created in admin** |
| C | `lp-format-switch` | **DR product LP** — buy box (`aura-featured-product`) → problem (`aura-statistics`, reframed) → mechanism (`aura-science`) → 6-feature grid (`aura-feature-grid`) → proof (`aura-video-reviews` + `aura-reviews`) → objections (`aura-faq`) → guarantee (`aura-promise`) → repeat offer (`aura-pack-cta`). Rebuilt Aug 2026; no buy box duplicated (featured-product has hardcoded IDs — 2nd instance breaks its JS). | ✅ live — **needs page created in admin** |
| D | `lp-format-listicle` | **Full Hollow clone** — "10 raisons…" numbered listicle (`aura-lp-advertorial`): rating quote, comparison table block, TL;DR callout, 10 numbered reasons, mid-list promo banner, guarantee badge, sticky offer bar; no buy box, CTA → product page | ✅ live — **needs page created in admin** |

**Shared tail (identical in all three):** `offer` (aura-featured-product, `featured_product:
aura-v2-bas-de-contention`) → `reviews` → `faq` → `packcta`. FAQ/reviews use the *safe* copy
(30° wash; no CE/LPP medical claims — Meta flags those on cold traffic). Section key for the buy
box is `offer`, so any head CTA can scroll to it with `href="#shopify-section-offer"` (B's hero
CTA does this; Shopify wraps each section as `id="shopify-section-<key>"`, no custom JS needed).

Result / winner: _TBD_
