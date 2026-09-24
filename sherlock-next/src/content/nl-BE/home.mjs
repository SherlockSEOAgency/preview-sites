// /nl/ : entry. One message: van gevonden worden naar gezocht én gekozen worden (Positioning Lock v1).
// One line on the whole page: the hero draws the system (the same stations as "Eén systeem"), the sections are its stations.
export default (x) => {
  const { C } = x;
  return {
    title: 'Sherlock SEO Agency — van gevonden naar gezocht én gekozen worden',
    description: "Sherlock is de SEO- en groei-agency voor gevestigde kmo's: strategie, website, vindbaarheid, Google Ads en meting als één geheel. Bespreek je groeivraag.",
    main: `
<section class="hero hero-line" aria-labelledby="h1">
  <div class="wrap">
    <h1 id="h1">Van gevonden worden naar <span class="accent">gezocht én gekozen</span> worden.</h1>
    <p class="lead">Voor gevestigde kmo's die willen groeien: één senior partner die je bedrijf begrijpt, bepaalt wat eerst moet, en dat ook uitvoert.</p>
    <div class="actions">
      <a class="btn btn-primary" href="${x.href('contact')}">${x.common.cta}</a>
      <a class="btn btn-secondary" href="${x.href('werken')}">Bekijk hoe we werken</a>
    </div>
    <p class="note">Een eerste gesprek duurt 30 minuten en is vrijblijvend.</p>
    ${C.methodLine({
      stations: ['Je bedrijf', 'Strategie', 'Creatie', 'Technologie', 'Uitvoering', 'Meting'],
      channels: ['website', 'zoeken', 'advertenties', 'content'],
      loop: 'bijsturen',
      loopLong: 'en dan bijsturen',
      summary: 'Eén lijn: we beginnen bij je bedrijf, dan strategie, creatie en technologie. Pas bij de uitvoering komen de kanalen: website, zoeken, advertenties en content. We meten wat verandert en sturen de strategie bij.',
    })}
  </div>
</section>

<div class="wrap">
<div class="rail rail-ends">

  <section class="station" aria-labelledby="h-herkenning">
    <p class="eyebrow">Herkenning</p>
    <div class="section-intro">
      <h2 id="h-herkenning">Je bedrijf is beter dan hoe je vandaag online overkomt.</h2>
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
      <li><span class="q-label">Je bedrijf</span><p class="q-text">Wat verkoop je, aan wie, en waarom kiezen klanten voor jou? Waar verdien je het meest, en wat kan je aantonen?</p></li>
      <li><span class="q-label">Je markt</span><p class="q-text">Waar zit de vraag, wie concurreert met je, en waarvoor wil je gekend worden?</p></li>
      <li><span class="q-label">Je aanwezigheid</span><p class="q-text">Wat zien Google, AI-assistenten en mensen vandaag werkelijk van je?</p></li>
    </ul>
    <p class="close-line">Daaruit bepalen we wat er eerst moet veranderen.</p>
  </section>

  <section class="station" aria-labelledby="h-systeem">
    <p class="eyebrow">Eén systeem</p>
    <h2 id="h-systeem">Strategie wordt uitvoering.</h2>
    ${C.systemLine({
      stations: [
        { name: 'Je bedrijf', text: 'Het vertrekpunt van elke beslissing.' },
        { name: 'Strategie', text: 'We bepalen waar je grootste commerciële kans zit, en wat eerst moet.' },
        { name: 'Creatie', text: 'We vertalen wat je anders maakt naar een verhaal, een aanbod en een site die het tonen.' },
        { name: 'Technologie', text: 'Wat we over je bedrijf, je markt en elke ingreep weten, zit op één plek.' },
        { name: 'Uitvoering', text: 'Website en content, SEO, Google Ads, conversie: wat we beslissen, voeren we ook uit.' },
        { name: 'Meting', text: 'We meten wat verandert in aanvragen, en sturen bij.' },
      ],
      loop: 'bijsturen',
    })}
    ${x.rtb()}
    <div class="system-after"><p>Niet als losse diensten, maar als onderdelen van hetzelfde groeiplan.</p>${x.go('werken', 'Zo werken we samen')}</div>
  </section>

  <section class="station st-green" aria-labelledby="h-bewijs">
    <p class="eyebrow">Bewijs</p>
    <h2 id="h-bewijs">Wat dit oplevert.</h2>
    <div class="proof">
      ${C.deviceFrame({ desktop: { src: '/assets/img/bovenyvo-desktop-2026-09-24.jpg', w: 1800, h: 1025 }, mobile: { src: '/assets/img/bovenyvo-mobile-2026-09-24.jpg', w: 780, h: 1504 },
        alt: 'De startpagina van bovenyvo.be', domain: 'bovenyvo.be',
        caption: 'bovenyvo.be op 24 september 2026, jaren na de cijfers in deze case (juni 2019 tegenover juni 2020).' })}
      <div class="proof-text">
        <p class="proof-meta">Case · Boven Yvo · groeipartner</p>
        <h3>Eerst meten. Dan groeien. Dan pas een nieuwe website.</h3>
        <p>Alu ramen en deuren, vier vestigingen, twee merknamen, klant sinds 2017. De data van de eerste zoekcampagnes stuurde daarna zowel de advertenties als de SEO.</p>
        ${C.figures([
          { value: '+170%', label: 'conversies', source: 'Alle conversies, Google Analytics, juni 2019 vs. juni 2020' },
          { from: '291', to: '644', label: 'bezoeken via Google', source: 'Search Console, zelfde periode' },
        ], 'figures-2')}
        ${x.go('case.boven-yvo', 'Lees hoe dat liep')}
      </div>
    </div>
    <div class="voice">
      <p class="voice-more">${x.go('cases', 'Alle cases')}</p>
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
