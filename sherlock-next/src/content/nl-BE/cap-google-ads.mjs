// /nl/google-ads/ : capability page. Bounded-job entry: "google ads bureau" (DataForSEO BE, ~20/mo).
// Ads spend stays a human decision: never claimed as automated.
// Proof: Boven Yvo ("tracking first" — the first search-campaign data drove both organic and paid).
export default (x) => {
  const { C } = x;
  return {
    title: 'Google Ads: advertenties die aanvragen opleveren, niet alleen kliks | Sherlock SEO Agency',
    description: 'Campagnes volgens een mediaplan, doorlopend gemonitord op aanvragen. Het advertentiebudget blijft jouw beslissing. Bespreek je groeivraag.',
    schemaType: 'Service',
    schema: { serviceType: 'Google Ads', provider: { '@id': `${x.model.site.origin}/#org` }, areaServed: { '@type': 'Country', name: 'BE' } },
    main: `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Werken met Sherlock · Google Ads</p>
    <h1 id="h1" class="h1-inner">Advertenties die <span class="accent">aanvragen opleveren,</span> niet alleen kliks.</h1>
    <p class="lead" style="margin-top:24px">Budget zonder meetbaar resultaat is een gok, geen campagne. We richten campagnes in volgens een mediaplan en sturen doorlopend bij op aanvragen, niet op kliks.</p>
    <div class="actions" style="margin-top:28px">
      <a class="btn btn-primary" href="${x.href('contact')}">${x.common.cta}</a>
      <a class="btn btn-secondary" href="${x.href('case.boven-yvo')}">Bekijk de case Boven Yvo</a>
    </div>
  </div>
</section>

<div class="wrap">
<div class="rail rail-ends">

  <section class="station" aria-labelledby="h-krijgt" data-offer-key="paid_acquisition">
    <p class="eyebrow">Wat je krijgt</p>
    <h2 id="h-krijgt">Campagnes die sturen op aanvragen.</h2>
    <ul class="asks">
      <li data-offer-key="paid_acquisition"><span class="a-ask">Campagnes volgens een mediaplan</span><p class="a-out">Ingericht op de aanvragen die je bedrijf nodig heeft, niet op zoveel mogelijk kliks.</p></li>
      <li data-offer-key="paid_acquisition"><span class="a-ask">Doorlopende opvolging op aanvragen</span><p class="a-out">We volgen conversies per campagne op en sturen bij wat niet werkt.</p></li>
    </ul>
    <p class="close-line">Het advertentiebudget blijft jouw beslissing; wij richten de campagnes in en sturen ze bij.</p>
  </section>

  <section class="station" aria-labelledby="h-systeem">
    <p class="eyebrow">In het systeem</p>
    <h2 id="h-systeem">Pas zinvol als je weet wat een aanvraag is.</h2>
    <p class="lead" style="margin-top:18px">Voor we adverteren, meten we. Bij Boven Yvo bepaalden de eerste zoekcampagnes zowel de organische als de betaalde aanpak.</p>
    <p style="margin-top:24px">${x.go('werken', 'Zo werken we samen')}</p>
  </section>

  <section class="station st-green" aria-labelledby="h-bewijs">
    <p class="eyebrow">Bewijs</p>
    <h2 id="h-bewijs">Eerst meten. Dan groeien. Dan pas een nieuwe website.</h2>
    <div class="proof-text" style="margin-top:20px">
      <p class="proof-meta">Case · Boven Yvo · groeipartner</p>
      <p>De data van de eerste zoekcampagnes stuurde zowel de advertenties als de SEO.</p>
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
      <div><dt>Zetten jullie zelf ons advertentiebudget in?</dt><dd>Nee. Dat blijft jouw beslissing. Wij richten de campagnes in en sturen bij op aanvragen.</dd></div>
      <div><dt>Moet meting eerst op orde zijn?</dt><dd>Ja. Zonder betrouwbare conversies sturen we op kliks, niet op aanvragen.</dd></div>
    </dl>
  </section>

</div>
</div>

${x.terminus({ heading: 'Welke campagne moet <span class="t-accent">aanvragen opleveren?</span>', text: 'Vertel welke campagnes lopen. Je krijgt onze eerste inschatting van wat ze nu al opleveren.' })}
`,
  };
};
