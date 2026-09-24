// /nl/meten/ : capability page. Job trigger "campagne · meting" (shared job with the Google Ads page).
// Reported in aanvragen, never in omzet — measurement stays limited to that until it can be trusted further.
// Proof: Boven Yvo ("tracking first").
export default (x) => {
  const { C } = x;
  return {
    title: 'Tracking & meting: weten welke campagnes échte klanten opleveren | Sherlock SEO Agency',
    description: 'Conversies meetbaar vóór je erop stuurt: GA4, conversie-events en een meetplan. Resultaat in aanvragen, niet in omzet. Bespreek je groeivraag.',
    schemaType: 'Service',
    schema: { serviceType: 'Tracking & meting', provider: { '@id': `${x.model.site.origin}/#org` }, areaServed: { '@type': 'Country', name: 'BE' } },
    main: `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Werken met Sherlock · Tracking &amp; meting</p>
    <h1 id="h1" class="h1-inner">Weten welke campagnes <span class="accent">échte klanten opleveren.</span></h1>
    <p class="lead" style="margin-top:24px">Zonder betrouwbare meting beslis je over je site en je campagnes op gevoel. We maken conversies meetbaar vóór we erop sturen: GA4, conversie-events en een meetplan per fase van de klantreis.</p>
    <div class="actions" style="margin-top:28px">
      <a class="btn btn-primary" href="${x.href('contact')}">${x.common.cta}</a>
      <a class="btn btn-secondary" href="${x.href('case.boven-yvo')}">Bekijk de case Boven Yvo</a>
    </div>
  </div>
</section>

<div class="wrap">
<div class="rail rail-ends">

  <section class="station" aria-labelledby="h-krijgt" data-offer-key="tracking_foundation">
    <p class="eyebrow">Wat je krijgt</p>
    <h2 id="h-krijgt">Eén meetplan onder je site en je campagnes.</h2>
    <ul class="asks">
      <li data-offer-key="tracking_foundation"><span class="a-ask">Conversies die je kan vertrouwen</span><p class="a-out">GA4 gekoppeld, conversie-events live, en een meetplan dat vastlegt wat we volgen en waarom.</p></li>
      <li data-offer-key="tracking_foundation"><span class="a-ask">Eén beeld voor site én campagnes</span><p class="a-out">Dezelfde meting onder je website en je advertenties, zodat beslissingen niet meer op gevoel lopen.</p></li>
    </ul>
    <p class="close-line">Dit is meestal de eerste stap: zonder betrouwbare meting weet je niet of een volgende ingreep werkt.</p>
  </section>

  <section class="station" aria-labelledby="h-systeem">
    <p class="eyebrow">In het systeem</p>
    <h2 id="h-systeem">De basis onder de hele lijn.</h2>
    <p class="lead" style="margin-top:18px">We meten wat verandert in aanvragen, en sturen de strategie bij — dat kan pas als de meting zelf klopt.</p>
    <p style="margin-top:24px">${x.go('werken', 'Zo werken we samen')}</p>
  </section>

  <section class="station st-green" aria-labelledby="h-bewijs">
    <p class="eyebrow">Bewijs</p>
    <h2 id="h-bewijs">Eerst meten. Dan groeien. Dan pas een nieuwe website.</h2>
    <div class="proof-text" style="margin-top:20px">
      <p class="proof-meta">Case · Boven Yvo · groeipartner</p>
      <p>Eerst alle conversies gemeten. Daarna stuurde die data zowel de organische als de betaalde campagnes.</p>
      ${C.figures([
        { value: '+170%', label: 'conversies', source: 'Alle conversies, Google Analytics, juni 2019 vs. juni 2020' },
        { from: '291', to: '644', label: 'bezoeken via Google', source: 'Search Console, zelfde periode' },
      ], 'figures-2')}
      ${x.go('case.boven-yvo', 'Lees hoe dat liep')}
    </div>
  </section>

  <section class="station" aria-labelledby="h-vragen">
    <p class="eyebrow">Vragen</p>
    <h2 id="h-vragen">Wat klanten ons hierover vragen.</h2>
    <dl class="faq">
      <div><dt>Wat hebben jullie van ons nodig om te starten?</dt><dd>Toegang tot GA4, Tag Manager en, als je adverteert, Google Ads. De rest richten wij in.</dd></div>
      <div><dt>Zien we dit terug in omzet?</dt><dd>Nee. We rapporteren in aanvragen: formulieren, telefoontjes, offertevragen. Die koppeling naar omzet ligt in je eigen verkoop.</dd></div>
    </dl>
  </section>

</div>
</div>

${x.terminus({ heading: 'Weet jij welke campagne <span class="t-accent">écht aanvragen oplevert?</span>', text: 'Vertel wat je vandaag meet, en wat niet. Je krijgt onze eerste inschatting van wat er ontbreekt.' })}
`,
  };
};
