// /en/cases/boven-yvo/ : proof for the growth-partner rung, written for an international reader.
// Source: the published case (sherlockseo.com, WP 2454/1802, published 21 February 2023, an English version
// exists as WP 1802). Only published facts; the published headline percentages are not reused because they do
// not match the raw figures (same rule as the Dutch page). Story order as published: local lead generation
// first (from 2017), measure, campaigns, SEO and content; only after years of growing leads did the question
// become better leads, and our advice was a new website. The screenshot is today's bovenyvo.be, captured on
// 2026-09-24; the page never claims today's design as ours.
export default (x) => {
  const { C } = x;
  return {
    title: 'Case Boven Yvo: measure first, then grow | Sherlock SEO Agency',
    description: 'Boven Yvo, aluminium windows and doors: measure every conversion first, then advertising, SEO and content, and only then a new website. +170% conversions and 291 → 644 visits from Google (June 2019 vs. June 2020).',
    schemaType: 'Article',
    schema: { headline: 'First measure. Then grow. Then, only then, a new website.', datePublished: '2023-02-21', dateModified: '2026-09-24', author: { '@id': `${x.model.site.origin}/#org` }, about: 'Boven Yvo' },
    main: `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Case · Boven Yvo · growth partner</p>
    <h1 id="h1" class="h1-inner">First measure. Then grow. <span class="accent s">Then, only then, a new website.</span></h1>
    <dl class="facts facts-4">
      <div><dt>Sector</dt><dd>Construction, glazing: aluminium windows and doors</dd></div>
      <div><dt>Locations</dt><dd>Four, under two brand names</dd></div>
      <div><dt>Client since</dt><dd>2017</dd></div>
      <div><dt>Case published</dt><dd>February 2023</dd></div>
    </dl>
    ${C.figures([
      { value: '+170%', label: 'conversions', source: 'All conversions, Google Analytics, June 2019 vs. June 2020' },
      { from: '291', to: '644', label: 'visits from Google', source: 'Search Console, same period' },
    ], 'figures-2 figures-hero')}
  </div>
</section>

<div class="wrap">
  <div class="case-shots">
    ${C.deviceFrame({ desktop: { src: '/assets/img/bovenyvo-desktop-2026-09-24.jpg', w: 1800, h: 1025 }, mobile: { src: '/assets/img/bovenyvo-mobile-2026-09-24.jpg', w: 780, h: 1504 },
      alt: 'The homepage of bovenyvo.be', domain: 'bovenyvo.be' })}
    ${C.phoneFrame({ src: '/assets/img/bovenyvo-mobile-2026-09-24.jpg', alt: 'The homepage of bovenyvo.be on a smartphone', width: 780, height: 1504, cls: 'only-wide', lazy: true })}
  </div>
  <p class="small" style="margin:14px 0 0">bovenyvo.be on 24 September 2026, years after the figures in this case (June 2019 compared with June 2020).</p>
</div>

<div class="wrap">
<div class="rail rail-ends">

  <section class="station" aria-labelledby="h-understood">
    <p class="eyebrow">What we understood</p>
    <h2 id="h-understood" class="visually-hidden">What we understood</h2>
    <p class="statement">Boven Yvo wanted more local enquiries, in East Flanders and Flemish Brabant.</p>
  </section>

  <section class="station" aria-labelledby="h-decided">
    <p class="eyebrow">What we decided</p>
    <h2 id="h-decided" class="visually-hidden">What we decided</h2>
    <p class="statement">Measure every conversion first. Then use the data from the search campaigns to set up both the organic and the paid campaigns.</p>
  </section>

  <section class="station" aria-labelledby="h-delivered">
    <p class="eyebrow">What we delivered</p>
    <h2 id="h-delivered">In this order.</h2>
    <ol class="story">
      <li><b>Conversion tracking</b><span>First: every conversion tracked.</span></li>
      <li><b>Search campaigns</b><span>That brought in enquiries, and the data for the organic and paid campaigns.</span></li>
      <li><b>Technical and on-page SEO</b><span>Together with Boven Yvo's own developers, on the existing site.</span></li>
      <li><b>Content and a Pinterest strategy</b><span>Extra content on the existing site.</span></li>
      <li><b>Webmaster management</b><span>Updates and security, once their developer stopped.</span></li>
    </ol>
  </section>

  <section class="station" aria-labelledby="h-changed">
    <p class="eyebrow">What changed</p>
    <h2 id="h-changed" class="visually-hidden">What changed</h2>
    <p class="statement">Enquiries grew every year. At that point the question changed: not more enquiries, but better ones.</p>
  </section>

  <section class="station st-green" aria-labelledby="h-next">
    <p class="eyebrow">What we proposed</p>
    <h2 id="h-next">A new website, that shows the quality of the business better.</h2>
    <p class="muted" style="margin:16px 0 0;max-width:36em">That was our advice, after years of measuring, campaigns, SEO and content.</p>
    <div class="next-read" style="margin-top:48px">
      <p class="proof-meta" style="margin:0">From the Academy</p>
      <a class="big" href="${x.href('kb.business-klopt')}">Why SEO only works when your business does${C.ARROW}</a>
      <p class="muted" style="margin:0">Why we get the basics right first, and only then scale up.</p>
    </div>
    <div class="next-read" style="margin-top:40px">
      <p class="proof-meta" style="margin:0">Another case · mission${x.fb('case.marketplace')}</p>
      <a class="big" href="${x.href('case.marketplace')}">From 4,261 duplicate URLs between languages to zero${C.ARROW}</a>
    </div>
  </section>

</div>
</div>

${x.terminus({ heading: 'Where is <span class="t-accent">your biggest opportunity?</span>', text: 'Tell us in 30 minutes where your business stands. You’ll then get our first read.' })}
`,
  };
};
