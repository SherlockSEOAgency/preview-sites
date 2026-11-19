# EventOnline plan: bron van waarheid

`index.html` is de enige bron van het plan en de stand van zaken (basis: de artifact van Emile, 19/11/2026, plus onze statusupdates van 19/11).
Preview: https://eventonline-plan.preview.sherlockseo.com (statisch, noindex).

## Werkwijze
- Wijzigen = PR op deze map, of een werkitem in Sherlock (MCP) dat naar deze map verwijst. Niet meer bewerken in losse artifacts of PDF's.
- Elke agent (Claude Code, Sherlock/BOSS) en elke mens werkt hier. Eén PR per wijziging, met bron en datum bij elk cijfer.
- De pagina is tweetalig: elke tekst heeft een NL-attribuut (`data-nl`) en een EN-tekst, of `nl:`/`en:` in het script. Pas beide aan.
- Statusgegevens (onderdelen, stappen) staan in het script onder `ITEMS` en `STEPS`.
- `apply_19nov_updates.py` is eenmalig (de update van 19/11) en hoeft niet opnieuw te draaien.

## Uitrol
Coolify-app `eventonline-plan-preview` bouwt deze map (nginx, zie `Dockerfile`). Zet automatisch uitrollen aan op `main`, anders moet iemand de deploy starten.
