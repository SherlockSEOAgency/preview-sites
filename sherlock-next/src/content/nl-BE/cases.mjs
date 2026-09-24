// /nl/cases/ : proof hub. Only cases published on sherlockseo.com, with their published figures, source and period.
// One case per rung of the offer ladder. No placeholders for cases that are not published.
export default (x) => {
  const { C } = x;
  return {
    title: 'Cases: resultaten met bron en periode | Sherlock SEO Agency',
    description: 'Wat Sherlock deed, in welke volgorde, en wat er veranderde. Cijfers zoals gepubliceerd, met hun bron en periode.',
    main: `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Cases</p>
    <h1 id="h1" class="h1-inner">Cases, met <span class="accent">bron en periode.</span></h1>
    <p class="lead" style="margin-top:24px">Wat we deden, in welke volgorde, en wat er veranderde. Cijfers zoals gepubliceerd, met hun bron.</p>
  </div>
</section>

<div class="wrap">
  <article class="case-row" aria-labelledby="c-byvo" style="margin-top:40px">
    <div>
      <p class="proof-meta">Groeipartner · alu ramen en deuren</p>
      <h2 id="c-byvo">Boven Yvo: eerst meten, dan groeien, dan pas een nieuwe website.</h2>
      ${C.figures([
        { from: '291', to: '644', label: 'websitebezoeken', source: 'Search Console, juni 2019 vs. juni 2020' },
        { value: '+170%', label: 'conversies', source: 'Alle conversies, Google Analytics, zelfde periode' },
      ], 'figures-2')}
      ${x.go('case.boven-yvo', 'Lees de case')}
    </div>
    ${C.deviceFrame({ desktop: { src: '/assets/img/bovenyvo-desktop-2026-09-24.jpg', w: 1800, h: 1125 }, mobile: { src: '/assets/img/bovenyvo-mobile-2026-09-24.jpg', w: 780, h: 1688 },
      alt: 'De startpagina van bovenyvo.be', domain: 'bovenyvo.be', caption: 'bovenyvo.be, vastgelegd op 24 september 2026.' })}
  </article>

  <article class="case-row" aria-labelledby="c-mp">
    <div>
      <p class="proof-meta">Opdracht · meertalige marketplace, België</p>
      <h2 id="c-mp">Van 4.261 dubbele URL's tussen talen naar nul.</h2>
      <p style="margin:16px 0 22px;max-width:34em">Een platform in vier talen maakte zijn eigen duplicaten aan. We herbouwden de meertalige URL-architectuur, van de code tot de tests.</p>
      ${x.go('case.marketplace', 'Lees de case')}
    </div>
    <div>
      <div class="big-fig num">14.704 ${C.bigArrow()} <b>247</b></div>
      <p class="big-fig-label">interne redirects</p>
      <p class="fig-source">Screaming Frog, crawl voor en na de opdracht</p>
      <div class="big-fig num" style="margin-top:28px">835 ${C.bigArrow()} <b>95</b></div>
      <p class="big-fig-label">kapotte pagina's (404)</p>
      <p class="fig-source">Screaming Frog, crawl voor en na de opdracht</p>
    </div>
  </article>

  ${C.quote({ text: 'Sherlock werkte een professioneel plan van aanpak uit voor zowel onze website als SEO/SEA. Ik kan het Sherlock team iedereen aanraden!', name: 'Manou Rottiers', company: 'Style at Home' })}
  ${C.badges({ label: 'Partners', items: [
    { src: '/assets/img/badge-google-partners.webp', alt: 'Google Partners', w: 548, h: 152 },
    { src: '/assets/img/badge-meta-business-partner.webp', alt: 'Meta Business Partner', w: 786, h: 267 },
    { src: '/assets/img/badge-semrush-agency-partner.webp', alt: 'Semrush Certified Agency Partner', w: 158, h: 158, square: true },
  ] })}
  <div style="height:96px"></div>
</div>

${x.terminus()}
`,
  };
};
