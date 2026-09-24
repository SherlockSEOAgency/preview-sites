// /nl/ : entry. One message: van gevonden worden naar gezocht én gekozen worden (Positioning Lock v1).
export default (x) => {
  const { C } = x;
  return {
    title: 'Sherlock SEO Agency — van gevonden naar gezocht én gekozen worden',
    description: "Sherlock is de SEO- en groei-agency voor gevestigde KMO's: strategie, website, vindbaarheid, Google Ads en meting als één geheel. Bespreek je groeivraag.",
    main: `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    <h1 id="h1">Van gevonden worden naar <span class="accent">gezocht én gekozen</span> worden.</h1>
    <p class="lead">Voor gevestigde KMO's die willen groeien: één senior partner die je bedrijf begrijpt, bepaalt waar je grootste kans zit, en die het ook uitvoert.</p>
    <div class="actions">
      <a class="btn btn-primary" href="${x.href('contact')}">${x.common.cta}</a>
      <a class="btn btn-secondary" href="${x.href('werken')}">Bekijk hoe we werken</a>
    </div>
    <p class="note">Een eerste gesprek duurt 30 minuten en is vrijblijvend.</p>
    ${C.methodLine({
      stations: ['JE BEDRIJF', 'JE MARKT', 'JE AANWEZIGHEID'],
      channels: ['website', 'zoeken', 'advertenties', 'content', 'meting'],
      summary: 'We beginnen bij je bedrijf, kijken dan naar je markt en je digitale aanwezigheid, en komen pas daarna bij de kanalen: website, zoeken, advertenties, content en meting.',
    })}
  </div>
</section>

<div class="wrap">
<div class="rail rail-ends">

  <section class="station" aria-labelledby="h-herkenning">
    <p class="eyebrow">Herkenning</p>
    <div class="section-intro">
      <h2 id="h-herkenning"><span class="s">Je hebt waarschijnlijk geen marketingprobleem.</span> <span class="s">Je hebt een samenhangprobleem.</span></h2>
      <p class="lead">Je bedrijf draait en je klanten weten waarom ze voor je kiezen. Online zie je daar te weinig van terug.</p>
    </div>
    <ul class="symptoms measure" style="margin-top:36px">
      <li>Je website vertelt niet scherp genoeg waarom iemand voor jullie moet kiezen.</li>
      <li>SEO brengt verkeer, maar te weinig commerciële vraag.</li>
      <li>Advertenties draaien, maar je weet niet welke campagnes echte klanten opleveren.</li>
      <li>Je aanbod of markt is veranderd, maar je digitale aanwezigheid loopt achter.</li>
      <li>Verschillende partners optimaliseren elk hun stukje.</li>
    </ul>
  </section>

  <section class="station" aria-labelledby="h-begin">
    <p class="eyebrow">Waar we beginnen</p>
    <h2 id="h-begin"><span class="s">We beginnen niet bij het kanaal.</span> <span class="s">We beginnen bij je bedrijf.</span></h2>
    <ul class="questions">
      <li><span class="q-label"><i></i>Je bedrijf</span><p class="q-text">Wat verkoop je, aan wie, en waarom kiezen klanten voor jou? Waar zitten je marge en je bewijs?</p></li>
      <li><span class="q-label"><i></i>Je markt</span><p class="q-text">Waar zit de vraag, wie concurreert met je, en waarvoor wil je gekend worden?</p></li>
      <li><span class="q-label"><i></i>Je aanwezigheid</span><p class="q-text">Wat zien Google, AI-assistenten en mensen vandaag werkelijk van je?</p></li>
    </ul>
    <p class="close-line">Daaruit bepalen we wat er moet veranderen. En we voeren het ook uit.</p>
  </section>

  <section class="station" aria-labelledby="h-systeem">
    <p class="eyebrow">Eén systeem</p>
    <h2 id="h-systeem">Strategie wordt uitvoering.</h2>
    ${C.systemLine({
      stations: [
        { name: 'Je bedrijf', text: 'Het vertrekpunt van elke beslissing.' },
        { name: 'Strategie', text: 'We bepalen waar je grootste commerciële kans zit, en wat eerst moet.' },
        { name: 'Creatie', text: 'We vertalen wat je anders maakt naar een verhaal, een aanbod en een site die het tonen.' },
        { name: 'Technologie', text: 'Eigen technologie houdt je bedrijf, je markt en je resultaten bij elkaar.' },
        { name: 'Uitvoering', text: 'Website en content, SEO, Google Ads, conversie: wat we beslissen, voeren we ook uit.' },
        { name: 'Meting', text: 'We meten wat verandert in aanvragen, en sturen bij.' },
      ],
      loop: 'bijsturen',
    })}
    <div class="system-after"><p>Niet als losse diensten, maar als onderdelen van hetzelfde groeiplan.</p>${x.go('werken', 'Zo werken we samen')}</div>
  </section>

  <section class="station st-green" aria-labelledby="h-bewijs">
    <p class="eyebrow">Bewijs</p>
    <h2 id="h-bewijs">Wat dit oplevert.</h2>
    <div class="proof">
      ${C.deviceFrame({ desktop: { src: '/assets/img/bovenyvo-desktop-2026-09-24.jpg', w: 1800, h: 1125 }, mobile: { src: '/assets/img/bovenyvo-mobile-2026-09-24.jpg', w: 780, h: 1688 },
        alt: 'De startpagina van bovenyvo.be', domain: 'bovenyvo.be',
        caption: 'bovenyvo.be, vastgelegd op 24 september 2026. De cijfers gaan over juni 2019 tegenover juni 2020.' })}
      <div class="proof-text">
        <p class="proof-meta">Case · Boven Yvo · groeipartner</p>
        <h3>Eerst meten. Dan groeien. Dan pas een nieuwe website.</h3>
        <p>Alu ramen en deuren, vier vestigingen, twee merknamen, samenwerking vanaf 2017. De data van de eerste zoekcampagnes stuurde daarna zowel de advertenties als de SEO.</p>
        ${C.figures([
          { from: '291', to: '644', label: 'websitebezoeken', source: 'Search Console, juni 2019 vs. juni 2020' },
          { value: '+170%', label: 'conversies', source: 'Alle conversies, Google Analytics, zelfde periode' },
        ], 'figures-2')}
        ${x.go('case.boven-yvo', 'Lees hoe dat liep')}
      </div>
    </div>
    <div class="also">
      <div><p class="proof-meta" style="margin-bottom:6px">Case · opdracht</p><b>Meertalige marketplace</b> <span class="muted">in België, vier talen</span></div>
      <div>
        <div class="also-figs">
          <span class="num">4.261 ${C.smallArrow()} <b>0</b><small>dubbele URL's tussen talen</small></span>
          <span class="num">14.704 ${C.smallArrow()} <b>247</b><small>interne redirects</small></span>
        </div>
        <p class="small" style="margin:6px 0 0">Screaming Frog, crawl voor en na.</p>
      </div>
      ${x.go('case.marketplace', 'Lees de case')}
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
${x.powered()}
`,
  };
};
