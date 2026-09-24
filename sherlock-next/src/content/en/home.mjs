// /en/ : international entry. Same concept and structure as /nl/ and /fr/, written for an international buyer
// (often multilingual, not necessarily Belgian), not translated sentence by sentence. No testimonial: the
// published quotes exist in Dutch only, and a quote is never translated (same rule as /fr/).
export default (x) => {
  const { C } = x;
  return {
    title: 'Sherlock SEO Agency — from found to sought, and chosen',
    description: 'Sherlock is the SEO and growth agency for established SMEs: strategy, website, search, Google Ads and measurement as one system. Discuss your growth question.',
    main: `
<section class="hero hero-line" aria-labelledby="h1">
  <div class="wrap">
    <h1 id="h1">No longer just found. <span class="accent">Sought, and chosen.</span></h1>
    <p class="lead">For established SMEs that want to grow: one senior partner who understands your business, decides what comes first, and executes it too.</p>
    <div class="actions">
      <a class="btn btn-primary" href="${x.href('contact')}">${x.common.cta}</a>
      <a class="btn btn-secondary" href="${x.href('werken')}">See how we work</a>
    </div>
    <p class="note">A first conversation takes 30 minutes and comes with no obligation.</p>
    ${C.methodLine({
      stations: ['Your business', 'Strategy', 'Creative', 'Technology', 'Execution', 'Measurement'],
      channels: ['website', 'search', 'advertising', 'content'],
      loop: 'adjust',
      loopLong: 'and then adjust',
      summary: 'One line: we start with your business, then strategy, creative and technology. The channels only appear at execution: website, search, advertising and content. We measure what changes and adjust the strategy.',
    })}
  </div>
</section>

<div class="wrap">
<div class="rail rail-ends">

  <section class="station" aria-labelledby="h-recognition">
    <p class="eyebrow">Recognition</p>
    <div class="section-intro">
      <h2 id="h-recognition">Your business is better than how it comes across online today.</h2>
    </div>
    <ul class="symptoms measure" style="margin-top:36px">
      <li>Your website doesn't make clear enough why someone should choose you.</li>
      <li>Search brings visitors, but too few real enquiries.</li>
      <li>Campaigns are running, but you don't know which ones bring real customers.</li>
      <li>Your offer or your market has changed; your online presence hasn't caught up.</li>
      <li>Different providers each optimise their own piece.</li>
    </ul>
  </section>

  <section class="station" aria-labelledby="h-begin">
    <p class="eyebrow">Where we start</p>
    <h2 id="h-begin"><span class="s">We don't start with the channel.</span> <span class="s">We start with your business.</span></h2>
    <ul class="questions">
      <li><span class="q-label">Your business</span><p class="q-text">What do you sell, to whom, and why do customers choose you? Where do you earn the most, and what can you prove?</p></li>
      <li><span class="q-label">Your market</span><p class="q-text">Where is the demand, who competes with you, and what do you want to be known for?</p></li>
      <li><span class="q-label">Your presence</span><p class="q-text">What do Google, AI assistants and people actually see of your business today?</p></li>
    </ul>
    <p class="close-line">From there, we decide what needs to change first.</p>
  </section>

  <section class="station" aria-labelledby="h-system">
    <p class="eyebrow">One system</p>
    <h2 id="h-system">Strategy becomes execution.</h2>
    ${C.systemLine({
      stations: [
        { name: 'Your business', text: 'The starting point for every decision.' },
        { name: 'Strategy', text: 'We determine where your biggest commercial opportunity lies, and what comes first.' },
        { name: 'Creative', text: 'We translate what sets you apart into a story, an offer and a site that show it.' },
        { name: 'Technology', text: 'What we know about your business, your market and every change sits in one place.' },
        { name: 'Execution', text: 'Website and content, SEO, Google Ads, conversion: what we decide, we also carry out.' },
        { name: 'Measurement', text: 'We measure what changes in enquiries, and adjust.' },
      ],
      loop: 'adjust',
    })}
    ${x.rtb()}
    <div class="system-after"><p>Not as separate services, but as parts of the same growth plan.</p>${x.go('werken', 'How we work together')}</div>
  </section>

  <section class="station st-green" aria-labelledby="h-proof">
    <p class="eyebrow">Proof</p>
    <h2 id="h-proof">What this delivers.</h2>
    <div class="proof">
      ${C.deviceFrame({ desktop: { src: '/assets/img/bovenyvo-desktop-2026-09-24.jpg', w: 1800, h: 1025 }, mobile: { src: '/assets/img/bovenyvo-mobile-2026-09-24.jpg', w: 780, h: 1504 },
        alt: 'The homepage of bovenyvo.be', domain: 'bovenyvo.be',
        caption: 'bovenyvo.be on 24 September 2026, years after the figures in this case (June 2019 compared with June 2020).' })}
      <div class="proof-text">
        <p class="proof-meta">Case · Boven Yvo · growth partner</p>
        <h3>First measure. Then grow. Then, only then, a new website.</h3>
        <p>Aluminium windows and doors, four locations, two brand names, a client since 2017. Data from the first search campaigns then steered both the advertising and the SEO.</p>
        ${C.figures([
          { value: '+170%', label: 'conversions', source: 'All conversions, Google Analytics, June 2019 vs. June 2020' },
          { from: '291', to: '644', label: 'visits from Google', source: 'Search Console, same period' },
        ], 'figures-2')}
        ${x.go('case.boven-yvo', 'Read how that went')}
      </div>
    </div>
    ${C.badges({ label: 'Partners', items: [
      { src: '/assets/img/badge-google-partners.webp', alt: 'Google Partners', w: 548, h: 152 },
      { src: '/assets/img/badge-meta-business-partner.webp', alt: 'Meta Business Partner', w: 786, h: 267 },
      { src: '/assets/img/badge-semrush-agency-partner.webp', alt: 'Semrush Certified Agency Partner', w: 158, h: 158, square: true },
    ] })}
  </section>

</div>
</div>

${x.terminus()}
`,
  };
};
