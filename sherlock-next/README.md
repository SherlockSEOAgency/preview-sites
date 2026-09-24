# sherlock-next

Preview of the rebuilt sherlockseo.com: one customer journey, built from the Positioning Lock v1 and published proof.
Served at https://sherlock-next.preview.sherlockseo.com (noindex: meta tag, `X-Robots-Tag` header and `robots.txt`).

| Page | Role |
|---|---|
| `/nl/` | entry |
| `/nl/werken-met-sherlock/` | commercial: start with one question, grow with one partner |
| `/nl/cases/`, `/nl/cases/boven-yvo/`, `/nl/cases/meertalige-marketplace/` | proof (published cases only) |
| `/nl/academie/waarom-seo-pas-werkt-als-je-business-klopt/` | knowledge (Academy, "Voor je kiest") |
| `/nl/contact/` | conversion |
| `/fr/`, `/fr/contact/` | FR-BE entry and conversion, built from the same concepts |

## How it is built

- `src/model.json`: the concepts (role, parent, slug and status per locale). Structure lives here, once.
- `src/content/<locale>/*.mjs`: what each page says in that market. French is written for the FR-BE market, not translated.
- `src/build.mjs`: plain Node, no dependencies. Computes `<html lang>`, canonical, hreflang, the language switch
  (same concept, else its nearest built ancestor), navigation and footer from the model. It refuses to build when a
  page has more or fewer than one H1, an internal link that does not resolve, no noindex, or non-reciprocal hreflang.
- `src/static/`: stylesheet (Sherlock brand tokens), self-hosted fonts (Raleway, Open Sans; SIL OFL 1.1), images.

```bash
node src/build.mjs --out dist        # build
node tools/serve.mjs dist 4173       # local server with the nginx rules
```

To add a page: add or update the concept in `model.json`, set its status to `built` for a locale, and write
`src/content/<locale>/<concept>.mjs`. Hreflang, switch, nav and footer follow automatically.

## Proof images

`tools/capture.mjs` captures a public client site with Playwright (desktop 1440×900, mobile 390×844). The file name
carries the capture date and every caption states it. Captures are never edited; proof is never drawn or generated.

## Preview rules

Previews send nothing: the contact form validates but has no named personal fields and shows a preview notice on
submit. No analytics, no third-party requests.
