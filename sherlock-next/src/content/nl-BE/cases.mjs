// /nl/cases/ : proof hub. Only cases published on sherlockseo.com, with their published figures, source and period.
// One case per rung of the offer ladder. No placeholders for cases that are not published.
export default (x) => {
  const { C } = x;
  return {
    title: 'Cases: wat we deden en wat er veranderde | Sherlock SEO Agency',
    description: 'Wat Sherlock deed, in welke volgorde, en wat er veranderde. Per case de cijfers, met bron en periode.',
    main: `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Cases</p>
    <h1 id="h1" class="h1-inner">Wat we deden, <span class="accent">en wat er veranderde.</span></h1>
    <p class="lead" style="margin-top:24px">Per case: de volgorde van het werk en de cijfers, met bron en periode.</p>
  </div>
</section>

<div class="wrap">
  <article class="case-row" aria-labelledby="c-byvo" style="margin-top:40px">
    <div>
      <p class="proof-meta">Groeipartner · alu ramen en deuren</p>
      <h2 id="c-byvo">Boven Yvo: eerst meten, dan groeien, dan pas een nieuwe website.</h2>
      ${C.figures([
        { value: '+170%', label: 'conversies', source: 'Alle conversies, Google Analytics, juni 2019 vs. juni 2020' },
        { from: '291', to: '644', label: 'bezoeken via Google', source: 'Search Console, zelfde periode' },
      ], 'figures-2')}
      ${x.go('case.boven-yvo', 'Lees de case')}
    </div>
    ${C.deviceFrame({ desktop: { src: '/assets/img/bovenyvo-desktop-2026-09-24.jpg', w: 1800, h: 1025 }, mobile: { src: '/assets/img/bovenyvo-mobile-2026-09-24.jpg', w: 780, h: 1504 },
      alt: 'De startpagina van bovenyvo.be', domain: 'bovenyvo.be', caption: 'bovenyvo.be op 24 september 2026, jaren na de cijfers in deze case.' })}
  </article>

  <article class="case-row" aria-labelledby="c-mp">
    <div>
      <p class="proof-meta">Opdracht · meertalige marketplace, België</p>
      <h2 id="c-mp">Van 4.261 dubbele URL's tussen talen naar nul.</h2>
      <p style="margin:16px 0 22px;max-width:34em">Een platform in vier talen maakte zijn eigen duplicaten aan. We herbouwden de meertalige URL-architectuur, van de code tot de tests: per taal één pagina die Google toont.</p>
      ${x.go('case.marketplace', 'Lees de case')}
    </div>
    ${C.figures([
      { from: '14.704', to: '247', label: 'interne redirects', source: 'Screaming Frog, crawl voor en na de opdracht; case gepubliceerd juli 2026' },
      { from: '835', to: '95', label: "kapotte pagina's (404)", source: 'Screaming Frog, zelfde crawls' },
    ], 'figures-2 figures-stack')}
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
