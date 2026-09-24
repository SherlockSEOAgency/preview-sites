// /en/cases/ : proof hub. Only cases published on sherlockseo.com, with their published figures, source and
// period. Boven Yvo has its own English case page (built in this slice); the multilingual marketplace case page
// exists in Dutch only so far, so its entry links there and is marked with the fallback language, per the
// model's own reading-fallback rule (see model.json locales.en.fallback).
export default (x) => {
  const { C } = x;
  return {
    title: 'Cases: what we did and what changed | Sherlock SEO Agency',
    description: 'What Sherlock did, in what order, and what changed. Figures per case, with their source and period.',
    main: `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Cases</p>
    <h1 id="h1" class="h1-inner">What we did, <span class="accent">and what changed.</span></h1>
    <p class="lead" style="margin-top:24px">Per case: the order of the work and the figures, with source and period.</p>
  </div>
</section>

<div class="wrap">
  <article class="case-row" aria-labelledby="c-byvo" style="margin-top:40px">
    <div>
      <p class="proof-meta">Growth partner · aluminium windows and doors</p>
      <h2 id="c-byvo">Boven Yvo: first measure, then grow, then, only then, a new website.</h2>
      ${C.figures([
        { value: '+170%', label: 'conversions', source: 'All conversions, Google Analytics, June 2019 vs. June 2020' },
        { from: '291', to: '644', label: 'visits from Google', source: 'Search Console, same period' },
      ], 'figures-2')}
      ${x.go('case.boven-yvo', 'Read the case')}
    </div>
    ${C.deviceFrame({ desktop: { src: '/assets/img/bovenyvo-desktop-2026-09-24.jpg', w: 1800, h: 1025 }, mobile: { src: '/assets/img/bovenyvo-mobile-2026-09-24.jpg', w: 780, h: 1504 },
      alt: 'The homepage of bovenyvo.be', domain: 'bovenyvo.be', caption: 'bovenyvo.be on 24 September 2026, years after the figures in this case.' })}
  </article>

  <article class="case-row" aria-labelledby="c-mp">
    <div>
      <p class="proof-meta">Mission · multilingual marketplace, Belgium</p>
      <h2 id="c-mp">From 4,261 duplicate URLs between languages to zero.</h2>
      <p style="margin:16px 0 22px;max-width:34em">A four-language platform was generating its own duplicates. We rebuilt the multilingual URL architecture, from the code to the tests: one page per language for Google to show.</p>
      ${x.go('case.marketplace', 'Read the case')}
    </div>
    ${C.figures([
      { from: '14,704', to: '247', label: 'internal redirects', source: 'Screaming Frog, crawls before and after the mission; case published July 2026' },
      { from: '835', to: '95', label: 'broken pages (404)', source: 'Screaming Frog, same crawls' },
    ], 'figures-2 figures-stack')}
  </article>

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
