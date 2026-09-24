// /nl/academie/waarom-seo-pas-werkt-als-je-business-klopt/ : knowledge, Academy section "Voor je kiest".
// Source: the published blog post (sherlockseo.com, WP 5123, 28 March 2025). Edited by cutting, plus five truth fixes
// (round 1 review: no unsourced claims, no promise outside the offer; see the section comments). Cut:
// removed the prospect story with an unsourced amount, the unsourced percentages, the story about buying links,
// the "positie #8" story and the emoji offer block (it promised an AI-generated strategy).
// The piece ends by attaching to the commercial surface: one case, the way we work, the conversation.
export default (x) => {
  const { C } = x;
  return {
    title: 'Waarom SEO pas werkt als je business klopt | Sherlock Academie',
    description: 'SEO werkt, maar alleen als je bedrijf ook werkt. Wat er eerst moet kloppen voor zichtbaarheid iets oplevert: je propositie, je klantbeleving, je website en je strategie.',
    schemaType: 'Article',
    schema: { headline: 'Waarom SEO pas werkt als je business klopt', datePublished: '2025-03-28', dateModified: '2026-09-24', author: { '@id': `${x.model.site.origin}/#org` }, articleSection: 'Voor je kiest' },
    main: `
<header class="article-head">
  <div class="wrap">
    <p class="crumbs">Academie<span class="sep" aria-hidden="true">›</span>Voor je kiest</p>
    <h1 id="h1" class="h1-inner" style="max-width:15em">Waarom SEO pas werkt als je business klopt</h1>
    <p class="article-meta">Sherlock · maart 2025 · herwerkt september 2026</p>
  </div>
</header>

<article class="article" aria-labelledby="h1">
  <div class="wrap article-grid">
    <div class="body rail rail-article">
      <p class="pull">“SEO werkt, maar alleen als je bedrijf ook werkt.”</p>

      <h2>SEO faalt vaak – maar niet omdat het niet werkt</h2>
      <p>Je investeert in zoekmachineoptimalisatie, maar de resultaten blijven uit. SEO faalt vaak niet door SEO zelf, maar doordat het te vroeg of op de verkeerde manier wordt ingezet.</p>
      <p>Je website staat technisch als een huis en je staat op positie #1 in Google voor een belangrijk zoekwoord, maar toch komen er geen klanten uit. Als je business niet klopt – denk aan je product, je dienst of je klantbeleving – dan kan SEO geen wonderen verrichten. Wat SEO wél kan doen, is een goed werkende business opschalen en zichtbaar maken voor de juiste doelgroep.</p>

      <h2>Zichtbaarheid is geen garantie voor verkoop</h2>
      <p>Bovenaan in Google staan betekent dat je gevonden wordt – maar wat gebeurt er ná de klik? Als de bezoeker op je site niet meteen de waarde ziet, of afdruipt door een slechte gebruikerservaring, heb je niets aan die hoge ranking.</p>
      <p>Zo hebben we gezien dat een landingspagina met een hoge doorklikratio (CTR) alsnog teleurstellende resultaten gaf, omdat de pagina zelf niet overtuigde. Zichtbaarheid trekt aandacht; alleen de juiste boodschap en een aantrekkelijk aanbod zetten die aandacht om in actie.</p>

      <h2>Verhalen uit de praktijk: waarom business eerst, dan pas SEO</h2>
      <ul class="practice">
        <li><h3>De klant die Ads uitzette na UX-video’s</h3><p>Kliks waren er genoeg, maar conversies bleven uit. Na het zien van schermopnames begreep hij waarom: verwarring, slechte UX en onduidelijke info. Dat inzicht bespaarde hem advertentiebudget, dat naar de website ging.</p></li>
        <li><h3>Een artikel dat zijn belofte inloste</h3><p>Voor een lokale vakman schreven we een helder en aantrekkelijk artikel. Het artikel bevatte goede foto’s en informatie die het specialisme van de vakman onderstreepte. Toen we de klant vroegen of het ook iets opleverde, bevestigde hij dit.</p></li>
      </ul>

      <h2>Wat werkt wél: eerst de basis, dan pas SEO</h2>
      <h3>Strategische intake: begrijp de businesscontext</h3>
      <p>Wij starten elk traject met een strategische intake. Wat verkoop je? Wie zijn je klanten? Wat zijn je doelen? Vanuit dat begrip bouwen we een datagedreven strategie.</p>
      <h3>Past je aanbod bij de vraag?</h3>
      <p>We kijken of je aanbod aansluit op de vraag in de markt. Sluit het niet aan, dan zeggen we dat eerst, vóór we in SEO investeren.</p>
      <h3>Verbeter UX, copy &amp; positionering</h3>
      <p>SEO trekt mensen aan. UX en copy overtuigen ze. We werken aan sitestructuur, laadsnelheid, teksten en branding.</p>
      <h3>Sterke branding</h3>
      <p>Mensen klikken op merken die ze kennen of vertrouwen. Een sterk merk betekent hogere CTR’s en betere conversies. Branding versterkt SEO – en andersom.</p>
      <h3>SEO als versterking van je totale marketingstrategie</h3>
      <p>SEO werkt niet in een silo. Content voor SEO voedt ook je campagnes, en zoekgedrag is input voor je aanbod en je positionering.</p>

      <h2>Dus, eerst je business op orde, dan SEO</h2>
      <p>Wil je dat SEO écht rendeert? Werk eerst aan:</p>
      <ul class="checklist">
        <li>Een sterke propositie</li>
        <li>Een goede klantbeleving</li>
        <li>Een overtuigende website</li>
        <li>Een duidelijke strategie</li>
      </ul>
      <p>SEO is dan de accelerator die alles vergroot.</p>
    </div>
    <aside class="article-aside" aria-labelledby="h-praktijk">
      <p class="eyebrow" id="h-praktijk">In de praktijk</p>
      <nav class="continue" aria-label="Verder lezen">
        <a href="${x.href('case.boven-yvo')}"><small>Zo liep het bij Boven Yvo</small><span>Eerst meten. Dan groeien. Dan pas een nieuwe website.${C.ARROW}</span></a>
        <a href="${x.href('werken')}"><small>Hoe we samenwerken</small><span>Start met één vraag. Groei met één partner.${C.ARROW}</span></a>
      </nav>
    </aside>
  </div>
</article>

${x.terminus({ heading: 'Waar staat <span class="t-accent">jouw bedrijf</span> vandaag?', text: 'Een gesprek van 30 minuten, vrijblijvend. Daarna krijg je onze eerste inschatting van je grootste commerciële kans.' })}
`,
  };
};
