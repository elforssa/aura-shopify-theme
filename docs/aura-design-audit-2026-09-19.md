# Aura — design audit, 19 September 2026

Aura has a recognizable premium foundation: navy, warm paper, restrained coral, strong headings, and a distinctive wordmark. The largest opportunities are purchase clarity, readable mobile controls, consistent typography, and credible nurse-specific proof. Preserve the identity; simplify the experience around it.

This is an audit and implementation brief. No theme files, settings, catalogue data, or live content were changed.

## Scope and evidence

- Live homepage and product page inspected visually at 1440px desktop and 390 × 844px mobile; homepage also checked at 768 × 1024px.
- Mobile sizing page, size modal, contact page/form, story opening, delivery opening, newsletter, footer, sticky purchase bar, and empty drawer inspected.
- Live DOM measurements and computed styles corroborated with local Liquid/CSS/JavaScript. Local saved settings are not assumed to represent current editor settings.
- Final homepage pack CTA reproduced; modal opening/closing inspected. No products were added, forms submitted, or orders created in this review.
- Theme Check: 207 files inspected, **0 errors, 13 warnings across 8 files**. Warnings do not establish visual correctness.
- Existing `aura-store-audit-2026-09-19.md` was read as background and left unchanged. Findings below distinguish current observations from source-only concerns.

This is a design/UX review, not conversion analytics, a complete accessibility certification, legal review, or performance benchmark. Checkout, populated cart, unpublished landing pages, every breakpoint, video captions/audio, and every support-page section were not visually retested. No conversion uplift is claimed. Page dimensions are approximate snapshots of the observed state.

## What to preserve

- The navy/paper/cream palette is coherent and appropriate for a premium nurse-focused brand.
- Geist headings and the Instrument Serif wordmark give the brand recognizable character.
- Desktop product photography is large and legible; thumbnails and the selected colour ring are easy to discover.
- Pack totals and per-pair prices appear together. Four pairs at 68 € and six at 102 € are understandable once reached.
- Main size controls include shoe-size ranges and require a deliberate choice.
- The 390px homepage and PDP have no document-level horizontal overflow. Both measured 390px scroll width. The 768px homepage also fits.
- Contact fields have visible labels, spacious inputs, and a clear submission button.
- The final navy offer chapter creates useful emphasis. Keep the owner's artwork and shared card/spacing system.

## Priority findings

P1 = address first because it breaks a decision or a central brand rule. P2 = next design pass. P3 = finishing work. Priority reflects this review's judgment, not measured revenue loss.

### 1. P1 — The final homepage purchase action leads to an empty cart

**Observed live and confirmed in source.** Clicking « Composer mon pack 6 paires » on the homepage opens the empty drawer. The URL stays `/`; no configurator is shown. The page's most complete offer therefore ends in a dead end.

**Change:** use a real product link that opens the six-pair configuration and brings it into view. Preserve explicit size selection. Keep the existing in-page configuration behavior only when a buy box exists.

**Acceptance:** from an empty homepage cart, the CTA reaches a six-pair offer at 102 €, with colour/size choices and a clear next action.

Source: [cart handler](/Users/elforssa/Desktop/aura-shopify/assets/aura-cart.js:178).

### 2. P1 — Dawn overrides the intended body font

**Measured live.** The body and supporting paragraphs compute to `Assistant, sans-serif`; headings and eyebrows explicitly use Geist. Examples include the product subtitle, size guidance, guarantee text, science paragraph, and testimonial copy.

Aura's stylesheet sets Geist on `body`, but `layout/theme.liquid` subsequently declares `font-family: var(--font-body-family)`. This creates an unintended three-font interface and makes the supporting copy feel narrower and lighter than the headlines.

**Change:** resolve the font ownership in the shared theme layer. Keep Geist for body/UI and the owner's limited serif accents. Recheck wrapping after the correction; changing font metrics will affect buttons, navigation, tables, and card heights.

**Acceptance:** computed body/UI font is Geist across homepage, PDP, support pages, and drawer, with only intentional serif exceptions.

Source: [Aura font load](/Users/elforssa/Desktop/aura-shopify/layout/theme.liquid:25), [later body declaration](/Users/elforssa/Desktop/aura-shopify/layout/theme.liquid:274).

### 3. P1 — The expanded pack builder delays the purchase action

**Measured at 390px.** Four pairs are selected by default. The page shows a global colour and size selector, then repeats colour and size for each of four pairs. The primary add button starts around **y = 1,662px**. The six-pair alternative appears below the expanded four-pair editor, making the offer comparison unnecessarily long. The desktop add button also falls below the first 1,000px viewport.

**Change:** retain all three compact offer rows together. Let the shopper explicitly choose one size for the pack, then reveal optional per-pair customization through « Personnaliser chaque paire ». Keep the total and primary CTA adjacent to the compact offer choice. Preserve all mixed-size/mixed-colour capabilities without showing every control initially.

**Acceptance:** customers can compare 1/4/6 pairs without scrolling through a configuration form; the common same-size purchase uses one explicit size decision. No size is silently preselected.

### 4. P1 — Per-pair colour targets are too small for comfortable touch use

**Measured live.** Individual colour buttons are **18 × 18px**, while per-pair size buttons are approximately **34 × 56px**. Main colour buttons are 42px square. The repeated miniature controls are the weakest part of an otherwise spacious interface.

**Change:** provide approximately 44px touch areas around swatches, with visible selection and accessible colour names. If this cannot fit alongside three size buttons, use separate rows or a focused editor for each pair.

The 44px recommendation is a comfort target, not a claim that WCAG AA mandates 44px. WCAG 2.2's minimum target criterion uses 24px with exceptions, including spacing; the existing 18px size alone is insufficient to declare a formal failure. [W3C target guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

Source: [bundle swatches](/Users/elforssa/Desktop/aura-shopify/assets/aura-v2.css:775).

### 5. P1 — Sizing presents manufacturing measurements as a shopping decision

**Observed live.** The modal compresses five columns into the phone width. Shoe ranges wrap across lines. The standalone table has tightly packed, colliding header text. Its chart starts around y = 1,060px after three instruction cards and an illustration.

There is also a visual contradiction: the page says no tape measure is needed, while the illustration explicitly shows measuring the calf. The table supplies flat garment dimensions rather than that calf measurement.

**Change:** lead with a simple shoe-range → size mapping. Put detailed garment measurements in a secondary disclosure. Use an illustration matching the approved sizing method; do not invent a calf-fit range. Move the actual answer above the instructional material.

**Acceptance:** S/M, L/XL and XXL can each be matched to their full shoe range without zooming, clipped headings, or unnecessary measurement instructions.

Live: [size guide](https://www.auralegs.com/pages/guide-des-tailles).

### 6. P1 — Proof looks polished but is insufficiently attributable

**Observed live.** Six social tiles display only `@`, with no usable identity in their labels. The imagery mixes scrub/lifestyle scenes, outdoor exercise, fashion and retail. One image includes an English timestamp. Stats cite 1,200 nurses; the hero claims seven hospitals; review cards carry verified labels. This review did not establish their provenance.

**Change:** use a smaller, documented set of nurse-specific photos and testimonials with permission and meaningful attribution. Give numerical evidence a concise method/source note. If imagery is illustrative, describe it accordingly rather than placing it under « De vraies gardes » as customer evidence.

**Acceptance:** every testimonial, professional affiliation, customer photo and numerical proof point has an identifiable internal source; visible attribution is complete where appropriate. Do not manufacture identities or rewrite genuine reviews.

Source: [social tiles](/Users/elforssa/Desktop/aura-shopify/sections/aura-ugc.liquid:16).

### 7. P2 — Mobile hero puts the CTA just below the first screen

**Measured live.** On the 390 × 844px homepage the hero photo comes first, then rating, headline, paragraph, four benefits, and the purchase CTA at approximately **y = 848px**. The initial screen contains no purchase button. At 768px, the text/CTA precedes the image and the CTA is around y = 424px.

**Change:** keep the mobile photo-first direction but reduce its vertical demand and place the CTA directly after a shorter problem/outcome paragraph, ahead of secondary benefits. Test on typical phone heights instead of designing only for a tall viewport.

The headline identifies a shift duration but does not name the problem. A possible direction is « Les jambes lourdes n'ont pas à finir votre garde avec vous. », followed by factual product information and a simple CTA. Final claims require evidence; this is a copy direction, not approved sales copy.

### 8. P2 — Too much education separates the opening from the offer

**Measured live.** The mobile homepage is roughly **8,485px** tall. The hero purchase CTA is at y ≈ 848px and the final pack CTA at y ≈ 7,357px. Between them are science, material rankings, multiple audiences, comparison, social images, reviews and FAQ. The mobile PDP is roughly **10,230px** tall in its default pack state.

Length is not inherently a defect, but several sections repeat the same compression/softness/proof argument before offering another natural purchase decision.

**Change:** put nurse-specific proof and a compact offer summary earlier. Give each education block one distinct job. Add a contextual product CTA after the first convincing proof beat, and shorten duplicated copy before reducing meaningful whitespace.

**Acceptance:** a visitor who is convinced midway through the homepage has a visible product action nearby, without searching the header or reading to the end.

### 9. P2 — Mobile heading alignment breaks the agreed shared system

**Measured live.** Video, statistics, benefits, softness, comparison, reviews and FAQ headings compute to centered alignment, while science and the final offer are left aligned. This is explicitly contrary to the supplied mobile design rule. The shared CSS itself applies the centering.

The 26px chapter / 18px internal-heading distinction is mostly present and should be retained. The newsletter currently computes to 31.2px, larger than chapter headings.

**Change:** restore left alignment through shared selector groups and keep the two-tier scale. Review support-page introductions with the same rule. Do not patch sections with independent gutters or padding.

Source: [mobile heading system](/Users/elforssa/Desktop/aura-shopify/assets/aura-v2.css:2095).

### 10. P2 — Small coral text lacks sufficient contrast

**Measured from brand colours, corroborated by live computed eyebrow styles.** Coral-deep `#C76D54` on paper `#FBF8F3` is approximately **3.45:1**; on cream `#F4EFE7`, **3.19:1**. Eyebrows are commonly 10.5–12px and do not qualify as large text. Normal text needs 4.5:1 under the referenced AA criterion. [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

**Change:** introduce an accessible darker coral specifically for text, or use navy for small labels. Retain the current coral for approved fills and decorative accents. Muted text on paper is about 5.34:1; navy-deep on coral is about 7.86:1, so the palette does not need wholesale replacement.

### 11. P2 — The sticky bar hides the information needed to trust its action

**Observed at 390px.** The sticky summary truncates to « Aura — Bor... », shows 68 €, and says « Ajouter au panier ». The size line is hidden on mobile, including when the size is still unchosen. Pack quantity is not visible in that summary.

**Change:** show the decision state: « 4 paires · 68 € », plus size where available. Before completion, label the action « Choisir ma taille » or « Compléter mon pack » and take the shopper to the missing choice. Use add-to-cart wording only when the selection is complete.

Source: [sticky markup](/Users/elforssa/Desktop/aura-shopify/snippets/aura-globals.liquid:11), [hidden mobile size](/Users/elforssa/Desktop/aura-shopify/assets/aura-v2.css:1439).

### 12. P2 — Dialog and empty-state design is incomplete

**Observed live and corroborated in source.** Opening the size guide leaves focus on the trigger. Opening the cart via the pack CTA leaves focus on the CTA behind it. The closed drawer remains in the accessibility snapshot. The empty cart still shows subtotal, a −0 € reduction, delivery, total and a payment button, but no product-return action.

**Change:** add modal semantics, focus transfer/trapping and restoration, and hide inactive surfaces from interaction. Create a deliberate empty state with a short message and « Découvrir les chaussettes ». Show order totals and checkout only when there are items. Expose FAQ expanded state and answer relationships.

**Acceptance:** keyboard users stay within an open dialog, Escape closes it, and focus returns to the opener. Empty-cart users have a useful next step.

Sources: [drawer](/Users/elforssa/Desktop/aura-shopify/snippets/aura-globals.liquid:22), [FAQ buttons](/Users/elforssa/Desktop/aura-shopify/sections/aura-faq.liquid:30).

### 13. P2 — Gallery content is repetitive and the first image contains embedded copy

**Observed live.** Seven thumbnails concentrate on the same Bordeaux product and similar leg/product angles. The opening image includes benefit text and icons within the image itself. On mobile this occupies about 377px vertically before product information.

**Change:** establish an intentional gallery sequence: clear product/lifestyle image, cuff detail, seamless toe, knit detail, putting them on, and colour reference. Keep informative text as editable HTML where practical, with descriptive French alt text. Use the supplied owner icons unchanged.

**Acceptance:** each gallery frame answers a distinct purchase question and important copy remains editable and readable at 390px. This is an art-direction recommendation, not a finding that all current imagery is unusable.

### 14. P2 — The audience broadens before the core nurse story is fully established

**Observed live.** The homepage expands from nurses to standing professions, maternity/post-op, travel and sport. The social grid reinforces that breadth. The story page is more focused on nursing than the main homepage.

**Change:** keep female nurses as the visual and verbal through-line. Move secondary uses to supporting content if needed. Do not add medical use-case claims without appropriate substantiation.

Copy polish: « Conçus » and « Pensés » in homepage headings do not agree with « chaussettes ». The product badge says « BEST-SELLER » despite the French-only instruction. « Essai 30 nuits » sounds borrowed from sleep products; use a consistent approved 30-day formulation.

### 15. P2 — Promise inconsistencies weaken the reassurance design

**Observed in this session.** Product-care content says 30°C and no tumble dryer; FAQ content says 60°C and gentle tumble drying. The final offer says express delivery while specifying 5–7 working days. The product displays a precise delivery date range, adding another promise to reconcile.

**Change:** establish approved care, dispatch, delivery and trial wording, then use it consistently. A beautifully styled reassurance strip cannot resolve contradictory promises. The existing broader store audit also reports refund-policy conflicts; those policy conclusions were not independently re-audited here.

### 16. P2 — Navigation includes unfinished affordances

**Observed DOM/source.** FAQ size-guide and team-contact links point to `#`; social footer links also point to `#`. Header search has a button but no evident implementation in the inspected section. Desktop « FR / EN » is text that looks like a language control.

**Change:** link the real size/contact destinations; remove social/search/language affordances until their journeys exist, or implement them completely. A single-product shop can have very simple navigation.

Source: [header search](/Users/elforssa/Desktop/aura-shopify/sections/aura-header.liquid:40).

### 17. P2 — Micro-layout defects detract from the premium finish

**Observed at 390px.** The navy material card's corner badge collides with its « La plus douce » level label. Footer « Mentions légales » breaks across lines in the middle of the link group. Some support text and guarantee copy is 12.5px, giving decision-relevant information too little presence.

**Change:** put the material badge in normal layout flow on mobile; make legal links wrap as whole items; use approximately 15–16px for meaningful reading text and reserve smaller sizes for genuinely secondary metadata. Recheck these after correcting the body font.

Sources: [material badge](/Users/elforssa/Desktop/aura-shopify/assets/aura-v2.css:1024), [footer links](/Users/elforssa/Desktop/aura-shopify/assets/aura-v2.css:1323).

### 18. P2 — Selection changes need predictable feedback

**Source-confirmed; not re-exercised live here.** `applyToAllPairs()` copies both global colour and size into every pair. Changing global size can overwrite individually chosen colours. Cart additions also lack response validation before their success UI in the inspected source.

**Change:** update only the property the shopper changed. Make any reset explicit. Define pending, success, rejected-stock, network-error and incomplete-selection states in French, and preserve user choices after failure.

**Acceptance:** changing size preserves customized colours, repeated taps do not produce duplicate pending additions, and a rejected request never displays success.

Sources: [selection synchronization](/Users/elforssa/Desktop/aura-shopify/sections/aura-featured-product.liquid:546), [cart requests](/Users/elforssa/Desktop/aura-shopify/assets/aura-cart.js:87).

### 19. P3 — Newsletter and footer need the same state quality as the buy box

**Observed/source-confirmed.** Newsletter email relies on placeholder text. No success/error rendering is present in the section. The privacy sentence has no link. Mobile newsletter-to-footer composition is otherwise coherent, but small secondary text loses prominence against the dark background.

**Change:** add a persistent label, French success/error messages, and an actual privacy link. Verify contrast for the final rendered dark-background text. Use authentic payment assets if replacing the current text chips; never show unavailable payment methods.

Source: [newsletter form](/Users/elforssa/Desktop/aura-shopify/sections/aura-newsletter.liquid:17).

### 20. P3 — Editor and media implementation drift from the design contract

**Source-confirmed.** Many schema labels remain English, including « Heading », « Brand name » and « Email placeholder ». Sticky/drawer copy is partly hardcoded. UGC uses CSS background images without meaningful image alternatives or responsive image candidates. The story quote adds a serif use beyond the explicitly permitted placements.

**Change:** translate editor labels; make relevant customer-facing copy editable through settings/translations; use responsive semantic images for meaningful content. Keep editor placeholders useful without publishing unfinished attribution. Consolidate existing CSS ownership before adding another override layer.

Performance remains unmeasured. Optimize the actual above-fold image for prompt loading and reserve lazy loading for below-fold media; obtain a mobile performance trace before claiming CWV improvements.

## Page-level design direction

| Surface | Keep | Change first |
|---|---|---|
| Homepage | Warm hero image, strong headline scale, navy close | Earlier visible CTA; problem/outcome framing; nurse-specific proof; contextual mid-page offer |
| Product | Large gallery, explicit sizing, transparent pack totals | Compact pack comparison, optional customization, touch targets, decision-aware sticky bar |
| Science/materials | Legible pressure bars, limited navy emphasis | Shorten repeated explanations; source comparisons; fix material badge collision |
| Reviews/social | Real-life outcome framing | Complete attribution, relevant photos, evidence for verification labels |
| FAQ | Clear questions and contact route | Fix destinations, semantics, conflicting answers; prioritize size/care/delivery concerns |
| Sizing | Simple S/M–XXL range | Answer-first table, consistent illustration, optional garment dimensions |
| Contact | Warm tone, labels, spacious fields | Bring form/action closer to the opening; condense secondary team-order material on mobile |
| Story | Nurse-specific opening | Use identifiable development evidence; align imagery and serif usage with the design rules |
| Delivery | Clear 5–7-day and free-delivery cards | Reconcile all timing language; provide tariff visibility when operationally available |
| Drawer | Clear large total and close control | Useful empty state; focus management; honest loading/error/success states |
| Footer/newsletter | Warm/dark chapter transition | Working destinations, whole-link wrapping, labelled signup and feedback |

## Recommended sequence

1. **Repair decisions:** final homepage CTA, compact pack architecture, usable sizing, larger touch targets, selection preservation and dialog states.
2. **Repair the shared visual system:** Geist body ownership, mobile left alignment, accessible small-text coral, readable supporting type, sticky summary and badge/footer collisions.
3. **Strengthen the story:** shorter hero, nurse-focused proof, credible attribution, differentiated gallery and an earlier offer beat. Reconcile all customer promises before making them more prominent.
4. **Finish supporting journeys:** newsletter feedback, real links, editor labels, semantic images and measured performance work.

For implementation, preserve the existing artwork, restricted serif placements, colour order, 14px card system, shared gutters and chapter rhythm. All new content controls must remain editable in Shopify. Pull current live template/settings JSON before changing it; work one section at a time. Do not push or publish as part of this audit.

## Completion criteria for a subsequent design pass

- Verify 390px, tablet and desktop after the Geist correction; check long French labels and wrapped prices.
- Every purchase CTA leads to the promised configuration/action.
- Customer can compare all pack offers before opening per-pair details.
- Full size ranges and essential labels remain readable without zoom.
- Sticky action accurately reflects incomplete versus ready-to-buy state.
- Dialogs and FAQ work with keyboard focus and expose their state correctly.
- No unidentified `@` labels, dead `#` destinations, or unsupported verification badges.
- Ordinary small text meets the chosen contrast standard; swatches have comfortable touch areas.
- All content remains editable, with French editor labels and consistent approved claims.
- Re-run Theme Check, verify server persistence if changes are later uploaded, and assess performance with actual measurements.
