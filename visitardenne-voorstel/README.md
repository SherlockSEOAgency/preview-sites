# visitardenne-voorstel — voorstel-preview

Browsebare voorstel-site voor VisitArdenne: "dit kan visitardenne.com/nl worden als we de strategie uitvoeren."

- **Strategie-basislijn (bevroren):** va-dossier-frozen-v1 (commit e25d5f35d, Sherlock-Agency-OS, docs/client-artifacts/VisitArdenne/dossier/) — https://visitardenne-dossier.preview.sherlockseo.com/
- **Design-basislijn:** https://www.visitardenne.com/nl/ — tokens uit theme_laetis/css/styles.css, eigen logo + Parisine-font + eigen beeldarchief.
- **Blueprint / traceerbaarheid:** `data/blueprint.json` (machineleesbaar) + `verantwoording.html` (consultant-doc). Elke pagina heeft een Strategie-toggle die beslissing → bewijs toont.
- **Regenereerbaar:** dossier + blueprint.json + compose_page_plan-runs (31/08) zijn de volledige input; niets is vrij verzonnen.

Deploy: Coolify static preview (nginx), https://visitardenne-voorstel.preview.sherlockseo.com/
