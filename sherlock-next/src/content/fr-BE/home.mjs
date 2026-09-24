// /fr/ : FR-BE entry. Same concept and structure as /nl/, written for the French-speaking Belgian market
// (PME, référencement, agence), not translated sentence by sentence. Case pages exist in Dutch only for now:
// links to them say so. Figures, sources and periods are the same facts as on /nl/. Testimonials are not
// translated (that would put words in a client's mouth), so this page carries none yet.
export default (x) => {
  const { C } = x;
  return {
    title: 'Sherlock SEO Agency — agence SEO et marketing digital pour PME en Belgique',
    description: 'Sherlock est l’agence SEO et de croissance des PME établies : stratégie, site web, référencement, Google Ads et mesure comme un seul ensemble. Parlons de votre croissance.',
    main: `
<section class="hero hero-line" aria-labelledby="h1">
  <div class="wrap">
    <h1 id="h1">Ne plus seulement être trouvé. <span class="accent">Être recherché, et choisi.</span></h1>
    <p class="lead">Pour les PME établies qui veulent grandir : un partenaire expérimenté qui comprend votre entreprise, détermine par quoi commencer, et s’occupe aussi de l’exécution.</p>
    <div class="actions">
      <a class="btn btn-primary" href="${x.href('contact')}">${x.common.cta}</a>
      <a class="btn btn-secondary" href="#methode">Notre façon de travailler</a>
    </div>
    <p class="note">Un premier entretien dure 30 minutes et ne vous engage à rien.</p>
    ${C.methodLine({
      stations: ['Votre entreprise', 'Stratégie', 'Création', 'Technologie', 'Exécution', 'Mesure'],
      channels: ['site', 'référencement', 'publicité', 'contenu'],
      loop: 'ajuster',
      loopLong: 'puis ajuster',
      summary: 'Une seule ligne : nous commençons par votre entreprise, puis la stratégie, la création et la technologie. Les canaux n’arrivent qu’à l’exécution : site, référencement, publicité et contenu. Nous mesurons ce qui change et ajustons la stratégie.',
    })}
  </div>
</section>

<div class="wrap">
<div class="rail rail-ends">

  <section class="station" aria-labelledby="h-constat">
    <p class="eyebrow">Constat</p>
    <div class="section-intro">
      <h2 id="h-constat">Votre entreprise est meilleure que ce qu’elle montre aujourd’hui en ligne.</h2>
    </div>
    <ul class="symptoms measure" style="margin-top:36px">
      <li>Votre site ne dit pas assez clairement pourquoi choisir votre entreprise.</li>
      <li>Le référencement amène des visites, mais trop peu de demandes.</li>
      <li>Vos campagnes tournent, sans que vous sachiez lesquelles amènent de vrais clients.</li>
      <li>Votre offre ou votre marché a changé, votre présence en ligne pas encore.</li>
      <li>Plusieurs prestataires optimisent chacun leur morceau.</li>
    </ul>
  </section>

  <section class="station" aria-labelledby="h-depart">
    <p class="eyebrow">Notre point de départ</p>
    <h2 id="h-depart"><span class="s">Nous ne commençons pas par le canal.</span> <span class="s">Nous commençons par votre entreprise.</span></h2>
    <ul class="questions">
      <li><span class="q-label">Votre entreprise</span><p class="q-text">Que vendez-vous, à qui, et pourquoi vos clients vous choisissent-ils ? Où gagnez-vous le plus, et que pouvez-vous démontrer ?</p></li>
      <li><span class="q-label">Votre marché</span><p class="q-text">Où se trouve la demande, qui sont vos concurrents, et pour quoi voulez-vous être connu ?</p></li>
      <li><span class="q-label">Votre présence</span><p class="q-text">Que voient aujourd’hui Google, les assistants IA et vos clients de votre entreprise ?</p></li>
    </ul>
    <p class="close-line">À partir de là, nous déterminons ce qui doit changer en premier.</p>
  </section>

  <section class="station" id="methode" aria-labelledby="h-systeme">
    <p class="eyebrow">Un seul système</p>
    <h2 id="h-systeme">La stratégie devient exécution.</h2>
    ${C.systemLine({
      stations: [
        { name: 'Votre entreprise', text: 'Le point de départ de chaque décision.' },
        { name: 'Stratégie', text: 'Nous déterminons où se trouve votre plus grande opportunité commerciale, et par quoi commencer.' },
        { name: 'Création', text: 'Nous traduisons ce qui vous distingue en un récit, une offre et un site qui le montrent.' },
        { name: 'Technologie', text: 'Ce que nous savons de votre entreprise, de votre marché et de chaque intervention se trouve à un seul endroit.' },
        { name: 'Exécution', text: 'Site et contenu, SEO, Google Ads, conversion : ce que nous décidons, nous l’exécutons.' },
        { name: 'Mesure', text: 'Nous mesurons ce qui change en demandes, et nous ajustons.' },
      ],
      loop: 'ajuster',
    })}
    ${x.rtb()}
    <div class="system-after"><p>Pas des services séparés, mais les parties d’un même plan de croissance.</p></div>
  </section>

  <section class="station st-green" aria-labelledby="h-preuves">
    <p class="eyebrow">Preuves</p>
    <h2 id="h-preuves">Ce que cela rapporte.</h2>
    <div class="proof">
      ${C.deviceFrame({ desktop: { src: '/assets/img/bovenyvo-desktop-2026-09-24.jpg', w: 1800, h: 1025 }, mobile: { src: '/assets/img/bovenyvo-mobile-2026-09-24.jpg', w: 780, h: 1504 },
        alt: 'La page d’accueil de bovenyvo.be', domain: 'bovenyvo.be',
        caption: 'bovenyvo.be le 24 septembre 2026, des années après les chiffres de cette étude de cas (juin 2019 par rapport à juin 2020).' })}
      <div class="proof-text">
        <p class="proof-meta">Étude de cas · Boven Yvo · partenaire de croissance</p>
        <h3>D’abord mesurer. Puis grandir. Et seulement ensuite, un nouveau site.</h3>
        <p>Châssis et portes en aluminium, quatre implantations, deux marques, client depuis 2017. Les données des premières campagnes Google Ads (Search) ont ensuite guidé la publicité comme le référencement.</p>
        ${C.figures([
          { value: '+170 %', label: 'conversions', source: 'Toutes les conversions, Google Analytics, juin 2019 vs juin 2020' },
          { from: '291', to: '644', label: 'visites depuis Google', source: 'Search Console, même période' },
        ], 'figures-2')}
        ${x.go('case.boven-yvo', 'Lire l’étude de cas')}
      </div>
    </div>
    ${C.badges({ label: 'Partenaires', items: [
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
