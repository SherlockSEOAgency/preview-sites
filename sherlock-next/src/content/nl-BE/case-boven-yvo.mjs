// /nl/cases/boven-yvo/ : proof for the groeipartner rung.
// Source: the published case (sherlockseo.com, WP 2454/1802, published 21 February 2023). Only published facts;
// the published headline percentages are not reused because they do not match the raw figures.
// Story order as published: local lead generation first (from 2017), measure, campaigns, SEO and content; only after
// years of growing leads did the question become better leads, and our advice was a new website.
// The screenshot is today's bovenyvo.be, captured on 2026-09-24; the page never claims today's design as ours.
export default (x) => {
  const { C } = x;
  return {
    title: 'Case Boven Yvo: eerst meten, dan groeien | Sherlock SEO Agency',
    description: 'Boven Yvo, alu ramen en deuren: eerst alle conversies meten, dan advertenties, SEO en content, en pas daarna een nieuwe website. +170% conversies en 291 → 644 bezoeken via Google (juni 2019 vs. juni 2020).',
    schemaType: 'Article',
    schema: { headline: 'Eerst meten. Dan groeien. Dan pas een nieuwe website.', datePublished: '2023-02-21', dateModified: '2026-09-24', author: { '@id': `${x.model.site.origin}/#org` }, about: 'Boven Yvo' },
    main: `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Case · Boven Yvo · groeipartner</p>
    <h1 id="h1" class="h1-inner">Eerst meten. Dan groeien. <span class="accent s">Dan pas een nieuwe website.</span></h1>
    <dl class="facts facts-4">
      <div><dt>Sector</dt><dd>Bouw, beglazing: alu ramen en deuren</dd></div>
      <div><dt>Vestigingen</dt><dd>Vier, onder twee merknamen</dd></div>
      <div><dt>Klant sinds</dt><dd>2017</dd></div>
      <div><dt>Case gepubliceerd</dt><dd>Februari 2023</dd></div>
    </dl>
    ${C.figures([
      { value: '+170%', label: 'conversies', source: 'Alle conversies, Google Analytics, juni 2019 vs. juni 2020' },
      { from: '291', to: '644', label: 'bezoeken via Google', source: 'Search Console, zelfde periode' },
    ], 'figures-2 figures-hero')}
  </div>
</section>

<div class="wrap">
  <div class="case-shots">
    ${C.deviceFrame({ desktop: { src: '/assets/img/bovenyvo-desktop-2026-09-24.jpg', w: 1800, h: 1025 }, mobile: { src: '/assets/img/bovenyvo-mobile-2026-09-24.jpg', w: 780, h: 1504 },
      alt: 'De startpagina van bovenyvo.be', domain: 'bovenyvo.be' })}
    ${C.phoneFrame({ src: '/assets/img/bovenyvo-mobile-2026-09-24.jpg', alt: 'De startpagina van bovenyvo.be op een smartphone', width: 780, height: 1504, cls: 'only-wide', lazy: true })}
  </div>
  <p class="small" style="margin:14px 0 0">bovenyvo.be op 24 september 2026, jaren na de cijfers in deze case (juni 2019 tegenover juni 2020).</p>
</div>

<div class="wrap">
<div class="rail rail-ends">

  <section class="station" aria-labelledby="h-begrepen">
    <p class="eyebrow">Wat we begrepen</p>
    <h2 id="h-begrepen" class="visually-hidden">Wat we begrepen</h2>
    <p class="statement">Boven Yvo wilde meer lokale aanvragen, in Oost-Vlaanderen en Vlaams-Brabant.</p>
  </section>

  <section class="station" aria-labelledby="h-beslist">
    <p class="eyebrow">Wat we beslisten</p>
    <h2 id="h-beslist" class="visually-hidden">Wat we beslisten</h2>
    <p class="statement">Eerst alle conversies meten. Daarna de data van de zoekcampagnes gebruiken om zowel de organische als de betaalde campagnes op te zetten.</p>
  </section>

  <section class="station" aria-labelledby="h-opgeleverd">
    <p class="eyebrow">Wat we opleverden</p>
    <h2 id="h-opgeleverd">In deze volgorde.</h2>
    <ol class="story">
      <li><b>Conversiemeting</b><span>Eerst: alle conversies bijgehouden.</span></li>
      <li><b>Zoekcampagnes</b><span>Die aanvragen opleverden, en de data voor de organische en betaalde campagnes.</span></li>
      <li><b>Technische en on-page SEO</b><span>Samen met de ontwikkelaars van Boven Yvo, op de bestaande site.</span></li>
      <li><b>Content en een Pinterest-strategie</b><span>Extra inhoud op de bestaande site.</span></li>
      <li><b>Webmasterbeheer</b><span>Updates en beveiliging, toen hun ontwikkelaar stopte.</span></li>
    </ol>
  </section>

  <section class="station" aria-labelledby="h-veranderd">
    <p class="eyebrow">Wat er veranderde</p>
    <h2 id="h-veranderd" class="visually-hidden">Wat er veranderde</h2>
    <p class="statement">De aanvragen groeiden elk jaar. Toen werd de vraag: niet méér aanvragen, maar betere.</p>
  </section>

  <section class="station st-green" aria-labelledby="h-volgende">
    <p class="eyebrow">Wat we voorstelden</p>
    <h2 id="h-volgende">Een nieuwe website, die de kwaliteit van het bedrijf beter toont.</h2>
    <p class="muted" style="margin:16px 0 0;max-width:36em">Dat was ons advies, na jaren van meten, campagnes, SEO en content.</p>
    <div class="next-read" style="margin-top:48px">
      <p class="proof-meta" style="margin:0">Uit de Academie</p>
      <a class="big" href="${x.href('kb.business-klopt')}">Waarom SEO pas werkt als je business klopt${C.ARROW}</a>
      <p class="muted" style="margin:0">Waarom we eerst de basis leggen, en pas daarna opschalen.</p>
    </div>
    <div class="next-read" style="margin-top:40px">
      <p class="proof-meta" style="margin:0">Nog een case · opdracht</p>
      <a class="big" href="${x.href('case.marketplace')}">Van 4.261 dubbele URL's tussen talen naar nul${C.ARROW}</a>
    </div>
  </section>

</div>
</div>

${x.terminus({ heading: 'Waar zit <span class="t-accent">jouw grootste kans?</span>', text: 'Vertel in 30 minuten waar je bedrijf staat. Daarna krijg je onze eerste inschatting.' })}
`,
  };
};
