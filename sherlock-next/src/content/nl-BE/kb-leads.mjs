// /nl/academie/manieren-om-online-leads-te-genereren/ : knowledge, Academy section "Voor je kiest".
// Source: the published blog post (sherlockseo.com, WP 5271, 28 September 2025). Rewritten: the raw post lists
// 7 generic channels (incl. lead magnets, social ads, retargeting) and a table of unpublished/on-hold case results
// (Roofcover, Emiel's €600.000, Kartonnenmeubelen, Lederland, Board of Innovation — §7.1/§7.2, all dropped).
// Narrowed to the four channels Sherlock names as deliverable today (offer_catalog, origin/master): seo_growth,
// paid_acquisition, website_conversion/landing_page, content_authority.
export default (x) => {
  const { C } = x;
  return {
    title: 'De verschillende manieren om online leads te genereren | Sherlock Academie',
    description: 'Een lead is geen klik. Welke kanalen echt aanvragen opleveren, en waarom het zelden bij één kanaal blijft — met wat het ons bij Boven Yvo opleverde.',
    schemaType: 'Article',
    schema: { headline: 'De verschillende manieren om online leads te genereren', datePublished: '2025-09-28', dateModified: '2026-09-24', author: { '@id': `${x.model.site.origin}/#org` }, articleSection: 'Voor je kiest' },
    main: `
<header class="article-head">
  <div class="wrap">
    <p class="crumbs"><a href="${x.href('academy')}">Academie</a><span class="sep" aria-hidden="true">›</span>Voor je kiest</p>
    <h1 id="h1" class="h1-inner" style="max-width:16em">De verschillende manieren om online leads te genereren</h1>
    <p class="article-meta">Sherlock · september 2025 · herwerkt september 2026</p>
  </div>
</header>

<article class="article" aria-labelledby="h1">
  <div class="wrap article-grid">
    <div class="body rail rail-article">
      <p class="pull">“Een lead is geen klik. Het is iemand met koopintentie die contact opneemt.”</p>

      <h2>Wat telt als een lead</h2>
      <p>Niet elk bezoek, niet elke like. Een lead is een actie van iemand met koopintentie: een ingevuld formulier, een offerteaanvraag, een telefoontje of e-mail met een concreet doel. Een campagne die veel kliks oplevert maar geen van deze, heeft geen leads opgeleverd — hoeveel verkeer er ook doorkwam.</p>

      <h2>De kanalen die wij inzetten</h2>
      <p>Er bestaan veel manieren om online zichtbaar te worden. Wij werken met vier, omdat elk ervan aantoonbaar leidt tot een aanvraag, niet alleen tot bezoek:</p>
      <ul class="checklist">
        <li><b>Vindbaarheid op wat je verkoopt (SEO).</b> Relevant bezoek op de zoekwoorden die koopintentie tonen, niet op volume alleen.</li>
        <li><b>Betaalde zoekadvertenties.</b> Zichtbaar precies wanneer iemand naar jouw aanbod zoekt, opgevolgd op aanvragen — niet op kliks.</li>
        <li><b>Een website die overtuigt.</b> Je kan al het bovenstaande kanaal binnenhalen; converteert de pagina niet, dan verlies je het weer.</li>
        <li><b>Content die gezag opbouwt.</b> Antwoorden op de vragen die je ideale klant stelt vóór hij koopt, en voeding voor zowel SEO als advertenties.</li>
      </ul>

      <h2>Waarom het zelden bij één kanaal blijft</h2>
      <p>Advertenties zonder een overtuigende landingspagina verbranden budget. SEO zonder content die aansluit op koopintentie trekt verkeer aan dat niet converteert. Content zonder tracking levert je geen zicht op wat werkt. De kanalen versterken elkaar pas als ze vanuit hetzelfde plan vertrekken — dat is ook waarom we ze bij een opdracht nooit los van elkaar bekijken.</p>

      <h3>Zo liep het bij Boven Yvo</h3>
      <p>Bij Boven Yvo gebruikten we de data van de zoekcampagnes voor zowel de organische als de betaalde kant, aangevuld met content. Resultaat: bezoeken via Google van 291 naar 644 (Search Console, juni 2019 vs. juni 2020) en +170% conversies (alle conversies, Google Analytics, zelfde periode). <a href="${x.href('case.boven-yvo')}">Lees de case</a>.</p>

      <h2>De meestgemaakte fout</h2>
      <p>Niet het kanaal, maar het ontbreken van een duidelijke boodschap: als je niet zegt voor wie je er bent en welk probleem je oplost, converteert geen enkel kanaal goed — hoeveel budget je er ook tegenaan gooit.</p>
    </div>
    <aside class="article-aside" aria-labelledby="h-praktijk">
      <p class="eyebrow" id="h-praktijk">In de praktijk</p>
      <nav class="continue" aria-label="Verder lezen">
        <a href="${x.href('kb.positionering')}"><small>Eerst dit</small><span>Wat is de kracht van positionering en branding?${C.ARROW}</span></a>
        <a href="${x.href('werken')}"><small>Waarmee je binnenkomt</small><span>Vier vragen die we vaak eerst horen.${C.ARROW}</span></a>
      </nav>
    </aside>
  </div>
</article>

${x.terminus({ heading: 'Welk kanaal levert <span class="t-accent">jou geen aanvragen op?</span>', text: 'Een gesprek van 30 minuten, vrijblijvend. Daarna krijg je onze eerste inschatting van je grootste commerciële kans.' })}
`,
  };
};
