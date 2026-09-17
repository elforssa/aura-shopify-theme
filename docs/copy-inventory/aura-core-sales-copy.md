# Aura — Core storefront sales copy

Audit-ready selection from the completed master inventories. No copy audit, rewriting, scoring or recommendations.

**Scope:** 2 pages · 28 active sections/components · 503 unique copy elements · 10 external placeholders · 262 “claim to verify” flags.

Count each retained master ID once; shared sections appear on both complete pages but are counted once. Customer-facing elements include exact dynamic-format records; external placeholders are counted separately. Section count is 26 enabled theme instances plus 2 purchase components; SEO metadata blocks are separate.

Active means enabled/eligible according to the completed inventories, not verified against a live storefront. User-triggered FAQ, size-guide, cart and bundle states remain conditional. Master copy remains authoritative. Narrow read-only checks of the material-badge gate and sticky-bar CSS were used only to remove non-visible candidates, not to extract or change copy. No live Shopify rendering was accessed.

exact_copy and source_expression are preserved byte-for-byte as decoded strings from the master JSON, checked against the master Markdown. HTML, interpolation, punctuation and current errors remain unchanged. Null copy is an existing dynamic record or external placeholder, never invented copy.

One marker per flagged retained element: claim to verify. No substantiation judgment, severity, conclusion or proposed change is attached. Flags are counted by unique element ID, not by repeated display or sentence.

The navigation, newsletter and footer are expanded on both pages for reading in context. IDs refer to the same shared elements; these repeated displays do not inflate counts. Copy inside code blocks is verbatim. All surrounding labels are inventory metadata.

## Page map

| Page | Body sections | Shared in-flow sections | Conditional purchase components |
|---|---:|---:|---|
| Homepage | 10 | 4 | Cart drawer and purchase feedback |
| Product page | 12 | 4 | Sticky purchase bar, Cart drawer and purchase feedback |

Sources: [master Markdown](aura-website-copy-inventory.md) · [master JSON](aura-website-copy-inventory.json) · [packet JSON](aura-core-sales-copy.json).


## Homepage

Saved template: `templates/index.json`. Disabled sections are omitted; the saved section position is retained alongside the displayed sequence.

Flow: Announcement bar → Navigation → Hero → Compression explanation → Material comparison → Audience cards → Product comparison → Customer-photo grid → Reviews → FAQ and contact reassurance → Guarantee and service promises → Final pack offer → Newsletter → Footer and legal navigation.

### 1: Announcement bar

Section ID: `shared--aura_announcement` · Source section/component ID: `aura_announcement` · Enabled: **yes**.
Page position: 1; saved group/body position: 1.
Role: Introduce the current delivery and pack offer.
Source: `sections/header-group.json`, `sections/aura-announcement.liquid`. Active template setting: `sections.aura_announcement`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-0372A5478F7D15](#aura-0372a5478f7d15) (Product prices, availability and discounts), [AURA-523441885C0B00](#aura-523441885c0b00) (Checkout, shipping and payments), [AURA-5D2B5979483D52](#aura-5d2b5979483d52) (Policies and legal pages).

#### Section introduction and controls

<a id="aura-c79cc7b205ed82"></a>

**shipping_text** · `AURA-C79CC7B205ED82` · paragraph — **claim to verify**

```text
Livraison offerte dès 60 €
```
Source: `sections/header-group.json` · `sections.aura_announcement.settings.shipping_text` · active template setting. Editability: **Theme Editor**.
Context: Setting shipping_text; section aura_announcement
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-5795F5B5709BEA](#aura-5795f5b5709bea). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-47e1d402444839"></a>

**sale_text** · `AURA-47E1D402444839` · paragraph — **claim to verify**

```text
Offre packs : jusqu'à −50 %
```
Source: `sections/header-group.json` · `sections.aura_announcement.settings.sale_text` · active template setting. Editability: **Theme Editor**.
Context: Setting sale_text; section aura_announcement
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
<a id="aura-7f26b4bdc72eca"></a>

**lang_text** · `AURA-7F26B4BDC72ECA` · paragraph

```text
🇫🇷 FR <span style="opacity:0.4">/</span> EN
```
Source: `sections/header-group.json` · `sections.aura_announcement.settings.lang_text` · active template setting. Editability: **Theme Editor**.
Context: Setting lang_text; section aura_announcement
Rendering: expected from repository. Announcement language display hidden at <=749px.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 2: Navigation

Section ID: `shared--aura_header` · Source section/component ID: `aura_header` · Enabled: **yes**.
Page position: 2; saved group/body position: 2.
Role: Orient the visitor and provide navigation and cart access.
Source: `sections/header-group.json`, `sections/aura-header.liquid`. Active template setting: `sections.aura_header`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: none identified in the master.

#### Section introduction and controls

<a id="aura-00120a1055dfd1"></a>

**accessibility label** · `AURA-00120A1055DFD1` · accessibility label

```text
Menu
```
Source: `sections/aura-header.liquid` · `line:17:aria-label:57f5f5e` · hardcoded Liquid. Editability: **code only**.
Context: div.header-row > div.header-left > button.nav-burger
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.

#### link_left l0 — block 1

<a id="aura-675a3c3f8bb363"></a>

**label** · `AURA-675A3C3F8BB363` · label / microcopy

```text
Boutique
```
Source: `sections/header-group.json` · `sections.aura_header.blocks.l0.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (link_left, l0); Setting label; section aura_header
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### link_left l2 — block 2

<a id="aura-68ace76111335b"></a>

**label** · `AURA-68ACE76111335B` · label / microcopy

```text
Notre histoire
```
Source: `sections/header-group.json` · `sections.aura_header.blocks.l2.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (link_left, l2); Setting label; section aura_header
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-30B317C59F3E0B](#aura-30b317c59f3e0b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### link_left l3 — block 3

<a id="aura-af9455bdc5252d"></a>

**label** · `AURA-AF9455BDC5252D` · label / microcopy

```text
Guide des tailles
```
Source: `sections/header-group.json` · `sections.aura_header.blocks.l3.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (link_left, l3); Setting label; section aura_header
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-A6214F665A767A](#aura-a6214f665a767a), [AURA-9379E2489F28BE](#aura-9379e2489f28be). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### link_right r1 — block 4

<a id="aura-5ee3cc216bee74"></a>

**label** · `AURA-5EE3CC216BEE74` · label / microcopy

```text
Livraison & retours
```
Source: `sections/header-group.json` · `sections.aura_header.blocks.r1.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (link_right, r1); Setting label; section aura_header
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-88EB2AD33E06EC](#aura-88eb2ad33e06ec). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### link_right r2 — block 5

<a id="aura-fc7f180eea66bb"></a>

**label** · `AURA-FC7F180EEA66BB` · label / microcopy

```text
Contact
```
Source: `sections/header-group.json` · `sections.aura_header.blocks.r2.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (link_right, r2); Setting label; section aura_header
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-A5D72A8E9C6587](#aura-a5d72a8e9c6587). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### Section closing copy and controls

<a id="aura-cc4e1ca10aa7a5"></a>

**logo_text** · `AURA-CC4E1CA10AA7A5` · paragraph

```text
Aura
```
Source: `sections/header-group.json` · `sections.aura_header.settings.logo_text` · active template setting. Editability: **Theme Editor**.
Context: Setting logo_text; section aura_header
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-0C632B506D193A](#aura-0c632b506d193a), [AURA-08A98839B76DBC](#aura-08a98839b76dbc), [AURA-B2F6EBBCC7FE8C](#aura-b2f6ebbcc7fe8c). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-4353311c2d02e8"></a>

**accessibility label** · `AURA-4353311C2D02E8` · accessibility label

```text
Rechercher
```
Source: `sections/aura-header.liquid` · `line:40:aria-label:91f7d3e` · hardcoded Liquid. Editability: **code only**.
Context: div.header-row > div.header-right > button.nav-icon-btn
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
<a id="aura-62555a65b82bc4"></a>

**cart_label** · `AURA-62555A65B82BC4` · label / microcopy

```text
Panier
```
Source: `sections/header-group.json` · `sections.aura_header.settings.cart_label` · active template setting. Editability: **Theme Editor**.
Context: Setting cart_label; section aura_header
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-8809A9F5F93164](#aura-8809a9f5f93164). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-617d50b6fd9aca"></a>

**locale interface copy** · `AURA-617D50B6FD9ACA` · locale interface copy

```text
Ignorer et passer au contenu
```
Source: `locales/fr.json` · `accessibility.skip_to_text` · locale translation. Editability: **Theme Editor**.
Context: Translation reference: layout/theme.liquid:340
Rendering: conditional. Referenced by configured route/dependency; only displayed when its Liquid/JS branch executes and storefront locale is French.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 3: Hero

Section ID: `homepage--aura_hero` · Source section/component ID: `aura_hero` · Enabled: **yes**.
Page position: 3; saved group/body position: 1.
Role: Introduce the product and the first purchase action.
Source: `templates/index.json`, `sections/aura-hero.liquid`. Active template setting: `sections.aura_hero`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-58037254C8AB97](#aura-58037254c8ab97) (Product and editorial media).

#### Section introduction and controls

<a id="aura-43ce56ceaf6771"></a>

**rating_text** · `AURA-43CE56CEAF6771` · social proof — **claim to verify**

```text
<strong>4,8</strong> · 150+ avis vérifiés d'infirmières
```
Source: `templates/index.json` · `sections.aura_hero.settings.rating_text` · active template setting. Editability: **Theme Editor**.
Context: Setting rating_text; section aura_hero
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-1470fb34d2d4e7"></a>

**heading** · `AURA-1470FB34D2D4E7` · headline — **claim to verify**

```text
Conçus pour les gardes de 12 heures.
```
Source: `templates/index.json` · `sections.aura_hero.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_hero
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: [AURA-C25F52E2BABAE1](#aura-c25f52e2babae1).
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-76647e7b9ed0f3"></a>

**lead** · `AURA-76647E7B9ED0F3` · subheadline — **claim to verify**

```text
Chaussettes de compression Aura : compression graduée 18–25 mmHg, tricotées sans couture. La paire qu'on garde enfin avec plaisir après la dixième heure.
```
Source: `templates/index.json` · `sections.aura_hero.settings.lead` · active template setting. Editability: **Theme Editor**.
Context: Setting lead; section aura_hero
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-edcf27cea6e97b"></a>

**cta1_label** · `AURA-EDCF27CEA6E97B` · CTA

```text
Acheter maintenant
```
Source: `templates/index.json` · `sections.aura_hero.settings.cta1_label` · active template setting. Editability: **Theme Editor**.
Context: Setting cta1_label; section aura_hero
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### proof b1 — block 1

<a id="aura-279e424f32eaa8"></a>

**label** · `AURA-279E424F32EAA8` · label / microcopy — **claim to verify**

```text
18–25 mmHg vérifié
```
Source: `templates/index.json` · `sections.aura_hero.blocks.b1.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (proof, b1); Setting label; section aura_hero
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### proof b2 — block 2

<a id="aura-64876a99ca574c"></a>

**label** · `AURA-64876A99CA574C` · label / microcopy — **claim to verify**

```text
Sans couture
```
Source: `templates/index.json` · `sections.aura_hero.blocks.b2.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (proof, b2); Setting label; section aura_hero
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### proof b3 — block 3

<a id="aura-d33b56bf77b5ee"></a>

**label** · `AURA-D33B56BF77B5EE` · label / microcopy — **claim to verify**

```text
Zéro marque rouge
```
Source: `templates/index.json` · `sections.aura_hero.blocks.b3.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (proof, b3); Setting label; section aura_hero
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### proof b4 — block 4

<a id="aura-ecb4d5d914f631"></a>

**label** · `AURA-ECB4D5D914F631` · label / microcopy — **claim to verify**

```text
Facile à enfiler
```
Source: `templates/index.json` · `sections.aura_hero.blocks.b4.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (proof, b4); Setting label; section aura_hero
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### Section closing copy and controls

<a id="aura-aa50bce92546fe"></a>

**tag** · `AURA-AA50BCE92546FE` · badge — **claim to verify**

```text
Nouveau
```
Source: `templates/index.json` · `sections.aura_hero.settings.tag` · active template setting. Editability: **Theme Editor**.
Context: Setting tag; section aura_hero
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-ff64a6184aee51"></a>

**shift_number** · `AURA-FF64A6184AEE51` · label / microcopy

```text
12h
```
Source: `templates/index.json` · `sections.aura_hero.settings.shift_number` · active template setting. Editability: **Theme Editor**.
Context: Setting shift_number; section aura_hero
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-4ae6df1349500c"></a>

**shift_text** · `AURA-4AE6DF1349500C` · paragraph — **claim to verify**

```text
conçus et testés en pression sur des gardes de 12 heures dans 7 hôpitaux
```
Source: `templates/index.json` · `sections.aura_hero.settings.shift_text` · active template setting. Editability: **Theme Editor**.
Context: Setting shift_text; section aura_hero
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.

### 4: Compression explanation

Section ID: `homepage--aura_science` · Source section/component ID: `aura_science` · Enabled: **yes**.
Page position: 4; saved group/body position: 2.
Role: Explain the compression mechanism.
Source: `templates/index.json`, `sections/aura-science.liquid`. Active template setting: `sections.aura_science`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-58037254C8AB97](#aura-58037254c8ab97) (Product and editorial media).

#### Section introduction and controls

<a id="aura-445c0ce0d5de61"></a>

**eyebrow** · `AURA-445C0CE0D5DE61` · eyebrow

```text
La science
```
Source: `templates/index.json` · `sections.aura_science.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-3F9478E3E3DF67](#aura-3f9478e3e3df67). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-5cb15a5a19a5a0"></a>

**heading** · `AURA-5CB15A5A19A5A0` · headline

```text
La pression qu'il faut à vos jambes.
```
Source: `templates/index.json` · `sections.aura_science.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-25FE3F5AC15D9E](#aura-25fe3f5ac15d9e). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-c4b71466be37f5"></a>

**para1** · `AURA-C4B71466BE37F5` · paragraph

```text
<p>La vraie compression est <strong>graduée</strong>, pas uniforme : plus ferme à la cheville, plus souple vers le mollet. Cette fermeté à la cheville est voulue. C'est ce gradient qui ramène réellement le sang vers le cœur, au lieu de simplement comprimer la jambe.</p>
```
Source: `templates/index.json` · `sections.aura_science.settings.para1` · active template setting. Editability: **Theme Editor**.
Context: Setting para1; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-1045FC163691AC](#aura-1045fc163691ac). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-aba1179c9c2c29"></a>

**bars_value** · `AURA-ABA1179C9C2C29` · label / microcopy — **claim to verify**

```text
18–25 mmHg
```
Source: `templates/index.json` · `sections.aura_science.settings.bars_value` · active template setting. Editability: **Theme Editor**.
Context: Setting bars_value; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-B6321959A1C036](#aura-b6321959a1c036). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-bee886b1270cad"></a>

**bars_label** · `AURA-BEE886B1270CAD` · label / microcopy

```text
Aura · compression graduée
```
Source: `templates/index.json` · `sections.aura_science.settings.bars_label` · active template setting. Editability: **Theme Editor**.
Context: Setting bars_label; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-5AD2A519025C1E](#aura-5ad2a519025c1e). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-d59b8d095fe8b2"></a>

**zone1** · `AURA-D59B8D095FE8B2` · label / microcopy

```text
Cheville
```
Source: `templates/index.json` · `sections.aura_science.settings.zone1` · active template setting. Editability: **Theme Editor**.
Context: Setting zone1; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-2FC9D51CA6A040](#aura-2fc9d51ca6a040). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-762b804c1179c2"></a>

**zone2** · `AURA-762B804C1179C2` · label / microcopy

```text
Mollet
```
Source: `templates/index.json` · `sections.aura_science.settings.zone2` · active template setting. Editability: **Theme Editor**.
Context: Setting zone2; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-5535137FB47FCE](#aura-5535137fb47fce). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-239b68f61ff82c"></a>

**zone3** · `AURA-239B68F61FF82C` · label / microcopy

```text
Haut du mollet
```
Source: `templates/index.json` · `sections.aura_science.settings.zone3` · active template setting. Editability: **Theme Editor**.
Context: Setting zone3; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-F4026166B7DD25](#aura-f4026166b7dd25). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-493c2a246eb59f"></a>

**flat_label** · `AURA-493C2A246EB59F` · label / microcopy — **claim to verify**

```text
Bas classique · compression plate
```
Source: `templates/index.json` · `sections.aura_science.settings.flat_label` · active template setting. Editability: **Theme Editor**.
Context: Setting flat_label; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-E076240B8CCFF6](#aura-e076240b8ccff6). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-959e022914a92d"></a>

**flat_value** · `AURA-959E022914A92D` · label / microcopy — **claim to verify**

```text
Pression identique
```
Source: `templates/index.json` · `sections.aura_science.settings.flat_value` · active template setting. Editability: **Theme Editor**.
Context: Setting flat_value; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-72D899FA6E09CF](#aura-72d899fa6e09cf). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-3af6f04f52d1c3"></a>

**illus_label** · `AURA-3AF6F04F52D1C3` · label / microcopy — **claim to verify**

```text
Schéma anatomique · retour veineux soléaire & mollet
```
Source: `templates/index.json` · `sections.aura_science.settings.illus_label` · active template setting. Editability: **Theme Editor**.
Context: Setting illus_label; section aura_science
Rendering: expected from repository. Image alt/placeholder; illustration container hidden on mobile.
Duplicates: [AURA-FF17576ED46EFD](#aura-ff17576ed46efd). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 5: Material comparison

Section ID: `homepage--aura_softness` · Source section/component ID: `aura_softness` · Enabled: **yes**.
Page position: 5; saved group/body position: 3.
Role: Present material comparisons.
Source: `templates/index.json`, `sections/aura-softness.liquid`. Active template setting: `sections.aura_softness`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: none identified in the master.

#### Section introduction and controls

<a id="aura-67bd52e6f1e49d"></a>

**eyebrow** · `AURA-67BD52E6F1E49D` · eyebrow

```text
Douceur de la matière
```
Source: `templates/index.json` · `sections.aura_softness.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-D522BEB21C9108](#aura-d522beb21c9108). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-20261ac4067731"></a>

**heading** · `AURA-20261AC4067731` · headline — **claim to verify**

```text
Douce ? Plus douce que ce qu'on imagine d'une chaussette.
```
Source: `templates/index.json` · `sections.aura_softness.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-31A6B433C07AEE](#aura-31a6b433c07aee). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-16f951fff6eab0"></a>

**lead** · `AURA-16F951FFF6EAB0` · subheadline — **claim to verify**

```text
Nous avons choisi notre tricot 2 fils sur un comparatif comme celui-ci. Les références des autres, classées de gauche à droite.
```
Source: `templates/index.json` · `sections.aura_softness.settings.lead` · active template setting. Editability: **Theme Editor**.
Context: Setting lead; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-769983B5FCD7E0](#aura-769983b5fcd7e0). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### rung r4 — block 4

<a id="aura-af497bd5fd5d31"></a>

**flag** · `AURA-AF497BD5FD5D31` · badge

```text
Ce qu'on utilise
```
Source: `templates/index.json` · `sections.aura_softness.blocks.r4.settings.flag` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (rung, r4); Setting flag; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-AD3483CCE73B1C](#aura-ad3483cce73b1c). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-8bc68a38192c9b"></a>

**level** · `AURA-8BC68A38192C9B` · label / microcopy — **claim to verify**

```text
La plus douce
```
Source: `templates/index.json` · `sections.aura_softness.blocks.r4.settings.level` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (rung, r4); Setting level; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-7E836AE55BDF25](#aura-7e836ae55bdf25). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-4b7ce6f1b84bb5"></a>

**name** · `AURA-4B7CE6F1B84BB5` · label / microcopy

```text
Aura — tricot 2 fils
```
Source: `templates/index.json` · `sections.aura_softness.blocks.r4.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (rung, r4); Setting name; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-EEEF77F36776A7](#aura-eeef77f36776a7). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-45d83db5935d8d"></a>

**stretch** · `AURA-45D83DB5935D8D` · label / microcopy — **claim to verify**

```text
Léger comme une seconde peau, résistant au lavage quotidien.
```
Source: `templates/index.json` · `sections.aura_softness.blocks.r4.settings.stretch` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (rung, r4); Setting stretch; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-2A3AD7BFDE5C0F](#aura-2a3ad7bfde5c0f). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### rung r1 — block 1

<a id="aura-ee2bdd3d14be1f"></a>

**level** · `AURA-EE2BDD3D14BE1F` · label / microcopy — **claim to verify**

```text
Rigide
```
Source: `templates/index.json` · `sections.aura_softness.blocks.r1.settings.level` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (rung, r1); Setting level; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-52E8A73873EB43](#aura-52e8a73873eb43). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-8de1e6ba31d46a"></a>

**name** · `AURA-8DE1E6BA31D46A` · label / microcopy

```text
Polyester
```
Source: `templates/index.json` · `sections.aura_softness.blocks.r1.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (rung, r1); Setting name; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-8A9A06DE0EC619](#aura-8a9a06de0ec619). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-5bf6251cc869a2"></a>

**stretch** · `AURA-5BF6251CC869A2` · label / microcopy — **claim to verify**

```text
Bon marché, étouffant, qui gratte. Le réflexe en dessous de 15 €.
```
Source: `templates/index.json` · `sections.aura_softness.blocks.r1.settings.stretch` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (rung, r1); Setting stretch; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-AB1682C8E427F1](#aura-ab1682c8e427f1). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### rung r2 — block 2

<a id="aura-6ef771515792cb"></a>

**level** · `AURA-6EF771515792CB` · label / microcopy — **claim to verify**

```text
Assez douce
```
Source: `templates/index.json` · `sections.aura_softness.blocks.r2.settings.level` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (rung, r2); Setting level; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-885E80F70E32DD](#aura-885e80f70e32dd). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-da07079dd65f1b"></a>

**name** · `AURA-DA07079DD65F1B` · label / microcopy

```text
Coton
```
Source: `templates/index.json` · `sections.aura_softness.blocks.r2.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (rung, r2); Setting name; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-C3C83795728164](#aura-c3c83795728164). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-00a5460d5a3f7d"></a>

**stretch** · `AURA-00A5460D5A3F7D` · label / microcopy — **claim to verify**

```text
Respirant mais se détend, ne tient pas la compression au-delà de 10 h.
```
Source: `templates/index.json` · `sections.aura_softness.blocks.r2.settings.stretch` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (rung, r2); Setting stretch; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-E89ADA6F610750](#aura-e89ada6f610750). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### rung r3 — block 3

<a id="aura-b5d9f5ba316e66"></a>

**level** · `AURA-B5D9F5BA316E66` · label / microcopy — **claim to verify**

```text
Plus douce
```
Source: `templates/index.json` · `sections.aura_softness.blocks.r3.settings.level` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (rung, r3); Setting level; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-2B8B89E65A32A4](#aura-2b8b89e65a32a4). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-ec162aae2d4cc2"></a>

**name** · `AURA-EC162AAE2D4CC2` · label / microcopy

```text
Viscose de bambou
```
Source: `templates/index.json` · `sections.aura_softness.blocks.r3.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (rung, r3); Setting name; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-0DCE5CB371CD8C](#aura-0dce5cb371cd8c). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e2ba4d2af2c569"></a>

**stretch** · `AURA-E2BA4D2AF2C569` · label / microcopy — **claim to verify**

```text
Agréable sur la peau, mais perd sa forme après un lavage chaud.
```
Source: `templates/index.json` · `sections.aura_softness.blocks.r3.settings.stretch` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (rung, r3); Setting stretch; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-FC89E335A4A1FC](#aura-fc89e335a4a1fc). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 6: Audience cards

Section ID: `homepage--aura_personas` · Source section/component ID: `aura_personas` · Enabled: **yes**.
Page position: 6; saved group/body position: 4.
Role: Connect use cases with visitor needs.
Source: `templates/index.json`, `sections/aura-personas.liquid`. Active template setting: `sections.aura_personas`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-58037254C8AB97](#aura-58037254c8ab97) (Product and editorial media).

#### Section introduction and controls

<a id="aura-6270b1fe551ae5"></a>

**eyebrow** · `AURA-6270B1FE551AE5` · eyebrow

```text
Qui porte Aura
```
Source: `templates/index.json` · `sections.aura_personas.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-a2ab3cb13895b6"></a>

**heading** · `AURA-A2AB3CB13895B6` · headline — **claim to verify**

```text
Pensés pour les gardes. Adoptés bien au-delà.
```
Source: `templates/index.json` · `sections.aura_personas.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-cc72f8a8fcb904"></a>

**accessibility label** · `AURA-CC72F8A8FCB904` · accessibility label

```text
Précédent
```
Source: `sections/aura-personas.liquid` · `line:19:aria-label:a527f17` · hardcoded Liquid. Editability: **code only**.
Context: section.personas > div.personas-viewport > button.carousel-arrow.prev
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-417D4C427C35B5](#aura-417d4c427c35b5), [AURA-08D962EED1A6F1](#aura-08d962eed1a6f1), [AURA-EDD116449B8C6F](#aura-edd116449b8c6f). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-f97491171a8c97"></a>

**accessibility label** · `AURA-F97491171A8C97` · accessibility label

```text
Suivant
```
Source: `sections/aura-personas.liquid` · `line:20:aria-label:596d29a` · hardcoded Liquid. Editability: **code only**.
Context: section.personas > div.personas-viewport > button.carousel-arrow.next
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-4FECB64142997E](#aura-4fecb64142997e), [AURA-332EC9872DDF65](#aura-332ec9872ddf65), [AURA-C697D145E1CF28](#aura-c697d145e1cf28). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### persona a1 — block 1

<a id="aura-4141e6d389c03f"></a>

**name** · `AURA-4141E6D389C03F` · label / microcopy

```text
Infirmières & soignantes
```
Source: `templates/index.json` · `sections.aura_personas.blocks.a1.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (persona, a1); Setting name; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-f0e29077958074"></a>

**desc** · `AURA-F0E29077958074` · label / microcopy

```text
IDE, aides-soignantes, sages-femmes. Celles qui nous ont aidées à concevoir Aura.
```
Source: `templates/index.json` · `sections.aura_personas.blocks.a1.settings.desc` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (persona, a1); Setting desc; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-514e45f8ad9df8"></a>

**badge** · `AURA-514E45F8AD9DF8` · badge

```text
12h de garde
```
Source: `templates/index.json` · `sections.aura_personas.blocks.a1.settings.badge` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (persona, a1); Setting badge; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### persona a2 — block 2

<a id="aura-8462b3f49eb294"></a>

**name** · `AURA-8462B3F49EB294` · label / microcopy

```text
Métiers debout
```
Source: `templates/index.json` · `sections.aura_personas.blocks.a2.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (persona, a2); Setting name; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-721a9fede433d2"></a>

**desc** · `AURA-721A9FEDE433D2` · label / microcopy

```text
Coiffure, vente, cuisine, salle. Jamais assise — les mollets encaissent.
```
Source: `templates/index.json` · `sections.aura_personas.blocks.a2.settings.desc` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (persona, a2); Setting desc; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-cb181848a2f01d"></a>

**badge** · `AURA-CB181848A2F01D` · badge

```text
10h+ debout
```
Source: `templates/index.json` · `sections.aura_personas.blocks.a2.settings.badge` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (persona, a2); Setting badge; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### persona a3 — block 3

<a id="aura-52c353c2b413c3"></a>

**name** · `AURA-52C353C2B413C3` · label / microcopy

```text
Post-op & maternité
```
Source: `templates/index.json` · `sections.aura_personas.blocks.a3.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (persona, a3); Setting name; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-c8008b70b09a6a"></a>

**desc** · `AURA-C8008B70B09A6A` · label / microcopy — **claim to verify**

```text
Jambes lourdes après l'opération ou l'accouchement. Un soutien gradué, doux pour les peaux sensibles.
```
Source: `templates/index.json` · `sections.aura_personas.blocks.a3.settings.desc` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (persona, a3); Setting desc; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e13905a793d9d3"></a>

**badge** · `AURA-E13905A793D9D3` · badge

```text
Récupération
```
Source: `templates/index.json` · `sections.aura_personas.blocks.a3.settings.badge` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (persona, a3); Setting badge; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### persona a4 — block 4

<a id="aura-95ba0b2efbf50c"></a>

**name** · `AURA-95BA0B2EFBF50C` · label / microcopy

```text
Voyageuses, hôtesses & pilotes
```
Source: `templates/index.json` · `sections.aura_personas.blocks.a4.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (persona, a4); Setting name; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-17689fa702014d"></a>

**desc** · `AURA-17689FA702014D` · label / microcopy

```text
Huit heures en cabine, le décalage dans les jambes. Elles se glissent dans le bagage à main.
```
Source: `templates/index.json` · `sections.aura_personas.blocks.a4.settings.desc` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (persona, a4); Setting desc; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-fedb575212443a"></a>

**badge** · `AURA-FEDB575212443A` · badge

```text
Long-courrier
```
Source: `templates/index.json` · `sections.aura_personas.blocks.a4.settings.badge` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (persona, a4); Setting badge; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### persona a5 — block 5

<a id="aura-a338ad90045b45"></a>

**name** · `AURA-A338AD90045B45` · label / microcopy

```text
Sport & récupération
```
Source: `templates/index.json` · `sections.aura_personas.blocks.a5.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (persona, a5); Setting name; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-2d1010a3e5fb35"></a>

**desc** · `AURA-2D1010A3E5FB35` · label / microcopy — **claim to verify**

```text
Course, trail, salle. On récupère plus vite après l'effort — et on les garde au repos.
```
Source: `templates/index.json` · `sections.aura_personas.blocks.a5.settings.desc` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (persona, a5); Setting desc; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-c134d1c235ed13"></a>

**badge** · `AURA-C134D1C235ED13` · badge

```text
Performance
```
Source: `templates/index.json` · `sections.aura_personas.blocks.a5.settings.badge` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (persona, a5); Setting badge; section aura_personas
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 7: Product comparison

Section ID: `homepage--aura_versus` · Source section/component ID: `aura_versus` · Enabled: **yes**.
Page position: 7; saved group/body position: 5.
Role: Present comparisons with other products.
Source: `templates/index.json`, `sections/aura-versus.liquid`. Active template setting: `sections.aura_versus`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: none identified in the master.

#### Section introduction and controls

<a id="aura-7e420fe0215f58"></a>

**eyebrow** · `AURA-7E420FE0215F58` · eyebrow — **claim to verify**

```text
Pourquoi les autres compressions échouent
```
Source: `templates/index.json` · `sections.aura_versus.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-8497121DC7AA15](#aura-8497121dc7aa15). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-3d6306d53f60e7"></a>

**heading** · `AURA-3D6306D53F60E7` · headline — **claim to verify**

```text
La plupart des chaussettes de compression n'en sont pas vraiment.
```
Source: `templates/index.json` · `sections.aura_versus.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-A90E97974B0A58](#aura-a90e97974b0a58). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-f570f709c00f28"></a>

**lead** · `AURA-F570F709C00F28` · subheadline

```text
Si votre dernière paire vous a donné des ampoules, a roulé au bord-côte ou ressemblait à un garrot avant midi, voici ce qui clochait vraiment.
```
Source: `templates/index.json` · `sections.aura_versus.settings.lead` · active template setting. Editability: **Theme Editor**.
Context: Setting lead; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-4B77FF3ECD2ABC](#aura-4b77ff3ecd2abc). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-d177fe701fa9b5"></a>

**col_feature** · `AURA-D177FE701FA9B5` · label / microcopy

```text
Critère
```
Source: `templates/index.json` · `sections.aura_versus.settings.col_feature` · active template setting. Editability: **Theme Editor**.
Context: Setting col_feature; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-55980650BB4C42](#aura-55980650bb4c42). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-30bc48fbf0190f"></a>

**col_other_nm** · `AURA-30BC48FBF0190F` · label / microcopy

```text
Générique
```
Source: `templates/index.json` · `sections.aura_versus.settings.col_other_nm` · active template setting. Editability: **Theme Editor**.
Context: Setting col_other_nm; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-615D6CE1E6170B](#aura-615d6ce1e6170b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-0c632b506d193a"></a>

**col_brand_nm** · `AURA-0C632B506D193A` · label / microcopy

```text
Aura
```
Source: `templates/index.json` · `sections.aura_versus.settings.col_brand_nm` · active template setting. Editability: **Theme Editor**.
Context: Setting col_brand_nm; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-CC4E1CA10AA7A5](#aura-cc4e1ca10aa7a5), [AURA-08A98839B76DBC](#aura-08a98839b76dbc), [AURA-B2F6EBBCC7FE8C](#aura-b2f6ebbcc7fe8c). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### row v1 — block 1

<a id="aura-d823c30095052e"></a>

**feature** · `AURA-D823C30095052E` · label / microcopy

```text
Pression graduée
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v1.settings.feature` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (row, v1); Setting feature; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-437BF26A7906AF](#aura-437bf26a7906af). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-0f72ee2a0857f7"></a>

**other** · `AURA-0F72EE2A0857F7` · label / microcopy — **claim to verify**

```text
Plate ou non vérifiée
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v1.settings.other` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (row, v1); Setting other; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-533E7D509BBD06](#aura-533e7d509bbd06). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-2674fd36ab8008"></a>

**brand** · `AURA-2674FD36AB8008` · label / microcopy — **claim to verify**

```text
18–25 mmHg, cheville-mollet
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v1.settings.brand` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (row, v1); Setting brand; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-81AAB1D99A7F00](#aura-81aab1d99a7f00). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### row v2 — block 2

<a id="aura-72482d552c60ef"></a>

**feature** · `AURA-72482D552C60EF` · label / microcopy

```text
Construction de la pointe
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v2.settings.feature` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (row, v2); Setting feature; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-9BBFC863AD2D72](#aura-9bbfc863ad2d72). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-4b62bef89cdb8e"></a>

**other** · `AURA-4B62BEF89CDB8E` · label / microcopy — **claim to verify**

```text
Couture épaisse
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v2.settings.other` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (row, v2); Setting other; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-74B77715BE51FE](#aura-74b77715be51fe). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e23ad5b28e7413"></a>

**brand** · `AURA-E23AD5B28E7413` · label / microcopy — **claim to verify**

```text
Sans couture, pointe finie à la main
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v2.settings.brand` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (row, v2); Setting brand; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-9B7EBE211F6B4D](#aura-9b7ebe211f6b4d). Near duplicates: none in this packet.

#### row v3 — block 3

<a id="aura-3bff234708e9f6"></a>

**feature** · `AURA-3BFF234708E9F6` · label / microcopy

```text
Tenue du bord-côte
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v3.settings.feature` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (row, v3); Setting feature; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-99CE80847D82AE](#aura-99ce80847d82ae). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-807bf0b1925664"></a>

**other** · `AURA-807BF0B1925664` · label / microcopy — **claim to verify**

```text
Roule dès la 4ᵉ heure
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v3.settings.other` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (row, v3); Setting other; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-48C564A9194509](#aura-48c564a9194509). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-c35e2109e6bde2"></a>

**brand** · `AURA-C35E2109E6BDE2` · label / microcopy — **claim to verify**

```text
Maintien plat, anti-roulement
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v3.settings.brand` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (row, v3); Setting brand; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-6119E6F025310A](#aura-6119e6f025310a). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### row v4 — block 4

<a id="aura-7ccf053e544c64"></a>

**feature** · `AURA-7CCF053E544C64` · label / microcopy

```text
Gestion de la chaleur
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v4.settings.feature` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (row, v4); Setting feature; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-EB40F6CCF66513](#aura-eb40f6ccf66513). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e81f76dc75b0ff"></a>

**other** · `AURA-E81F76DC75B0FF` · label / microcopy — **claim to verify**

```text
Le polyester retient la transpiration
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v4.settings.other` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (row, v4); Setting other; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-69A2DC5DC8C50B](#aura-69a2dc5dc8c50b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-7da35d68959843"></a>

**brand** · `AURA-7DA35D68959843` · label / microcopy — **claim to verify**

```text
Coup-de-pied en maille aérée
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v4.settings.brand` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (row, v4); Setting brand; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-2496BAA26E43C0](#aura-2496baa26e43c0). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### row v5 — block 5

<a id="aura-9f1cf149865c1e"></a>

**feature** · `AURA-9F1CF149865C1E` · label / microcopy

```text
Après 100 lavages
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v5.settings.feature` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (row, v5); Setting feature; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-77C26CDE109578](#aura-77c26cde109578). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-9ee8200dc19c64"></a>

**other** · `AURA-9EE8200DC19C64` · label / microcopy — **claim to verify**

```text
Pression perdue, trous
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v5.settings.other` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (row, v5); Setting other; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-53AA15D8A9093E](#aura-53aa15d8a9093e). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-2a8da302133063"></a>

**brand** · `AURA-2A8DA302133063` · label / microcopy — **claim to verify**

```text
Compression intacte, garantie
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v5.settings.brand` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (row, v5); Setting brand; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-0ED09876B2AFD7](#aura-0ed09876b2afd7). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### row v6 — block 6

<a id="aura-69a7d448bb517b"></a>

**feature** · `AURA-69A7D448BB517B` · label / microcopy

```text
Conception
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v6.settings.feature` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (row, v6); Setting feature; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-4C103AFBE9082E](#aura-4c103afbe9082e). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-723e65dcf0ee77"></a>

**other** · `AURA-723E65DCF0EE77` · label / microcopy — **claim to verify**

```text
Générique, jamais testé en garde
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v6.settings.other` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (row, v6); Setting other; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-24D7A6B8E6019D](#aura-24d7a6b8e6019d). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-b04ea8a67a1436"></a>

**brand** · `AURA-B04EA8A67A1436` · label / microcopy — **claim to verify**

```text
Pensé et testé avec des soignantes
```
Source: `templates/index.json` · `sections.aura_versus.blocks.v6.settings.brand` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (row, v6); Setting brand; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-7511B0F89B555E](#aura-7511b0f89b555e). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 8: Customer-photo grid

Section ID: `homepage--aura_ugc` · Source section/component ID: `aura_ugc` · Enabled: **yes**.
Page position: 8; saved group/body position: 6.
Role: Present customer-photo/social proof.
Source: `templates/index.json`, `sections/aura-ugc.liquid`. Active template setting: `sections.aura_ugc`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-A696476EBA0770](#aura-a696476eba0770) (External review content), [AURA-58037254C8AB97](#aura-58037254c8ab97) (Product and editorial media).

#### Section introduction and controls

<a id="aura-25ccb8da6ba40a"></a>

**hashtag** · `AURA-25CCB8DA6BA40A` · badge

```text
#AuraEnGarde
```
Source: `templates/index.json` · `sections.aura_ugc.settings.hashtag` · active template setting. Editability: **Theme Editor**.
Context: Setting hashtag; section aura_ugc
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-c5c4d80e8e1141"></a>

**heading** · `AURA-C5C4D80E8E1141` · headline — **claim to verify**

```text
De vraies gardes. De vraies chaussettes.
```
Source: `templates/index.json` · `sections.aura_ugc.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_ugc
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-29e83b6577a6e1"></a>

**lead** · `AURA-29E83B6577A6E1` · subheadline — **claim to verify**

```text
Identifiées par des infirmières, sages-femmes, ambulanciers et voyageuses, en France et au-delà.
```
Source: `templates/index.json` · `sections.aura_ugc.settings.lead` · active template setting. Editability: **Theme Editor**.
Context: Setting lead; section aura_ugc
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### tile u1 — block 1

<a id="aura-db6b8c6a8d9333"></a>

**handle** · `AURA-DB6B8C6A8D9333` · label / microcopy

```text
@
```
Source: `templates/index.json` · `sections.aura_ugc.blocks.u1.settings.handle` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (tile, u1); Setting handle; section aura_ugc
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-2980AF7C3D7822](#aura-2980af7c3d7822), [AURA-1ACC746AE0DA9B](#aura-1acc746ae0da9b), [AURA-0C2AE409842C58](#aura-0c2ae409842c58), [AURA-6528614D00E94F](#aura-6528614d00e94f), [AURA-2D37D7AD015DD5](#aura-2d37d7ad015dd5). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### tile u2 — block 2

<a id="aura-2980af7c3d7822"></a>

**handle** · `AURA-2980AF7C3D7822` · label / microcopy

```text
@
```
Source: `templates/index.json` · `sections.aura_ugc.blocks.u2.settings.handle` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (tile, u2); Setting handle; section aura_ugc
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-DB6B8C6A8D9333](#aura-db6b8c6a8d9333), [AURA-1ACC746AE0DA9B](#aura-1acc746ae0da9b), [AURA-0C2AE409842C58](#aura-0c2ae409842c58), [AURA-6528614D00E94F](#aura-6528614d00e94f), [AURA-2D37D7AD015DD5](#aura-2d37d7ad015dd5). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### tile u3 — block 3

<a id="aura-1acc746ae0da9b"></a>

**handle** · `AURA-1ACC746AE0DA9B` · label / microcopy

```text
@
```
Source: `templates/index.json` · `sections.aura_ugc.blocks.u3.settings.handle` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (tile, u3); Setting handle; section aura_ugc
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-DB6B8C6A8D9333](#aura-db6b8c6a8d9333), [AURA-2980AF7C3D7822](#aura-2980af7c3d7822), [AURA-0C2AE409842C58](#aura-0c2ae409842c58), [AURA-6528614D00E94F](#aura-6528614d00e94f), [AURA-2D37D7AD015DD5](#aura-2d37d7ad015dd5). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### tile u4 — block 4

<a id="aura-0c2ae409842c58"></a>

**handle** · `AURA-0C2AE409842C58` · label / microcopy

```text
@
```
Source: `templates/index.json` · `sections.aura_ugc.blocks.u4.settings.handle` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (tile, u4); Setting handle; section aura_ugc
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-DB6B8C6A8D9333](#aura-db6b8c6a8d9333), [AURA-2980AF7C3D7822](#aura-2980af7c3d7822), [AURA-1ACC746AE0DA9B](#aura-1acc746ae0da9b), [AURA-6528614D00E94F](#aura-6528614d00e94f), [AURA-2D37D7AD015DD5](#aura-2d37d7ad015dd5). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### tile u5 — block 5

<a id="aura-6528614d00e94f"></a>

**handle** · `AURA-6528614D00E94F` · label / microcopy

```text
@
```
Source: `templates/index.json` · `sections.aura_ugc.blocks.u5.settings.handle` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (tile, u5); Setting handle; section aura_ugc
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-DB6B8C6A8D9333](#aura-db6b8c6a8d9333), [AURA-2980AF7C3D7822](#aura-2980af7c3d7822), [AURA-1ACC746AE0DA9B](#aura-1acc746ae0da9b), [AURA-0C2AE409842C58](#aura-0c2ae409842c58), [AURA-2D37D7AD015DD5](#aura-2d37d7ad015dd5). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### tile u6 — block 6

<a id="aura-2d37d7ad015dd5"></a>

**handle** · `AURA-2D37D7AD015DD5` · label / microcopy

```text
@
```
Source: `templates/index.json` · `sections.aura_ugc.blocks.u6.settings.handle` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (tile, u6); Setting handle; section aura_ugc
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-DB6B8C6A8D9333](#aura-db6b8c6a8d9333), [AURA-2980AF7C3D7822](#aura-2980af7c3d7822), [AURA-1ACC746AE0DA9B](#aura-1acc746ae0da9b), [AURA-0C2AE409842C58](#aura-0c2ae409842c58), [AURA-6528614D00E94F](#aura-6528614d00e94f). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 9: Reviews

Section ID: `homepage--aura_reviews` · Source section/component ID: `aura_reviews` · Enabled: **yes**.
Page position: 9; saved group/body position: 7.
Role: Present testimonial and aggregate review copy.
Source: `templates/index.json`, `sections/aura-reviews.liquid`. Active template setting: `sections.aura_reviews`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-A696476EBA0770](#aura-a696476eba0770) (External review content), [AURA-58037254C8AB97](#aura-58037254c8ab97) (Product and editorial media).

#### Section introduction and controls

<a id="aura-cfda39e378a8d3"></a>

**eyebrow** · `AURA-CFDA39E378A8D3` · eyebrow — **claim to verify**

```text
Vrais avis · vérifiés
```
Source: `templates/index.json` · `sections.aura_reviews.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-6B03B659E92F1B](#aura-6b03b659e92f1b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-22445523f10af9"></a>

**heading** · `AURA-22445523F10AF9` · headline — **claim to verify**

```text
Portées par des infirmières dans toute la France.
```
Source: `templates/index.json` · `sections.aura_reviews.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-9AB26760746225](#aura-9ab26760746225). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-604f61ad34a042"></a>

**score** · `AURA-604F61AD34A042` · social proof — **claim to verify**

```text
4,8
```
Source: `templates/index.json` · `sections.aura_reviews.settings.score` · active template setting. Editability: **Theme Editor**.
Context: Setting score; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-652869C0F339B3](#aura-652869c0f339b3), [AURA-5088873A2F768A](#aura-5088873a2f768a). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-80144d21968155"></a>

**meta** · `AURA-80144D21968155` · label / microcopy — **claim to verify**

```text
150+ avis vérifiés d'infirmières
```
Source: `templates/index.json` · `sections.aura_reviews.settings.meta` · active template setting. Editability: **Theme Editor**.
Context: Setting meta; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-C806A26B589AF5](#aura-c806a26b589af5). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### review w1 — block 1

<a id="aura-9ba92d9be45553"></a>

**title** · `AURA-9BA92D9BE45553` · headline — **claim to verify**

```text
« Rentrée à la maison, et j'ai cuisiné le dîner. »
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w1.settings.title` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (review, w1); Setting title; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-DDEE786C642B08](#aura-ddee786c642b08). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-b2e04fd7f0ac75"></a>

**name** · `AURA-B2E04FD7F0AC75` · label / microcopy — **claim to verify**

```text
Camille L.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w1.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (review, w1); Setting name; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-87705D714F1384](#aura-87705d714f1384). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-cac631b0c04c5e"></a>

**body** · `AURA-CAC631B0C04C5E` · paragraph — **claim to verify**

```text
Avant, je posais mon sac à la porte et je m'allongeais par terre, jambes contre le mur. Après trois mois en Aura, je rentre et je cuisine. C'est tout l'avis.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w1.settings.body` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (review, w1); Setting body; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-9908B211134072](#aura-9908b211134072). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-38e29ea51940c9"></a>

**verified_label** · `AURA-38E29EA51940C9` · social proof — **claim to verify**

```text
Acheteuse vérifiée
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w1.settings.verified_label` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (review, w1); Setting verified_label; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-3B2D14AFFAE4E5](#aura-3b2d14affae4e5), [AURA-F281780ADA7426](#aura-f281780ada7426), [AURA-DF292B514063F5](#aura-df292b514063f5), [AURA-D1039F9BCCD8F3](#aura-d1039f9bccd8f3), [AURA-1640C48465E687](#aura-1640c48465e687), [AURA-296CF02A6C86E2](#aura-296cf02a6c86e2), [AURA-F4FCA73CE3B5BE](#aura-f4fca73ce3b5be), [AURA-50AB1A4038BB24](#aura-50ab1a4038bb24), [AURA-27625B0BE97111](#aura-27625b0be97111), [AURA-5AA4E0B14965CE](#aura-5aa4e0b14965ce), [AURA-3598732234154B](#aura-3598732234154b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-8c6ebf183b7558"></a>

**initials** · `AURA-8C6EBF183B7558` · label / microcopy

```text
CL
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w1.settings.initials` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (review, w1); Setting initials; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-5D9252BC9D5EC4](#aura-5d9252bc9d5ec4). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-08bce3505296bc"></a>

**role** · `AURA-08BCE3505296BC` · label / microcopy — **claim to verify**

```text
IDE urgentiste · CHU Lyon Sud · 11 mois de port
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w1.settings.role` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (review, w1); Setting role; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-4DF777039A305F](#aura-4df777039a305f). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### review w2 — block 2

<a id="aura-701b9f6b8d9be0"></a>

**title** · `AURA-701B9F6B8D9BE0` · headline — **claim to verify**

```text
M'a portée pendant la semaine d'intégration.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w2.settings.title` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (review, w2); Setting title; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-EBB8066ABBC758](#aura-ebb8066abbc758). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e886e0a7c8f535"></a>

**name** · `AURA-E886E0A7C8F535` · label / microcopy — **claim to verify**

```text
Marion D.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w2.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (review, w2); Setting name; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-5EB4965ECFF2A0](#aura-5eb4965ecff2a0). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-76ba9165a7c036"></a>

**body** · `AURA-76BA9165A7C036` · paragraph — **claim to verify**

```text
La pointe sans couture est la seule raison qui m'a fait tenir. La paire d'avant m'avait donné une ampoule au 3ᵉ jour ; Aura a tenu toute la rotation sans une seule.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w2.settings.body` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (review, w2); Setting body; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-1BE89069FBEA38](#aura-1be89069fbea38). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-3b2d14affae4e5"></a>

**verified_label** · `AURA-3B2D14AFFAE4E5` · social proof — **claim to verify**

```text
Acheteuse vérifiée
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w2.settings.verified_label` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (review, w2); Setting verified_label; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-38E29EA51940C9](#aura-38e29ea51940c9), [AURA-F281780ADA7426](#aura-f281780ada7426), [AURA-DF292B514063F5](#aura-df292b514063f5), [AURA-D1039F9BCCD8F3](#aura-d1039f9bccd8f3), [AURA-1640C48465E687](#aura-1640c48465e687), [AURA-296CF02A6C86E2](#aura-296cf02a6c86e2), [AURA-F4FCA73CE3B5BE](#aura-f4fca73ce3b5be), [AURA-50AB1A4038BB24](#aura-50ab1a4038bb24), [AURA-27625B0BE97111](#aura-27625b0be97111), [AURA-5AA4E0B14965CE](#aura-5aa4e0b14965ce), [AURA-3598732234154B](#aura-3598732234154b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-23ef8149fcd393"></a>

**initials** · `AURA-23EF8149FCD393` · label / microcopy

```text
MD
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w2.settings.initials` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (review, w2); Setting initials; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-5478FD1CA3393F](#aura-5478fd1ca3393f). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-8554e459b02900"></a>

**role** · `AURA-8554E459B02900` · label / microcopy — **claim to verify**

```text
IDE Gériatrie · Bordeaux
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w2.settings.role` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (review, w2); Setting role; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-E6F966C57CFA89](#aura-e6f966c57cfa89). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### review w3 — block 3

<a id="aura-3d4a2664d0ab1e"></a>

**title** · `AURA-3D4A2664D0AB1E` · headline — **claim to verify**

```text
Lavage à 60°, 18 mois après.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w3.settings.title` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (review, w3); Setting title; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-053B913988DFE2](#aura-053b913988dfe2). Near duplicates: none in this packet.
<a id="aura-21048131a4ed06"></a>

**name** · `AURA-21048131A4ED06` · label / microcopy — **claim to verify**

```text
Juliette R.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w3.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (review, w3); Setting name; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-BC75B242AF3989](#aura-bc75b242af3989). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-1119d848f0298b"></a>

**body** · `AURA-1119D848F0298B` · paragraph — **claim to verify**

```text
Bordeaux le lundi, Gris le jeudi. Je lave chaud, je sèche tiède. La compression est comme au premier jour. J'avais usé quatre marques moins chères avant.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w3.settings.body` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (review, w3); Setting body; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-B10DF8400533D8](#aura-b10df8400533d8). Near duplicates: none in this packet.
<a id="aura-f281780ada7426"></a>

**verified_label** · `AURA-F281780ADA7426` · social proof — **claim to verify**

```text
Acheteuse vérifiée
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w3.settings.verified_label` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (review, w3); Setting verified_label; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-38E29EA51940C9](#aura-38e29ea51940c9), [AURA-3B2D14AFFAE4E5](#aura-3b2d14affae4e5), [AURA-DF292B514063F5](#aura-df292b514063f5), [AURA-D1039F9BCCD8F3](#aura-d1039f9bccd8f3), [AURA-1640C48465E687](#aura-1640c48465e687), [AURA-296CF02A6C86E2](#aura-296cf02a6c86e2), [AURA-F4FCA73CE3B5BE](#aura-f4fca73ce3b5be), [AURA-50AB1A4038BB24](#aura-50ab1a4038bb24), [AURA-27625B0BE97111](#aura-27625b0be97111), [AURA-5AA4E0B14965CE](#aura-5aa4e0b14965ce), [AURA-3598732234154B](#aura-3598732234154b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-a0343863a5f3f1"></a>

**initials** · `AURA-A0343863A5F3F1` · label / microcopy

```text
JR
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w3.settings.initials` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (review, w3); Setting initials; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-D775D52B3A0209](#aura-d775d52b3a0209). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-00bbaf9f586e59"></a>

**role** · `AURA-00BBAF9F586E59` · label / microcopy — **claim to verify**

```text
Sage-femme · Maternité Paris 14e
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w3.settings.role` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (review, w3); Setting role; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-F7EB2D856FB212](#aura-f7eb2d856fb212). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### review w4 — block 4

<a id="aura-7aa66ca67228e9"></a>

**title** · `AURA-7AA66CA67228E9` · headline — **claim to verify**

```text
J'en ai racheté 4 le dimanche.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w4.settings.title` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (review, w4); Setting title; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-F8F5665333538E](#aura-f8f5665333538e). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-f02b6dbd79baa4"></a>

**name** · `AURA-F02B6DBD79BAA4` · label / microcopy — **claim to verify**

```text
Thomas B.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w4.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (review, w4); Setting name; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-D89AC0207AB6C6](#aura-d89ac0207ab6c6). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-d799bd3ceedc0b"></a>

**body** · `AURA-D799BD3CEEDC0B` · paragraph — **claim to verify**

```text
Sceptique. Portées 14 heures d'affilée un samedi. Commandé quatre paires de plus le soir même. Les mollets ne brûlent plus à la dixième heure.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w4.settings.body` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (review, w4); Setting body; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-A1B0C03ED55EC8](#aura-a1b0c03ed55ec8). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-df292b514063f5"></a>

**verified_label** · `AURA-DF292B514063F5` · social proof — **claim to verify**

```text
Acheteuse vérifiée
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w4.settings.verified_label` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (review, w4); Setting verified_label; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-38E29EA51940C9](#aura-38e29ea51940c9), [AURA-3B2D14AFFAE4E5](#aura-3b2d14affae4e5), [AURA-F281780ADA7426](#aura-f281780ada7426), [AURA-D1039F9BCCD8F3](#aura-d1039f9bccd8f3), [AURA-1640C48465E687](#aura-1640c48465e687), [AURA-296CF02A6C86E2](#aura-296cf02a6c86e2), [AURA-F4FCA73CE3B5BE](#aura-f4fca73ce3b5be), [AURA-50AB1A4038BB24](#aura-50ab1a4038bb24), [AURA-27625B0BE97111](#aura-27625b0be97111), [AURA-5AA4E0B14965CE](#aura-5aa4e0b14965ce), [AURA-3598732234154B](#aura-3598732234154b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-077ac488ef2a5d"></a>

**initials** · `AURA-077AC488EF2A5D` · label / microcopy

```text
TB
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w4.settings.initials` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (review, w4); Setting initials; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-DD5C2DBE50D421](#aura-dd5c2dbe50d421). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-8c24c073f58290"></a>

**role** · `AURA-8C24C073F58290` · label / microcopy — **claim to verify**

```text
Aide-soignant · EHPAD Lille
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w4.settings.role` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (review, w4); Setting role; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-745D4023CA9F64](#aura-745d4023ca9f64). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### review w5 — block 5

<a id="aura-f948f15cf4cea7"></a>

**title** · `AURA-F948F15CF4CEA7` · headline — **claim to verify**

```text
Valent leurs 34 €, et je suis exigeante.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w5.settings.title` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (review, w5); Setting title; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-DEAD2B0AFCD4D2](#aura-dead2b0afcd4d2). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-8cbe822a4a9078"></a>

**name** · `AURA-8CBE822A4A9078` · label / microcopy — **claim to verify**

```text
Sophie O.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w5.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (review, w5); Setting name; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-6EA203714F7CF9](#aura-6ea203714f7cf9). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-24343d8941b6a7"></a>

**body** · `AURA-24343D8941B6A7` · paragraph — **claim to verify**

```text
J'ai testé quatre marques au même prix. Aura est la seule avec un bord-côte qui ne roule pas, une couture de pointe qu'on ne sent pas, et une pression qui semble pensée.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w5.settings.body` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (review, w5); Setting body; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-607D5A016BB31C](#aura-607d5a016bb31c). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-d1039f9bccd8f3"></a>

**verified_label** · `AURA-D1039F9BCCD8F3` · social proof — **claim to verify**

```text
Acheteuse vérifiée
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w5.settings.verified_label` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (review, w5); Setting verified_label; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-38E29EA51940C9](#aura-38e29ea51940c9), [AURA-3B2D14AFFAE4E5](#aura-3b2d14affae4e5), [AURA-F281780ADA7426](#aura-f281780ada7426), [AURA-DF292B514063F5](#aura-df292b514063f5), [AURA-1640C48465E687](#aura-1640c48465e687), [AURA-296CF02A6C86E2](#aura-296cf02a6c86e2), [AURA-F4FCA73CE3B5BE](#aura-f4fca73ce3b5be), [AURA-50AB1A4038BB24](#aura-50ab1a4038bb24), [AURA-27625B0BE97111](#aura-27625b0be97111), [AURA-5AA4E0B14965CE](#aura-5aa4e0b14965ce), [AURA-3598732234154B](#aura-3598732234154b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e0d59941f193a2"></a>

**initials** · `AURA-E0D59941F193A2` · label / microcopy

```text
SO
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w5.settings.initials` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (review, w5); Setting initials; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-027642741ADE6D](#aura-027642741ade6d). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-9a2a880c54209a"></a>

**role** · `AURA-9A2A880C54209A` · label / microcopy — **claim to verify**

```text
IDE Bloc op. · Marseille
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w5.settings.role` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (review, w5); Setting role; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-F718BEE38D7DCF](#aura-f718bee38d7dcf). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### review w6 — block 6

<a id="aura-7705176d2169ab"></a>

**title** · `AURA-7705176D2169AB` · headline — **claim to verify**

```text
Pris une taille au-dessus : parfait.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w6.settings.title` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (review, w6); Setting title; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-E39ADEBE0FA671](#aura-e39adebe0fa671). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-ba8de2bb6b728d"></a>

**name** · `AURA-BA8DE2BB6B728D` · label / microcopy — **claim to verify**

```text
Léa E.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w6.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (review, w6); Setting name; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-6142AE1328B2DA](#aura-6142ae1328b2da). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-a37e558baa368f"></a>

**body** · `AURA-A37E558BAA368F` · paragraph — **claim to verify**

```text
Conseil : j'ai pris une taille au-dessus du guide et elles sont idéales. Sinon, des chaussettes brillantes. Le tableau de mesure du mollet vaut de l'or.
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w6.settings.body` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (review, w6); Setting body; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-6BF62186D99EDC](#aura-6bf62186d99edc). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-1640c48465e687"></a>

**verified_label** · `AURA-1640C48465E687` · social proof — **claim to verify**

```text
Acheteuse vérifiée
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w6.settings.verified_label` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (review, w6); Setting verified_label; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-38E29EA51940C9](#aura-38e29ea51940c9), [AURA-3B2D14AFFAE4E5](#aura-3b2d14affae4e5), [AURA-F281780ADA7426](#aura-f281780ada7426), [AURA-DF292B514063F5](#aura-df292b514063f5), [AURA-D1039F9BCCD8F3](#aura-d1039f9bccd8f3), [AURA-296CF02A6C86E2](#aura-296cf02a6c86e2), [AURA-F4FCA73CE3B5BE](#aura-f4fca73ce3b5be), [AURA-50AB1A4038BB24](#aura-50ab1a4038bb24), [AURA-27625B0BE97111](#aura-27625b0be97111), [AURA-5AA4E0B14965CE](#aura-5aa4e0b14965ce), [AURA-3598732234154B](#aura-3598732234154b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-aabdd249872bef"></a>

**initials** · `AURA-AABDD249872BEF` · label / microcopy

```text
LE
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w6.settings.initials` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (review, w6); Setting initials; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-5A9C16B83F7C75](#aura-5a9c16b83f7c75). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-996ad89436d46c"></a>

**role** · `AURA-996AD89436D46C` · label / microcopy — **claim to verify**

```text
Infirmière puéricultrice · Nantes
```
Source: `templates/index.json` · `sections.aura_reviews.blocks.w6.settings.role` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (review, w6); Setting role; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-A40539FB1E2EE6](#aura-a40539fb1e2ee6). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### Section closing copy and controls

<a id="aura-417d4c427c35b5"></a>

**accessibility label** · `AURA-417D4C427C35B5` · accessibility label

```text
Précédent
```
Source: `sections/aura-reviews.liquid` · `line:41:aria-label:a527f17` · hardcoded Liquid. Editability: **code only**.
Context: section.reviews > div.carousel-nav > button.carousel-arrow
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-CC72F8A8FCB904](#aura-cc72f8a8fcb904), [AURA-08D962EED1A6F1](#aura-08d962eed1a6f1), [AURA-EDD116449B8C6F](#aura-edd116449b8c6f). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-4fecb64142997e"></a>

**accessibility label** · `AURA-4FECB64142997E` · accessibility label

```text
Suivant
```
Source: `sections/aura-reviews.liquid` · `line:42:aria-label:596d29a` · hardcoded Liquid. Editability: **code only**.
Context: section.reviews > div.carousel-nav > button.carousel-arrow
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-F97491171A8C97](#aura-f97491171a8c97), [AURA-332EC9872DDF65](#aura-332ec9872ddf65), [AURA-C697D145E1CF28](#aura-c697d145e1cf28). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 10: FAQ and contact reassurance

Section ID: `homepage--aura_faq` · Source section/component ID: `aura_faq` · Enabled: **yes**.
Page position: 10; saved group/body position: 8.
Role: Answer purchase questions and offer contact access.
Source: `templates/index.json`, `sections/aura-faq.liquid`. Active template setting: `sections.aura_faq`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-0372A5478F7D15](#aura-0372a5478f7d15) (Product prices, availability and discounts), [AURA-523441885C0B00](#aura-523441885c0b00) (Checkout, shipping and payments), [AURA-5D2B5979483D52](#aura-5d2b5979483d52) (Policies and legal pages).

#### Section introduction and controls

<a id="aura-f6b84432c4c529"></a>

**eyebrow** · `AURA-F6B84432C4C529` · eyebrow

```text
Vos questions, nos réponses
```
Source: `templates/index.json` · `sections.aura_faq.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-4409BFCF643975](#aura-4409bfcf643975). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-c04c12a3841170"></a>

**heading** · `AURA-C04C12A3841170` · headline

```text
Ce que les infirmières nous demandent.
```
Source: `templates/index.json` · `sections.aura_faq.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-639B106CC0BDBD](#aura-639b106cc0bdbd). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-d973d144cf3446"></a>

**lead** · `AURA-D973D144CF3446` · subheadline — **claim to verify**

```text
Ou écrivez-nous directement. Nous répondons en général en moins d'une heure, en français comme en anglais.
```
Source: `templates/index.json` · `sections.aura_faq.settings.lead` · active template setting. Editability: **Theme Editor**.
Context: Setting lead; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-298A37C8A5E6EE](#aura-298a37c8a5e6ee). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-f18e84392820c1"></a>

**contact_title** · `AURA-F18E84392820C1` · headline

```text
Encore une question ?
```
Source: `templates/index.json` · `sections.aura_faq.settings.contact_title` · active template setting. Editability: **Theme Editor**.
Context: Setting contact_title; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-A4FA6B50ED04CB](#aura-a4fa6b50ed04cb). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e49de3af3ef1b9"></a>

**contact_desc** · `AURA-E49DE3AF3EF1B9` · label / microcopy — **claim to verify**

```text
Notre équipe est en grande partie composée d'infirmières. On comprend.
```
Source: `templates/index.json` · `sections.aura_faq.settings.contact_desc` · active template setting. Editability: **Theme Editor**.
Context: Setting contact_desc; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-D860DB44AE3036](#aura-d860db44ae3036). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-4a21b607c2696c"></a>

**contact_email** · `AURA-4A21B607C2696C` · label / microcopy

```text
contact@auralegs.com
```
Source: `templates/index.json` · `sections.aura_faq.settings.contact_email` · active template setting. Editability: **Theme Editor**.
Context: Setting contact_email; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-DDBA2194BE9EE4](#aura-ddba2194be9ee4). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### qa q1 — block 1

<a id="aura-ee1eb20bb0ab55"></a>

**question** · `AURA-EE1EB20BB0AB55` · FAQ question

```text
S'agit-il de chaussettes de compression de qualité médicale ?
```
Source: `templates/index.json` · `sections.aura_faq.blocks.q1.settings.question` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (qa, q1); Setting question; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-63E4147AB8B14E](#aura-63e4147ab8b14e). Near duplicates: none in this packet.
<a id="aura-0dda45a935d099"></a>

**answer** · `AURA-0DDA45A935D099` · FAQ answer — **claim to verify**

```text
<p>Aura délivre une compression graduée 18–25 mmHg vérifiée — le niveau reconnu pour soulager les jambes lourdes lors des longues stations debout. C'est une compression de confort pensée pour les gardes de 12 heures ; ce n'est pas un dispositif médical délivré sur ordonnance. En cas de trouble veineux diagnostiqué, parlez-en à votre médecin.</p>
```
Source: `templates/index.json` · `sections.aura_faq.blocks.q1.settings.answer` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (qa, q1); Setting answer; section aura_faq
Rendering: conditional. FAQ answer; visible when its accordion is open.
Duplicates: [AURA-A3B9E34BE5D556](#aura-a3b9e34be5d556). Near duplicates: none in this packet.

#### qa q2 — block 2

<a id="aura-47520f114d2754"></a>

**question** · `AURA-47520F114D2754` · FAQ question

```text
Comment trouver ma taille ?
```
Source: `templates/index.json` · `sections.aura_faq.blocks.q2.settings.question` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (qa, q2); Setting question; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-2ABAC4771F641B](#aura-2abac4771f641b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-b2c30e726ccb75"></a>

**answer** · `AURA-B2C30E726CCB75` · FAQ answer — **claim to verify**

```text
<p>Prenez votre pointure habituelle et repérez votre taille dans notre <a href="#">guide des tailles</a>. Entre deux tailles, prenez la plus grande : la maille se détend, elle ne rétrécit pas.</p>
```
Source: `templates/index.json` · `sections.aura_faq.blocks.q2.settings.answer` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (qa, q2); Setting answer; section aura_faq
Rendering: conditional. FAQ answer; visible when its accordion is open.
Duplicates: [AURA-1DDF6B363D82DC](#aura-1ddf6b363d82dc). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### qa q3 — block 3

<a id="aura-cc45a1d11ccae1"></a>

**question** · `AURA-CC45A1D11CCAE1` · FAQ question

```text
Combien de temps durent-elles ?
```
Source: `templates/index.json` · `sections.aura_faq.blocks.q3.settings.question` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (qa, q3); Setting question; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-4D286215F36057](#aura-4d286215f36057). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-b11404e2208062"></a>

**answer** · `AURA-B11404E2208062` · FAQ answer — **claim to verify**

```text
<p>La compression tient au-delà de 100 cycles de lavage à 60°. Tricot 2 fils — léger comme une seconde peau, résistant au lavage quotidien. Si votre paire perd sa pression sous 12 mois, nous la remplaçons gratuitement.</p>
```
Source: `templates/index.json` · `sections.aura_faq.blocks.q3.settings.answer` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (qa, q3); Setting answer; section aura_faq
Rendering: conditional. FAQ answer; visible when its accordion is open.
Duplicates: [AURA-9924B49F12F3FD](#aura-9924b49f12f3fd). Near duplicates: none in this packet.

#### qa q4 — block 4

<a id="aura-77549290b6a0bd"></a>

**question** · `AURA-77549290B6A0BD` · FAQ question

```text
Puis-je les laver en machine ?
```
Source: `templates/index.json` · `sections.aura_faq.blocks.q4.settings.question` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (qa, q4); Setting question; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-563BE4B458225E](#aura-563be4b458225e). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-8ef76ba1321c02"></a>

**answer** · `AURA-8EF76BA1321C02` · FAQ answer — **claim to verify**

```text
<p>Oui. Lavage en machine à 60°, séchage tambour doux. Pas d'adoucissant. Sur l'envers c'est plus délicat, mais pas obligatoire.</p>
```
Source: `templates/index.json` · `sections.aura_faq.blocks.q4.settings.answer` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (qa, q4); Setting answer; section aura_faq
Rendering: conditional. FAQ answer; visible when its accordion is open.
Duplicates: [AURA-5FD2DB60FF08D3](#aura-5fd2db60ff08d3). Near duplicates: none in this packet.

#### qa q5 — block 5

<a id="aura-e117e378dec5a7"></a>

**question** · `AURA-E117E378DEC5A7` · FAQ question

```text
Et si elles ne me conviennent pas ?
```
Source: `templates/index.json` · `sections.aura_faq.blocks.q5.settings.question` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (qa, q5); Setting question; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-8F05E88A8B0BDD](#aura-8f05e88a8b0bdd). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-9032a867bf2d77"></a>

**answer** · `AURA-9032A867BF2D77` · FAQ answer — **claim to verify**

```text
<p>Portez-les un mois complet de gardes. Si ce ne sont pas les chaussettes les plus confortables que vous possédez, renvoyez-les — nous prenons en charge le retour et vous remboursons intégralement. Sans question, sans frais.</p>
```
Source: `templates/index.json` · `sections.aura_faq.blocks.q5.settings.answer` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (qa, q5); Setting answer; section aura_faq
Rendering: conditional. FAQ answer; visible when its accordion is open.
Duplicates: [AURA-B599B4418E38DA](#aura-b599b4418e38da). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### qa q6 — block 6

<a id="aura-a480ee926a5ed0"></a>

**question** · `AURA-A480EE926A5ED0` · FAQ question

```text
Proposez-vous des commandes pour équipes et hôpitaux ?
```
Source: `templates/index.json` · `sections.aura_faq.blocks.q6.settings.question` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (qa, q6); Setting question; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-B85FAE246E38BB](#aura-b85fae246e38bb). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-865d3ed1ae16db"></a>

**answer** · `AURA-865D3ED1AE16DB` · FAQ answer — **claim to verify**

```text
<p>Oui — dès 6 paires : tarif équipe, monogrammes brodés, essayages sur site (Île-de-France & Rhône-Alpes) et facturation. <a href="#">Écrivez à notre pôle équipes →</a></p>
```
Source: `templates/index.json` · `sections.aura_faq.blocks.q6.settings.answer` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (qa, q6); Setting answer; section aura_faq
Rendering: conditional. FAQ answer; visible when its accordion is open.
Duplicates: [AURA-F45528E6B120B6](#aura-f45528e6b120b6). Near duplicates: none in this packet.

#### qa q7 — block 7

<a id="aura-e68f64a9d98be0"></a>

**question** · `AURA-E68F64A9D98BE0` · FAQ question

```text
Quand verrai-je des résultats ?
```
Source: `templates/index.json` · `sections.aura_faq.blocks.q7.settings.question` · active template setting. Editability: **Theme Editor**.
Context: Block 7 (qa, q7); Setting question; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-B2D6D58B0C7225](#aura-b2d6d58b0c7225). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-5ab9f7ea643831"></a>

**answer** · `AURA-5AB9F7EA643831` · FAQ answer — **claim to verify**

```text
<p>La plupart des clientes constatent moins de gonflement du mollet et de fatigue en fin de garde dès la première garde de 12 heures. Les bénéfices à long terme (meilleur retour veineux, moins de varicosités) s'installent au fil des semaines.</p>
```
Source: `templates/index.json` · `sections.aura_faq.blocks.q7.settings.answer` · active template setting. Editability: **Theme Editor**.
Context: Block 7 (qa, q7); Setting answer; section aura_faq
Rendering: conditional. FAQ answer; visible when its accordion is open.
Duplicates: [AURA-75030545D5509E](#aura-75030545d5509e). Near duplicates: none in this packet.

### 11: Guarantee and service promises

Section ID: `homepage--aura_promise` · Source section/component ID: `aura_promise` · Enabled: **yes**.
Page position: 11; saved group/body position: 9.
Role: Present guarantee, delivery and service promises.
Source: `templates/index.json`, `sections/aura-promise.liquid`. Active template setting: `sections.aura_promise`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-0372A5478F7D15](#aura-0372a5478f7d15) (Product prices, availability and discounts), [AURA-523441885C0B00](#aura-523441885c0b00) (Checkout, shipping and payments), [AURA-5D2B5979483D52](#aura-5d2b5979483d52) (Policies and legal pages).

#### promise m1 — block 1

<a id="aura-405d43eaa3cc1f"></a>

**title** · `AURA-405D43EAA3CC1F` · headline — **claim to verify**

```text
Essai 30 nuits
```
Source: `templates/index.json` · `sections.aura_promise.blocks.m1.settings.title` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (promise, m1); Setting title; section aura_promise
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e18849454889aa"></a>

**desc** · `AURA-E18849454889AA` · label / microcopy — **claim to verify**

```text
Portez-les un mois complet. Pas conquise ? Retour gratuit.
```
Source: `templates/index.json` · `sections.aura_promise.blocks.m1.settings.desc` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (promise, m1); Setting desc; section aura_promise
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### promise m2 — block 2

<a id="aura-cd62d8906d4c79"></a>

**title** · `AURA-CD62D8906D4C79` · headline — **claim to verify**

```text
Garantie 12 mois
```
Source: `templates/index.json` · `sections.aura_promise.blocks.m2.settings.title` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (promise, m2); Setting title; section aura_promise
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-cd7543b3b89763"></a>

**desc** · `AURA-CD7543B3B89763` · label / microcopy — **claim to verify**

```text
Perte de pression ou couture lâchée ? On remplace, sans question.
```
Source: `templates/index.json` · `sections.aura_promise.blocks.m2.settings.desc` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (promise, m2); Setting desc; section aura_promise
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### promise m3 — block 3

<a id="aura-261bbbcf0f17cc"></a>

**title** · `AURA-261BBBCF0F17CC` · headline — **claim to verify**

```text
Conçu avec des soignantes
```
Source: `templates/index.json` · `sections.aura_promise.blocks.m3.settings.title` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (promise, m3); Setting title; section aura_promise
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-f96d74654884a5"></a>

**desc** · `AURA-F96D74654884A5` · label / microcopy — **claim to verify**

```text
Pensé et testé en garde réelle avant d'être validé.
```
Source: `templates/index.json` · `sections.aura_promise.blocks.m3.settings.desc` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (promise, m3); Setting desc; section aura_promise
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### promise m4 — block 4

<a id="aura-5795f5b5709bea"></a>

**title** · `AURA-5795F5B5709BEA` · headline — **claim to verify**

```text
Livraison offerte dès 60 €
```
Source: `templates/index.json` · `sections.aura_promise.blocks.m4.settings.title` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (promise, m4); Setting title; section aura_promise
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-C79CC7B205ED82](#aura-c79cc7b205ed82). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-d428d4d5c507b8"></a>

**desc** · `AURA-D428D4D5C507B8` · label / microcopy — **claim to verify**

```text
Sur chaque commande de plus de 60 € · expédié sous 24 h.
```
Source: `templates/index.json` · `sections.aura_promise.blocks.m4.settings.desc` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (promise, m4); Setting desc; section aura_promise
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 12: Final pack offer

Section ID: `homepage--aura_pack_cta` · Source section/component ID: `aura_pack_cta` · Enabled: **yes**.
Page position: 12; saved group/body position: 10.
Role: Summarize the pack offer and purchase action.
Source: `templates/index.json`, `sections/aura-pack-cta.liquid`. Active template setting: `sections.aura_pack_cta`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-0372A5478F7D15](#aura-0372a5478f7d15) (Product prices, availability and discounts), [AURA-523441885C0B00](#aura-523441885c0b00) (Checkout, shipping and payments), [AURA-5D2B5979483D52](#aura-5d2b5979483d52) (Policies and legal pages).

#### Section introduction and controls

<a id="aura-312c3e82f00b86"></a>

**eyebrow** · `AURA-312C3E82F00B86` · eyebrow

```text
L'offre complète
```
Source: `templates/index.json` · `sections.aura_pack_cta.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-852B6F9F9ADAD5](#aura-852b6f9f9adad5). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-798da719a755bd"></a>

**heading** · `AURA-798DA719A755BD` · headline

```text
Une paire par <span class="ser">jour de garde.</span>
```
Source: `templates/index.json` · `sections.aura_pack_cta.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-5AD319B41EC0CF](#aura-5ad319b41ec0cf). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-4473ba3bdf5b9e"></a>

**lead** · `AURA-4473BA3BDF5B9E` · subheadline — **claim to verify**

```text
Six paires d'Aura, une pour chaque jour de garde. Composez vos coloris, recevez la garde-robe complète — l'offre que nos clientes auraient voulu prendre dès le premier jour.
```
Source: `templates/index.json` · `sections.aura_pack_cta.settings.lead` · active template setting. Editability: **Theme Editor**.
Context: Setting lead; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-FA334D65EE5ABE](#aura-fa334d65ee5abe). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### item i1 — block 1

<a id="aura-e9afdae2fc8cbf"></a>

**text** · `AURA-E9AFDAE2FC8CBF` · paragraph — **claim to verify**

```text
6 paires d'Aura, vos coloris au choix
```
Source: `templates/index.json` · `sections.aura_pack_cta.blocks.i1.settings.text` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (item, i1); Setting text; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-DCBA238403596A](#aura-dcba238403596a). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-1b29a2bf382cba"></a>

**meta** · `AURA-1B29A2BF382CBA` · label / microcopy — **claim to verify**

```text
valeur 204 €
```
Source: `templates/index.json` · `sections.aura_pack_cta.blocks.i1.settings.meta` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (item, i1); Setting meta; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-02D16E18852914](#aura-02d16e18852914). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### item i2 — block 2

<a id="aura-238e36ee0a3e89"></a>

**text** · `AURA-238E36EE0A3E89` · paragraph — **claim to verify**

```text
Cadeau surprise inclus
```
Source: `templates/index.json` · `sections.aura_pack_cta.blocks.i2.settings.text` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (item, i2); Setting text; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-41BCBA31DCDADC](#aura-41bcba31dcdadc). Near duplicates: none in this packet.
<a id="aura-b66c201990d7e5"></a>

**meta** · `AURA-B66C201990D7E5` · label / microcopy — **claim to verify**

```text
Offert
```
Source: `templates/index.json` · `sections.aura_pack_cta.blocks.i2.settings.meta` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (item, i2); Setting meta; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-AA3795DE8F478C](#aura-aa3795de8f478c). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### item i3 — block 3

<a id="aura-a1a0c5be4a737a"></a>

**text** · `AURA-A1A0C5BE4A737A` · paragraph — **claim to verify**

```text
Livraison offerte — 5 à 7 jours ouvrés
```
Source: `templates/index.json` · `sections.aura_pack_cta.blocks.i3.settings.text` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (item, i3); Setting text; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-6C2316F1DF7EF0](#aura-6c2316f1df7ef0). Near duplicates: none in this packet.
<a id="aura-0a4935913a9f83"></a>

**meta** · `AURA-0A4935913A9F83` · label / microcopy — **claim to verify**

```text
Offerte
```
Source: `templates/index.json` · `sections.aura_pack_cta.blocks.i3.settings.meta` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (item, i3); Setting meta; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-644D9A6FA8D6A5](#aura-644d9a6fa8d6a5). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### item i4 — block 4

<a id="aura-99f861fa204a92"></a>

**text** · `AURA-99F861FA204A92` · paragraph — **claim to verify**

```text
Garantie de remplacement 12 mois
```
Source: `templates/index.json` · `sections.aura_pack_cta.blocks.i4.settings.text` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (item, i4); Setting text; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-2846B6019AAB0B](#aura-2846b6019aab0b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-bb9ae51883c695"></a>

**meta** · `AURA-BB9AE51883C695` · label / microcopy — **claim to verify**

```text
Inclus
```
Source: `templates/index.json` · `sections.aura_pack_cta.blocks.i4.settings.meta` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (item, i4); Setting meta; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-9FEDE33F667421](#aura-9fede33f667421). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### item i5 — block 5

<a id="aura-4005c7cc5c4cbc"></a>

**text** · `AURA-4005C7CC5C4CBC` · paragraph — **claim to verify**

```text
−10 % pour vous et une collègue, prochaine commande
```
Source: `templates/index.json` · `sections.aura_pack_cta.blocks.i5.settings.text` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (item, i5); Setting text; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-05418A1F5EC0C0](#aura-05418a1f5ec0c0). Near duplicates: none in this packet.
<a id="aura-e52cc56a8446ad"></a>

**meta** · `AURA-E52CC56A8446AD` · label / microcopy — **claim to verify**

```text
Les deux
```
Source: `templates/index.json` · `sections.aura_pack_cta.blocks.i5.settings.meta` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (item, i5); Setting meta; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-54FC43E2C8B50E](#aura-54fc43e2c8b50e). Near duplicates: none in this packet.

#### Section closing copy and controls

<a id="aura-14aeae22da51cc"></a>

**flag** · `AURA-14AEAE22DA51CC` · badge — **claim to verify**

```text
Économisez 102 € · meilleure offre
```
Source: `templates/index.json` · `sections.aura_pack_cta.settings.flag` · active template setting. Editability: **Theme Editor**.
Context: Setting flag; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-54BBD25C011F25](#aura-54bbd25c011f25). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-d91671073f20b7"></a>

**card_name** · `AURA-D91671073F20B7` · label / microcopy

```text
Le pack 6 paires
```
Source: `templates/index.json` · `sections.aura_pack_cta.settings.card_name` · active template setting. Editability: **Theme Editor**.
Context: Setting card_name; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-64D9E2D036DEB3](#aura-64d9e2d036deb3). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-434f698cc28aad"></a>

**strike** · `AURA-434F698CC28AAD` · offer / price — **claim to verify**

```text
204 €
```
Source: `templates/index.json` · `sections.aura_pack_cta.settings.strike` · active template setting. Editability: **Theme Editor**.
Context: Setting strike; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-FA4C7CCB2AF531](#aura-fa4c7ccb2af531). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-385ae0cc356350"></a>

**card_desc** · `AURA-385AE0CC356350` · label / microcopy — **claim to verify**

```text
Six paires, vos coloris au choix. La garde-robe Aura complète, en une commande.
```
Source: `templates/index.json` · `sections.aura_pack_cta.settings.card_desc` · active template setting. Editability: **Theme Editor**.
Context: Setting card_desc; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-796558CD899F4D](#aura-796558cd899f4d). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-2e8d8df43dc122"></a>

**label / microcopy** · `AURA-2E8D8DF43DC122` · label / microcopy

```text
Bordeaux ×2
```
Source: `sections/aura-pack-cta.liquid` · `line:36:text:b9ea369` · hardcoded Liquid. Editability: **code only**.
Context: div.includes > div.inc-item > div.label
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-AF95F139C5D5D2](#aura-af95f139c5d5d2). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-0d251a79070cc7"></a>

**label / microcopy** · `AURA-0D251A79070CC7` · label / microcopy

```text
Noir ×2
```
Source: `sections/aura-pack-cta.liquid` · `line:37:text:78bb2c3` · hardcoded Liquid. Editability: **code only**.
Context: div.includes > div.inc-item > div.label
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-DF68CB52A4AAA1](#aura-df68cb52a4aaa1). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-2105cacccc8b3c"></a>

**label / microcopy** · `AURA-2105CACCCC8B3C` · label / microcopy

```text
Gris ×2
```
Source: `sections/aura-pack-cta.liquid` · `line:38:text:e0fd500` · hardcoded Liquid. Editability: **code only**.
Context: div.includes > div.inc-item > div.label
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-5634A07E04ADAA](#aura-5634a07e04adaa). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-7556413ee32c11"></a>

**price** · `AURA-7556413EE32C11` · offer / price — **claim to verify**

```text
102
```
Source: `templates/index.json` · `sections.aura_pack_cta.settings.price` · active template setting. Editability: **Theme Editor**.
Context: Setting price; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-3DA57886DA824B](#aura-3da57886da824b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-a5ba0800651bde"></a>

**per** · `AURA-A5BA0800651BDE` · offer / price — **claim to verify**

```text
17 € / paire · TTC
```
Source: `templates/index.json` · `sections.aura_pack_cta.settings.per` · active template setting. Editability: **Theme Editor**.
Context: Setting per; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-A0B7E156E18A3B](#aura-a0b7e156e18a3b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-2f440a2d3a0131"></a>

**save_line** · `AURA-2F440A2D3A0131` · offer / price — **claim to verify**

```text
Vous économisez 102 € — livraison et cadeau surprise inclus
```
Source: `templates/index.json` · `sections.aura_pack_cta.settings.save_line` · active template setting. Editability: **Theme Editor**.
Context: Setting save_line; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-D375BF5EA67033](#aura-d375bf5ea67033). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-1593a387e5f9f6"></a>

**button_label** · `AURA-1593A387E5F9F6` · CTA

```text
Composer mon pack 6 paires
```
Source: `templates/index.json` · `sections.aura_pack_cta.settings.button_label` · active template setting. Editability: **Theme Editor**.
Context: Setting button_label; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-E1ACA0FE4DBFD7](#aura-e1aca0fe4dbfd7). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-ed021d135e9709"></a>

**ship** · `AURA-ED021D135E9709` · label / microcopy — **claim to verify**

```text
Livraison express offerte · expédié sous 24 h
```
Source: `templates/index.json` · `sections.aura_pack_cta.settings.ship` · active template setting. Editability: **Theme Editor**.
Context: Setting ship; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-2A234E7F1DB1BC](#aura-2a234e7f1db1bc). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 13: Newsletter

Section ID: `shared--aura_newsletter` · Source section/component ID: `aura_newsletter` · Enabled: **yes**.
Page position: 13; saved group/body position: 1.
Role: Offer newsletter signup and related privacy microcopy.
Source: `sections/footer-group.json`, `sections/aura-newsletter.liquid`. Active template setting: `sections.aura_newsletter`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-F599CDF2AC1E9B](#aura-f599cdf2ac1e9b) (Contact and newsletter service responses), [AURA-5D2B5979483D52](#aura-5d2b5979483d52) (Policies and legal pages).

#### Section introduction and controls

<a id="aura-91895cc3eabba5"></a>

**heading** · `AURA-91895CC3EABBA5` · headline

```text
La <span class="ser">lettre de garde.</span>
```
Source: `sections/footer-group.json` · `sections.aura_newsletter.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_newsletter
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-59b4928d12e0e5"></a>

**body** · `AURA-59B4928D12E0E5` · paragraph — **claim to verify**

```text
Une note mensuelle pour les infirmières : récupération, science du mollet, conseils d'ajustement de notre équipe. Jamais de spam, promis.
```
Source: `sections/footer-group.json` · `sections.aura_newsletter.settings.body` · active template setting. Editability: **Theme Editor**.
Context: Setting body; section aura_newsletter
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-92281fd9a149da"></a>

**placeholder** · `AURA-92281FD9A149DA` · label / microcopy

```text
vous@hôpital.fr
```
Source: `sections/footer-group.json` · `sections.aura_newsletter.settings.placeholder` · active template setting. Editability: **Theme Editor**.
Context: Setting placeholder; section aura_newsletter
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e9c70fc47f1909"></a>

**button_label** · `AURA-E9C70FC47F1909` · CTA

```text
S'inscrire
```
Source: `sections/footer-group.json` · `sections.aura_newsletter.settings.button_label` · active template setting. Editability: **Theme Editor**.
Context: Setting button_label; section aura_newsletter
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-907478a8370e6e"></a>

**legal** · `AURA-907478A8370E6E` · legal microcopy — **claim to verify**

```text
En vous inscrivant, vous acceptez notre politique de confidentialité. Désinscription en un clic.
```
Source: `sections/footer-group.json` · `sections.aura_newsletter.settings.legal` · active template setting. Editability: **Theme Editor**.
Context: Setting legal; section aura_newsletter
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 14: Footer and legal navigation

Section ID: `shared--aura_footer` · Source section/component ID: `aura_footer` · Enabled: **yes**.
Page position: 14; saved group/body position: 2.
Role: Provide supporting navigation, legal destinations and payment labels.
Source: `sections/footer-group.json`, `sections/aura-footer.liquid`. Active template setting: `sections.aura_footer`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-5D2B5979483D52](#aura-5d2b5979483d52) (Policies and legal pages), [AURA-523441885C0B00](#aura-523441885c0b00) (Checkout, shipping and payments).

#### Section introduction and controls

<a id="aura-b2f6ebbcc7fe8c"></a>

**logo_text** · `AURA-B2F6EBBCC7FE8C` · paragraph

```text
Aura
```
Source: `sections/footer-group.json` · `sections.aura_footer.settings.logo_text` · active template setting. Editability: **Theme Editor**.
Context: Setting logo_text; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-CC4E1CA10AA7A5](#aura-cc4e1ca10aa7a5), [AURA-0C632B506D193A](#aura-0c632b506d193a), [AURA-08A98839B76DBC](#aura-08a98839b76dbc). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-f001a162c9c939"></a>

**tagline** · `AURA-F001A162C9C939` · badge

```text
Chaussettes de compression pour celles et ceux qui tiennent la France debout.
```
Source: `sections/footer-group.json` · `sections.aura_footer.settings.tagline` · active template setting. Editability: **Theme Editor**.
Context: Setting tagline; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
<a id="aura-d912db58c37177"></a>

**accessibility label** · `AURA-D912DB58C37177` · accessibility label

```text
Instagram
```
Source: `sections/aura-footer.liquid` · `line:19:aria-label:5721bbe` · hardcoded Liquid. Editability: **code only**.
Context: div.footer-brand > div.socials > a
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
<a id="aura-0e5b117066340a"></a>

**accessibility label** · `AURA-0E5B117066340A` · accessibility label

```text
TikTok
```
Source: `sections/aura-footer.liquid` · `line:20:aria-label:fc49f15` · hardcoded Liquid. Editability: **code only**.
Context: div.footer-brand > div.socials > a
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
<a id="aura-500985143b822c"></a>

**accessibility label** · `AURA-500985143B822C` · accessibility label

```text
Facebook
```
Source: `sections/aura-footer.liquid` · `line:21:aria-label:82da67b` · hardcoded Liquid. Editability: **code only**.
Context: div.footer-brand > div.socials > a
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.

#### column c2 — block 1

<a id="aura-0486d1870a0071"></a>

**heading** · `AURA-0486D1870A0071` · headline

```text
Découvrir
```
Source: `sections/footer-group.json` · `sections.aura_footer.blocks.c2.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (column, c2); Setting heading; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
<a id="aura-30b317c59f3e0b"></a>

**links** · `AURA-30B317C59F3E0B` · label / microcopy

```text
Notre histoire
```
Source: `sections/footer-group.json` · `sections.aura_footer.blocks.c2.settings.links.line[1]` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (column, c2); Setting links; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-68ACE76111335B](#aura-68ace76111335b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
Destination: `/pages/notre-histoire`.
<a id="aura-9379e2489f28be"></a>

**links** · `AURA-9379E2489F28BE` · label / microcopy

```text
Guide des tailles
```
Source: `sections/footer-group.json` · `sections.aura_footer.blocks.c2.settings.links.line[2]` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (column, c2); Setting links; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-AF9455BDC5252D](#aura-af9455bdc5252d), [AURA-A6214F665A767A](#aura-a6214f665a767a). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
Destination: `/pages/guide-des-tailles`.

#### column c3 — block 2

<a id="aura-590ded50c8672e"></a>

**heading** · `AURA-590DED50C8672E` · headline

```text
Aide
```
Source: `sections/footer-group.json` · `sections.aura_footer.blocks.c3.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (column, c3); Setting heading; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-88eb2ad33e06ec"></a>

**links** · `AURA-88EB2AD33E06EC` · label / microcopy

```text
Livraison & retours
```
Source: `sections/footer-group.json` · `sections.aura_footer.blocks.c3.settings.links.line[1]` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (column, c3); Setting links; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-5EE3CC216BEE74](#aura-5ee3cc216bee74). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
Destination: `/pages/livraison-retours`.
<a id="aura-a5d72a8e9c6587"></a>

**links** · `AURA-A5D72A8E9C6587` · label / microcopy

```text
Contact
```
Source: `sections/footer-group.json` · `sections.aura_footer.blocks.c3.settings.links.line[2]` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (column, c3); Setting links; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-FC7F180EEA66BB](#aura-fc7f180eea66bb). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
Destination: `/pages/contact`.

#### Legal navigation

<a id="aura-b2ed3845b8e085"></a>

**legal_line** · `AURA-B2ED3845B8E085` · legal microcopy — **claim to verify**

```text
© 2026 Aura <a href="/policies/legal-notice">Mentions légales</a><a href="/policies/terms-of-service">CGV</a><a href="/policies/privacy-policy">Confidentialité</a><a href="/policies/refund-policy">Remboursement</a>
```
Source: `sections/footer-group.json` · `sections.aura_footer.settings.legal_line` · active template setting. Editability: **Theme Editor**.
Context: Setting legal_line; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.

#### Payment labels

<a id="aura-1bfe2b46c44a2f"></a>

**pay_badges** · `AURA-1BFE2B46C44A2F` · badge

```text
VISA
```
Source: `sections/footer-group.json` · `sections.aura_footer.settings.pay_badges.item[1]` · active template setting. Editability: **Theme Editor**.
Context: Setting pay_badges; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
<a id="aura-2bca135c03ba15"></a>

**pay_badges** · `AURA-2BCA135C03BA15` · badge

```text
PayPal
```
Source: `sections/footer-group.json` · `sections.aura_footer.settings.pay_badges.item[4]` · active template setting. Editability: **Theme Editor**.
Context: Setting pay_badges; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
<a id="aura-5416cae95c51d6"></a>

**pay_badges** · `AURA-5416CAE95C51D6` · badge

```text
Apple Pay
```
Source: `sections/footer-group.json` · `sections.aura_footer.settings.pay_badges.item[5]` · active template setting. Editability: **Theme Editor**.
Context: Setting pay_badges; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
<a id="aura-68ba8dec7d1d44"></a>

**pay_badges** · `AURA-68BA8DEC7D1D44` · badge

```text
CB
```
Source: `sections/footer-group.json` · `sections.aura_footer.settings.pay_badges.item[3]` · active template setting. Editability: **Theme Editor**.
Context: Setting pay_badges; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
<a id="aura-7bf91777c8eb2f"></a>

**pay_badges** · `AURA-7BF91777C8EB2F` · badge

```text
MC
```
Source: `sections/footer-group.json` · `sections.aura_footer.settings.pay_badges.item[2]` · active template setting. Editability: **Theme Editor**.
Context: Setting pay_badges; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.

### Purchase component: Cart drawer and purchase feedback

Section ID: `shared--cart-drawer` · Source section/component ID: `drawer` · Enabled: **yes**.
Page position: conditional overlay, outside page flow; saved group/body position: not applicable.
Role: Review the basket, adjust quantities and proceed to checkout.
Source: `snippets/aura-globals.liquid`, `assets/aura-cart.js`. Active template setting: none — code/runtime component.
Nearby context: Overlay/scroll-triggered UI; not an additional section in the saved page order.
External content required: [AURA-47B5500F21684B](#aura-47b5500f21684b) (Product titles), [AURA-89AD77D87570A3](#aura-89ad77d87570a3) (Product options and variants), [AURA-0372A5478F7D15](#aura-0372a5478f7d15) (Product prices, availability and discounts), [AURA-523441885C0B00](#aura-523441885c0b00) (Checkout, shipping and payments).

#### Drawer heading, contents and quantity controls

<a id="aura-8809a9f5f93164"></a>

**accessibility label** · `AURA-8809A9F5F93164` · accessibility label

```text
Panier
```
Source: `snippets/aura-globals.liquid` · `line:22:aria-label:cb46804` · hardcoded Liquid. Editability: **code only**.
Context: aside.drawer
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: [AURA-62555A65B82BC4](#aura-62555a65b82bc4). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-b47f0a428867f7"></a>

**label / microcopy** · `AURA-B47F0A428867F7` · label / microcopy

```text
Votre panier
```
Source: `snippets/aura-globals.liquid` · `line:24:text:0a9a754` · hardcoded Liquid. Editability: **code only**.
Context: aside.drawer > div.drawer-head > div.h
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-4819d0b95e8ced"></a>

**accessibility label** · `AURA-4819D0B95E8CED` · accessibility label

```text
Fermer
```
Source: `snippets/aura-globals.liquid` · `line:25:aria-label:5ab4ec6` · hardcoded Liquid. Editability: **code only**.
Context: aside.drawer > div.drawer-head > button.drawer-close
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-15d582b681a7b7"></a>

**label / microcopy** · `AURA-15D582B681A7B7` · label / microcopy

```text
Votre panier est vide.
```
Source: `snippets/aura-globals.liquid` · `line:42:text:8abc02b` · hardcoded Liquid. Editability: **code only**.
Context: aside.drawer > div.drawer-items > p
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: [AURA-0D09BADB4E47C0](#aura-0d09badb4e47c0). Near duplicates: none in this packet.
<a id="aura-2e0a403392d952"></a>

**JavaScript microcopy** · `AURA-2E0A403392D952` · JavaScript microcopy

```text
 article
```
Source: `assets/aura-cart.js` · `line:53:literal: article` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Used when cart.item_count === 1; leading space is retained.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
if (drawerCount) drawerCount.textContent = cart.item_count + (cart.item_count === 1 ? ' article' : ' articles');
```
<a id="aura-ba333775d9f094"></a>

**dynamic microcopy** · `AURA-BA333775D9F094` · dynamic microcopy

```text
[DYNAMIC COPY — see the exact expression below; no runtime value invented]
```
Source: `assets/aura-cart.js` · `drawerCount.textContent` · JavaScript-generated. Editability: **code only**.
Context: Exact assembled sentence depends on runtime inputs.
Rendering: conditional. AJAX cart item count, singular/plural.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
cart.item_count + (cart.item_count === 1 ? ' article' : ' articles')
```
<a id="aura-f089664670cf38"></a>

**JavaScript microcopy** · `AURA-F089664670CF38` · JavaScript microcopy

```text
 articles
```
Source: `assets/aura-cart.js` · `line:53:literal: articles` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Used for all other item counts; leading space is retained.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
if (drawerCount) drawerCount.textContent = cart.item_count + (cart.item_count === 1 ? ' article' : ' articles');
```
<a id="aura-0d09badb4e47c0"></a>

**JavaScript microcopy** · `AURA-0D09BADB4E47C0` · JavaScript microcopy

```text
Votre panier est vide.
```
Source: `assets/aura-cart.js` · `line:57:literal:Votre panier est vide.` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Shown when cart.items is empty.
Duplicates: [AURA-15D582B681A7B7](#aura-15d582b681a7b7). Near duplicates: none in this packet.

Exact runtime expression:
```text
itemsEl.innerHTML = '<p style="padding:24px 0;color:var(--muted);font-size:14px;">Votre panier est vide.</p>';
```
<a id="aura-4fa62e045fcab4"></a>

**JavaScript microcopy** · `AURA-4FA62E045FCAB4` · JavaScript microcopy

```text
Moins
```
Source: `assets/aura-cart.js` · `line:67:literal:Moins` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Accessible label of the decrement button generated in the cart.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
'<div class="qty"><button type="button" data-dec aria-label="Moins">−</button><span>' + it.quantity + '</span><button type="button" data-inc aria-label="Plus">+</button></div></div>' +
```
<a id="aura-b55f9d60f64689"></a>

**JavaScript microcopy** · `AURA-B55F9D60F64689` · JavaScript microcopy

```text
Plus
```
Source: `assets/aura-cart.js` · `line:67:literal:Plus` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Accessible label of the increment button generated in the cart.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
'<div class="qty"><button type="button" data-dec aria-label="Moins">−</button><span>' + it.quantity + '</span><button type="button" data-inc aria-label="Plus">+</button></div></div>' +
```

#### Totals, delivery, savings and checkout

<a id="aura-6fbb11c8da11fe"></a>

**dynamic microcopy** · `AURA-6FBB11C8DA11FE` · dynamic microcopy

```text
[DYNAMIC COPY — see the exact expression below; no runtime value invented]
```
Source: `assets/aura-cart.js` · `return (c / 100)` · JavaScript-generated. Editability: **code only**.
Context: Exact assembled sentence depends on runtime inputs.
Rendering: conditional. Live Shopify amounts; no amount invented.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
(c / 100).toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + ' €'
```
<a id="aura-83afb5d9ebe49d"></a>

**label / microcopy** · `AURA-83AFB5D9EBE49D` · label / microcopy

```text
Sous-total
```
Source: `snippets/aura-globals.liquid` · `line:47:text:306e7e8` · hardcoded Liquid. Editability: **code only**.
Context: div.drawer-foot > div.row > span
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-a35daecf963acb"></a>

**label / microcopy** · `AURA-A35DAECF963ACB` · label / microcopy

```text
Réduction
```
Source: `snippets/aura-globals.liquid` · `line:48:text:0126ff4` · hardcoded Liquid. Editability: **code only**.
Context: div.drawer-foot > div.row.drawer-discount-row > span
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-28329bc350f1a2"></a>

**label / microcopy** · `AURA-28329BC350F1A2` · label / microcopy

```text
Livraison
```
Source: `snippets/aura-globals.liquid` · `line:49:text:5755a8f` · hardcoded Liquid. Editability: **code only**.
Context: div.drawer-foot > div.row > span
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: [AURA-5FEEEBD4308A2D](#aura-5feeebd4308a2d). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-63128b8061975b"></a>

**label / microcopy** · `AURA-63128B8061975B` · label / microcopy

```text
Calculée au paiement
```
Source: `snippets/aura-globals.liquid` · `line:49:text:39cd6a2` · hardcoded Liquid. Editability: **code only**.
Context: div.drawer-foot > div.row > span
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.
<a id="aura-a38ea58efe7a86"></a>

**label / microcopy** · `AURA-A38EA58EFE7A86` · label / microcopy

```text
Total
```
Source: `snippets/aura-globals.liquid` · `line:50:text:b25928c` · hardcoded Liquid. Editability: **code only**.
Context: div.drawer-foot > div.row.total > span
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-410e594f162637"></a>

**CTA** · `AURA-410E594F162637` · CTA

```text
Paiement
```
Source: `snippets/aura-globals.liquid` · `line:51:text:0564e9b` · hardcoded Liquid. Editability: **code only**.
Context: aside.drawer > div.drawer-foot > button.btn.btn-coral
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.
<a id="aura-8de007ffe836ca"></a>

**label / microcopy** · `AURA-8DE007FFE836CA` · label / microcopy — **claim to verify**

```text
Paiement sécurisé · CB · Apple Pay · PayPal · Klarna
```
Source: `snippets/aura-globals.liquid` · `line:52:text:2eefa87` · hardcoded Liquid. Editability: **code only**.
Context: aside.drawer > div.drawer-foot > div.note
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.
<a id="aura-ff897a8d955897"></a>

**dynamic microcopy** · `AURA-FF897A8D955897` · dynamic microcopy

```text
[DYNAMIC COPY — see the exact expression below; no runtime value invented]
```
Source: `assets/aura-cart.js` · `discountEl.textContent = '−'` · JavaScript-generated. Editability: **code only**.
Context: Exact assembled sentence depends on runtime inputs.
Rendering: conditional. Shopify cart.total_discount; discount row hidden when amount is zero.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
'−' + money(saved)
```

#### Add-to-cart confirmation

<a id="aura-bbd9505f53b750"></a>

**JavaScript microcopy** · `AURA-BBD9505F53B750` · JavaScript microcopy

```text
Ajouté au panier
```
Source: `assets/aura-cart.js` · `line:46:literal:Ajouté au panier` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Toast shown after the add/refresh promise chain completes.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
function added() { toast('Ajouté au panier'); }
```

### SEO title and description

Metadata block: `homepage--seo` · Enabled: yes · Source: `layout/theme.liquid` · Editability: code for literal fallbacks; Shopify Admin for current SEO.
External content required: [AURA-D39F9274D204B3](#aura-d39f9274d204b3).
<a id="aura-44601a8d1aaa3b"></a>

**SEO** · `AURA-44601A8D1AAA3B` · SEO — **claim to verify**

```text
Auralegs — Chaussettes de compression pour infirmières · 18–25 mmHg
```
Source: `layout/theme.liquid` · `line:36:meta_title` · hardcoded Liquid. Editability: **code only**.
Context: HTML title/meta-description fallback.
Rendering: conditional. Homepage only, when page_title == shop.name.
Duplicates: none in this packet. Near duplicates: none in this packet.
<a id="aura-b44573591b1bec"></a>

**SEO** · `AURA-B44573591B1BEC` · SEO — **claim to verify**

```text
Des jambes légères après 12 h de garde. Compression graduée 18–25 mmHg vérifiée, sans marques rouges, pensée pour les infirmières. Livraison offerte dès 60 €.
```
Source: `layout/theme.liquid` · `line:42:meta_desc` · hardcoded Liquid. Editability: **code only**.
Context: HTML title/meta-description fallback.
Rendering: conditional. Homepage only, when page_description is blank.
Duplicates: none in this packet. Near duplicates: none in this packet.
Existing title/description transformation IDs in the master: `AURA-28D85749D9DD27`, `AURA-559B8C9C18371F`, `AURA-68AF0F119A61C6`, `AURA-9083C378B812CD`, `AURA-DED982651F87E2`. These are provenance references, not proposed or additional standalone copy.

## Product page

Saved template: `templates/product.json`. Disabled sections are omitted; the saved section position is retained alongside the displayed sequence.

Flow: Announcement bar → Navigation → Product buy box → Feature grid → Video testimonials → Statistics → Compression explanation → Benefits → Material comparison → Product comparison → Reviews → Description, care, delivery and returns → FAQ and contact reassurance → Final pack offer → Newsletter → Footer and legal navigation.

### 1: Announcement bar

Section ID: `shared--aura_announcement` · Source section/component ID: `aura_announcement` · Enabled: **yes**.
Page position: 1; saved group/body position: 1.
Role: Introduce the current delivery and pack offer.
Source: `sections/header-group.json`, `sections/aura-announcement.liquid`. Active template setting: `sections.aura_announcement`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-0372A5478F7D15](#aura-0372a5478f7d15) (Product prices, availability and discounts), [AURA-523441885C0B00](#aura-523441885c0b00) (Checkout, shipping and payments), [AURA-5D2B5979483D52](#aura-5d2b5979483d52) (Policies and legal pages).

#### Section introduction and controls


**shipping_text** · `AURA-C79CC7B205ED82` · paragraph — **claim to verify**

```text
Livraison offerte dès 60 €
```
Source: `sections/header-group.json` · `sections.aura_announcement.settings.shipping_text` · active template setting. Editability: **Theme Editor**.
Context: Setting shipping_text; section aura_announcement
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-5795F5B5709BEA](#aura-5795f5b5709bea). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

**sale_text** · `AURA-47E1D402444839` · paragraph — **claim to verify**

```text
Offre packs : jusqu'à −50 %
```
Source: `sections/header-group.json` · `sections.aura_announcement.settings.sale_text` · active template setting. Editability: **Theme Editor**.
Context: Setting sale_text; section aura_announcement
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.

**lang_text** · `AURA-7F26B4BDC72ECA` · paragraph

```text
🇫🇷 FR <span style="opacity:0.4">/</span> EN
```
Source: `sections/header-group.json` · `sections.aura_announcement.settings.lang_text` · active template setting. Editability: **Theme Editor**.
Context: Setting lang_text; section aura_announcement
Rendering: expected from repository. Announcement language display hidden at <=749px.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 2: Navigation

Section ID: `shared--aura_header` · Source section/component ID: `aura_header` · Enabled: **yes**.
Page position: 2; saved group/body position: 2.
Role: Orient the visitor and provide navigation and cart access.
Source: `sections/header-group.json`, `sections/aura-header.liquid`. Active template setting: `sections.aura_header`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: none identified in the master.

#### Section introduction and controls


**accessibility label** · `AURA-00120A1055DFD1` · accessibility label

```text
Menu
```
Source: `sections/aura-header.liquid` · `line:17:aria-label:57f5f5e` · hardcoded Liquid. Editability: **code only**.
Context: div.header-row > div.header-left > button.nav-burger
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.

#### link_left l0 — block 1


**label** · `AURA-675A3C3F8BB363` · label / microcopy

```text
Boutique
```
Source: `sections/header-group.json` · `sections.aura_header.blocks.l0.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (link_left, l0); Setting label; section aura_header
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### link_left l2 — block 2


**label** · `AURA-68ACE76111335B` · label / microcopy

```text
Notre histoire
```
Source: `sections/header-group.json` · `sections.aura_header.blocks.l2.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (link_left, l2); Setting label; section aura_header
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-30B317C59F3E0B](#aura-30b317c59f3e0b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### link_left l3 — block 3


**label** · `AURA-AF9455BDC5252D` · label / microcopy

```text
Guide des tailles
```
Source: `sections/header-group.json` · `sections.aura_header.blocks.l3.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (link_left, l3); Setting label; section aura_header
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-A6214F665A767A](#aura-a6214f665a767a), [AURA-9379E2489F28BE](#aura-9379e2489f28be). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### link_right r1 — block 4


**label** · `AURA-5EE3CC216BEE74` · label / microcopy

```text
Livraison & retours
```
Source: `sections/header-group.json` · `sections.aura_header.blocks.r1.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (link_right, r1); Setting label; section aura_header
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-88EB2AD33E06EC](#aura-88eb2ad33e06ec). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### link_right r2 — block 5


**label** · `AURA-FC7F180EEA66BB` · label / microcopy

```text
Contact
```
Source: `sections/header-group.json` · `sections.aura_header.blocks.r2.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (link_right, r2); Setting label; section aura_header
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-A5D72A8E9C6587](#aura-a5d72a8e9c6587). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### Section closing copy and controls


**logo_text** · `AURA-CC4E1CA10AA7A5` · paragraph

```text
Aura
```
Source: `sections/header-group.json` · `sections.aura_header.settings.logo_text` · active template setting. Editability: **Theme Editor**.
Context: Setting logo_text; section aura_header
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-0C632B506D193A](#aura-0c632b506d193a), [AURA-08A98839B76DBC](#aura-08a98839b76dbc), [AURA-B2F6EBBCC7FE8C](#aura-b2f6ebbcc7fe8c). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

**accessibility label** · `AURA-4353311C2D02E8` · accessibility label

```text
Rechercher
```
Source: `sections/aura-header.liquid` · `line:40:aria-label:91f7d3e` · hardcoded Liquid. Editability: **code only**.
Context: div.header-row > div.header-right > button.nav-icon-btn
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.

**cart_label** · `AURA-62555A65B82BC4` · label / microcopy

```text
Panier
```
Source: `sections/header-group.json` · `sections.aura_header.settings.cart_label` · active template setting. Editability: **Theme Editor**.
Context: Setting cart_label; section aura_header
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-8809A9F5F93164](#aura-8809a9f5f93164). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

**locale interface copy** · `AURA-617D50B6FD9ACA` · locale interface copy

```text
Ignorer et passer au contenu
```
Source: `locales/fr.json` · `accessibility.skip_to_text` · locale translation. Editability: **Theme Editor**.
Context: Translation reference: layout/theme.liquid:340
Rendering: conditional. Referenced by configured route/dependency; only displayed when its Liquid/JS branch executes and storefront locale is French.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 3: Product buy box

Section ID: `product--aura_featured_product` · Source section/component ID: `aura_featured_product` · Enabled: **yes**.
Page position: 3; saved group/body position: 1.
Role: Guide colour, size and bundle selection and purchase.
Source: `templates/product.json`, `sections/aura-featured-product.liquid`. Active template setting: `sections.aura_featured_product`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-47B5500F21684B](#aura-47b5500f21684b) (Product titles), [AURA-89AD77D87570A3](#aura-89ad77d87570a3) (Product options and variants), [AURA-0372A5478F7D15](#aura-0372a5478f7d15) (Product prices, availability and discounts), [AURA-58037254C8AB97](#aura-58037254c8ab97) (Product and editorial media).

#### Product gallery and badge

<a id="aura-98e9d662b6339b"></a>

**badge_label** · `AURA-98E9D662B6339B` · badge — **claim to verify**

```text
Best-seller
```
Source: `templates/product.json` · `sections.aura_featured_product.settings.badge_label` · active template setting. Editability: **Theme Editor**.
Context: Setting badge_label; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-08d962eed1a6f1"></a>

**accessibility label** · `AURA-08D962EED1A6F1` · accessibility label

```text
Précédent
```
Source: `sections/aura-featured-product.liquid` · `line:65:aria-label:a527f17` · hardcoded Liquid. Editability: **code only**.
Context: div.gallery > div.gallery-thumbrow > button.thumb-arrow
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-CC72F8A8FCB904](#aura-cc72f8a8fcb904), [AURA-417D4C427C35B5](#aura-417d4c427c35b5), [AURA-EDD116449B8C6F](#aura-edd116449b8c6f). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-cfa0f8c3aa48bd"></a>

**accessibility label** · `AURA-CFA0F8C3AA48BD` · accessibility label

```text
Voir l'image {{ tcount | plus: 1 }}
```
Source: `sections/aura-featured-product.liquid` · `line:74:aria-label:16e2878` · hardcoded Liquid. Editability: **code only**.
Context: div.gallery-thumbrow > div.gallery-thumbs > button.gallery-thumb..active.
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-f3791fa38d932f"></a>

**accessibility label** · `AURA-F3791FA38D932F` · accessibility label

```text
Voir l'image {{ forloop.index }}
```
Source: `sections/aura-featured-product.liquid` · `line:81:aria-label:38cd599` · hardcoded Liquid. Editability: **code only**.
Context: div.gallery-thumbrow > div.gallery-thumbs > button.gallery-thumb..active.
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-332ec9872ddf65"></a>

**accessibility label** · `AURA-332EC9872DDF65` · accessibility label

```text
Suivant
```
Source: `sections/aura-featured-product.liquid` · `line:90:aria-label:596d29a` · hardcoded Liquid. Editability: **code only**.
Context: div.gallery > div.gallery-thumbrow > button.thumb-arrow
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-F97491171A8C97](#aura-f97491171a8c97), [AURA-4FECB64142997E](#aura-4fecb64142997e), [AURA-C697D145E1CF28](#aura-c697d145e1cf28). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-5c691f04600412"></a>

**JavaScript microcopy** · `AURA-5C691F04600412` · JavaScript microcopy

```text
Voir l'image 
```
Source: `sections/aura-featured-product.liquid` · `line:350:literal:Voir l'image ` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Prefix followed by image index; exact decoded JavaScript string fragment.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
html += '<button type="button" class="gallery-thumb' + (i === 0 ? ' active' : '') + '" data-img="' + list[i].b + '" data-srcset="' + (list[i].ss || '') + '" aria-label="Voir l\'image ' + (i + 1) + ' sur ' + list.length + '"><span class="ph" style="background-image:url(' + list[i].s + ');background-size:cover;"></span></button>';
```
<a id="aura-9051e1058192b0"></a>

**JavaScript microcopy** · `AURA-9051E1058192B0` · JavaScript microcopy

```text
 sur 
```
Source: `sections/aura-featured-product.liquid` · `line:350:literal: sur ` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Between image index and gallery length; whitespace retained.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
html += '<button type="button" class="gallery-thumb' + (i === 0 ? ' active' : '') + '" data-img="' + list[i].b + '" data-srcset="' + (list[i].ss || '') + '" aria-label="Voir l\'image ' + (i + 1) + ' sur ' + list.length + '"><span class="ph" style="background-image:url(' + list[i].s + ');background-size:cover;"></span></button>';
```

#### Product identity, subtitle, rating and price anchor

<a id="aura-c25f52e2babae1"></a>

**eyebrow** · `AURA-C25F52E2BABAE1` · eyebrow — **claim to verify**

```text
Conçu pour les gardes de 12 heures
```
Source: `templates/product.json` · `sections.aura_featured_product.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: [AURA-1470FB34D2D4E7](#aura-1470fb34d2d4e7).
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e52ef33d1ec23e"></a>

**headline** · `AURA-E52EF33D1EC23E` · headline — **claim to verify**

```text
La compression qui efface les marques rouges
```
Source: `templates/product.json` · `sections.aura_featured_product.settings.headline` · active template setting. Editability: **Theme Editor**.
Context: Setting headline; section aura_featured_product
Rendering: expected from repository. Subtitle if product resolves; H1 fallback otherwise.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-652869c0f339b3"></a>

**rating** · `AURA-652869C0F339B3` · social proof — **claim to verify**

```text
4,8
```
Source: `templates/product.json` · `sections.aura_featured_product.settings.rating` · active template setting. Editability: **Theme Editor**.
Context: Setting rating; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-604F61AD34A042](#aura-604f61ad34a042), [AURA-5088873A2F768A](#aura-5088873a2f768a). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-a54a8d8be6b153"></a>

**reviews_count** · `AURA-A54A8D8BE6B153` · label / microcopy — **claim to verify**

```text
150+ avis d'infirmières
```
Source: `templates/product.json` · `sections.aura_featured_product.settings.reviews_count` · active template setting. Editability: **Theme Editor**.
Context: Setting reviews_count; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-a27f673c53f512"></a>

**price_from** · `AURA-A27F673C53F512` · offer / price — **claim to verify**

```text
17 €
```
Source: `templates/product.json` · `sections.aura_featured_product.settings.price_from` · active template setting. Editability: **Theme Editor**.
Context: Setting price_from; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-58d731bf9e5fcc"></a>

**label / microcopy** · `AURA-58D731BF9E5FCC` · label / microcopy

```text
À partir de
```
Source: `sections/aura-featured-product.liquid` · `line:125:text:c0fd766` · hardcoded Liquid. Editability: **code only**.
Context: div.product-grid > div.buy.buy-body > p.buy-price-anchor
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-782de9a3b4abee"></a>

**label / microcopy** · `AURA-782DE9A3B4ABEE` · label / microcopy

```text
/ paire
```
Source: `sections/aura-featured-product.liquid` · `line:125:text:ba0b036` · hardcoded Liquid. Editability: **code only**.
Context: div.product-grid > div.buy.buy-body > p.buy-price-anchor
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### Colour and size selection

<a id="aura-7eb65466c8e9ed"></a>

**label / microcopy** · `AURA-7EB65466C8E9ED` · label / microcopy

```text
Couleur —
```
Source: `sections/aura-featured-product.liquid` · `line:140:text:4656e4b` · hardcoded Liquid. Editability: **code only**.
Context: div.buy-row > div.label > span
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-c5479d28e5891a"></a>

**label / microcopy** · `AURA-C5479D28E5891A` · label / microcopy

```text
{{ opt.values.size }} coloris
```
Source: `sections/aura-featured-product.liquid` · `line:140:text:27e953a` · hardcoded Liquid. Editability: **code only**.
Context: div.buy-row > div.label > span.secondary
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-d69b8ea44e3648"></a>

**accessibility label** · `AURA-D69B8EA44E3648` · accessibility label

```text
Couleur
```
Source: `sections/aura-featured-product.liquid` · `line:141:aria-label:145c432` · hardcoded Liquid. Editability: **code only**.
Context: form > div.buy-row > div.swatches
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-596E530466C343](#aura-596e530466c343). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-101938b3acdfff"></a>

**accessibility label** · `AURA-101938B3ACDFFF` · accessibility label

```text
Couleur {{ val | escape }}
```
Source: `sections/aura-featured-product.liquid` · `line:148:aria-label:fb3c34f` · hardcoded Liquid. Editability: **code only**.
Context: div.buy-row > div.swatches > button.swatch..active.
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-81FF802783D637](#aura-81ff802783d637). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-a18b96a080df81"></a>

**label / microcopy** · `AURA-A18B96A080DF81` · label / microcopy

```text
Taille
```
Source: `sections/aura-featured-product.liquid` · `line:156:text:2b90839` · hardcoded Liquid. Editability: **code only**.
Context: div.buy-row > div.label > span
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-DFF2B7293125F5](#aura-dff2b7293125f5), [AURA-B8DDEFF6C9F936](#aura-b8ddeff6c9f936). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-bc703673248ea0"></a>

**CTA** · `AURA-BC703673248EA0` · CTA

```text
Guide des tailles →
```
Source: `sections/aura-featured-product.liquid` · `line:156:text:76731be` · hardcoded Liquid. Editability: **code only**.
Context: div.label > span.secondary > button.link-like
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-dff2b7293125f5"></a>

**accessibility label** · `AURA-DFF2B7293125F5` · accessibility label

```text
Taille
```
Source: `sections/aura-featured-product.liquid` · `line:157:aria-label:2b90839` · hardcoded Liquid. Editability: **code only**.
Context: form > div.buy-row > div.sizes
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-A18B96A080DF81](#aura-a18b96a080df81), [AURA-B8DDEFF6C9F936](#aura-b8ddeff6c9f936). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-034a62966dad8b"></a>

**size label** · `AURA-034A62966DAD8B` · size label

```text
EU 35–39
```
Source: `sections/aura-featured-product.liquid` · `line:160:eulabel:EU 35–39` · hardcoded Liquid. Editability: **code only**.
Context: Variant selector EU-size mapping.
Rendering: conditional. Mapped from the selected Admin size value; reused in visible size buttons and accessibility labels.
Duplicates: [AURA-6CAB391FEB66D7](#aura-6cab391feb66d7). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-a31c5264b905ec"></a>

**size label** · `AURA-A31C5264B905EC` · size label

```text
EU 45–48
```
Source: `sections/aura-featured-product.liquid` · `line:160:eulabel:EU 45–48` · hardcoded Liquid. Editability: **code only**.
Context: Variant selector EU-size mapping.
Rendering: conditional. Mapped from the selected Admin size value; reused in visible size buttons and accessibility labels.
Duplicates: [AURA-276DEECA207750](#aura-276deeca207750). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-ec1032a8baed2d"></a>

**size label** · `AURA-EC1032A8BAED2D` · size label

```text
EU 40–44
```
Source: `sections/aura-featured-product.liquid` · `line:160:eulabel:EU 40–44` · hardcoded Liquid. Editability: **code only**.
Context: Variant selector EU-size mapping.
Rendering: conditional. Mapped from the selected Admin size value; reused in visible size buttons and accessibility labels.
Duplicates: [AURA-B6C760DEACC819](#aura-b6c760deacc819). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e5ccf66b457c8e"></a>

**accessibility label** · `AURA-E5CCF66B457C8E` · accessibility label

```text
Taille {{ val | escape }}, {{ eulabel }}
```
Source: `sections/aura-featured-product.liquid` · `line:161:aria-label:d0c39db` · hardcoded Liquid. Editability: **code only**.
Context: div.buy-row > div.sizes > button.size
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-31CE5F2B2CBFF1](#aura-31ce5f2b2cbff1). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-6856cf3c119e90"></a>

**label / microcopy** · `AURA-6856CF3C119E90` · label / microcopy

```text
Choisissez votre taille.
```
Source: `sections/aura-featured-product.liquid` · `line:164:text:882d3c5` · hardcoded Liquid. Editability: **code only**.
Context: form > div.buy-row > p.size-hint
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-3c4215e12fef12"></a>

**size_note** · `AURA-3C4215E12FEF12` · label / microcopy — **claim to verify**

```text
La plupart des infirmières prennent leur pointure habituelle.
```
Source: `templates/product.json` · `sections.aura_featured_product.settings.size_note` · active template setting. Editability: **Theme Editor**.
Context: Setting size_note; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### Size-guide dialog — opened from the size selector

<a id="aura-b0597af416d5f3"></a>

**size_guide** · `AURA-B0597AF416D5F3` · label / microcopy — **claim to verify**

```text
<table>
<thead><tr>
<th>Taille</th>
<th>Pointure (EU)</th>
<th>Largeur cheville*</th>
<th>Longueur jambe</th>
<th>Longueur pied*</th>
</tr></thead>
<tbody>
<tr>
<td>S/M</td>
<td>35–39</td>
<td>11 cm</td>
<td>32 cm</td>
<td>16,5 cm</td>
</tr>
<tr>
<td>L/XL</td>
<td>40–44</td>
<td>12 cm</td>
<td>33 cm</td>
<td>18,5 cm</td>
</tr>
<tr>
<td>XXL</td>
<td>45–48</td>
<td>13 cm</td>
<td>35 cm</td>
<td>20,5 cm</td>
</tr>
</tbody>
</table><p>*Mesures du bas posé à plat — la maille s'étire. Hauteur du bord : 2,5 cm. Entre deux tailles, choisissez la plus grande.</p>
```
Source: `templates/product.json` · `sections.aura_featured_product.settings.size_guide` · active template setting. Editability: **Theme Editor**.
Context: Setting size_guide; section aura_featured_product
Rendering: conditional. Size-guide modal, initially hidden; displayed after opening.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-a6214f665a767a"></a>

**size_guide_title** · `AURA-A6214F665A767A` · headline

```text
Guide des tailles
```
Source: `templates/product.json` · `sections.aura_featured_product.settings.size_guide_title` · active template setting. Editability: **Theme Editor**.
Context: Setting size_guide_title; section aura_featured_product
Rendering: conditional. Size-guide modal, initially hidden; displayed after opening.
Duplicates: [AURA-AF9455BDC5252D](#aura-af9455bdc5252d), [AURA-9379E2489F28BE](#aura-9379e2489f28be). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-9fa6c1e5fbc44a"></a>

**accessibility label** · `AURA-9FA6C1E5FBC44A` · accessibility label

```text
Fermer le guide des tailles
```
Source: `sections/aura-featured-product.liquid` · `line:273:aria-label:1d73a78` · hardcoded Liquid. Editability: **code only**.
Context: div.sg-modal > div.sg-dialog > button.sg-close
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### Quantity selection

<a id="aura-4c76e14f15b823"></a>

**savings_badge** · `AURA-4C76E14F15B823` · badge — **claim to verify**

```text
−50 %
```
Source: `templates/product.json` · `sections.aura_featured_product.settings.savings_badge` · active template setting. Editability: **Theme Editor**.
Context: Setting savings_badge; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-53829eedfc33cf"></a>

**label / microcopy** · `AURA-53829EEDFC33CF` · label / microcopy

```text
jusqu'à {{ section.settings.savings_badge | escape }}
```
Source: `sections/aura-featured-product.liquid` · `line:170:text:54c3669` · hardcoded Liquid. Editability: **code only**.
Context: div.label > span > span.pack-save-chip
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-7ff10fb312868d"></a>

**label / microcopy** · `AURA-7FF10FB312868D` · label / microcopy

```text
Quantité
```
Source: `sections/aura-featured-product.liquid` · `line:170:text:09a38fd` · hardcoded Liquid. Editability: **code only**.
Context: div.buy-row > div.label > span
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-A7D9581576FC1D](#aura-a7d9581576fc1d). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-a7d9581576fc1d"></a>

**accessibility label** · `AURA-A7D9581576FC1D` · accessibility label

```text
Quantité
```
Source: `sections/aura-featured-product.liquid` · `line:171:aria-label:09a38fd` · hardcoded Liquid. Editability: **code only**.
Context: form > div.buy-row > div.packs.packs--rows
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-7FF10FB312868D](#aura-7ff10fb312868d). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-97517059065552"></a>

**accessibility label** · `AURA-97517059065552` · accessibility label

```text
Pack de {{ pk.settings.qty }} {{ pk.settings.unit | escape }}
```
Source: `sections/aura-featured-product.liquid` · `line:173:aria-label:186d17d` · hardcoded Liquid. Editability: **code only**.
Context: div.buy-row > div.packs.packs--rows > button.pack..active.
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### Pack k1 — quantity, offer and perks

<a id="aura-2756cecc43583e"></a>

**qty** · `AURA-2756CECC43583E` · offer / price

```text
1
```
Source: `templates/product.json` · `sections.aura_featured_product.blocks.k1.settings.qty` · active template setting. Editability: **Theme Editor**.
Context: Block 7 (pack, k1); Setting qty; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-ac807930147827"></a>

**unit** · `AURA-AC807930147827` · label / microcopy

```text
paire
```
Source: `templates/product.json` · `sections.aura_featured_product.blocks.k1.settings.unit` · active template setting. Editability: **Theme Editor**.
Context: Block 7 (pack, k1); Setting unit; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-c12f09e564e8cc"></a>

**per** · `AURA-C12F09E564E8CC` · offer / price — **claim to verify**

```text
34 € / paire
```
Source: `templates/product.json` · `sections.aura_featured_product.blocks.k1.settings.per` · active template setting. Editability: **Theme Editor**.
Context: Block 7 (pack, k1); Setting per; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### Pack k2 — quantity, offer and perks

<a id="aura-c61d8cb93f2311"></a>

**ribbon** · `AURA-C61D8CB93F2311` · badge — **claim to verify**

```text
Le plus populaire
```
Source: `templates/product.json` · `sections.aura_featured_product.blocks.k2.settings.ribbon` · active template setting. Editability: **Theme Editor**.
Context: Block 8 (pack, k2); Setting ribbon; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-4a2f06b96adb5c"></a>

**qty** · `AURA-4A2F06B96ADB5C` · offer / price

```text
4
```
Source: `templates/product.json` · `sections.aura_featured_product.blocks.k2.settings.qty` · active template setting. Editability: **Theme Editor**.
Context: Block 8 (pack, k2); Setting qty; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e8a467155f3e6a"></a>

**unit** · `AURA-E8A467155F3E6A` · label / microcopy

```text
paires
```
Source: `templates/product.json` · `sections.aura_featured_product.blocks.k2.settings.unit` · active template setting. Editability: **Theme Editor**.
Context: Block 8 (pack, k2); Setting unit; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-4DD1C5FDCED118](#aura-4dd1c5fdced118). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-9c729ac430e154"></a>

**per** · `AURA-9C729AC430E154` · offer / price — **claim to verify**

```text
17 € / paire
```
Source: `templates/product.json` · `sections.aura_featured_product.blocks.k2.settings.per` · active template setting. Editability: **Theme Editor**.
Context: Block 8 (pack, k2); Setting per; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-26E5AA6224F280](#aura-26e5aa6224f280). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-c124c5c826c140"></a>

**perk** · `AURA-C124C5C826C140` · offer / price — **claim to verify**

```text
Livraison offerte
```
Source: `templates/product.json` · `sections.aura_featured_product.blocks.k2.settings.perk` · active template setting. Editability: **Theme Editor**.
Context: Block 8 (pack, k2); Setting perk; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-9523e433bc2a5c"></a>

**tag** · `AURA-9523E433BC2A5C` · badge — **claim to verify**

```text
2 offertes
```
Source: `templates/product.json` · `sections.aura_featured_product.blocks.k2.settings.tag` · active template setting. Editability: **Theme Editor**.
Context: Block 8 (pack, k2); Setting tag; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### Pack k3 — quantity, offer and perks

<a id="aura-d20144b4675f46"></a>

**ribbon** · `AURA-D20144B4675F46` · badge — **claim to verify**

```text
Meilleure offre
```
Source: `templates/product.json` · `sections.aura_featured_product.blocks.k3.settings.ribbon` · active template setting. Editability: **Theme Editor**.
Context: Block 9 (pack, k3); Setting ribbon; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-380d6b700c62c8"></a>

**qty** · `AURA-380D6B700C62C8` · offer / price

```text
6
```
Source: `templates/product.json` · `sections.aura_featured_product.blocks.k3.settings.qty` · active template setting. Editability: **Theme Editor**.
Context: Block 9 (pack, k3); Setting qty; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-4dd1c5fdced118"></a>

**unit** · `AURA-4DD1C5FDCED118` · label / microcopy

```text
paires
```
Source: `templates/product.json` · `sections.aura_featured_product.blocks.k3.settings.unit` · active template setting. Editability: **Theme Editor**.
Context: Block 9 (pack, k3); Setting unit; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-E8A467155F3E6A](#aura-e8a467155f3e6a). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-26e5aa6224f280"></a>

**per** · `AURA-26E5AA6224F280` · offer / price — **claim to verify**

```text
17 € / paire
```
Source: `templates/product.json` · `sections.aura_featured_product.blocks.k3.settings.per` · active template setting. Editability: **Theme Editor**.
Context: Block 9 (pack, k3); Setting per; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-9C729AC430E154](#aura-9c729ac430e154). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-c96273fbaf796c"></a>

**perk** · `AURA-C96273FBAF796C` · offer / price — **claim to verify**

```text
Livraison offerte + cadeau surprise
```
Source: `templates/product.json` · `sections.aura_featured_product.blocks.k3.settings.perk` · active template setting. Editability: **Theme Editor**.
Context: Block 9 (pack, k3); Setting perk; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-9a58e476457b38"></a>

**tag** · `AURA-9A58E476457B38` · badge — **claim to verify**

```text
3 offertes
```
Source: `templates/product.json` · `sections.aura_featured_product.blocks.k3.settings.tag` · active template setting. Editability: **Theme Editor**.
Context: Block 9 (pack, k3); Setting tag; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### Bundle composition and validation

<a id="aura-a572e025e43bbb"></a>

**label / microcopy** · `AURA-A572E025E43BBB` · label / microcopy

```text
Composez vos paires
```
Source: `sections/aura-featured-product.liquid` · `line:192:text:b8df8cb` · hardcoded Liquid. Editability: **code only**.
Context: div.bundle-inline > div.bundle-inline-head > span.bih-title
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-596e530466c343"></a>

**accessibility label** · `AURA-596E530466C343` · accessibility label

```text
Couleur
```
Source: `sections/aura-featured-product.liquid` · `line:290:aria-label:145c432` · hardcoded Liquid. Editability: **code only**.
Context: template > div.bundle-pair > div.swatches.bp-swatches
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-D69B8EA44E3648](#aura-d69b8ea44e3648). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-81ff802783d637"></a>

**accessibility label** · `AURA-81FF802783D637` · accessibility label

```text
Couleur {{ val | escape }}
```
Source: `sections/aura-featured-product.liquid` · `line:294:aria-label:fb3c34f` · hardcoded Liquid. Editability: **code only**.
Context: div.bundle-pair > div.swatches.bp-swatches > button.swatch
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-101938B3ACDFFF](#aura-101938b3acdfff). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-b8ddeff6c9f936"></a>

**accessibility label** · `AURA-B8DDEFF6C9F936` · accessibility label

```text
Taille
```
Source: `sections/aura-featured-product.liquid` · `line:297:aria-label:2b90839` · hardcoded Liquid. Editability: **code only**.
Context: template > div.bundle-pair > div.sizes.bp-sizes
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-A18B96A080DF81](#aura-a18b96a080df81), [AURA-DFF2B7293125F5](#aura-dff2b7293125f5). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-276deeca207750"></a>

**size label** · `AURA-276DEECA207750` · size label

```text
EU 45–48
```
Source: `sections/aura-featured-product.liquid` · `line:300:eulabel:EU 45–48` · hardcoded Liquid. Editability: **code only**.
Context: Variant selector EU-size mapping.
Rendering: conditional. Mapped from the selected Admin size value; reused in visible size buttons and accessibility labels.
Duplicates: [AURA-A31C5264B905EC](#aura-a31c5264b905ec). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-6cab391feb66d7"></a>

**size label** · `AURA-6CAB391FEB66D7` · size label

```text
EU 35–39
```
Source: `sections/aura-featured-product.liquid` · `line:300:eulabel:EU 35–39` · hardcoded Liquid. Editability: **code only**.
Context: Variant selector EU-size mapping.
Rendering: conditional. Mapped from the selected Admin size value; reused in visible size buttons and accessibility labels.
Duplicates: [AURA-034A62966DAD8B](#aura-034a62966dad8b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-b6c760deacc819"></a>

**size label** · `AURA-B6C760DEACC819` · size label

```text
EU 40–44
```
Source: `sections/aura-featured-product.liquid` · `line:300:eulabel:EU 40–44` · hardcoded Liquid. Editability: **code only**.
Context: Variant selector EU-size mapping.
Rendering: conditional. Mapped from the selected Admin size value; reused in visible size buttons and accessibility labels.
Duplicates: [AURA-EC1032A8BAED2D](#aura-ec1032a8baed2d). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-31ce5f2b2cbff1"></a>

**accessibility label** · `AURA-31CE5F2B2CBFF1` · accessibility label

```text
Taille {{ val | escape }}, {{ eulabel }}
```
Source: `sections/aura-featured-product.liquid` · `line:301:aria-label:d0c39db` · hardcoded Liquid. Editability: **code only**.
Context: div.bundle-pair > div.sizes.bp-sizes > button.size
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-E5CCF66B457C8E](#aura-e5ccf66b457c8e). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-84e7180419f6b8"></a>

**dynamic microcopy** · `AURA-84E7180419F6B8` · dynamic microcopy — **claim to verify**

```text
[DYNAMIC COPY — see the exact expression below; no runtime value invented]
```
Source: `sections/aura-featured-product.liquid` · `bundleNote.textContent` · JavaScript-generated. Editability: **code only**.
Context: Exact assembled sentence depends on runtime inputs.
Rendering: conditional. Visible when a multi-pair tier is selected.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
bundleSize > 1 ? ((bundleSize / 2) + ' offertes') : ''
```
<a id="aura-ebc4766cb64260"></a>

**JavaScript microcopy** · `AURA-EBC4766CB64260` · JavaScript microcopy

```text
 offertes
```
Source: `sections/aura-featured-product.liquid` · `line:470:literal: offertes` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Suffix after bundleSize / 2 for a multi-pair tier.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
if (bundleNote) bundleNote.textContent = bundleSize > 1 ? ((bundleSize / 2) + ' offertes') : '';
```
<a id="aura-7067702f165c55"></a>

**dynamic microcopy** · `AURA-7067702F165C55` · dynamic microcopy

```text
[DYNAMIC COPY — see the exact expression below; no runtime value invented]
```
Source: `sections/aura-featured-product.liquid` · `.bp-label').textContent` · JavaScript-generated. Editability: **code only**.
Context: Exact assembled sentence depends on runtime inputs.
Rendering: conditional. One label per pair in the selected multi-pair bundle.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
'Paire ' + (i + 1)
```
<a id="aura-de880e0f011e5b"></a>

**JavaScript microcopy** · `AURA-DE880E0F011E5B` · JavaScript microcopy

```text
Paire 
```
Source: `sections/aura-featured-product.liquid` · `line:511:literal:Paire ` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Prefix followed by one-based pair number.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
node.querySelector('.bp-label').textContent = 'Paire ' + (i + 1);
```
<a id="aura-fca895231dbf16"></a>

**error message** · `AURA-FCA895231DBF16` · error message

```text
 · à choisir
```
Source: `assets/aura-v2.css` · `CSS content at line 784` · hardcoded Liquid. Editability: **code only**.
Context: CSS-generated text; classified in required code-literal source family, subtype CSS-generated.
Rendering: conditional. CSS ::after suffix on .bundle-pair.size-missing .bp-label.
Duplicates: none in this packet. Near duplicates: none in this packet.

#### Purchase action, price and availability

<a id="aura-43031acdace7b3"></a>

**cta_label** · `AURA-43031ACDACE7B3` · CTA

```text
Ajouter au panier
```
Source: `templates/product.json` · `sections.aura_featured_product.settings.cta_label` · active template setting. Editability: **Theme Editor**.
Context: Setting cta_label; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-1CCCDFD552E9BC](#aura-1cccdfd552e9bc). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e40b93a7f5b662"></a>

**dynamic microcopy** · `AURA-E40B93A7F5B662` · dynamic microcopy

```text
[DYNAMIC COPY — see the exact expression below; no runtime value invented]
```
Source: `sections/aura-featured-product.liquid` · `function fmt(cents)` · JavaScript-generated. Editability: **code only**.
Context: Exact assembled sentence depends on runtime inputs.
Rendering: conditional. Calculated pack total and compare-at amount from Admin variant price and saved pack discount.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
(cents/100).toLocaleString('fr-FR',{minimumFractionDigits:0,maximumFractionDigits:2}) + ' €'
```
<a id="aura-75caba770c2b20"></a>

**dynamic microcopy** · `AURA-75CABA770C2B20` · dynamic microcopy — **claim to verify**

```text
[DYNAMIC COPY — see the exact expression below; no runtime value invented]
```
Source: `sections/aura-featured-product.liquid` · `saveEl.textContent = '−'` · JavaScript-generated. Editability: **code only**.
Context: Exact assembled sentence depends on runtime inputs.
Rendering: conditional. Only when selected pack discount percentage is positive.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
'−' + d + ' %'
```
<a id="aura-d77c08e323ed9a"></a>

**JavaScript microcopy** · `AURA-D77C08E323ED9A` · JavaScript microcopy

```text
Indisponible
```
Source: `sections/aura-featured-product.liquid` · `line:442:literal:Indisponible` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Selected variant exists but is unavailable.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
if (state.s && v && !v.available) { totalEl.textContent = 'Indisponible'; }
```

#### Shipping strip and calculated delivery window

<a id="aura-eb922438fb17a3"></a>

**ship_left** · `AURA-EB922438FB17A3` · label / microcopy — **claim to verify**

```text
Expédié sous 24 h
```
Source: `templates/product.json` · `sections.aura_featured_product.settings.ship_left` · active template setting. Editability: **Theme Editor**.
Context: Setting ship_left; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-62445f308f498e"></a>

**dynamic microcopy** · `AURA-62445F308F498E` · dynamic microcopy — **claim to verify**

```text
[DYNAMIC COPY — see the exact expression below; no runtime value invented]
```
Source: `sections/aura-featured-product.liquid` · `deliveryEl.textContent` · JavaScript-generated. Editability: **code only**.
Context: Exact assembled sentence depends on runtime inputs.
Rendering: conditional. Current date plus configured min/max days; Sunday moved to Monday; fr-FR abbreviated weekday/day/month.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
'Livré entre ' + deliveryDay(parseInt(deliveryEl.dataset.min, 10) || 2) + ' et ' + deliveryDay(parseInt(deliveryEl.dataset.max, 10) || 4)
```
<a id="aura-af6b05b9dca370"></a>

**JavaScript microcopy** · `AURA-AF6B05B9DCA370` · JavaScript microcopy

```text
 et 
```
Source: `sections/aura-featured-product.liquid` · `line:639:literal: et ` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Separator between computed delivery dates.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
deliveryEl.textContent = 'Livré entre ' + deliveryDay(parseInt(deliveryEl.dataset.min, 10) || 2) + ' et ' + deliveryDay(parseInt(deliveryEl.dataset.max, 10) || 4);
```
<a id="aura-fb24e8873f3331"></a>

**JavaScript microcopy** · `AURA-FB24E8873F3331` · JavaScript microcopy

```text
Livré entre 
```
Source: `sections/aura-featured-product.liquid` · `line:639:literal:Livré entre ` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Prefix before computed minimum date.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
deliveryEl.textContent = 'Livré entre ' + deliveryDay(parseInt(deliveryEl.dataset.min, 10) || 2) + ' et ' + deliveryDay(parseInt(deliveryEl.dataset.max, 10) || 4);
```

#### Purchase guarantee

<a id="aura-60403f1cda6e09"></a>

**guarantee_text** · `AURA-60403F1CDA6E09` · guarantee — **claim to verify**

```text
30 jours satisfait ou remboursé
```
Source: `templates/product.json` · `sections.aura_featured_product.settings.guarantee_text` · active template setting. Editability: **Theme Editor**.
Context: Setting guarantee_text; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-2277da1e664a18"></a>

**accessibility label** · `AURA-2277DA1E664A18` · accessibility label

```text
Garantie {{ section.settings.guarantee_days | default: '30' | escape }} jours satisfait ou remboursé
```
Source: `sections/aura-featured-product.liquid` · `line:243:alt:e53bf2c` · hardcoded Liquid. Editability: **code only**.
Context: div.buy.buy-body > div.guarantee-block > div.guarantee-seal
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-312d60681d6d43"></a>

**guarantee_days** · `AURA-312D60681D6D43` · guarantee — **claim to verify**

```text
30
```
Source: `templates/product.json` · `sections.aura_featured_product.settings.guarantee_days` · active template setting. Editability: **Theme Editor**.
Context: Setting guarantee_days; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-6e0ec0e8d36d71"></a>

**guarantee_body** · `AURA-6E0EC0E8D36D71` · guarantee — **claim to verify**

```text
Si la paire ne vous convient pas, même portée une garde, on la reprend sans question.
```
Source: `templates/product.json` · `sections.aura_featured_product.settings.guarantee_body` · active template setting. Editability: **Theme Editor**.
Context: Setting guarantee_body; section aura_featured_product
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 4: Feature grid

Section ID: `product--aura_feature_grid` · Source section/component ID: `aura_feature_grid` · Enabled: **yes**.
Page position: 4; saved group/body position: 2.
Role: Summarize product features.
Source: `templates/product.json`, `sections/aura-feature-grid.liquid`. Active template setting: `sections.aura_feature_grid`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: none identified in the master.

#### feature f1 — block 1

<a id="aura-5e897557d364c1"></a>

**spec** · `AURA-5E897557D364C1` · label / microcopy

```text
Compression
```
Source: `templates/product.json` · `sections.aura_feature_grid.blocks.f1.settings.spec` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (feature, f1); Setting spec; section aura_feature_grid
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-4ece5cfabd1434"></a>

**label** · `AURA-4ECE5CFABD1434` · label / microcopy — **claim to verify**

```text
18–25 mmHg, vérifiée
```
Source: `templates/product.json` · `sections.aura_feature_grid.blocks.f1.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (feature, f1); Setting label; section aura_feature_grid
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### feature f2 — block 2

<a id="aura-5c5e4d4ba3d2cc"></a>

**spec** · `AURA-5C5E4D4BA3D2CC` · label / microcopy

```text
Bord-côte
```
Source: `templates/product.json` · `sections.aura_feature_grid.blocks.f2.settings.spec` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (feature, f2); Setting spec; section aura_feature_grid
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-86342d0ae1d652"></a>

**label** · `AURA-86342D0AE1D652` · label / microcopy — **claim to verify**

```text
Plat, zéro marque rouge
```
Source: `templates/product.json` · `sections.aura_feature_grid.blocks.f2.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (feature, f2); Setting label; section aura_feature_grid
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### feature f3 — block 3

<a id="aura-46efd0e5584ec7"></a>

**spec** · `AURA-46EFD0E5584EC7` · label / microcopy

```text
Circulation
```
Source: `templates/product.json` · `sections.aura_feature_grid.blocks.f3.settings.spec` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (feature, f3); Setting spec; section aura_feature_grid
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-7f91d9568894d2"></a>

**label** · `AURA-7F91D9568894D2` · label / microcopy — **claim to verify**

```text
Soutenue toute la garde
```
Source: `templates/product.json` · `sections.aura_feature_grid.blocks.f3.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (feature, f3); Setting label; section aura_feature_grid
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### feature f4 — block 4

<a id="aura-8972f562846a24"></a>

**spec** · `AURA-8972F562846A24` · label / microcopy

```text
Gonflements
```
Source: `templates/product.json` · `sections.aura_feature_grid.blocks.f4.settings.spec` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (feature, f4); Setting spec; section aura_feature_grid
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-83cfc578f4caa9"></a>

**label** · `AURA-83CFC578F4CAA9` · label / microcopy — **claim to verify**

```text
Limités en fin de journée
```
Source: `templates/product.json` · `sections.aura_feature_grid.blocks.f4.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (feature, f4); Setting label; section aura_feature_grid
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### feature f5 — block 5

<a id="aura-a5ed7ec3f6bd56"></a>

**spec** · `AURA-A5ED7EC3F6BD56` · label / microcopy

```text
Maille
```
Source: `templates/product.json` · `sections.aura_feature_grid.blocks.f5.settings.spec` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (feature, f5); Setting spec; section aura_feature_grid
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-ef551aec8b7635"></a>

**label** · `AURA-EF551AEC8B7635` · label / microcopy — **claim to verify**

```text
Respirante et douce
```
Source: `templates/product.json` · `sections.aura_feature_grid.blocks.f5.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (feature, f5); Setting label; section aura_feature_grid
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### feature f6 — block 6

<a id="aura-930babd67a71de"></a>

**spec** · `AURA-930BABD67A71DE` · label / microcopy

```text
Enfilage
```
Source: `templates/product.json` · `sections.aura_feature_grid.blocks.f6.settings.spec` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (feature, f6); Setting spec; section aura_feature_grid
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-40bbf91a88419e"></a>

**label** · `AURA-40BBF91A88419E` · label / microcopy — **claim to verify**

```text
Facile, sans effort
```
Source: `templates/product.json` · `sections.aura_feature_grid.blocks.f6.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (feature, f6); Setting label; section aura_feature_grid
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 5: Video testimonials

Section ID: `product--aura_video_reviews_v2` · Source section/component ID: `aura_video_reviews_v2` · Enabled: **yes**.
Page position: 5; saved group/body position: 3.
Role: Present video-testimonial introductions and quotes.
Source: `templates/product.json`, `sections/aura-video-reviews.liquid`. Active template setting: `sections.aura_video_reviews_v2`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-A696476EBA0770](#aura-a696476eba0770) (External review content), [AURA-58037254C8AB97](#aura-58037254c8ab97) (Product and editorial media).

#### Section introduction and controls

<a id="aura-a241dfc0a95c0d"></a>

**heading** · `AURA-A241DFC0A95C0D` · headline — **claim to verify**

```text
La preuve, en vidéo.
```
Source: `templates/product.json` · `sections.aura_video_reviews_v2.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_video_reviews_v2
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-6c5e7831abce37"></a>

**eyebrow** · `AURA-6C5E7831ABCE37` · eyebrow — **claim to verify**

```text
Elles témoignent
```
Source: `templates/product.json` · `sections.aura_video_reviews_v2.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_video_reviews_v2
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### vreview v1 — block 1

<a id="aura-4d454e87e8509c"></a>

**name** · `AURA-4D454E87E8509C` · label / microcopy — **claim to verify**

```text
Anaïs L.
```
Source: `templates/product.json` · `sections.aura_video_reviews_v2.blocks.v1.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (vreview, v1); Setting name; section aura_video_reviews_v2
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-0623f564790626"></a>

**quote** · `AURA-0623F564790626` · testimonial — **claim to verify**

```text
« Dès le premier jour de garde, mes jambes vont tellement mieux.»
```
Source: `templates/product.json` · `sections.aura_video_reviews_v2.blocks.v1.settings.quote` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (vreview, v1); Setting quote; section aura_video_reviews_v2
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### vreview v2 — block 2

<a id="aura-b09dbd9fbbcc1f"></a>

**name** · `AURA-B09DBD9FBBCC1F` · label / microcopy — **claim to verify**

```text
Lorna M.
```
Source: `templates/product.json` · `sections.aura_video_reviews_v2.blocks.v2.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (vreview, v2); Setting name; section aura_video_reviews_v2
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-cd6020ae794478"></a>

**quote** · `AURA-CD6020AE794478` · testimonial — **claim to verify**

```text
« Tout a changé pour mes jambes gonflées depuis que j'ai trouvé Aura. »
```
Source: `templates/product.json` · `sections.aura_video_reviews_v2.blocks.v2.settings.quote` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (vreview, v2); Setting quote; section aura_video_reviews_v2
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### Supporting copy

<a id="aura-d39b7884230d59"></a>

**accessibility label** · `AURA-D39B7884230D59` · accessibility label

```text
Lire la vidéo
```
Source: `sections/aura-video-reviews.liquid` · `line:41:aria-label:5a16194` · hardcoded Liquid. Editability: **code only**.
Context: div.vreview > div.vreview-media > button.vreview-play
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 6: Statistics

Section ID: `product--aura_statistics` · Source section/component ID: `aura_statistics` · Enabled: **yes**.
Page position: 6; saved group/body position: 4.
Role: Present numerical product/outcome claims.
Source: `templates/product.json`, `sections/aura-statistics.liquid`. Active template setting: `sections.aura_statistics`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: none identified in the master.

#### Section introduction and controls

<a id="aura-71f38348ba9c14"></a>

**eyebrow** · `AURA-71F38348BA9C14` · eyebrow

```text
Les vrais chiffres
```
Source: `templates/product.json` · `sections.aura_statistics.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_statistics
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-6e41cf29a4a733"></a>

**heading** · `AURA-6E41CF29A4A733` · headline

```text
Vos fins de garde, en chiffres.
```
Source: `templates/product.json` · `sections.aura_statistics.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_statistics
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-3085c905698c07"></a>

**lead** · `AURA-3085C905698C07` · subheadline — **claim to verify**

```text
Mesuré sur 1 200 infirmières après une garde de 12 heures.
```
Source: `templates/product.json` · `sections.aura_statistics.settings.lead` · active template setting. Editability: **Theme Editor**.
Context: Setting lead; section aura_statistics
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.

#### stat st1 — block 1

<a id="aura-c3ea1f28f059ea"></a>

**number** · `AURA-C3EA1F28F059EA` · label / microcopy — **claim to verify**

```text
94
```
Source: `templates/product.json` · `sections.aura_statistics.blocks.st1.settings.number` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (stat, st1); Setting number; section aura_statistics
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-076d7801e17996"></a>

**suffix** · `AURA-076D7801E17996` · label / microcopy

```text
%
```
Source: `templates/product.json` · `sections.aura_statistics.blocks.st1.settings.suffix` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (stat, st1); Setting suffix; section aura_statistics
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-03936A98ED600A](#aura-03936a98ed600a). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-345a96781d72b1"></a>

**label** · `AURA-345A96781D72B1` · label / microcopy — **claim to verify**

```text
ressentent moins de jambes lourdes
```
Source: `templates/product.json` · `sections.aura_statistics.blocks.st1.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (stat, st1); Setting label; section aura_statistics
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### stat st2 — block 2

<a id="aura-98f29f7bcb1197"></a>

**number** · `AURA-98F29F7BCB1197` · label / microcopy — **claim to verify**

```text
8
```
Source: `templates/product.json` · `sections.aura_statistics.blocks.st2.settings.number` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (stat, st2); Setting number; section aura_statistics
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-ee1ce00bb78b10"></a>

**suffix** · `AURA-EE1CE00BB78B10` · label / microcopy

```text
h
```
Source: `templates/product.json` · `sections.aura_statistics.blocks.st2.settings.suffix` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (stat, st2); Setting suffix; section aura_statistics
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-98b008af00e9bc"></a>

**label** · `AURA-98B008AF00E9BC` · label / microcopy — **claim to verify**

```text
de maintien sans glisser, garde après garde
```
Source: `templates/product.json` · `sections.aura_statistics.blocks.st2.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (stat, st2); Setting label; section aura_statistics
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### stat st3 — block 3

<a id="aura-657e3af211e38c"></a>

**number** · `AURA-657E3AF211E38C` · label / microcopy — **claim to verify**

```text
0
```
Source: `templates/product.json` · `sections.aura_statistics.blocks.st3.settings.number` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (stat, st3); Setting number; section aura_statistics
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-575d62656b96dc"></a>

**label** · `AURA-575D62656B96DC` · label / microcopy — **claim to verify**

```text
marque rouge en fin de journée
```
Source: `templates/product.json` · `sections.aura_statistics.blocks.st3.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (stat, st3); Setting label; section aura_statistics
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### stat st4 — block 4

<a id="aura-12d2f12d033fbf"></a>

**number** · `AURA-12D2F12D033FBF` · label / microcopy — **claim to verify**

```text
92
```
Source: `templates/product.json` · `sections.aura_statistics.blocks.st4.settings.number` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (stat, st4); Setting number; section aura_statistics
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
<a id="aura-03936a98ed600a"></a>

**suffix** · `AURA-03936A98ED600A` · label / microcopy

```text
%
```
Source: `templates/product.json` · `sections.aura_statistics.blocks.st4.settings.suffix` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (stat, st4); Setting suffix; section aura_statistics
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-076D7801E17996](#aura-076d7801e17996). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-3e1de30884b7f6"></a>

**label** · `AURA-3E1DE30884B7F6` · label / microcopy — **claim to verify**

```text
oublient qu'elles les portent après une heure de garde
```
Source: `templates/product.json` · `sections.aura_statistics.blocks.st4.settings.label` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (stat, st4); Setting label; section aura_statistics
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.

### 7: Compression explanation

Section ID: `product--aura_science` · Source section/component ID: `aura_science` · Enabled: **yes**.
Page position: 7; saved group/body position: 6.
Role: Explain the compression mechanism.
Source: `templates/product.json`, `sections/aura-science.liquid`. Active template setting: `sections.aura_science`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-58037254C8AB97](#aura-58037254c8ab97) (Product and editorial media).

#### Section introduction and controls

<a id="aura-3f9478e3e3df67"></a>

**eyebrow** · `AURA-3F9478E3E3DF67` · eyebrow

```text
La science
```
Source: `templates/product.json` · `sections.aura_science.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-445C0CE0D5DE61](#aura-445c0ce0d5de61). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-25fe3f5ac15d9e"></a>

**heading** · `AURA-25FE3F5AC15D9E` · headline

```text
La pression qu'il faut à vos jambes.
```
Source: `templates/product.json` · `sections.aura_science.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-5CB15A5A19A5A0](#aura-5cb15a5a19a5a0). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-1045fc163691ac"></a>

**para1** · `AURA-1045FC163691AC` · paragraph

```text
<p>La vraie compression est <strong>graduée</strong>, pas uniforme : plus ferme à la cheville, plus souple vers le mollet. Cette fermeté à la cheville est voulue. C'est ce gradient qui ramène réellement le sang vers le cœur, au lieu de simplement comprimer la jambe.</p>
```
Source: `templates/product.json` · `sections.aura_science.settings.para1` · active template setting. Editability: **Theme Editor**.
Context: Setting para1; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-C4B71466BE37F5](#aura-c4b71466be37f5). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-5ad2a519025c1e"></a>

**bars_label** · `AURA-5AD2A519025C1E` · label / microcopy

```text
Aura · compression graduée
```
Source: `templates/product.json` · `sections.aura_science.settings.bars_label` · active template setting. Editability: **Theme Editor**.
Context: Setting bars_label; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-BEE886B1270CAD](#aura-bee886b1270cad). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-b6321959a1c036"></a>

**bars_value** · `AURA-B6321959A1C036` · label / microcopy — **claim to verify**

```text
18–25 mmHg
```
Source: `templates/product.json` · `sections.aura_science.settings.bars_value` · active template setting. Editability: **Theme Editor**.
Context: Setting bars_value; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-ABA1179C9C2C29](#aura-aba1179c9c2c29). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-2fc9d51ca6a040"></a>

**zone1** · `AURA-2FC9D51CA6A040` · label / microcopy

```text
Cheville
```
Source: `templates/product.json` · `sections.aura_science.settings.zone1` · active template setting. Editability: **Theme Editor**.
Context: Setting zone1; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-D59B8D095FE8B2](#aura-d59b8d095fe8b2). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-5535137fb47fce"></a>

**zone2** · `AURA-5535137FB47FCE` · label / microcopy

```text
Mollet
```
Source: `templates/product.json` · `sections.aura_science.settings.zone2` · active template setting. Editability: **Theme Editor**.
Context: Setting zone2; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-762B804C1179C2](#aura-762b804c1179c2). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-f4026166b7dd25"></a>

**zone3** · `AURA-F4026166B7DD25` · label / microcopy

```text
Haut du mollet
```
Source: `templates/product.json` · `sections.aura_science.settings.zone3` · active template setting. Editability: **Theme Editor**.
Context: Setting zone3; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-239B68F61FF82C](#aura-239b68f61ff82c). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-72d899fa6e09cf"></a>

**flat_value** · `AURA-72D899FA6E09CF` · label / microcopy — **claim to verify**

```text
Pression identique
```
Source: `templates/product.json` · `sections.aura_science.settings.flat_value` · active template setting. Editability: **Theme Editor**.
Context: Setting flat_value; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-959E022914A92D](#aura-959e022914a92d). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e076240b8ccff6"></a>

**flat_label** · `AURA-E076240B8CCFF6` · label / microcopy — **claim to verify**

```text
Bas classique · compression plate
```
Source: `templates/product.json` · `sections.aura_science.settings.flat_label` · active template setting. Editability: **Theme Editor**.
Context: Setting flat_label; section aura_science
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-493C2A246EB59F](#aura-493c2a246eb59f). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-ff17576ed46efd"></a>

**illus_label** · `AURA-FF17576ED46EFD` · label / microcopy — **claim to verify**

```text
Schéma anatomique · retour veineux soléaire & mollet
```
Source: `templates/product.json` · `sections.aura_science.settings.illus_label` · active template setting. Editability: **Theme Editor**.
Context: Setting illus_label; section aura_science
Rendering: expected from repository. Image alt/placeholder; illustration container hidden on mobile.
Duplicates: [AURA-3AF6F04F52D1C3](#aura-3af6f04f52d1c3). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 8: Benefits

Section ID: `product--aura_benefits` · Source section/component ID: `aura_benefits` · Enabled: **yes**.
Page position: 8; saved group/body position: 7.
Role: Present product benefits next to media.
Source: `templates/product.json`, `sections/aura-benefits-alternating.liquid`. Active template setting: `sections.aura_benefits`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-58037254C8AB97](#aura-58037254c8ab97) (Product and editorial media).

#### Section introduction and controls

<a id="aura-cd8b8cc8eef01f"></a>

**eyebrow** · `AURA-CD8B8CC8EEF01F` · eyebrow

```text
Les bénéfices
```
Source: `templates/product.json` · `sections.aura_benefits.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_benefits
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-ad5baa2d242ca7"></a>

**heading** · `AURA-AD5BAA2D242CA7` · headline — **claim to verify**

```text
Pensé pour vos 12 heures.
```
Source: `templates/product.json` · `sections.aura_benefits.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_benefits
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### benefit b1 — block 1

<a id="aura-3f2734eb0ddbaa"></a>

**heading** · `AURA-3F2734EB0DDBAA` · headline — **claim to verify**

```text
Votre circulation repart.
```
Source: `templates/product.json` · `sections.aura_benefits.blocks.b1.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (benefit, b1); Setting heading; section aura_benefits
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-20abca2c1aebb5"></a>

**body** · `AURA-20ABCA2C1AEBB5` · paragraph — **claim to verify**

```text
<p>La compression graduée 18–25 mmHg relance le retour veineux et limite l'œdème en fin de garde : jambes légères, chevilles fines, sans marque à la peau — du premier patient à la dixième heure.</p>
```
Source: `templates/product.json` · `sections.aura_benefits.blocks.b1.settings.body` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (benefit, b1); Setting body; section aura_benefits
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.

#### benefit b3 — block 2

<a id="aura-1e7b0c34ca83e6"></a>

**heading** · `AURA-1E7B0C34CA83E6` · headline — **claim to verify**

```text
Vous récupérez plus vite.
```
Source: `templates/product.json` · `sections.aura_benefits.blocks.b3.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (benefit, b3); Setting heading; section aura_benefits
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-77ece78f42e737"></a>

**body** · `AURA-77ECE78F42E737` · paragraph — **claim to verify**

```text
<p>Moins de fatigue musculaire après une longue station debout, et une récupération qui démarre dès l'enfilage.</p>
```
Source: `templates/product.json` · `sections.aura_benefits.blocks.b3.settings.body` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (benefit, b3); Setting body; section aura_benefits
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 9: Material comparison

Section ID: `product--aura_softness` · Source section/component ID: `aura_softness` · Enabled: **yes**.
Page position: 9; saved group/body position: 8.
Role: Present material comparisons.
Source: `templates/product.json`, `sections/aura-softness.liquid`. Active template setting: `sections.aura_softness`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: none identified in the master.

#### Section introduction and controls

<a id="aura-d522beb21c9108"></a>

**eyebrow** · `AURA-D522BEB21C9108` · eyebrow

```text
Douceur de la matière
```
Source: `templates/product.json` · `sections.aura_softness.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-67BD52E6F1E49D](#aura-67bd52e6f1e49d). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-31a6b433c07aee"></a>

**heading** · `AURA-31A6B433C07AEE` · headline — **claim to verify**

```text
Douce ? Plus douce que ce qu'on imagine d'une chaussette.
```
Source: `templates/product.json` · `sections.aura_softness.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-20261AC4067731](#aura-20261ac4067731). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-769983b5fcd7e0"></a>

**lead** · `AURA-769983B5FCD7E0` · subheadline — **claim to verify**

```text
Nous avons choisi notre tricot 2 fils sur un comparatif comme celui-ci. Les références des autres, classées de gauche à droite.
```
Source: `templates/product.json` · `sections.aura_softness.settings.lead` · active template setting. Editability: **Theme Editor**.
Context: Setting lead; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-16F951FFF6EAB0](#aura-16f951fff6eab0). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### rung r4 — block 4

<a id="aura-ad3483cce73b1c"></a>

**flag** · `AURA-AD3483CCE73B1C` · badge

```text
Ce qu'on utilise
```
Source: `templates/product.json` · `sections.aura_softness.blocks.r4.settings.flag` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (rung, r4); Setting flag; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-AF497BD5FD5D31](#aura-af497bd5fd5d31). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-7e836ae55bdf25"></a>

**level** · `AURA-7E836AE55BDF25` · label / microcopy — **claim to verify**

```text
La plus douce
```
Source: `templates/product.json` · `sections.aura_softness.blocks.r4.settings.level` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (rung, r4); Setting level; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-8BC68A38192C9B](#aura-8bc68a38192c9b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-eeef77f36776a7"></a>

**name** · `AURA-EEEF77F36776A7` · label / microcopy

```text
Aura — tricot 2 fils
```
Source: `templates/product.json` · `sections.aura_softness.blocks.r4.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (rung, r4); Setting name; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-4B7CE6F1B84BB5](#aura-4b7ce6f1b84bb5). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-2a3ad7bfde5c0f"></a>

**stretch** · `AURA-2A3AD7BFDE5C0F` · label / microcopy — **claim to verify**

```text
Léger comme une seconde peau, résistant au lavage quotidien.
```
Source: `templates/product.json` · `sections.aura_softness.blocks.r4.settings.stretch` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (rung, r4); Setting stretch; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-45D83DB5935D8D](#aura-45d83db5935d8d). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### rung r1 — block 1

<a id="aura-52e8a73873eb43"></a>

**level** · `AURA-52E8A73873EB43` · label / microcopy — **claim to verify**

```text
Rigide
```
Source: `templates/product.json` · `sections.aura_softness.blocks.r1.settings.level` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (rung, r1); Setting level; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-EE2BDD3D14BE1F](#aura-ee2bdd3d14be1f). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-8a9a06de0ec619"></a>

**name** · `AURA-8A9A06DE0EC619` · label / microcopy

```text
Polyester
```
Source: `templates/product.json` · `sections.aura_softness.blocks.r1.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (rung, r1); Setting name; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-8DE1E6BA31D46A](#aura-8de1e6ba31d46a). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-ab1682c8e427f1"></a>

**stretch** · `AURA-AB1682C8E427F1` · label / microcopy — **claim to verify**

```text
Bon marché, étouffant, qui gratte. Le réflexe en dessous de 15 €.
```
Source: `templates/product.json` · `sections.aura_softness.blocks.r1.settings.stretch` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (rung, r1); Setting stretch; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-5BF6251CC869A2](#aura-5bf6251cc869a2). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### rung r2 — block 2

<a id="aura-885e80f70e32dd"></a>

**level** · `AURA-885E80F70E32DD` · label / microcopy — **claim to verify**

```text
Assez douce
```
Source: `templates/product.json` · `sections.aura_softness.blocks.r2.settings.level` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (rung, r2); Setting level; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-6EF771515792CB](#aura-6ef771515792cb). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-c3c83795728164"></a>

**name** · `AURA-C3C83795728164` · label / microcopy

```text
Coton
```
Source: `templates/product.json` · `sections.aura_softness.blocks.r2.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (rung, r2); Setting name; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-DA07079DD65F1B](#aura-da07079dd65f1b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e89ada6f610750"></a>

**stretch** · `AURA-E89ADA6F610750` · label / microcopy — **claim to verify**

```text
Respirant mais se détend, ne tient pas la compression au-delà de 10 h.
```
Source: `templates/product.json` · `sections.aura_softness.blocks.r2.settings.stretch` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (rung, r2); Setting stretch; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-00A5460D5A3F7D](#aura-00a5460d5a3f7d). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### rung r3 — block 3

<a id="aura-2b8b89e65a32a4"></a>

**level** · `AURA-2B8B89E65A32A4` · label / microcopy — **claim to verify**

```text
Plus douce
```
Source: `templates/product.json` · `sections.aura_softness.blocks.r3.settings.level` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (rung, r3); Setting level; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-B5D9F5BA316E66](#aura-b5d9f5ba316e66). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-0dce5cb371cd8c"></a>

**name** · `AURA-0DCE5CB371CD8C` · label / microcopy

```text
Viscose de bambou
```
Source: `templates/product.json` · `sections.aura_softness.blocks.r3.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (rung, r3); Setting name; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-EC162AAE2D4CC2](#aura-ec162aae2d4cc2). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-fc89e335a4a1fc"></a>

**stretch** · `AURA-FC89E335A4A1FC` · label / microcopy — **claim to verify**

```text
Agréable sur la peau, mais perd sa forme après un lavage chaud.
```
Source: `templates/product.json` · `sections.aura_softness.blocks.r3.settings.stretch` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (rung, r3); Setting stretch; section aura_softness
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-E2BA4D2AF2C569](#aura-e2ba4d2af2c569). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 10: Product comparison

Section ID: `product--aura_versus` · Source section/component ID: `aura_versus` · Enabled: **yes**.
Page position: 10; saved group/body position: 9.
Role: Present comparisons with other products.
Source: `templates/product.json`, `sections/aura-versus.liquid`. Active template setting: `sections.aura_versus`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: none identified in the master.

#### Section introduction and controls

<a id="aura-8497121dc7aa15"></a>

**eyebrow** · `AURA-8497121DC7AA15` · eyebrow — **claim to verify**

```text
Pourquoi les autres compressions échouent
```
Source: `templates/product.json` · `sections.aura_versus.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-7E420FE0215F58](#aura-7e420fe0215f58). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-a90e97974b0a58"></a>

**heading** · `AURA-A90E97974B0A58` · headline — **claim to verify**

```text
La plupart des chaussettes de compression n'en sont pas vraiment.
```
Source: `templates/product.json` · `sections.aura_versus.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-3D6306D53F60E7](#aura-3d6306d53f60e7). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-4b77ff3ecd2abc"></a>

**lead** · `AURA-4B77FF3ECD2ABC` · subheadline

```text
Si votre dernière paire vous a donné des ampoules, a roulé au bord-côte ou ressemblait à un garrot avant midi, voici ce qui clochait vraiment.
```
Source: `templates/product.json` · `sections.aura_versus.settings.lead` · active template setting. Editability: **Theme Editor**.
Context: Setting lead; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-F570F709C00F28](#aura-f570f709c00f28). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-55980650bb4c42"></a>

**col_feature** · `AURA-55980650BB4C42` · label / microcopy

```text
Critère
```
Source: `templates/product.json` · `sections.aura_versus.settings.col_feature` · active template setting. Editability: **Theme Editor**.
Context: Setting col_feature; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-D177FE701FA9B5](#aura-d177fe701fa9b5). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-615d6ce1e6170b"></a>

**col_other_nm** · `AURA-615D6CE1E6170B` · label / microcopy

```text
Générique
```
Source: `templates/product.json` · `sections.aura_versus.settings.col_other_nm` · active template setting. Editability: **Theme Editor**.
Context: Setting col_other_nm; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-30BC48FBF0190F](#aura-30bc48fbf0190f). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-08a98839b76dbc"></a>

**col_brand_nm** · `AURA-08A98839B76DBC` · label / microcopy

```text
Aura
```
Source: `templates/product.json` · `sections.aura_versus.settings.col_brand_nm` · active template setting. Editability: **Theme Editor**.
Context: Setting col_brand_nm; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-CC4E1CA10AA7A5](#aura-cc4e1ca10aa7a5), [AURA-0C632B506D193A](#aura-0c632b506d193a), [AURA-B2F6EBBCC7FE8C](#aura-b2f6ebbcc7fe8c). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### row v1 — block 1

<a id="aura-437bf26a7906af"></a>

**feature** · `AURA-437BF26A7906AF` · label / microcopy

```text
Pression graduée
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v1.settings.feature` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (row, v1); Setting feature; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-D823C30095052E](#aura-d823c30095052e). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-533e7d509bbd06"></a>

**other** · `AURA-533E7D509BBD06` · label / microcopy — **claim to verify**

```text
Plate ou non vérifiée
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v1.settings.other` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (row, v1); Setting other; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-0F72EE2A0857F7](#aura-0f72ee2a0857f7). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-81aab1d99a7f00"></a>

**brand** · `AURA-81AAB1D99A7F00` · label / microcopy — **claim to verify**

```text
18–25 mmHg, cheville-mollet
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v1.settings.brand` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (row, v1); Setting brand; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-2674FD36AB8008](#aura-2674fd36ab8008). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### row v2 — block 2

<a id="aura-9bbfc863ad2d72"></a>

**feature** · `AURA-9BBFC863AD2D72` · label / microcopy

```text
Construction de la pointe
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v2.settings.feature` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (row, v2); Setting feature; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-72482D552C60EF](#aura-72482d552c60ef). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-74b77715be51fe"></a>

**other** · `AURA-74B77715BE51FE` · label / microcopy — **claim to verify**

```text
Couture épaisse
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v2.settings.other` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (row, v2); Setting other; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-4B62BEF89CDB8E](#aura-4b62bef89cdb8e). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-9b7ebe211f6b4d"></a>

**brand** · `AURA-9B7EBE211F6B4D` · label / microcopy — **claim to verify**

```text
Sans couture, pointe finie à la main
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v2.settings.brand` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (row, v2); Setting brand; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-E23AD5B28E7413](#aura-e23ad5b28e7413). Near duplicates: none in this packet.

#### row v3 — block 3

<a id="aura-99ce80847d82ae"></a>

**feature** · `AURA-99CE80847D82AE` · label / microcopy

```text
Tenue du bord-côte
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v3.settings.feature` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (row, v3); Setting feature; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-3BFF234708E9F6](#aura-3bff234708e9f6). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-48c564a9194509"></a>

**other** · `AURA-48C564A9194509` · label / microcopy — **claim to verify**

```text
Roule dès la 4ᵉ heure
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v3.settings.other` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (row, v3); Setting other; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-807BF0B1925664](#aura-807bf0b1925664). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-6119e6f025310a"></a>

**brand** · `AURA-6119E6F025310A` · label / microcopy — **claim to verify**

```text
Maintien plat, anti-roulement
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v3.settings.brand` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (row, v3); Setting brand; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-C35E2109E6BDE2](#aura-c35e2109e6bde2). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### row v4 — block 4

<a id="aura-eb40f6ccf66513"></a>

**feature** · `AURA-EB40F6CCF66513` · label / microcopy

```text
Gestion de la chaleur
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v4.settings.feature` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (row, v4); Setting feature; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-7CCF053E544C64](#aura-7ccf053e544c64). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-69a2dc5dc8c50b"></a>

**other** · `AURA-69A2DC5DC8C50B` · label / microcopy — **claim to verify**

```text
Le polyester retient la transpiration
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v4.settings.other` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (row, v4); Setting other; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-E81F76DC75B0FF](#aura-e81f76dc75b0ff). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-2496baa26e43c0"></a>

**brand** · `AURA-2496BAA26E43C0` · label / microcopy — **claim to verify**

```text
Coup-de-pied en maille aérée
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v4.settings.brand` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (row, v4); Setting brand; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-7DA35D68959843](#aura-7da35d68959843). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### row v5 — block 5

<a id="aura-77c26cde109578"></a>

**feature** · `AURA-77C26CDE109578` · label / microcopy

```text
Après 100 lavages
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v5.settings.feature` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (row, v5); Setting feature; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-9F1CF149865C1E](#aura-9f1cf149865c1e). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-53aa15d8a9093e"></a>

**other** · `AURA-53AA15D8A9093E` · label / microcopy — **claim to verify**

```text
Pression perdue, trous
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v5.settings.other` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (row, v5); Setting other; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-9EE8200DC19C64](#aura-9ee8200dc19c64). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-0ed09876b2afd7"></a>

**brand** · `AURA-0ED09876B2AFD7` · label / microcopy — **claim to verify**

```text
Compression intacte, garantie
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v5.settings.brand` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (row, v5); Setting brand; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-2A8DA302133063](#aura-2a8da302133063). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### row v6 — block 6

<a id="aura-4c103afbe9082e"></a>

**feature** · `AURA-4C103AFBE9082E` · label / microcopy

```text
Conception
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v6.settings.feature` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (row, v6); Setting feature; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-69A7D448BB517B](#aura-69a7d448bb517b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-24d7a6b8e6019d"></a>

**other** · `AURA-24D7A6B8E6019D` · label / microcopy — **claim to verify**

```text
Générique, jamais testé en garde
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v6.settings.other` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (row, v6); Setting other; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-723E65DCF0EE77](#aura-723e65dcf0ee77). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-7511b0f89b555e"></a>

**brand** · `AURA-7511B0F89B555E` · label / microcopy — **claim to verify**

```text
Pensé et testé avec des soignantes
```
Source: `templates/product.json` · `sections.aura_versus.blocks.v6.settings.brand` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (row, v6); Setting brand; section aura_versus
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-B04EA8A67A1436](#aura-b04ea8a67a1436). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 11: Reviews

Section ID: `product--aura_reviews` · Source section/component ID: `aura_reviews` · Enabled: **yes**.
Page position: 11; saved group/body position: 11.
Role: Present testimonial and aggregate review copy.
Source: `templates/product.json`, `sections/aura-reviews.liquid`. Active template setting: `sections.aura_reviews`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-A696476EBA0770](#aura-a696476eba0770) (External review content), [AURA-58037254C8AB97](#aura-58037254c8ab97) (Product and editorial media).

#### Section introduction and controls

<a id="aura-6b03b659e92f1b"></a>

**eyebrow** · `AURA-6B03B659E92F1B` · eyebrow — **claim to verify**

```text
Vrais avis · vérifiés
```
Source: `templates/product.json` · `sections.aura_reviews.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-CFDA39E378A8D3](#aura-cfda39e378a8d3). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-9ab26760746225"></a>

**heading** · `AURA-9AB26760746225` · headline — **claim to verify**

```text
Portées par des infirmières dans toute la France.
```
Source: `templates/product.json` · `sections.aura_reviews.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-22445523F10AF9](#aura-22445523f10af9). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-5088873a2f768a"></a>

**score** · `AURA-5088873A2F768A` · social proof — **claim to verify**

```text
4,8
```
Source: `templates/product.json` · `sections.aura_reviews.settings.score` · active template setting. Editability: **Theme Editor**.
Context: Setting score; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-604F61AD34A042](#aura-604f61ad34a042), [AURA-652869C0F339B3](#aura-652869c0f339b3). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-c806a26b589af5"></a>

**meta** · `AURA-C806A26B589AF5` · label / microcopy — **claim to verify**

```text
150+ avis vérifiés d'infirmières
```
Source: `templates/product.json` · `sections.aura_reviews.settings.meta` · active template setting. Editability: **Theme Editor**.
Context: Setting meta; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-80144D21968155](#aura-80144d21968155). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### review w1 — block 1

<a id="aura-ddee786c642b08"></a>

**title** · `AURA-DDEE786C642B08` · headline — **claim to verify**

```text
« Rentrée à la maison, et j'ai cuisiné le dîner. »
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w1.settings.title` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (review, w1); Setting title; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-9BA92D9BE45553](#aura-9ba92d9be45553). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-87705d714f1384"></a>

**name** · `AURA-87705D714F1384` · label / microcopy — **claim to verify**

```text
Camille L.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w1.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (review, w1); Setting name; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-B2E04FD7F0AC75](#aura-b2e04fd7f0ac75). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-9908b211134072"></a>

**body** · `AURA-9908B211134072` · paragraph — **claim to verify**

```text
Avant, je posais mon sac à la porte et je m'allongeais par terre, jambes contre le mur. Après trois mois en Aura, je rentre et je cuisine. C'est tout l'avis.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w1.settings.body` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (review, w1); Setting body; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-CAC631B0C04C5E](#aura-cac631b0c04c5e). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-296cf02a6c86e2"></a>

**verified_label** · `AURA-296CF02A6C86E2` · social proof — **claim to verify**

```text
Acheteuse vérifiée
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w1.settings.verified_label` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (review, w1); Setting verified_label; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-38E29EA51940C9](#aura-38e29ea51940c9), [AURA-3B2D14AFFAE4E5](#aura-3b2d14affae4e5), [AURA-F281780ADA7426](#aura-f281780ada7426), [AURA-DF292B514063F5](#aura-df292b514063f5), [AURA-D1039F9BCCD8F3](#aura-d1039f9bccd8f3), [AURA-1640C48465E687](#aura-1640c48465e687), [AURA-F4FCA73CE3B5BE](#aura-f4fca73ce3b5be), [AURA-50AB1A4038BB24](#aura-50ab1a4038bb24), [AURA-27625B0BE97111](#aura-27625b0be97111), [AURA-5AA4E0B14965CE](#aura-5aa4e0b14965ce), [AURA-3598732234154B](#aura-3598732234154b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-5d9252bc9d5ec4"></a>

**initials** · `AURA-5D9252BC9D5EC4` · label / microcopy

```text
CL
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w1.settings.initials` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (review, w1); Setting initials; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-8C6EBF183B7558](#aura-8c6ebf183b7558). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-4df777039a305f"></a>

**role** · `AURA-4DF777039A305F` · label / microcopy — **claim to verify**

```text
IDE urgentiste · CHU Lyon Sud · 11 mois de port
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w1.settings.role` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (review, w1); Setting role; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-08BCE3505296BC](#aura-08bce3505296bc). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### review w2 — block 2

<a id="aura-ebb8066abbc758"></a>

**title** · `AURA-EBB8066ABBC758` · headline — **claim to verify**

```text
M'a portée pendant la semaine d'intégration.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w2.settings.title` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (review, w2); Setting title; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-701B9F6B8D9BE0](#aura-701b9f6b8d9be0). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-5eb4965ecff2a0"></a>

**name** · `AURA-5EB4965ECFF2A0` · label / microcopy — **claim to verify**

```text
Marion D.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w2.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (review, w2); Setting name; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-E886E0A7C8F535](#aura-e886e0a7c8f535). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-1be89069fbea38"></a>

**body** · `AURA-1BE89069FBEA38` · paragraph — **claim to verify**

```text
La pointe sans couture est la seule raison qui m'a fait tenir. La paire d'avant m'avait donné une ampoule au 3ᵉ jour ; Aura a tenu toute la rotation sans une seule.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w2.settings.body` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (review, w2); Setting body; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-76BA9165A7C036](#aura-76ba9165a7c036). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-f4fca73ce3b5be"></a>

**verified_label** · `AURA-F4FCA73CE3B5BE` · social proof — **claim to verify**

```text
Acheteuse vérifiée
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w2.settings.verified_label` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (review, w2); Setting verified_label; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-38E29EA51940C9](#aura-38e29ea51940c9), [AURA-3B2D14AFFAE4E5](#aura-3b2d14affae4e5), [AURA-F281780ADA7426](#aura-f281780ada7426), [AURA-DF292B514063F5](#aura-df292b514063f5), [AURA-D1039F9BCCD8F3](#aura-d1039f9bccd8f3), [AURA-1640C48465E687](#aura-1640c48465e687), [AURA-296CF02A6C86E2](#aura-296cf02a6c86e2), [AURA-50AB1A4038BB24](#aura-50ab1a4038bb24), [AURA-27625B0BE97111](#aura-27625b0be97111), [AURA-5AA4E0B14965CE](#aura-5aa4e0b14965ce), [AURA-3598732234154B](#aura-3598732234154b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-5478fd1ca3393f"></a>

**initials** · `AURA-5478FD1CA3393F` · label / microcopy

```text
MD
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w2.settings.initials` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (review, w2); Setting initials; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-23EF8149FCD393](#aura-23ef8149fcd393). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e6f966c57cfa89"></a>

**role** · `AURA-E6F966C57CFA89` · label / microcopy — **claim to verify**

```text
IDE Gériatrie · Bordeaux
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w2.settings.role` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (review, w2); Setting role; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-8554E459B02900](#aura-8554e459b02900). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### review w3 — block 3

<a id="aura-053b913988dfe2"></a>

**title** · `AURA-053B913988DFE2` · headline — **claim to verify**

```text
Lavage à 60°, 18 mois après.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w3.settings.title` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (review, w3); Setting title; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-3D4A2664D0AB1E](#aura-3d4a2664d0ab1e). Near duplicates: none in this packet.
<a id="aura-bc75b242af3989"></a>

**name** · `AURA-BC75B242AF3989` · label / microcopy — **claim to verify**

```text
Juliette R.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w3.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (review, w3); Setting name; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-21048131A4ED06](#aura-21048131a4ed06). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-b10df8400533d8"></a>

**body** · `AURA-B10DF8400533D8` · paragraph — **claim to verify**

```text
Bordeaux le lundi, Gris le jeudi. Je lave chaud, je sèche tiède. La compression est comme au premier jour. J'avais usé quatre marques moins chères avant.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w3.settings.body` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (review, w3); Setting body; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-1119D848F0298B](#aura-1119d848f0298b). Near duplicates: none in this packet.
<a id="aura-50ab1a4038bb24"></a>

**verified_label** · `AURA-50AB1A4038BB24` · social proof — **claim to verify**

```text
Acheteuse vérifiée
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w3.settings.verified_label` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (review, w3); Setting verified_label; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-38E29EA51940C9](#aura-38e29ea51940c9), [AURA-3B2D14AFFAE4E5](#aura-3b2d14affae4e5), [AURA-F281780ADA7426](#aura-f281780ada7426), [AURA-DF292B514063F5](#aura-df292b514063f5), [AURA-D1039F9BCCD8F3](#aura-d1039f9bccd8f3), [AURA-1640C48465E687](#aura-1640c48465e687), [AURA-296CF02A6C86E2](#aura-296cf02a6c86e2), [AURA-F4FCA73CE3B5BE](#aura-f4fca73ce3b5be), [AURA-27625B0BE97111](#aura-27625b0be97111), [AURA-5AA4E0B14965CE](#aura-5aa4e0b14965ce), [AURA-3598732234154B](#aura-3598732234154b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-d775d52b3a0209"></a>

**initials** · `AURA-D775D52B3A0209` · label / microcopy

```text
JR
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w3.settings.initials` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (review, w3); Setting initials; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-A0343863A5F3F1](#aura-a0343863a5f3f1). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-f7eb2d856fb212"></a>

**role** · `AURA-F7EB2D856FB212` · label / microcopy — **claim to verify**

```text
Sage-femme · Maternité Paris 14e
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w3.settings.role` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (review, w3); Setting role; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-00BBAF9F586E59](#aura-00bbaf9f586e59). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### review w4 — block 4

<a id="aura-f8f5665333538e"></a>

**title** · `AURA-F8F5665333538E` · headline — **claim to verify**

```text
J'en ai racheté 4 le dimanche.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w4.settings.title` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (review, w4); Setting title; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-7AA66CA67228E9](#aura-7aa66ca67228e9). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-d89ac0207ab6c6"></a>

**name** · `AURA-D89AC0207AB6C6` · label / microcopy — **claim to verify**

```text
Thomas B.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w4.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (review, w4); Setting name; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-F02B6DBD79BAA4](#aura-f02b6dbd79baa4). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-a1b0c03ed55ec8"></a>

**body** · `AURA-A1B0C03ED55EC8` · paragraph — **claim to verify**

```text
Sceptique. Portées 14 heures d'affilée un samedi. Commandé quatre paires de plus le soir même. Les mollets ne brûlent plus à la dixième heure.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w4.settings.body` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (review, w4); Setting body; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-D799BD3CEEDC0B](#aura-d799bd3ceedc0b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-27625b0be97111"></a>

**verified_label** · `AURA-27625B0BE97111` · social proof — **claim to verify**

```text
Acheteuse vérifiée
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w4.settings.verified_label` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (review, w4); Setting verified_label; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-38E29EA51940C9](#aura-38e29ea51940c9), [AURA-3B2D14AFFAE4E5](#aura-3b2d14affae4e5), [AURA-F281780ADA7426](#aura-f281780ada7426), [AURA-DF292B514063F5](#aura-df292b514063f5), [AURA-D1039F9BCCD8F3](#aura-d1039f9bccd8f3), [AURA-1640C48465E687](#aura-1640c48465e687), [AURA-296CF02A6C86E2](#aura-296cf02a6c86e2), [AURA-F4FCA73CE3B5BE](#aura-f4fca73ce3b5be), [AURA-50AB1A4038BB24](#aura-50ab1a4038bb24), [AURA-5AA4E0B14965CE](#aura-5aa4e0b14965ce), [AURA-3598732234154B](#aura-3598732234154b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-dd5c2dbe50d421"></a>

**initials** · `AURA-DD5C2DBE50D421` · label / microcopy

```text
TB
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w4.settings.initials` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (review, w4); Setting initials; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-077AC488EF2A5D](#aura-077ac488ef2a5d). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-745d4023ca9f64"></a>

**role** · `AURA-745D4023CA9F64` · label / microcopy — **claim to verify**

```text
Aide-soignant · EHPAD Lille
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w4.settings.role` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (review, w4); Setting role; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-8C24C073F58290](#aura-8c24c073f58290). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### review w5 — block 5

<a id="aura-dead2b0afcd4d2"></a>

**title** · `AURA-DEAD2B0AFCD4D2` · headline — **claim to verify**

```text
Valent leurs 34 €, et je suis exigeante.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w5.settings.title` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (review, w5); Setting title; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-F948F15CF4CEA7](#aura-f948f15cf4cea7). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-6ea203714f7cf9"></a>

**name** · `AURA-6EA203714F7CF9` · label / microcopy — **claim to verify**

```text
Sophie O.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w5.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (review, w5); Setting name; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-8CBE822A4A9078](#aura-8cbe822a4a9078). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-607d5a016bb31c"></a>

**body** · `AURA-607D5A016BB31C` · paragraph — **claim to verify**

```text
J'ai testé quatre marques au même prix. Aura est la seule avec un bord-côte qui ne roule pas, une couture de pointe qu'on ne sent pas, et une pression qui semble pensée.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w5.settings.body` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (review, w5); Setting body; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-24343D8941B6A7](#aura-24343d8941b6a7). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-5aa4e0b14965ce"></a>

**verified_label** · `AURA-5AA4E0B14965CE` · social proof — **claim to verify**

```text
Acheteuse vérifiée
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w5.settings.verified_label` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (review, w5); Setting verified_label; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-38E29EA51940C9](#aura-38e29ea51940c9), [AURA-3B2D14AFFAE4E5](#aura-3b2d14affae4e5), [AURA-F281780ADA7426](#aura-f281780ada7426), [AURA-DF292B514063F5](#aura-df292b514063f5), [AURA-D1039F9BCCD8F3](#aura-d1039f9bccd8f3), [AURA-1640C48465E687](#aura-1640c48465e687), [AURA-296CF02A6C86E2](#aura-296cf02a6c86e2), [AURA-F4FCA73CE3B5BE](#aura-f4fca73ce3b5be), [AURA-50AB1A4038BB24](#aura-50ab1a4038bb24), [AURA-27625B0BE97111](#aura-27625b0be97111), [AURA-3598732234154B](#aura-3598732234154b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-027642741ade6d"></a>

**initials** · `AURA-027642741ADE6D` · label / microcopy

```text
SO
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w5.settings.initials` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (review, w5); Setting initials; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-E0D59941F193A2](#aura-e0d59941f193a2). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-f718bee38d7dcf"></a>

**role** · `AURA-F718BEE38D7DCF` · label / microcopy — **claim to verify**

```text
IDE Bloc op. · Marseille
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w5.settings.role` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (review, w5); Setting role; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-9A2A880C54209A](#aura-9a2a880c54209a). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### review w6 — block 6

<a id="aura-e39adebe0fa671"></a>

**title** · `AURA-E39ADEBE0FA671` · headline — **claim to verify**

```text
Pris une taille au-dessus : parfait.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w6.settings.title` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (review, w6); Setting title; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-7705176D2169AB](#aura-7705176d2169ab). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-6142ae1328b2da"></a>

**name** · `AURA-6142AE1328B2DA` · label / microcopy — **claim to verify**

```text
Léa E.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w6.settings.name` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (review, w6); Setting name; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-BA8DE2BB6B728D](#aura-ba8de2bb6b728d). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-6bf62186d99edc"></a>

**body** · `AURA-6BF62186D99EDC` · paragraph — **claim to verify**

```text
Conseil : j'ai pris une taille au-dessus du guide et elles sont idéales. Sinon, des chaussettes brillantes. Le tableau de mesure du mollet vaut de l'or.
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w6.settings.body` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (review, w6); Setting body; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-A37E558BAA368F](#aura-a37e558baa368f). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-3598732234154b"></a>

**verified_label** · `AURA-3598732234154B` · social proof — **claim to verify**

```text
Acheteuse vérifiée
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w6.settings.verified_label` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (review, w6); Setting verified_label; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-38E29EA51940C9](#aura-38e29ea51940c9), [AURA-3B2D14AFFAE4E5](#aura-3b2d14affae4e5), [AURA-F281780ADA7426](#aura-f281780ada7426), [AURA-DF292B514063F5](#aura-df292b514063f5), [AURA-D1039F9BCCD8F3](#aura-d1039f9bccd8f3), [AURA-1640C48465E687](#aura-1640c48465e687), [AURA-296CF02A6C86E2](#aura-296cf02a6c86e2), [AURA-F4FCA73CE3B5BE](#aura-f4fca73ce3b5be), [AURA-50AB1A4038BB24](#aura-50ab1a4038bb24), [AURA-27625B0BE97111](#aura-27625b0be97111), [AURA-5AA4E0B14965CE](#aura-5aa4e0b14965ce). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-5a9c16b83f7c75"></a>

**initials** · `AURA-5A9C16B83F7C75` · label / microcopy

```text
LE
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w6.settings.initials` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (review, w6); Setting initials; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-AABDD249872BEF](#aura-aabdd249872bef). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-a40539fb1e2ee6"></a>

**role** · `AURA-A40539FB1E2EE6` · label / microcopy — **claim to verify**

```text
Infirmière puéricultrice · Nantes
```
Source: `templates/product.json` · `sections.aura_reviews.blocks.w6.settings.role` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (review, w6); Setting role; section aura_reviews
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-996AD89436D46C](#aura-996ad89436d46c). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### Section closing copy and controls

<a id="aura-edd116449b8c6f"></a>

**accessibility label** · `AURA-EDD116449B8C6F` · accessibility label

```text
Précédent
```
Source: `sections/aura-reviews.liquid` · `line:41:aria-label:a527f17` · hardcoded Liquid. Editability: **code only**.
Context: section.reviews > div.carousel-nav > button.carousel-arrow
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-CC72F8A8FCB904](#aura-cc72f8a8fcb904), [AURA-417D4C427C35B5](#aura-417d4c427c35b5), [AURA-08D962EED1A6F1](#aura-08d962eed1a6f1). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-c697d145e1cf28"></a>

**accessibility label** · `AURA-C697D145E1CF28` · accessibility label

```text
Suivant
```
Source: `sections/aura-reviews.liquid` · `line:42:aria-label:596d29a` · hardcoded Liquid. Editability: **code only**.
Context: section.reviews > div.carousel-nav > button.carousel-arrow
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-F97491171A8C97](#aura-f97491171a8c97), [AURA-4FECB64142997E](#aura-4fecb64142997e), [AURA-332EC9872DDF65](#aura-332ec9872ddf65). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 12: Description, care, delivery and returns

Section ID: `product--aura_product_details` · Source section/component ID: `aura_product_details` · Enabled: **yes**.
Page position: 12; saved group/body position: 12.
Role: Provide expandable product, care, shipping and return information.
Source: `templates/product.json`, `sections/aura-product-details.liquid`. Active template setting: `sections.aura_product_details`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-21906E00E1F7CB](#aura-21906e00e1f7cb) (Product descriptions), [AURA-523441885C0B00](#aura-523441885c0b00) (Checkout, shipping and payments), [AURA-5D2B5979483D52](#aura-5d2b5979483d52) (Policies and legal pages).

#### Description

<a id="aura-74c11725435eff"></a>

**desc_label** · `AURA-74C11725435EFF` · label / microcopy

```text
Description
```
Source: `templates/product.json` · `sections.aura_product_details.settings.desc_label` · active template setting. Editability: **Theme Editor**.
Context: Setting desc_label; section aura_product_details
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### Care

<a id="aura-2cb7c16bb91edc"></a>

**care_text** · `AURA-2CB7C16BB91EDC` · paragraph — **claim to verify**

```text
<p>Lavage en machine à 30°. Séchage à l'air libre. Pas de sèche-linge, pas d'adoucissant — la maille garde sa compression plus longtemps.</p>
```
Source: `templates/product.json` · `sections.aura_product_details.settings.care_text` · active template setting. Editability: **Theme Editor**.
Context: Setting care_text; section aura_product_details
Rendering: conditional. Accordion body; exposed when expanded.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-cd3aa27708eccd"></a>

**care_label** · `AURA-CD3AA27708ECCD` · label / microcopy

```text
Entretien
```
Source: `templates/product.json` · `sections.aura_product_details.settings.care_label` · active template setting. Editability: **Theme Editor**.
Context: Setting care_label; section aura_product_details
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### Delivery

<a id="aura-5feeebd4308a2d"></a>

**shipping_label** · `AURA-5FEEEBD4308A2D` · label / microcopy

```text
Livraison
```
Source: `templates/product.json` · `sections.aura_product_details.settings.shipping_label` · active template setting. Editability: **Theme Editor**.
Context: Setting shipping_label; section aura_product_details
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-28329BC350F1A2](#aura-28329bc350f1a2). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-bfbec33b97afe2"></a>

**shipping_text** · `AURA-BFBEC33B97AFE2` · paragraph — **claim to verify**

```text
<p>Expédié sous 24 h. Livraison offerte dès 60 € (France et Europe), en 5 à 7 jours ouvrés. Suivi par e-mail.</p>
```
Source: `templates/product.json` · `sections.aura_product_details.settings.shipping_text` · active template setting. Editability: **Theme Editor**.
Context: Setting shipping_text; section aura_product_details
Rendering: conditional. Accordion body; exposed when expanded.
Duplicates: none in this packet. Near duplicates: none in this packet.

#### Returns

<a id="aura-d5dcd3c6c84b75"></a>

**returns_text** · `AURA-D5DCD3C6C84B75` · paragraph — **claim to verify**

```text
<p>30 jours pour changer d'avis. Retours et échanges gratuits, même portées une garde.</p>
```
Source: `templates/product.json` · `sections.aura_product_details.settings.returns_text` · active template setting. Editability: **Theme Editor**.
Context: Setting returns_text; section aura_product_details
Rendering: conditional. Accordion body; exposed when expanded.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-fa24d58254dd1d"></a>

**returns_label** · `AURA-FA24D58254DD1D` · label / microcopy

```text
Retours & échanges
```
Source: `templates/product.json` · `sections.aura_product_details.settings.returns_label` · active template setting. Editability: **Theme Editor**.
Context: Setting returns_label; section aura_product_details
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 13: FAQ and contact reassurance

Section ID: `product--aura_faq` · Source section/component ID: `aura_faq` · Enabled: **yes**.
Page position: 13; saved group/body position: 13.
Role: Answer purchase questions and offer contact access.
Source: `templates/product.json`, `sections/aura-faq.liquid`. Active template setting: `sections.aura_faq`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-0372A5478F7D15](#aura-0372a5478f7d15) (Product prices, availability and discounts), [AURA-523441885C0B00](#aura-523441885c0b00) (Checkout, shipping and payments), [AURA-5D2B5979483D52](#aura-5d2b5979483d52) (Policies and legal pages).

#### Section introduction and controls

<a id="aura-4409bfcf643975"></a>

**eyebrow** · `AURA-4409BFCF643975` · eyebrow

```text
Vos questions, nos réponses
```
Source: `templates/product.json` · `sections.aura_faq.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-F6B84432C4C529](#aura-f6b84432c4c529). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-639b106cc0bdbd"></a>

**heading** · `AURA-639B106CC0BDBD` · headline

```text
Ce que les infirmières nous demandent.
```
Source: `templates/product.json` · `sections.aura_faq.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-C04C12A3841170](#aura-c04c12a3841170). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-298a37c8a5e6ee"></a>

**lead** · `AURA-298A37C8A5E6EE` · subheadline — **claim to verify**

```text
Ou écrivez-nous directement. Nous répondons en général en moins d'une heure, en français comme en anglais.
```
Source: `templates/product.json` · `sections.aura_faq.settings.lead` · active template setting. Editability: **Theme Editor**.
Context: Setting lead; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-D973D144CF3446](#aura-d973d144cf3446). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-a4fa6b50ed04cb"></a>

**contact_title** · `AURA-A4FA6B50ED04CB` · headline

```text
Encore une question ?
```
Source: `templates/product.json` · `sections.aura_faq.settings.contact_title` · active template setting. Editability: **Theme Editor**.
Context: Setting contact_title; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-F18E84392820C1](#aura-f18e84392820c1). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-d860db44ae3036"></a>

**contact_desc** · `AURA-D860DB44AE3036` · label / microcopy — **claim to verify**

```text
Notre équipe est en grande partie composée d'infirmières. On comprend.
```
Source: `templates/product.json` · `sections.aura_faq.settings.contact_desc` · active template setting. Editability: **Theme Editor**.
Context: Setting contact_desc; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-E49DE3AF3EF1B9](#aura-e49de3af3ef1b9). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-ddba2194be9ee4"></a>

**contact_email** · `AURA-DDBA2194BE9EE4` · label / microcopy

```text
contact@auralegs.com
```
Source: `templates/product.json` · `sections.aura_faq.settings.contact_email` · active template setting. Editability: **Theme Editor**.
Context: Setting contact_email; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-4A21B607C2696C](#aura-4a21b607c2696c). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### qa q1 — block 1

<a id="aura-63e4147ab8b14e"></a>

**question** · `AURA-63E4147AB8B14E` · FAQ question

```text
S'agit-il de chaussettes de compression de qualité médicale ?
```
Source: `templates/product.json` · `sections.aura_faq.blocks.q1.settings.question` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (qa, q1); Setting question; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-EE1EB20BB0AB55](#aura-ee1eb20bb0ab55). Near duplicates: none in this packet.
<a id="aura-a3b9e34be5d556"></a>

**answer** · `AURA-A3B9E34BE5D556` · FAQ answer — **claim to verify**

```text
<p>Aura délivre une compression graduée 18–25 mmHg vérifiée — le niveau reconnu pour soulager les jambes lourdes lors des longues stations debout. C'est une compression de confort pensée pour les gardes de 12 heures ; ce n'est pas un dispositif médical délivré sur ordonnance. En cas de trouble veineux diagnostiqué, parlez-en à votre médecin.</p>
```
Source: `templates/product.json` · `sections.aura_faq.blocks.q1.settings.answer` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (qa, q1); Setting answer; section aura_faq
Rendering: conditional. FAQ answer; visible when its accordion is open.
Duplicates: [AURA-0DDA45A935D099](#aura-0dda45a935d099). Near duplicates: none in this packet.

#### qa q2 — block 2

<a id="aura-2abac4771f641b"></a>

**question** · `AURA-2ABAC4771F641B` · FAQ question

```text
Comment trouver ma taille ?
```
Source: `templates/product.json` · `sections.aura_faq.blocks.q2.settings.question` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (qa, q2); Setting question; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-47520F114D2754](#aura-47520f114d2754). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-1ddf6b363d82dc"></a>

**answer** · `AURA-1DDF6B363D82DC` · FAQ answer — **claim to verify**

```text
<p>Prenez votre pointure habituelle et repérez votre taille dans notre <a href="#">guide des tailles</a>. Entre deux tailles, prenez la plus grande : la maille se détend, elle ne rétrécit pas.</p>
```
Source: `templates/product.json` · `sections.aura_faq.blocks.q2.settings.answer` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (qa, q2); Setting answer; section aura_faq
Rendering: conditional. FAQ answer; visible when its accordion is open.
Duplicates: [AURA-B2C30E726CCB75](#aura-b2c30e726ccb75). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### qa q3 — block 3

<a id="aura-4d286215f36057"></a>

**question** · `AURA-4D286215F36057` · FAQ question

```text
Combien de temps durent-elles ?
```
Source: `templates/product.json` · `sections.aura_faq.blocks.q3.settings.question` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (qa, q3); Setting question; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-CC45A1D11CCAE1](#aura-cc45a1d11ccae1). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-9924b49f12f3fd"></a>

**answer** · `AURA-9924B49F12F3FD` · FAQ answer — **claim to verify**

```text
<p>La compression tient au-delà de 100 cycles de lavage à 60°. Tricot 2 fils — léger comme une seconde peau, résistant au lavage quotidien. Si votre paire perd sa pression sous 12 mois, nous la remplaçons gratuitement.</p>
```
Source: `templates/product.json` · `sections.aura_faq.blocks.q3.settings.answer` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (qa, q3); Setting answer; section aura_faq
Rendering: conditional. FAQ answer; visible when its accordion is open.
Duplicates: [AURA-B11404E2208062](#aura-b11404e2208062). Near duplicates: none in this packet.

#### qa q4 — block 4

<a id="aura-563be4b458225e"></a>

**question** · `AURA-563BE4B458225E` · FAQ question

```text
Puis-je les laver en machine ?
```
Source: `templates/product.json` · `sections.aura_faq.blocks.q4.settings.question` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (qa, q4); Setting question; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-77549290B6A0BD](#aura-77549290b6a0bd). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-5fd2db60ff08d3"></a>

**answer** · `AURA-5FD2DB60FF08D3` · FAQ answer — **claim to verify**

```text
<p>Oui. Lavage en machine à 60°, séchage tambour doux. Pas d'adoucissant. Sur l'envers c'est plus délicat, mais pas obligatoire.</p>
```
Source: `templates/product.json` · `sections.aura_faq.blocks.q4.settings.answer` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (qa, q4); Setting answer; section aura_faq
Rendering: conditional. FAQ answer; visible when its accordion is open.
Duplicates: [AURA-8EF76BA1321C02](#aura-8ef76ba1321c02). Near duplicates: none in this packet.

#### qa q5 — block 5

<a id="aura-8f05e88a8b0bdd"></a>

**question** · `AURA-8F05E88A8B0BDD` · FAQ question

```text
Et si elles ne me conviennent pas ?
```
Source: `templates/product.json` · `sections.aura_faq.blocks.q5.settings.question` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (qa, q5); Setting question; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-E117E378DEC5A7](#aura-e117e378dec5a7). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-b599b4418e38da"></a>

**answer** · `AURA-B599B4418E38DA` · FAQ answer — **claim to verify**

```text
<p>Portez-les un mois complet de gardes. Si ce ne sont pas les chaussettes les plus confortables que vous possédez, renvoyez-les — nous prenons en charge le retour et vous remboursons intégralement. Sans question, sans frais.</p>
```
Source: `templates/product.json` · `sections.aura_faq.blocks.q5.settings.answer` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (qa, q5); Setting answer; section aura_faq
Rendering: conditional. FAQ answer; visible when its accordion is open.
Duplicates: [AURA-9032A867BF2D77](#aura-9032a867bf2d77). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### qa q6 — block 6

<a id="aura-b85fae246e38bb"></a>

**question** · `AURA-B85FAE246E38BB` · FAQ question

```text
Proposez-vous des commandes pour équipes et hôpitaux ?
```
Source: `templates/product.json` · `sections.aura_faq.blocks.q6.settings.question` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (qa, q6); Setting question; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-A480EE926A5ED0](#aura-a480ee926a5ed0). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-f45528e6b120b6"></a>

**answer** · `AURA-F45528E6B120B6` · FAQ answer — **claim to verify**

```text
<p>Oui — dès 6 paires : tarif équipe, monogrammes brodés, essayages sur site (Île-de-France & Rhône-Alpes) et facturation. <a href="#">Écrivez à notre pôle équipes →</a></p>
```
Source: `templates/product.json` · `sections.aura_faq.blocks.q6.settings.answer` · active template setting. Editability: **Theme Editor**.
Context: Block 6 (qa, q6); Setting answer; section aura_faq
Rendering: conditional. FAQ answer; visible when its accordion is open.
Duplicates: [AURA-865D3ED1AE16DB](#aura-865d3ed1ae16db). Near duplicates: none in this packet.

#### qa q7 — block 7

<a id="aura-b2d6d58b0c7225"></a>

**question** · `AURA-B2D6D58B0C7225` · FAQ question

```text
Quand verrai-je des résultats ?
```
Source: `templates/product.json` · `sections.aura_faq.blocks.q7.settings.question` · active template setting. Editability: **Theme Editor**.
Context: Block 7 (qa, q7); Setting question; section aura_faq
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-E68F64A9D98BE0](#aura-e68f64a9d98be0). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-75030545d5509e"></a>

**answer** · `AURA-75030545D5509E` · FAQ answer — **claim to verify**

```text
<p>La plupart des clientes constatent moins de gonflement du mollet et de fatigue en fin de garde dès la première garde de 12 heures. Les bénéfices à long terme (meilleur retour veineux, moins de varicosités) s'installent au fil des semaines.</p>
```
Source: `templates/product.json` · `sections.aura_faq.blocks.q7.settings.answer` · active template setting. Editability: **Theme Editor**.
Context: Block 7 (qa, q7); Setting answer; section aura_faq
Rendering: conditional. FAQ answer; visible when its accordion is open.
Duplicates: [AURA-5AB9F7EA643831](#aura-5ab9f7ea643831). Near duplicates: none in this packet.

### 14: Final pack offer

Section ID: `product--aura_pack_cta` · Source section/component ID: `aura_pack_cta` · Enabled: **yes**.
Page position: 14; saved group/body position: 15.
Role: Summarize the pack offer and purchase action.
Source: `templates/product.json`, `sections/aura-pack-cta.liquid`. Active template setting: `sections.aura_pack_cta`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-0372A5478F7D15](#aura-0372a5478f7d15) (Product prices, availability and discounts), [AURA-523441885C0B00](#aura-523441885c0b00) (Checkout, shipping and payments), [AURA-5D2B5979483D52](#aura-5d2b5979483d52) (Policies and legal pages).

#### Section introduction and controls

<a id="aura-852b6f9f9adad5"></a>

**eyebrow** · `AURA-852B6F9F9ADAD5` · eyebrow

```text
L'offre complète
```
Source: `templates/product.json` · `sections.aura_pack_cta.settings.eyebrow` · active template setting. Editability: **Theme Editor**.
Context: Setting eyebrow; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-312C3E82F00B86](#aura-312c3e82f00b86). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-5ad319b41ec0cf"></a>

**heading** · `AURA-5AD319B41EC0CF` · headline

```text
Une paire par <span class="ser">jour de garde.</span>
```
Source: `templates/product.json` · `sections.aura_pack_cta.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-798DA719A755BD](#aura-798da719a755bd). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-fa334d65ee5abe"></a>

**lead** · `AURA-FA334D65EE5ABE` · subheadline — **claim to verify**

```text
Six paires d'Aura, une pour chaque jour de garde. Composez vos coloris, recevez la garde-robe complète — l'offre que nos clientes auraient voulu prendre dès le premier jour.
```
Source: `templates/product.json` · `sections.aura_pack_cta.settings.lead` · active template setting. Editability: **Theme Editor**.
Context: Setting lead; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-4473BA3BDF5B9E](#aura-4473ba3bdf5b9e). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### item i1 — block 1

<a id="aura-dcba238403596a"></a>

**text** · `AURA-DCBA238403596A` · paragraph — **claim to verify**

```text
6 paires d'Aura, vos coloris au choix
```
Source: `templates/product.json` · `sections.aura_pack_cta.blocks.i1.settings.text` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (item, i1); Setting text; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-E9AFDAE2FC8CBF](#aura-e9afdae2fc8cbf). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-02d16e18852914"></a>

**meta** · `AURA-02D16E18852914` · label / microcopy — **claim to verify**

```text
valeur 204 €
```
Source: `templates/product.json` · `sections.aura_pack_cta.blocks.i1.settings.meta` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (item, i1); Setting meta; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-1B29A2BF382CBA](#aura-1b29a2bf382cba). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### item i2 — block 2

<a id="aura-41bcba31dcdadc"></a>

**text** · `AURA-41BCBA31DCDADC` · paragraph — **claim to verify**

```text
Cadeau surprise inclus
```
Source: `templates/product.json` · `sections.aura_pack_cta.blocks.i2.settings.text` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (item, i2); Setting text; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-238E36EE0A3E89](#aura-238e36ee0a3e89). Near duplicates: none in this packet.
<a id="aura-aa3795de8f478c"></a>

**meta** · `AURA-AA3795DE8F478C` · label / microcopy — **claim to verify**

```text
Offert
```
Source: `templates/product.json` · `sections.aura_pack_cta.blocks.i2.settings.meta` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (item, i2); Setting meta; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-B66C201990D7E5](#aura-b66c201990d7e5). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### item i3 — block 3

<a id="aura-6c2316f1df7ef0"></a>

**text** · `AURA-6C2316F1DF7EF0` · paragraph — **claim to verify**

```text
Livraison offerte — 5 à 7 jours ouvrés
```
Source: `templates/product.json` · `sections.aura_pack_cta.blocks.i3.settings.text` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (item, i3); Setting text; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-A1A0C5BE4A737A](#aura-a1a0c5be4a737a). Near duplicates: none in this packet.
<a id="aura-644d9a6fa8d6a5"></a>

**meta** · `AURA-644D9A6FA8D6A5` · label / microcopy — **claim to verify**

```text
Offerte
```
Source: `templates/product.json` · `sections.aura_pack_cta.blocks.i3.settings.meta` · active template setting. Editability: **Theme Editor**.
Context: Block 3 (item, i3); Setting meta; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-0A4935913A9F83](#aura-0a4935913a9f83). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### item i4 — block 4

<a id="aura-2846b6019aab0b"></a>

**text** · `AURA-2846B6019AAB0B` · paragraph — **claim to verify**

```text
Garantie de remplacement 12 mois
```
Source: `templates/product.json` · `sections.aura_pack_cta.blocks.i4.settings.text` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (item, i4); Setting text; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-99F861FA204A92](#aura-99f861fa204a92). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-9fede33f667421"></a>

**meta** · `AURA-9FEDE33F667421` · label / microcopy — **claim to verify**

```text
Inclus
```
Source: `templates/product.json` · `sections.aura_pack_cta.blocks.i4.settings.meta` · active template setting. Editability: **Theme Editor**.
Context: Block 4 (item, i4); Setting meta; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-BB9AE51883C695](#aura-bb9ae51883c695). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

#### item i5 — block 5

<a id="aura-05418a1f5ec0c0"></a>

**text** · `AURA-05418A1F5EC0C0` · paragraph — **claim to verify**

```text
−10 % pour vous et une collègue, prochaine commande
```
Source: `templates/product.json` · `sections.aura_pack_cta.blocks.i5.settings.text` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (item, i5); Setting text; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-4005C7CC5C4CBC](#aura-4005c7cc5c4cbc). Near duplicates: none in this packet.
<a id="aura-54fc43e2c8b50e"></a>

**meta** · `AURA-54FC43E2C8B50E` · label / microcopy — **claim to verify**

```text
Les deux
```
Source: `templates/product.json` · `sections.aura_pack_cta.blocks.i5.settings.meta` · active template setting. Editability: **Theme Editor**.
Context: Block 5 (item, i5); Setting meta; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-E52CC56A8446AD](#aura-e52cc56a8446ad). Near duplicates: none in this packet.

#### Section closing copy and controls

<a id="aura-54bbd25c011f25"></a>

**flag** · `AURA-54BBD25C011F25` · badge — **claim to verify**

```text
Économisez 102 € · meilleure offre
```
Source: `templates/product.json` · `sections.aura_pack_cta.settings.flag` · active template setting. Editability: **Theme Editor**.
Context: Setting flag; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-14AEAE22DA51CC](#aura-14aeae22da51cc). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-64d9e2d036deb3"></a>

**card_name** · `AURA-64D9E2D036DEB3` · label / microcopy

```text
Le pack 6 paires
```
Source: `templates/product.json` · `sections.aura_pack_cta.settings.card_name` · active template setting. Editability: **Theme Editor**.
Context: Setting card_name; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-D91671073F20B7](#aura-d91671073f20b7). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-fa4c7ccb2af531"></a>

**strike** · `AURA-FA4C7CCB2AF531` · offer / price — **claim to verify**

```text
204 €
```
Source: `templates/product.json` · `sections.aura_pack_cta.settings.strike` · active template setting. Editability: **Theme Editor**.
Context: Setting strike; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-434F698CC28AAD](#aura-434f698cc28aad). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-796558cd899f4d"></a>

**card_desc** · `AURA-796558CD899F4D` · label / microcopy — **claim to verify**

```text
Six paires, vos coloris au choix. La garde-robe Aura complète, en une commande.
```
Source: `templates/product.json` · `sections.aura_pack_cta.settings.card_desc` · active template setting. Editability: **Theme Editor**.
Context: Setting card_desc; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-385AE0CC356350](#aura-385ae0cc356350). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-af95f139c5d5d2"></a>

**label / microcopy** · `AURA-AF95F139C5D5D2` · label / microcopy

```text
Bordeaux ×2
```
Source: `sections/aura-pack-cta.liquid` · `line:36:text:b9ea369` · hardcoded Liquid. Editability: **code only**.
Context: div.includes > div.inc-item > div.label
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-2E8D8DF43DC122](#aura-2e8d8df43dc122). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-df68cb52a4aaa1"></a>

**label / microcopy** · `AURA-DF68CB52A4AAA1` · label / microcopy

```text
Noir ×2
```
Source: `sections/aura-pack-cta.liquid` · `line:37:text:78bb2c3` · hardcoded Liquid. Editability: **code only**.
Context: div.includes > div.inc-item > div.label
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-0D251A79070CC7](#aura-0d251a79070cc7). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-5634a07e04adaa"></a>

**label / microcopy** · `AURA-5634A07E04ADAA` · label / microcopy

```text
Gris ×2
```
Source: `sections/aura-pack-cta.liquid` · `line:38:text:e0fd500` · hardcoded Liquid. Editability: **code only**.
Context: div.includes > div.inc-item > div.label
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: [AURA-2105CACCCC8B3C](#aura-2105cacccc8b3c). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-3da57886da824b"></a>

**price** · `AURA-3DA57886DA824B` · offer / price — **claim to verify**

```text
102
```
Source: `templates/product.json` · `sections.aura_pack_cta.settings.price` · active template setting. Editability: **Theme Editor**.
Context: Setting price; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-7556413EE32C11](#aura-7556413ee32c11). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-a0b7e156e18a3b"></a>

**per** · `AURA-A0B7E156E18A3B` · offer / price — **claim to verify**

```text
17 € / paire · TTC
```
Source: `templates/product.json` · `sections.aura_pack_cta.settings.per` · active template setting. Editability: **Theme Editor**.
Context: Setting per; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-A5BA0800651BDE](#aura-a5ba0800651bde). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-d375bf5ea67033"></a>

**save_line** · `AURA-D375BF5EA67033` · offer / price — **claim to verify**

```text
Vous économisez 102 € — livraison et cadeau surprise inclus
```
Source: `templates/product.json` · `sections.aura_pack_cta.settings.save_line` · active template setting. Editability: **Theme Editor**.
Context: Setting save_line; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-2F440A2D3A0131](#aura-2f440a2d3a0131). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-e1aca0fe4dbfd7"></a>

**button_label** · `AURA-E1ACA0FE4DBFD7` · CTA

```text
Composer mon pack 6 paires
```
Source: `templates/product.json` · `sections.aura_pack_cta.settings.button_label` · active template setting. Editability: **Theme Editor**.
Context: Setting button_label; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-1593A387E5F9F6](#aura-1593a387e5f9f6). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
<a id="aura-2a234e7f1db1bc"></a>

**ship** · `AURA-2A234E7F1DB1BC` · label / microcopy — **claim to verify**

```text
Livraison express offerte · expédié sous 24 h
```
Source: `templates/product.json` · `sections.aura_pack_cta.settings.ship` · active template setting. Editability: **Theme Editor**.
Context: Setting ship; section aura_pack_cta
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-ED021D135E9709](#aura-ed021d135e9709). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 15: Newsletter

Section ID: `shared--aura_newsletter` · Source section/component ID: `aura_newsletter` · Enabled: **yes**.
Page position: 15; saved group/body position: 1.
Role: Offer newsletter signup and related privacy microcopy.
Source: `sections/footer-group.json`, `sections/aura-newsletter.liquid`. Active template setting: `sections.aura_newsletter`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-F599CDF2AC1E9B](#aura-f599cdf2ac1e9b) (Contact and newsletter service responses), [AURA-5D2B5979483D52](#aura-5d2b5979483d52) (Policies and legal pages).

#### Section introduction and controls


**heading** · `AURA-91895CC3EABBA5` · headline

```text
La <span class="ser">lettre de garde.</span>
```
Source: `sections/footer-group.json` · `sections.aura_newsletter.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Setting heading; section aura_newsletter
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

**body** · `AURA-59B4928D12E0E5` · paragraph — **claim to verify**

```text
Une note mensuelle pour les infirmières : récupération, science du mollet, conseils d'ajustement de notre équipe. Jamais de spam, promis.
```
Source: `sections/footer-group.json` · `sections.aura_newsletter.settings.body` · active template setting. Editability: **Theme Editor**.
Context: Setting body; section aura_newsletter
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

**placeholder** · `AURA-92281FD9A149DA` · label / microcopy

```text
vous@hôpital.fr
```
Source: `sections/footer-group.json` · `sections.aura_newsletter.settings.placeholder` · active template setting. Editability: **Theme Editor**.
Context: Setting placeholder; section aura_newsletter
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

**button_label** · `AURA-E9C70FC47F1909` · CTA

```text
S'inscrire
```
Source: `sections/footer-group.json` · `sections.aura_newsletter.settings.button_label` · active template setting. Editability: **Theme Editor**.
Context: Setting button_label; section aura_newsletter
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

**legal** · `AURA-907478A8370E6E` · legal microcopy — **claim to verify**

```text
En vous inscrivant, vous acceptez notre politique de confidentialité. Désinscription en un clic.
```
Source: `sections/footer-group.json` · `sections.aura_newsletter.settings.legal` · active template setting. Editability: **Theme Editor**.
Context: Setting legal; section aura_newsletter
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### 16: Footer and legal navigation

Section ID: `shared--aura_footer` · Source section/component ID: `aura_footer` · Enabled: **yes**.
Page position: 16; saved group/body position: 2.
Role: Provide supporting navigation, legal destinations and payment labels.
Source: `sections/footer-group.json`, `sections/aura-footer.liquid`. Active template setting: `sections.aura_footer`.
Nearby context: Related copy is grouped by saved block; headings, supporting text, actions and attribution are kept in their section.
External content required: [AURA-5D2B5979483D52](#aura-5d2b5979483d52) (Policies and legal pages), [AURA-523441885C0B00](#aura-523441885c0b00) (Checkout, shipping and payments).

#### Section introduction and controls


**logo_text** · `AURA-B2F6EBBCC7FE8C` · paragraph

```text
Aura
```
Source: `sections/footer-group.json` · `sections.aura_footer.settings.logo_text` · active template setting. Editability: **Theme Editor**.
Context: Setting logo_text; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-CC4E1CA10AA7A5](#aura-cc4e1ca10aa7a5), [AURA-0C632B506D193A](#aura-0c632b506d193a), [AURA-08A98839B76DBC](#aura-08a98839b76dbc). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

**tagline** · `AURA-F001A162C9C939` · badge

```text
Chaussettes de compression pour celles et ceux qui tiennent la France debout.
```
Source: `sections/footer-group.json` · `sections.aura_footer.settings.tagline` · active template setting. Editability: **Theme Editor**.
Context: Setting tagline; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.

**accessibility label** · `AURA-D912DB58C37177` · accessibility label

```text
Instagram
```
Source: `sections/aura-footer.liquid` · `line:19:aria-label:5721bbe` · hardcoded Liquid. Editability: **code only**.
Context: div.footer-brand > div.socials > a
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.

**accessibility label** · `AURA-0E5B117066340A` · accessibility label

```text
TikTok
```
Source: `sections/aura-footer.liquid` · `line:20:aria-label:fc49f15` · hardcoded Liquid. Editability: **code only**.
Context: div.footer-brand > div.socials > a
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.

**accessibility label** · `AURA-500985143B822C` · accessibility label

```text
Facebook
```
Source: `sections/aura-footer.liquid` · `line:21:aria-label:82da67b` · hardcoded Liquid. Editability: **code only**.
Context: div.footer-brand > div.socials > a
Rendering: conditional. Literal/template fragment; surrounding Liquid branches and interaction state apply.
Duplicates: none in this packet. Near duplicates: none in this packet.

#### column c2 — block 1


**heading** · `AURA-0486D1870A0071` · headline

```text
Découvrir
```
Source: `sections/footer-group.json` · `sections.aura_footer.blocks.c2.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (column, c2); Setting heading; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.

**links** · `AURA-30B317C59F3E0B` · label / microcopy

```text
Notre histoire
```
Source: `sections/footer-group.json` · `sections.aura_footer.blocks.c2.settings.links.line[1]` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (column, c2); Setting links; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-68ACE76111335B](#aura-68ace76111335b). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
Destination: `/pages/notre-histoire`.

**links** · `AURA-9379E2489F28BE` · label / microcopy

```text
Guide des tailles
```
Source: `sections/footer-group.json` · `sections.aura_footer.blocks.c2.settings.links.line[2]` · active template setting. Editability: **Theme Editor**.
Context: Block 1 (column, c2); Setting links; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-AF9455BDC5252D](#aura-af9455bdc5252d), [AURA-A6214F665A767A](#aura-a6214f665a767a). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
Destination: `/pages/guide-des-tailles`.

#### column c3 — block 2


**heading** · `AURA-590DED50C8672E` · headline

```text
Aide
```
Source: `sections/footer-group.json` · `sections.aura_footer.blocks.c3.settings.heading` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (column, c3); Setting heading; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

**links** · `AURA-88EB2AD33E06EC` · label / microcopy

```text
Livraison & retours
```
Source: `sections/footer-group.json` · `sections.aura_footer.blocks.c3.settings.links.line[1]` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (column, c3); Setting links; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-5EE3CC216BEE74](#aura-5ee3cc216bee74). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
Destination: `/pages/livraison-retours`.

**links** · `AURA-A5D72A8E9C6587` · label / microcopy

```text
Contact
```
Source: `sections/footer-group.json` · `sections.aura_footer.blocks.c3.settings.links.line[2]` · active template setting. Editability: **Theme Editor**.
Context: Block 2 (column, c3); Setting links; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: [AURA-FC7F180EEA66BB](#aura-fc7f180eea66bb). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.
Destination: `/pages/contact`.

#### Legal navigation


**legal_line** · `AURA-B2ED3845B8E085` · legal microcopy — **claim to verify**

```text
© 2026 Aura <a href="/policies/legal-notice">Mentions légales</a><a href="/policies/terms-of-service">CGV</a><a href="/policies/privacy-policy">Confidentialité</a><a href="/policies/refund-policy">Remboursement</a>
```
Source: `sections/footer-group.json` · `sections.aura_footer.settings.legal_line` · active template setting. Editability: **Theme Editor**.
Context: Setting legal_line; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.

#### Payment labels


**pay_badges** · `AURA-1BFE2B46C44A2F` · badge

```text
VISA
```
Source: `sections/footer-group.json` · `sections.aura_footer.settings.pay_badges.item[1]` · active template setting. Editability: **Theme Editor**.
Context: Setting pay_badges; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.

**pay_badges** · `AURA-2BCA135C03BA15` · badge

```text
PayPal
```
Source: `sections/footer-group.json` · `sections.aura_footer.settings.pay_badges.item[4]` · active template setting. Editability: **Theme Editor**.
Context: Setting pay_badges; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.

**pay_badges** · `AURA-5416CAE95C51D6` · badge

```text
Apple Pay
```
Source: `sections/footer-group.json` · `sections.aura_footer.settings.pay_badges.item[5]` · active template setting. Editability: **Theme Editor**.
Context: Setting pay_badges; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.

**pay_badges** · `AURA-68BA8DEC7D1D44` · badge

```text
CB
```
Source: `sections/footer-group.json` · `sections.aura_footer.settings.pay_badges.item[3]` · active template setting. Editability: **Theme Editor**.
Context: Setting pay_badges; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.

**pay_badges** · `AURA-7BF91777C8EB2F` · badge

```text
MC
```
Source: `sections/footer-group.json` · `sections.aura_footer.settings.pay_badges.item[2]` · active template setting. Editability: **Theme Editor**.
Context: Setting pay_badges; section aura_footer
Rendering: expected from repository. Repository-only extraction; live Shopify rendering was not inspected.
Duplicates: none in this packet. Near duplicates: none in this packet.

### Purchase component: Sticky purchase bar

Section ID: `shared--sticky-purchase` · Source section/component ID: `sticky-atc` · Enabled: **yes**.
Page position: conditional overlay, outside page flow; saved group/body position: not applicable.
Role: Keep the current purchase action accessible after the buy box scrolls out of view.
Source: `snippets/aura-globals.liquid`, `sections/aura-featured-product.liquid`. Active template setting: none — code/runtime component.
Nearby context: Overlay/scroll-triggered UI; not an additional section in the saved page order.
External content required: [AURA-89AD77D87570A3](#aura-89ad77d87570a3) (Product options and variants), [AURA-0372A5478F7D15](#aura-0372a5478f7d15) (Product prices, availability and discounts).
Runtime amount formatting shared with the buy box: [AURA-E40B93A7F5B662](#aura-e40b93a7f5b662). Current colour and amounts require the linked Admin placeholders.

#### Sticky purchase action and selected state

<a id="aura-6e59a1eddde745"></a>

**label / microcopy** · `AURA-6E59A1EDDDE745` · label / microcopy

```text
Aura —
```
Source: `snippets/aura-globals.liquid` · `line:14:text:7bfc500` · hardcoded Liquid. Editability: **code only**.
Context: div.sticky-atc > div.info > div.n
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.
<a id="aura-1cccdfd552e9bc"></a>

**CTA** · `AURA-1CCCDFD552E9BC` · CTA

```text
Ajouter au panier
```
Source: `snippets/aura-globals.liquid` · `line:18:text:b6799d9` · hardcoded Liquid. Editability: **code only**.
Context: div.sticky-atc > button.btn.btn-coral
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: [AURA-43031ACDACE7B3](#aura-43031acdace7b3). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

### Purchase component: Cart drawer and purchase feedback

Section ID: `shared--cart-drawer` · Source section/component ID: `drawer` · Enabled: **yes**.
Page position: conditional overlay, outside page flow; saved group/body position: not applicable.
Role: Review the basket, adjust quantities and proceed to checkout.
Source: `snippets/aura-globals.liquid`, `assets/aura-cart.js`. Active template setting: none — code/runtime component.
Nearby context: Overlay/scroll-triggered UI; not an additional section in the saved page order.
External content required: [AURA-47B5500F21684B](#aura-47b5500f21684b) (Product titles), [AURA-89AD77D87570A3](#aura-89ad77d87570a3) (Product options and variants), [AURA-0372A5478F7D15](#aura-0372a5478f7d15) (Product prices, availability and discounts), [AURA-523441885C0B00](#aura-523441885c0b00) (Checkout, shipping and payments).

#### Drawer heading, contents and quantity controls


**accessibility label** · `AURA-8809A9F5F93164` · accessibility label

```text
Panier
```
Source: `snippets/aura-globals.liquid` · `line:22:aria-label:cb46804` · hardcoded Liquid. Editability: **code only**.
Context: aside.drawer
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: [AURA-62555A65B82BC4](#aura-62555a65b82bc4). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

**label / microcopy** · `AURA-B47F0A428867F7` · label / microcopy

```text
Votre panier
```
Source: `snippets/aura-globals.liquid` · `line:24:text:0a9a754` · hardcoded Liquid. Editability: **code only**.
Context: aside.drawer > div.drawer-head > div.h
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

**accessibility label** · `AURA-4819D0B95E8CED` · accessibility label

```text
Fermer
```
Source: `snippets/aura-globals.liquid` · `line:25:aria-label:5ab4ec6` · hardcoded Liquid. Editability: **code only**.
Context: aside.drawer > div.drawer-head > button.drawer-close
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

**label / microcopy** · `AURA-15D582B681A7B7` · label / microcopy

```text
Votre panier est vide.
```
Source: `snippets/aura-globals.liquid` · `line:42:text:8abc02b` · hardcoded Liquid. Editability: **code only**.
Context: aside.drawer > div.drawer-items > p
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: [AURA-0D09BADB4E47C0](#aura-0d09badb4e47c0). Near duplicates: none in this packet.

**JavaScript microcopy** · `AURA-2E0A403392D952` · JavaScript microcopy

```text
 article
```
Source: `assets/aura-cart.js` · `line:53:literal: article` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Used when cart.item_count === 1; leading space is retained.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
if (drawerCount) drawerCount.textContent = cart.item_count + (cart.item_count === 1 ? ' article' : ' articles');
```

**dynamic microcopy** · `AURA-BA333775D9F094` · dynamic microcopy

```text
[DYNAMIC COPY — see the exact expression below; no runtime value invented]
```
Source: `assets/aura-cart.js` · `drawerCount.textContent` · JavaScript-generated. Editability: **code only**.
Context: Exact assembled sentence depends on runtime inputs.
Rendering: conditional. AJAX cart item count, singular/plural.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
cart.item_count + (cart.item_count === 1 ? ' article' : ' articles')
```

**JavaScript microcopy** · `AURA-F089664670CF38` · JavaScript microcopy

```text
 articles
```
Source: `assets/aura-cart.js` · `line:53:literal: articles` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Used for all other item counts; leading space is retained.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
if (drawerCount) drawerCount.textContent = cart.item_count + (cart.item_count === 1 ? ' article' : ' articles');
```

**JavaScript microcopy** · `AURA-0D09BADB4E47C0` · JavaScript microcopy

```text
Votre panier est vide.
```
Source: `assets/aura-cart.js` · `line:57:literal:Votre panier est vide.` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Shown when cart.items is empty.
Duplicates: [AURA-15D582B681A7B7](#aura-15d582b681a7b7). Near duplicates: none in this packet.

Exact runtime expression:
```text
itemsEl.innerHTML = '<p style="padding:24px 0;color:var(--muted);font-size:14px;">Votre panier est vide.</p>';
```

**JavaScript microcopy** · `AURA-4FA62E045FCAB4` · JavaScript microcopy

```text
Moins
```
Source: `assets/aura-cart.js` · `line:67:literal:Moins` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Accessible label of the decrement button generated in the cart.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
'<div class="qty"><button type="button" data-dec aria-label="Moins">−</button><span>' + it.quantity + '</span><button type="button" data-inc aria-label="Plus">+</button></div></div>' +
```

**JavaScript microcopy** · `AURA-B55F9D60F64689` · JavaScript microcopy

```text
Plus
```
Source: `assets/aura-cart.js` · `line:67:literal:Plus` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Accessible label of the increment button generated in the cart.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
'<div class="qty"><button type="button" data-dec aria-label="Moins">−</button><span>' + it.quantity + '</span><button type="button" data-inc aria-label="Plus">+</button></div></div>' +
```

#### Totals, delivery, savings and checkout


**dynamic microcopy** · `AURA-6FBB11C8DA11FE` · dynamic microcopy

```text
[DYNAMIC COPY — see the exact expression below; no runtime value invented]
```
Source: `assets/aura-cart.js` · `return (c / 100)` · JavaScript-generated. Editability: **code only**.
Context: Exact assembled sentence depends on runtime inputs.
Rendering: conditional. Live Shopify amounts; no amount invented.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
(c / 100).toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + ' €'
```

**label / microcopy** · `AURA-83AFB5D9EBE49D` · label / microcopy

```text
Sous-total
```
Source: `snippets/aura-globals.liquid` · `line:47:text:306e7e8` · hardcoded Liquid. Editability: **code only**.
Context: div.drawer-foot > div.row > span
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

**label / microcopy** · `AURA-A35DAECF963ACB` · label / microcopy

```text
Réduction
```
Source: `snippets/aura-globals.liquid` · `line:48:text:0126ff4` · hardcoded Liquid. Editability: **code only**.
Context: div.drawer-foot > div.row.drawer-discount-row > span
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

**label / microcopy** · `AURA-28329BC350F1A2` · label / microcopy

```text
Livraison
```
Source: `snippets/aura-globals.liquid` · `line:49:text:5755a8f` · hardcoded Liquid. Editability: **code only**.
Context: div.drawer-foot > div.row > span
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: [AURA-5FEEEBD4308A2D](#aura-5feeebd4308a2d). Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

**label / microcopy** · `AURA-63128B8061975B` · label / microcopy

```text
Calculée au paiement
```
Source: `snippets/aura-globals.liquid` · `line:49:text:39cd6a2` · hardcoded Liquid. Editability: **code only**.
Context: div.drawer-foot > div.row > span
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.

**label / microcopy** · `AURA-A38EA58EFE7A86` · label / microcopy

```text
Total
```
Source: `snippets/aura-globals.liquid` · `line:50:text:b25928c` · hardcoded Liquid. Editability: **code only**.
Context: div.drawer-foot > div.row.total > span
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.
Additional master-only duplication IDs are retained in the JSON; their out-of-scope copy is not reproduced here.

**CTA** · `AURA-410E594F162637` · CTA

```text
Paiement
```
Source: `snippets/aura-globals.liquid` · `line:51:text:0564e9b` · hardcoded Liquid. Editability: **code only**.
Context: aside.drawer > div.drawer-foot > button.btn.btn-coral
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.

**label / microcopy** · `AURA-8DE007FFE836CA` · label / microcopy — **claim to verify**

```text
Paiement sécurisé · CB · Apple Pay · PayPal · Klarna
```
Source: `snippets/aura-globals.liquid` · `line:52:text:2eefa87` · hardcoded Liquid. Editability: **code only**.
Context: aside.drawer > div.drawer-foot > div.note
Rendering: conditional. Drawer content when cart is opened; sticky bar only on mobile with a product buy box after scrolling, before footer.
Duplicates: none in this packet. Near duplicates: none in this packet.

**dynamic microcopy** · `AURA-FF897A8D955897` · dynamic microcopy

```text
[DYNAMIC COPY — see the exact expression below; no runtime value invented]
```
Source: `assets/aura-cart.js` · `discountEl.textContent = '−'` · JavaScript-generated. Editability: **code only**.
Context: Exact assembled sentence depends on runtime inputs.
Rendering: conditional. Shopify cart.total_discount; discount row hidden when amount is zero.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
'−' + money(saved)
```

#### Add-to-cart confirmation


**JavaScript microcopy** · `AURA-BBD9505F53B750` · JavaScript microcopy

```text
Ajouté au panier
```
Source: `assets/aura-cart.js` · `line:46:literal:Ajouté au panier` · JavaScript-generated. Editability: **code only**.
Context: Runtime interface string; dynamic inputs are retained in the source expression.
Rendering: conditional. Toast shown after the add/refresh promise chain completes.
Duplicates: none in this packet. Near duplicates: none in this packet.

Exact runtime expression:
```text
function added() { toast('Ajouté au panier'); }
```

### SEO title and description

Metadata block: `product--seo` · Enabled: yes · Source: `layout/theme.liquid` · Editability: code for literal fallbacks; Shopify Admin for current SEO.
External content required: [AURA-D39F9274D204B3](#aura-d39f9274d204b3), [AURA-47B5500F21684B](#aura-47b5500f21684b), [AURA-21906E00E1F7CB](#aura-21906e00e1f7cb).
The master contains no literal product-specific title/description fallback sentence. Current Admin values are unavailable and are not invented.
Existing title/description transformation IDs in the master: `AURA-28D85749D9DD27`, `AURA-559B8C9C18371F`, `AURA-68AF0F119A61C6`, `AURA-9083C378B812CD`, `AURA-DED982651F87E2`. These are provenance references, not proposed or additional standalone copy.

## Required external content

These are the existing master placeholders. No product names, descriptions, policies, variant labels, prices or other unavailable Admin text have been supplied.

<a id="aura-47b5500f21684b"></a>
### Product titles — AURA-47B5500F21684B

**[UNAVAILABLE SHOPIFY ADMIN / EXTERNAL CONTENT]**
Source binding: `sections/aura-featured-product.liquid` · `product.title / p.title`. Editability: **Shopify Admin**.
H1, gallery alt, cart item names and SEO. Existing terminology replace filters apply.
Unavailable in repository; access to Shopify was not attempted.
Required by: `product--aura_featured_product`, `shared--cart-drawer`, `product--seo`.

<a id="aura-21906e00e1f7cb"></a>
### Product descriptions — AURA-21906E00E1F7CB

**[UNAVAILABLE SHOPIFY ADMIN / EXTERNAL CONTENT]**
Source binding: `sections/aura-product-details.liquid` · `product.description`. Editability: **Shopify Admin**.
Nonblank Admin description overrides the saved section description; stripped HTML.
Unavailable in repository; access to Shopify was not attempted.
Required by: `product--aura_product_details`, `product--seo`.

<a id="aura-89ad77d87570a3"></a>
### Product options and variants — AURA-89AD77D87570A3

**[UNAVAILABLE SHOPIFY ADMIN / EXTERNAL CONTENT]**
Source binding: `sections/aura-featured-product.liquid` · `product.options_with_values / variant.title`. Editability: **Shopify Admin**.
Actual colour/size labels and cart variant names. Local fallback blocks are not authoritative Admin names.
Unavailable in repository; access to Shopify was not attempted.
Required by: `product--aura_featured_product`, `shared--sticky-purchase`, `shared--cart-drawer`.

<a id="aura-0372a5478f7d15"></a>
### Product prices, availability and discounts — AURA-0372A5478F7D15

**[UNAVAILABLE SHOPIFY ADMIN / EXTERNAL CONTENT]**
Source binding: `assets/aura-cart.js` · `product.variants / cart / discount_applications`. Editability: **Shopify Admin**.
Prices, compare-at prices, inventory messages and automatic discount titles/amounts depend on store data.
Unavailable in repository; access to Shopify was not attempted.
Required by: `homepage--aura_faq`, `homepage--aura_promise`, `homepage--aura_pack_cta`, `product--aura_featured_product`, `product--aura_faq`, `product--aura_pack_cta`, `shared--aura_announcement`, `shared--sticky-purchase`, `shared--cart-drawer`.

<a id="aura-58037254c8ab97"></a>
### Product and editorial media — AURA-58037254C8AB97

**[UNAVAILABLE SHOPIFY ADMIN / EXTERNAL CONTENT]**
Source binding: `sections/aura-featured-product.liquid` · `product.images / image_picker / video / media.alt`. Editability: **Shopify Admin**.
Media text, embedded visual lettering, captions not encoded in text, spoken video and actual media alt data cannot be transcribed from repository references.
Unavailable in repository; access to Shopify was not attempted.
Required by: `homepage--aura_hero`, `homepage--aura_science`, `homepage--aura_personas`, `homepage--aura_ugc`, `homepage--aura_reviews`, `product--aura_featured_product`, `product--aura_video_reviews_v2`, `product--aura_science`, `product--aura_benefits`, `product--aura_reviews`.

<a id="aura-5d2b5979483d52"></a>
### Policies and legal pages — AURA-5D2B5979483D52

**[UNAVAILABLE SHOPIFY ADMIN / EXTERNAL CONTENT]**
Source binding: `sections/aura-footer.liquid` · `shop.policies / policy.body / page.content`. Editability: **Shopify Admin**.
Destination policy/legal page bodies are unavailable; repository navigation labels are included.
Unavailable in repository; access to Shopify was not attempted.
Required by: `homepage--aura_faq`, `homepage--aura_promise`, `homepage--aura_pack_cta`, `product--aura_product_details`, `product--aura_faq`, `product--aura_pack_cta`, `shared--aura_announcement`, `shared--aura_newsletter`, `shared--aura_footer`.

<a id="aura-d39f9274d204b3"></a>
### SEO titles and descriptions — AURA-D39F9274D204B3

**[UNAVAILABLE SHOPIFY ADMIN / EXTERNAL CONTENT]**
Source binding: `layout/theme.liquid` · `page_title / page_description / shop.description / shop.name`. Editability: **Shopify Admin**.
Admin SEO can supersede repository fallbacks; social metadata may use separate fallbacks.
Unavailable in repository; access to Shopify was not attempted.
Required by: `homepage--seo`, `product--seo`.

<a id="aura-a696476eba0770"></a>
### External review content — AURA-A696476EBA0770

**[UNAVAILABLE SHOPIFY ADMIN / EXTERNAL CONTENT]**
Source binding: `layout/theme.liquid` · `app blocks / remote review providers`. Editability: **external configuration**.
No external review feed was fetched. Locally saved testimonial blocks are fully included, without authenticity assessment.
Unavailable in repository; access to Shopify was not attempted.
Only a placeholder for any external review feed; locally stored testimonials remain present. Existence of an external feed is not asserted.
Required by: `homepage--aura_ugc`, `homepage--aura_reviews`, `product--aura_video_reviews_v2`, `product--aura_reviews`.

<a id="aura-523441885c0b00"></a>
### Checkout, shipping and payments — AURA-523441885C0B00

**[UNAVAILABLE SHOPIFY ADMIN / EXTERNAL CONTENT]**
Source binding: `assets/aura-cart.js` · `Shopify-hosted checkout`. Editability: **Shopify Admin**.
Checkout labels, payment methods, shipping rates, taxes, discounts and errors are not controlled by this theme snapshot.
Unavailable in repository; access to Shopify was not attempted.
Required by: `homepage--aura_faq`, `homepage--aura_promise`, `homepage--aura_pack_cta`, `product--aura_product_details`, `product--aura_faq`, `product--aura_pack_cta`, `shared--aura_announcement`, `shared--aura_footer`, `shared--cart-drawer`.

<a id="aura-f599cdf2ac1e9b"></a>
### Contact and newsletter service responses — AURA-F599CDF2AC1E9B

**[UNAVAILABLE SHOPIFY ADMIN / EXTERNAL CONTENT]**
Source binding: `sections/aura-page-contact.liquid` · `form.errors / form.posted_successfully?`. Editability: **external configuration**.
Custom success/error strings are extracted; server-generated errors and browser-native validation wording depend on runtime.
Unavailable in repository; access to Shopify was not attempted.
Newsletter responses only; contact page content is outside this packet.
Required by: `shared--aura_newsletter`.

## Selection record

Retained 513 of the 2,210 master entries: 503 copy elements plus 10 external placeholders. Excluded 1697 entries. Shared page displays do not increase these unique-ID counts.

| Removed from the packet | Master entries |
|---|---:|
| Non-core route, advertising landing page, reference library or legacy interaction | 995 |
| Disabled, unused, overridden/reference default, preset or explicitly non-rendered content | 603 |
| Literal default filter superseded by configured copy | 9 |
| Dawn runtime dictionary/locale not demonstrated as used by Aura core interface | 24 |
| Material badge is gated off for non-highlighted rows | 6 |
| No-product fallback Liquid occurrence | 6 |
| No-product/static fallback superseded by real-product or JavaScript interface | 16 |
| Uninstantiated pair-template seed replaced by retained numbered JavaScript label | 1 |
| Description fallback not asserted live; Admin-description placeholder retained | 1 |
| Initial sticky-bar colour/price seed superseded by runtime Admin selection | 2 |
| Sticky size line is CSS-hidden at the mobile breakpoint where sticky purchase is available | 3 |
| Initial Liquid count suffix superseded by retained JavaScript cart count and suffixes | 2 |
| Fallback-only gallery thumbnail label | 1 |
| Other-page SEO, conditional suffix or transformation rule rather than core title/description fallback | 21 |
| External content outside the two-page core journey | 7 |

Editor-only labels were not copy entries in the master and are not copied into this packet. Claims have only the marker “claim to verify”; no assessment has been made. The original inventories and all storefront sources remain unchanged.
