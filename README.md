# Preview Sites

Static HTML previews for Sherlock client presentations.

## Regels (bindend voor elke preview)

1. **Previews versturen NIETS.** Geen `mailto:`, geen formulier-POST, geen
   externe endpoints. Elke CTA-knop en elk formulier blijft zichtbaar (het gaat
   om het ontwerp) maar is inert: klik toont alleen een label
   "voorbeeld — nog niet actief". Zie `tilborghs-preview/` voor het
   `data-inert`-patroon (CSS + 6-regel script).
2. **Zelfstandig bestand.** Fonts en afbeeldingen als data-URI; geen externe hosts.
3. **Alleen echt klantmateriaal.** Foto's van de eigen site van de klant, nooit
   stock of gegenereerd beeld; scores/reviews als invul-placeholder, nooit verzonnen.
4. **noindex.** De nginx-Dockerfile zet `X-Robots-Tag: noindex, nofollow` — overnemen.

## Sites
- `eventonline-deck/` -> eventonline-deck.preview.sherlockseo.com
- `eventonline/` -> eventonline.preview.sherlockseo.com
