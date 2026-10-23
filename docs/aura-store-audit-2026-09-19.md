# Aura store audit — 19 September 2026

**Verdict:** The visual foundation and core BOGO purchase flow are working. The store needs corrections to customer promises, proof, navigation, accessibility, and shipping configuration before scaling traffic. This was an audit only; no theme or admin settings were changed.

## Scope and evidence

- Audited the live `www.auralegs.com` storefront, desktop at 1280px and key mobile flows at 390 × 844px.
- Reviewed homepage, product page, cart drawer, initial checkout, all five pages listed in the public page sitemap (contact, story, sizes, delivery/returns, wearing guide), legal notice, terms, and refund/privacy policies.
- Inspected local Liquid, CSS, JavaScript, schema, SEO and form implementations. Live observations take precedence over stale repository notes.
- Ran Shopify Theme Check: **207 files, zero errors, 13 warnings across eight files**. Warnings include remote assets, undefined-object checks and unused assignments; they do not prove a live functional failure.
- Checked all 28 Aura section schemas for invalid JSON, empty-string defaults, and block names over 25 characters: none found.
- Tested no-size validation, one-pair addition, four-pair discount, six-pair discount, a mixed-colour six-pair pack, quantity increase, mobile menu, size modal, video play initiation, and checkout handoff. Removed all audit cart items afterward. No contact/newsletter submissions, customer details, payments or orders.
- Public HTTP response was 200, French locale, with HSTS and the expected live theme ID **143022194786**. Public robots.txt and sitemap were available.

**Limits:** This is not an admin-account, legal-certification, penetration, or fulfillment audit. Payment settlement, address-dependent shipping charges, tax calculations, delivery operations, returns operations, review provenance, manufacturing/test evidence and email delivery were not verified. No Lighthouse/CrUX or throttled Core Web Vitals measurement was obtained. No French-geolocated consent test was performed; the HTTP probe reached a Hong Kong edge. Do not infer French consent compliance from this session.

## Priority findings

P1 = fix before scaling traffic. P2 = fix in the next quality pass. P3 = maintenance and refinement.

### 1. P1 — Return promises contradict the actual refund policy

**Confirmed live.** Product details, FAQ, story and delivery page promise free returns after wearing the socks, sometimes after a full month of shifts. The refund policy requires unworn, unwashed goods, attached labels, and normally charges return postage to the buyer. It also asks for a reason despite saying no justification is required. The product details promise free exchanges, while the policy recommends returning and placing a new order.

**Impact:** A customer cannot know which promise applies. This directly undermines the principal purchase reassurance.

**Action:** Decide the actual commercial trial and return service, then align all sales copy, refund policy, CGV and support procedures. Distinguish that commercial promise from statutory rights. Have the hygiene exclusion and legal references reviewed; do not assume ordinary socks automatically qualify for every stated exclusion.

Evidence: [Refund policy](https://www.auralegs.com/policies/refund-policy), [delivery and returns](https://www.auralegs.com/pages/livraison-retours), [product](https://www.auralegs.com/products/aura-chaussettes-de-compression).

### 2. P1 — Care instructions conflict

**Confirmed live.** The product's Entretien accordion and wearing guide prescribe 30°C, air drying and no tumble dryer. The FAQ prescribes 60°C and gentle tumble drying. A featured review celebrates hot washing and warm drying; durability copy promises pressure retention after 100 washes at 60°C.

**Impact:** Customers could follow the wrong instructions and then dispute product durability or warranty coverage.

**Action:** Use the supplier-approved care specification everywhere, including packaging, email instructions, FAQ and guarantee wording. Verify the durability test before retaining its numeric claim. Do not rewrite genuine customer reviews to manufacture agreement; contextualize or select suitable authentic reviews.

Code: `sections/aura-product-details.liquid:43`. Live corroboration: [wearing guide](https://www.auralegs.com/pages/port).

### 3. P1 — Homepage final pack CTA opens the cart instead of the configurator

**Reproduced live with an empty cart.** Clicking « Composer mon pack 6 paires » opens an empty drawer. The homepage has no buy box, and the JavaScript fallback opens the cart.

**Action:** Route to the product with the six-pair tier selected and the configurator in view. Preserve the current in-page behavior when a buy box exists. Prefer a real product link as the non-JavaScript fallback.

Code: `assets/aura-cart.js`, `packBtn` handler near line 178.

**Acceptance:** From an empty homepage cart, the CTA reaches a six-pair configuration with a €102 total, requiring an explicit size before addition.

### 4. P1 — Strong proof claims are published without evidence established in this audit

**Confirmed publication; truth/provenance unverified.** Live copy includes:

- Testing in seven hospitals.
- A survey of 1,200 nurses and 94% / 92% outcomes.
- 150+ verified nurse reviews, named workplaces and long ownership periods.
- Pressure retention after 100 hot washes, zero red marks, faster recovery and fewer varicosities.
- Broad competitor claims about pressure, heat, rolling and material durability.

The social grid says « De vraies gardes » and presents customer attribution, yet displays bare `@` labels. At least two underlying filenames begin `ChatGPT_Image_...`. That is a provenance warning, **not proof by itself that every image or testimonial is fabricated**.

**Action:** Build an evidence register: exact claim, supporting report/customer record, consent/licence, date and approved wording. Remove or soften claims without support. Use genuine attributable customer media for customer proof; do not frame illustrative or generated imagery as a customer's documented experience. Verify hospital and professional affiliations before displaying them.

The FAQ says this is not a prescribed medical device, while other sections target post-operative recovery and make stronger health-outcome claims. Review the claims as a whole rather than relying on the disclaimer to resolve them.

### 5. P1 — European delivery promise conflicts with checkout destinations

**Confirmed in the checkout session.** The country selector contained only **France**. The delivery page promises Belgium, Switzerland, Luxembourg and all EU countries; CGV also promises EU delivery.

**Action:** Verify Shopify Markets, shipping zones, product availability and destination pricing. Enable the supported destinations or narrow the promise. Switzerland needs explicit handling because it is outside the EU.

**Acceptance:** A visitor can select every advertised destination and obtain a valid rate. Free delivery from €60 must be checked with an actual supported address; it was not proven by the drawer.

### 6. P1 — Cart code can report success when Shopify rejects an addition

**Confirmed in source; rejection path not forced live.** Both add functions parse JSON without checking `response.ok` or Shopify's error payload, then refresh the cart, open the drawer and show « Ajouté au panier ». A 422 inventory rejection can therefore look successful. There is no visible catch/error feedback or pending-request lock. Quantity requests also lack response validation and serialization.

**Action:** Validate responses, display Shopify errors in French, retain the selection, disable submit while pending, and serialize quantity changes. Announce errors accessibly. Keep successful-cart rendering based on Shopify's response.

Code: `assets/aura-cart.js:87` onward (`add`, `addItems`, `change`). Escape product/variant text before inserting it via `innerHTML`; this is hardening, not a demonstrated exploit.

### 7. P1 — Terms refer customers to a discontinued dispute platform

**Confirmed live.** CGV section 13 points to the European ODR platform. It closed on 20 July 2025. The observed terms do not identify a replacement consumer mediator. CGV also lists old XS/S/M/L sizes and « chaussettes de contention », despite the live catalogue using S/M, L/XL, XXL and the approved compression terminology. Its refund-policy reference appears as bracketed text.

**Action:** Update terms with the appropriate dispute-resolution information, correct catalogue wording and a working refund-policy link. Review the statutory references and current withdrawal mechanism requirements with qualified advice.

Sources: [live CGV](https://www.auralegs.com/policies/terms-of-service), [European Commission closure notice](https://consumer-redress.ec.europa.eu/site-relocation_en), [DGCCRF pre-purchase information](https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes-et-les-controles/commerce-en-ligne-le-consommateur-doit).

### 8. P2 — Visible controls and links lead nowhere

**Confirmed live and in source.** Header search produces no search field or navigation. FAQ size-guide and team-contact links use `#`. Instagram, TikTok and Facebook footer links also use `#`. Desktop FR / EN is display text rather than a working locale control.

**Action:** Wire useful destinations; remove controls for services that are not offered. Link the FAQ to the actual size page and contact page/mailbox. Keep the store French-only unless a real additional-language journey is intentionally implemented.

Code: `sections/aura-header.liquid:40`, FAQ saved block content, footer saved links, `sections/aura-announcement.liquid`.

### 9. P2 — Drawer, size modal and FAQ have accessibility gaps

**Confirmed live and in source.** The closed drawer remains in the accessibility tree and is only translated offscreen. It lacks modal semantics, focus transfer/trapping, inert background and focus restoration. Opening the size modal leaves focus on its opener behind the dialog. FAQ buttons lack `aria-expanded`/`aria-controls`; collapsed answers remain exposed in snapshots. Custom radio buttons do not implement a complete radio-group arrow-key interaction.

**Action:** Implement consistent dialog focus behavior, hide inactive surfaces from keyboard and assistive technology, expose accordion state, and provide native or complete custom radio behavior. Test Tab, Shift+Tab, arrows and Escape manually.

Code: `snippets/aura-globals.liquid:22`, `assets/aura-cart.js:26`, `sections/aura-featured-product.liquid:620`, `sections/aura-faq.liquid:30`, `assets/aura-v2.js:110`.

### 10. P2 — Changing the main size silently resets individually chosen pack colours

**Observed during the mixed-pack test and explained by source.** Choosing colours for individual pairs and then choosing the top-level size resets all colours to the top-level colour. `applyToAllPairs()` copies both colour and size on either control change.

**Action:** A size change should update sizes without overwriting customised colours. If a control intentionally applies to all pairs, label that behavior explicitly. Consider separate « Même taille pour toutes » / « Même couleur pour toutes » shortcuts.

Code: `sections/aura-featured-product.liquid:542` onward.

### 11. P2 — Delivery dates count calendar days despite the working-day promise

**Confirmed code and live output.** On Saturday 19 September, the buy box displayed Thursday 24–Saturday 26 September. The site promises 5–7 working days. The function adds calendar days and only advances an endpoint that lands on Sunday; it does not count working days or account for dispatch cutoff, holidays or destination.

**Action:** Base the estimate on the real dispatch/transit rules, or show a consistent general range. Reconcile « express », dispatch within 24 hours, and 5–7 working-day delivery.

Code: `sections/aura-featured-product.liquid:630`.

### 12. P2 — Mobile typography departs from the owner's shared layout rules

**Confirmed at 390px.** Video, statistics, benefits, softness, comparison, review and FAQ headings are centered; the project rules require left alignment. The shared CSS itself specifies centered heading groups. The size modal fits the viewport but its five-column table is cramped, with shoe-size ranges wrapping vertically.

**Action:** Restore heading alignment in the shared mobile system, not individual section overrides. Simplify mobile size guidance to the customer's decision-critical information, retaining detailed dimensions in an accessible secondary view. Preserve the existing 16px gutter and two-tier heading rhythm.

Positive: no document-level horizontal overflow was found on homepage or PDP at 390px; both measured `scrollWidth = 390`. The desktop homepage also fitted 1280px.

Code: `assets/aura-v2.css:2095` and surrounding shared mobile rules.

### 13. P2 — Newsletter has no explicit submission feedback

**Confirmed source gap, not an end-to-end delivery failure.** The customer form lacks `form.posted_successfully?` and `form.errors` rendering. Email uses a placeholder without an explicit label. The privacy sentence is plain text rather than a policy link.

**Action:** Add a persistent accessible label, French success/error messages and a real privacy link. Test a controlled signup and subscriber record when an authorized test address is available. No signup was submitted in this audit.

Code: `sections/aura-newsletter.liquid:17`.

### 14. P2 — Image delivery/accessibility can be improved; Core Web Vitals remain unmeasured

**Confirmed source/DOM.** Persona and UGC images are inline CSS backgrounds, without responsive image candidates, native lazy loading or meaningful image alternatives. The homepage hero is also presented as background media. Global Google Fonts and Dawn resources add dependencies; `aura-v2.css` is approximately **139.5 kB uncompressed locally**.

**Action:** Use responsive `<img>`/`picture` where images carry content, with meaningful French alternatives. Lazy-load below-fold media; prioritize the actual above-fold hero rather than lazily loading the LCP image. Profile before removing shared CSS or scripts. Run mobile Lighthouse plus field CWV when data exists.

Videos and media are present on the live store. The `.ph` class is also used on populated media, so counting that class is **not a reliable missing-image test**. Video play initiation succeeded; this audit did not review the complete clips or certify captions/audio.

### 15. P2 — Homepage and product use the same SEO title

**Confirmed live.** Both titles read « Aura — Chaussettes de compression – Auralegs ». The homepage-specific fallback does not apply when the admin has already supplied this title.

**Action:** Give the homepage a distinct nurse-focused title and retain product specificity on the PDP. Keep claims in metadata consistent with the approved evidence. Align social metadata fallbacks with the main metadata logic.

Positive: canonicals, French language, descriptions, Open Graph image and ProductGroup/variant offers were present. Product structured data showed €34 EUR offers, valid-looking variant URLs, three colours and three sizes. This is presence/content verification, not a Google Rich Results certification or confirmation of indexing.

Code: `layout/theme.liquid:34`, `snippets/meta-tags.liquid`.

### 16. P2 — Operational perks need a documented fulfillment mechanism

**Published promises; delivery unverified.** The site offers a surprise gift, 12-month replacement guarantee, future −10% referral benefit, monograms, on-site team fittings and replies generally within an hour. The refund policy instead quotes 48 working hours. No separate gift line appeared in the six-pair cart; this alone is not a defect if fulfillment adds it manually.

**Action:** Confirm the workflow, eligibility and terms for each promise, and align response times. Show gifts/referral benefits clearly enough that both customers and fulfillment staff know what is included. Verify actual payment methods before relying on the hardcoded Klarna/PayPal/Apple Pay reassurance.

### 17. P2 — Published wearing guide still contains an unfinished media slot

**Confirmed live.** `/pages/port` is in the sitemap and displays « VIDÉO OU PHOTO — L'ENFILAGE EN GESTES » instead of the demonstrated action.

**Action:** Upload the intended instructional media or intentionally remove the unfinished public block. Link the completed guide from useful pre/post-purchase locations.

### 18. P3 — Editor localization, editability and project notes need maintenance

**Confirmed source.** Many schema labels remain English. Core interface labels, cart messages and payment claims are hardcoded rather than exposed as editable section settings or locale strings. All 28 Aura sections have ordinary comment headers rather than actual LiquidDoc `{% doc %}` headers. This is project-convention debt, not a Liquid syntax failure.

Repository notes also disagree with reality: the live product title/type/colours appear updated, live sizes are S/M, L/XL and XXL, videos exist, and the live section sequence differs from the historical architecture. Do not reintroduce XS/S/M/L or diagnose missing uploads solely from those notes.

**Action:** Translate editor labels, expose merchant-editable content appropriately, adopt LiquidDoc deliberately, and update AGENTS.md after the owner confirms the current catalogue and design rules. Leave owner-supplied icon artwork intact.

## What worked

| Test | Observed result |
|---|---|
| Add without size | Blocked; first incomplete pair flagged |
| One pair, Bordeaux L/XL | 1 item, €34 |
| Four pairs | €136 subtotal, −€68 discount, €68 total |
| Six pairs | €204 subtotal, −€102 discount, €102 total |
| Mixed six-pair pack | Bordeaux ×4, Noir ×1, Gris ×1 correctly added after choosing size first; €102 total |
| Increase single-pair cart quantity | 2 items, €68 |
| Checkout handoff | Loaded in French; six-pair order summary retained €102 |
| Mobile navigation | Opened and exposed links |
| Product gallery/size UI | Real media and three current size choices present |
| 390px page width | No document-level horizontal overflow on homepage/PDP |
| Legal entity | AURALEGION LLC and Wyoming address present in legal notice/terms/refund footer |
| Local theme validation | Zero errors, 13 warnings |

The drawer uses separate paid/free lines for discounted identical variants; this is compatible with the observed Shopify automatic discount behavior. Do not classify those split lines as duplicate orders.

## Consent and measurement follow-up

No consent banner was observed in this session. The legal notice says one is shown on first visit. Because the session was not French-geolocated and consent behavior may be regional, **this is unverified, not a confirmed violation**. Test from France in a clean session, inspect actual analytics/advertising requests before and after refusal/acceptance, and verify a way to change the decision. [CNIL guidance](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite) distinguishes necessary storage from tracking that requires prior consent.

Shopify's `shop_events_listener` logged warnings during bundle additions: “Payload body and response have different number of items.” Orders were not affected in the observed flow, but analytics attribution should be tested for single and mixed bundles before trusting advertising reports. No GA4/Meta purchase-event or deduplication validation was performed.

## Recommended implementation order

1. Approve actual return, care, shipping, guarantee and evidence-backed claims; align admin policies and sales content.
2. Fix homepage pack routing and cart error/pending states; preserve customized pair selections.
3. Configure advertised markets, remove dead controls, update dispute-resolution information and finish the wearing guide.
4. Fix dialog/accordion/radio accessibility, mobile heading alignment and newsletter feedback.
5. Optimize images and metadata; validate French consent, analytics, shipping rates, payment methods and fulfillment with controlled tests.

Before editing any saved template/section JSON, pull the relevant file from live theme **143022194786**. Preserve the owner's uploaded media/settings. Run Theme Check and retest at 390px. Publish or commit only when requested.

## Acceptance checklist for the fixes

- Homepage six-pair CTA reaches the correct preselected pack.
- Every public return/care/delivery claim agrees with policy and operations.
- One/four/six pairs and mixed variants retain correct prices and colours through checkout.
- Unavailable stock, rejected requests, offline failures and repeated clicks produce clear accurate feedback.
- Advertised destinations are selectable and have valid rates; €60 free-shipping threshold verified after discounts.
- Keyboard focus stays in an open dialog, returns on close, and cannot enter hidden drawers/answers.
- Mobile headings and size guidance follow the shared layout rules; no overflow at 390px.
- Real social accounts/links and evidence-backed testimonials replace unverified proof.
- Newsletter success/error feedback and a controlled signup are verified.
- France-specific consent behavior, analytics events and payment/fulfillment paths are tested before scaling.
