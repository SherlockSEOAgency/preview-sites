// /nl/seo/ : capability page. Bounded-job entry: "seo audit" (DataForSEO BE, ~120/mo, §4 architecture map).
// The audit is folded in as the first step of the assignment (§6), not a separate page in this wave.
// Offer elements carry data-offer-key = keys of the Sherlock offer catalog (seo_growth, content_authority).
// Proof: the marketplace case (§3: "Board of Innovation · marketplace"; only the marketplace case is published).
export default (x) => {
  const { C } = x;
  return {
    title: 'SEO: gevonden worden op wat je verkoopt | Sherlock SEO Agency',
    description: "Meer relevant bezoek op de onderwerpen die aanvragen opleveren, niet op zoveel mogelijk zoekwoorden. We beginnen met een SEO-audit: waar je nu staat, en waarop je het eerst wint.",
    schemaType: 'Service',
    schema: { serviceType: 'SEO & zoeken', provider: { '@id': `${x.model.site.origin}/#org` }, areaServed: { '@type': 'Country', name: 'BE' } },
    main: `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Werken met Sherlock · SEO</p>
    <h1 id="h1" class="h1-inner">Gevonden worden op <span class="accent">wat je verkoopt.</span></h1>
    <p class="lead" style="margin-top:24px">Bezoek zonder aanvragen is geen resultaat. We zoeken uit op welke onderwerpen je aanvragen oplevert, lossen concurrentie tussen je eigen pagina's op, en kiezen per pagina bewust tussen verbeteren en nieuw bouwen.</p>
    <div class="actions" style="margin-top:28px">
      <a class="btn btn-primary" href="${x.href('contact')}">${x.common.cta}</a>
      <a class="btn btn-secondary" href="${x.href('case.marketplace')}">Bekijk de case meertalige marketplace</a>
    </div>
  </div>
</section>

<div class="wrap">
<div class="rail rail-ends">

  <section class="station" aria-labelledby="h-krijgt" data-offer-key="seo_growth content_authority">
    <p class="eyebrow">Wat je krijgt</p>
    <h2 id="h-krijgt">Zicht op waar je kan winnen, en waarop je gezag moet hebben.</h2>
    <ul class="asks">
      <li data-offer-key="seo_growth"><span class="a-ask">Zicht op waar je nu al bijna scoort</span><p class="a-out">Een audit van je topics, zoekwoorden en zoekintenties, met de snelste winst eruit gelicht.</p></li>
      <li data-offer-key="content_authority"><span class="a-ask">Pagina's op de onderwerpen waar je gezag over moet hebben</span><p class="a-out">Een paginastructuur en content, afgeleid uit hetzelfde model als de rest van je site.</p></li>
    </ul>
    <p class="close-line">Elke opdracht begint met een audit: waar je nu staat, en waarop je het eerst kan winnen.</p>
  </section>

  <section class="station" aria-labelledby="h-systeem">
    <p class="eyebrow">In het systeem</p>
    <h2 id="h-systeem">Dezelfde strategie, geen losse zoekwoordenlijst.</h2>
    <p class="lead" style="margin-top:18px">SEO vertrekt uit dezelfde keuzes als je website en je campagnes: wat je verkoopt, aan wie, en waar je grootste kans zit.</p>
    <p style="margin-top:24px">${x.go('werken', 'Zo werken we samen')}</p>
  </section>

  <section class="station st-green" aria-labelledby="h-bewijs">
    <p class="eyebrow">Bewijs</p>
    <h2 id="h-bewijs">Van 4.261 dubbele URL's tussen talen naar nul.</h2>
    <div class="proof-text" style="margin-top:20px">
      <p class="proof-meta">Case · opdracht · meertalige marketplace</p>
      <p>Een platform in vier talen maakte zijn eigen duplicaten aan. Technische resultaten, gemeten voor en na de opdracht.</p>
      ${C.figures([
        { from: '14.704', to: '247', label: 'interne redirects', source: 'Screaming Frog, crawl voor en na de opdracht; case gepubliceerd juli 2026' },
        { from: '835', to: '95', label: "kapotte pagina's (404)", source: 'Screaming Frog, zelfde crawls' },
      ], 'figures-2')}
      ${x.go('case.marketplace', 'Lees hoe dat liep')}
    </div>
  </section>

  <section class="station" aria-labelledby="h-vragen">
    <p class="eyebrow">Vragen</p>
    <h2 id="h-vragen">Wat klanten ons hierover vragen.</h2>
    <dl class="faq">
      <div><dt>Gaat dit over posities of over aanvragen?</dt><dd>Over relevant bezoek op de onderwerpen die aanvragen opleveren. Een positie zonder aanvraag is geen doel op zich.</dd></div>
      <div><dt>Werkt dit samen met mijn huidige website?</dt><dd>Ja. We kiezen per pagina bewust tussen verbeteren en nieuw bouwen, nooit toevallig.</dd></div>
    </dl>
  </section>

</div>
</div>

${x.terminus({ heading: 'Op welke <span class="t-accent">onderwerpen wil je gevonden worden?</span>', text: 'Vertel wat je verkoopt en aan wie. Je krijgt onze eerste inschatting van waar je het eerst kan winnen.' })}
`,
  };
};
