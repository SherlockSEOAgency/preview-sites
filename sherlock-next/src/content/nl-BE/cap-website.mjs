// /nl/website/ : capability page. Bounded-job entry: "website laten maken" (DataForSEO BE, ~993/mo, §4 architecture map).
// Offer elements carry data-offer-key = keys of the Sherlock offer catalog (website_conversion, landing_page).
// No prices: the catalog has not decided them. Proof: Boven Yvo only (§3: "the site came last").
export default (x) => {
  const { C } = x;
  return {
    title: 'Website laten maken die uitlegt waarom klanten voor jou kiezen | Sherlock SEO Agency',
    description: "Een website die uitlegt waarom klanten voor jou kiezen, met het resultaat gemeten. We verbeteren bestaande pagina's of bouwen er één met een doel, vanuit je bedrijf. Bespreek je groeivraag.",
    schemaType: 'Service',
    schema: { serviceType: 'Website & content', provider: { '@id': `${x.model.site.origin}/#org` }, areaServed: { '@type': 'Country', name: 'BE' } },
    main: `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Werken met Sherlock · Website</p>
    <h1 id="h1" class="h1-inner">Website laten maken die <span class="accent">uitlegt waarom klanten voor jou kiezen.</span></h1>
    <p class="lead" style="margin-top:24px">Je website krijgt bezoek, maar zet het niet om in aanvragen. Of je hebt een nieuwe website nodig en wil dat ze dat vanaf dag één wél doet. We verbeteren wat er staat, of bouwen één pagina met een duidelijk doel — en meten wat het oplevert.</p>
    <div class="actions" style="margin-top:28px">
      <a class="btn btn-primary" href="${x.href('contact')}">${x.common.cta}</a>
      <a class="btn btn-secondary" href="${x.href('case.boven-yvo')}">Bekijk de case Boven Yvo</a>
    </div>
  </div>
</section>

<div class="wrap">
<div class="rail rail-ends">

  <section class="station" aria-labelledby="h-krijgt" data-offer-key="website_conversion landing_page">
    <p class="eyebrow">Wat je krijgt</p>
    <h2 id="h-krijgt">Verbeteren wat er is, of één pagina met een doel.</h2>
    <ul class="asks">
      <li data-offer-key="website_conversion"><span class="a-ask">Bestaande pagina's die beter presteren</span><p class="a-out">Verbeteringen met een preview vooraf en een stap terug als het niet werkt, en het resultaat gemeten.</p></li>
      <li data-offer-key="landing_page"><span class="a-ask">Eén nieuwe pagina voor een campagne of aanbod</span><p class="a-out">Een landingspagina die bezoekers van die campagne omzet in een meetbare aanvraag.</p></li>
    </ul>
    <p class="close-line">Een volledig nieuwe website is een latere stap. Bij Boven Yvo kwam die er pas nadat meten, adverteren, SEO en content al jaren hadden gewerkt.</p>
  </section>

  <section class="station" aria-labelledby="h-systeem">
    <p class="eyebrow">In het systeem</p>
    <h2 id="h-systeem">Uitvoering, niet het vertrekpunt.</h2>
    <p class="lead" style="margin-top:18px">Een website is Uitvoering, niet het begin. We bepalen eerst waar je grootste commerciële kans zit; de website voert dat uit, en meting laat zien of het werkt.</p>
    <p style="margin-top:24px">${x.go('werken', 'Zo werken we samen')}</p>
  </section>

  <section class="station st-green" aria-labelledby="h-bewijs">
    <p class="eyebrow">Bewijs</p>
    <h2 id="h-bewijs">Eerst meten. Dan groeien. Dan pas een nieuwe website.</h2>
    <div class="proof-text" style="margin-top:20px">
      <p class="proof-meta">Case · Boven Yvo · groeipartner</p>
      <p>Vier locaties, twee merknamen, klant sinds 2017. Pas na jaren van meten, campagnes, SEO en content volgde het advies voor een nieuwe website.</p>
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
      <div><dt>Bouwen jullie een volledig nieuwe site, of verbeteren jullie wat er is?</dt><dd>We verbeteren eerst bestaande pagina's. Een nieuwe website is een aparte opdracht, pas zinvol als verder optimaliseren niet meer oplevert.</dd></div>
      <div><dt>Kan ik een wijziging terugdraaien?</dt><dd>Ja. Elke aanpassing krijg je eerst als preview, met een versiecheck en een stap terug.</dd></div>
    </dl>
  </section>

</div>
</div>

${x.terminus({ heading: 'Welke pagina moet <span class="t-accent">meer opleveren?</span>', text: 'Vertel welke pagina achterblijft. Je krijgt onze eerste inschatting van wat er te winnen valt.' })}
`,
  };
};
