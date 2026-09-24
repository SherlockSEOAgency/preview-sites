// /nl/academie/waarom-investeren-in-tracking-essentieel-is/ : knowledge, Academy section "Voor je kiest".
// Source: the published blog post (sherlockseo.com, WP 5253, 28 September 2025). Rewritten: the raw post's proof
// list mixes the one published, GREEN figure (Boven Yvo) with four unpublished or on-hold ones (Roofcover,
// Kartonnenmeubelen, Saniswitch's €600.000 — §7.1/§7.2) — dropped, kept only Boven Yvo. Measurement is framed in
// aanvragen throughout, never omzet (capability register: measurement_in_leads is LIMITED).
export default (x) => {
  const { C } = x;
  return {
    title: 'Waarom investeren in tracking essentieel is | Sherlock Academie',
    description: 'Zonder correcte tracking stuur je een campagne op gevoel. Wat er meestal ontbreekt, wat we opzetten voor we optimaliseren of adverteren, en waarom dat bij Boven Yvo de allereerste stap was.',
    schemaType: 'Article',
    schema: { headline: 'Waarom investeren in tracking essentieel is', datePublished: '2025-09-28', dateModified: '2026-09-24', author: { '@id': `${x.model.site.origin}/#org` }, articleSection: 'Voor je kiest' },
    main: `
<header class="article-head">
  <div class="wrap">
    <p class="crumbs"><a href="${x.href('academy')}">Academie</a><span class="sep" aria-hidden="true">›</span>Voor je kiest</p>
    <h1 id="h1" class="h1-inner" style="max-width:15em">Waarom investeren in tracking essentieel is</h1>
    <p class="article-meta">Sherlock · september 2025 · herwerkt september 2026</p>
  </div>
</header>

<article class="article" aria-labelledby="h1">
  <div class="wrap article-grid">
    <div class="body rail rail-article">
      <p class="pull">“Zonder correcte tracking stuur je een campagne op gevoel.”</p>

      <h2>Waarom we hier altijd mee starten</h2>
      <p>Een goede strategie vertrekt van één principe: alles moet meetbaar zijn. Waar komen je aanvragen vandaan? Welke pagina's, zoekwoorden en campagnes converteren, en welke niet? Zonder tracking neem je die beslissingen op gevoel, en kun je nooit aantonen wat een campagne echt opleverde.</p>

      <h2>Wat er meestal ontbreekt</h2>
      <p>De meeste bedrijven die bij ons komen, denken dat hun tracking in orde is. In de praktijk zien we vaak hetzelfde: veel bezoekers volgens Analytics, maar geen zicht op hoeveel daarvan effectief bellen of mailen. Veel kliks op een advertentie, maar geen koppeling met wie er echt klant van werd. Concreet ontbreekt meestal: een correct ingestelde Google Analytics 4, conversiedoelen die aan een businessdoel hangen (niet aan een klik), en onderscheid tussen kwaliteit en kwantiteit van aanvragen.</p>

      <h2>Wat we opzetten, voor er sprake is van SEO of advertenties</h2>
      <p>Tracking is bij ons geen extra, het is het fundament. We zetten Google Analytics 4, Google Tag Manager en Search Console correct op, koppelen conversietracking aan aanvragen — formulieren, telefoontjes, offerteaanvragen — en bouwen een dashboard dat niet alleen jij begrijpt, maar ook je boekhouder. Wat we bewust niet doen: rapporteren in omzet. Wat een aanvraag je uiteindelijk oplevert, zie je in je eigen verkoop.</p>

      <h3>Eerst meten was ook bij Boven Yvo de eerste stap</h3>
      <p>Bij Boven Yvo, actief in alu ramen en deuren, maten we eerst alle conversies. Pas daarna gebruikten we die data om zowel de organische als de betaalde campagnes op te zetten. Bezoeken via Google: 291 → 644 (Search Console, juni 2019 vs. juni 2020); conversies: +170% (alle conversies, Google Analytics, zelfde periode). Een nieuwe website kwam pas jaren later, toen verder optimaliseren niet meer rendeerde. <a href="${x.href('case.boven-yvo')}">Lees de case</a>.</p>

      <h2>Wat correcte tracking je oplevert</h2>
      <ul class="checklist">
        <li>Je weet welk kanaal echt aanvragen oplevert, niet welk kanaal het meeste verkeer trekt</li>
        <li>Je stopt op tijd met wat niet werkt, in plaats van na een jaar</li>
        <li>Je kunt testen en verbeteren op basis van cijfers, niet op gevoel</li>
        <li>Je bouwt historische data op: elke volgende beslissing vertrekt niet meer van nul</li>
      </ul>
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

${x.terminus({ heading: 'Weet je zeker dat je <span class="t-accent">meet wat telt?</span>', text: 'Een gesprek van 30 minuten, vrijblijvend. Daarna krijg je onze eerste inschatting van je grootste commerciële kans.' })}
`,
  };
};
