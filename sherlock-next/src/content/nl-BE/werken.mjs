// /nl/werken-met-sherlock/ : commercial surface. Start with one question (opdracht), grow with one partner (groeipartner).
// Offer elements carry data-offer-key = keys of the Sherlock offer catalog: the catalog decides
// what an offer is; this page only words it for the customer. No prices here (the catalog has not decided them).
export default (x) => {
  const { C } = x;
  const offers = x.model.concepts.werken.offers;
  return {
    title: 'Werken met Sherlock: marketing uitbesteden aan één partner | Sherlock SEO Agency',
    description: 'Start met één concrete groeivraag en groei verder met één partner. Eerst je bedrijf, dan de opdracht, daarna samen bijsturen. Bespreek je groeivraag.',
    main: `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Werken met Sherlock</p>
    <h1 id="h1">Start met één vraag. <span class="accent s">Groei met één partner.</span></h1>
    <p class="lead">Je komt met iets concreets: een nieuwe website, campagnes die te weinig opleveren, een plafond in je groei. We pakken die vraag aan vanuit je bedrijf, niet vanuit één kanaal. Werkt het, dan blijven we als groeipartner.</p>
    <div class="actions">
      <a class="btn btn-primary" href="${x.href('contact')}">${x.common.cta}</a>
      <a class="btn btn-secondary" href="${x.href('case.boven-yvo')}">Bekijk een case</a>
    </div>
    ${C.ladderLine({ start: 'JE VRAAG', first: 'OPDRACHT', second: 'GROEIPARTNER', loop: 'bijsturen',
      summary: 'Je vraag wordt eerst één opdracht met een vast eindpunt. Daarna kan het een doorlopend partnership worden dat we samen bijsturen.' })}
  </div>
</section>

<div class="wrap">
<div class="rail rail-ends">

  <section class="station" aria-labelledby="h-vraag" data-offer-rung="opdracht" data-offer-key="${offers.opdracht.join(' ')}">
    <p class="eyebrow">De opdracht</p>
    <h2 id="h-vraag">Waarmee je binnenkomt.</h2>
    <ul class="asks">
      <li data-offer-key="website_conversion landing_page"><span class="a-ask">Een website die uitlegt waarom klanten voor jou kiezen</span><p class="a-out">Pagina's die bezoek omzetten in aanvragen, met het resultaat gemeten.</p></li>
      <li data-offer-key="tracking_foundation"><span class="a-ask">Weten welke campagnes echte klanten opleveren</span><p class="a-out">Aanvragen betrouwbaar gemeten, zodat beslissingen over je site en je campagnes niet meer op gevoel lopen.</p></li>
      <li data-offer-key="paid_acquisition"><span class="a-ask">Advertenties die aanvragen opleveren, niet alleen kliks</span><p class="a-out">Campagnes volgens een mediaplan, doorlopend opgevolgd op aanvragen.</p></li>
      <li data-offer-key="seo_growth"><span class="a-ask">Gevonden worden op wat je verkoopt</span><p class="a-out">Meer relevant bezoek op de onderwerpen die aanvragen opleveren.</p></li>
    </ul>
    <p class="close-line">Elke opdracht heeft een eindpunt dat je vooraf kent: wat we opleveren en hoe we zien dat het werkt.</p>
  </section>

  <section class="station" aria-labelledby="h-start">
    <p class="eyebrow">De start</p>
    <h2 id="h-start">Eerst je bedrijf, dan de opdracht.</h2>
    <ol class="steps">
      <li><span class="st-name">Een gesprek van 30 minuten</span><span class="st-text">Je vertelt waar je bedrijf staat en waar je naartoe wil. Vrijblijvend.</span></li>
      <li><span class="st-name">Onze eerste lezing</span><span class="st-text">Waar je grootste commerciële kans zit, en wat eerst moet.</span></li>
      <li><span class="st-name">Een voorstel</span><span class="st-text">Wat we doen, wanneer het af is en wat het kost.</span></li>
    </ol>
  </section>

  <section class="station" aria-labelledby="h-partner" data-offer-rung="groeipartner" data-offer-key="${offers.groeipartner.join(' ')}">
    <p class="eyebrow">Het partnership</p>
    <h2 id="h-partner">Daarna: één partner.</h2>
    <p class="lead" style="margin-top:18px">Als groeipartner nemen we de verantwoordelijkheid voor prioriteren, uitvoeren en bijleren. Eén plan, dat we samen bijsturen.</p>
    <p style="margin:34px 0 0;font:700 16px var(--head)">Bij elke bijsturing zie je:</p>
    <ul class="seen">
      <li>wat we begrepen</li>
      <li>wat we beslisten</li>
      <li>wat we opleverden</li>
      <li>wat er veranderde</li>
      <li>wat we maten <span>in aanvragen, niet in omzet: die koppeling zit in je eigen verkoop</span></li>
      <li>wat we als volgende stap voorstellen</li>
    </ul>
    ${C.quote({ text: 'Sherlock SEO Agency bestaat uit een team dat met je meedenkt en op een unieke manier je business-opportuniteiten blootlegt en ontplooit.', name: 'Emiel Denis', company: 'Saniswitch' })}
  </section>

  <section class="station st-green" aria-labelledby="h-bewijs">
    <p class="eyebrow">Bewijs</p>
    <h2 id="h-bewijs">Bewijs per stap.</h2>
    <div class="rungs">
      <article class="rung" data-offer-rung="opdracht">
        <p class="r-kind">Eén opdracht met een eindpunt</p>
        <h3>Meertalige marketplace, België</h3>
        <p>Een platform in vier talen maakte zijn eigen duplicaten aan. We herbouwden de meertalige URL-architectuur, tot en met de tests.</p>
        ${C.figures([
          { from: '4.261', to: '0', label: "dubbele URL's tussen talen", source: 'Screaming Frog, crawl voor en na' },
          { from: '14.704', to: '247', label: 'interne redirects', source: 'Screaming Frog, crawl voor en na' },
        ], 'figures-2')}
        ${x.go('case.marketplace', 'Lees de case')}
      </article>
      <article class="rung" data-offer-rung="groeipartner">
        <p class="r-kind">Eén partner, stap voor stap</p>
        <h3>Boven Yvo, alu ramen en deuren</h3>
        <p>Eerst alle conversies meten, dan advertenties, SEO en content, en pas daarna een nieuwe website.</p>
        ${C.figures([
          { from: '291', to: '644', label: 'websitebezoeken', source: 'Search Console, juni 2019 vs. juni 2020' },
          { value: '+170%', label: 'conversies', source: 'Alle conversies, Google Analytics, zelfde periode' },
        ], 'figures-2')}
        ${x.go('case.boven-yvo', 'Lees de case')}
      </article>
    </div>
  </section>

  <section class="station" aria-labelledby="h-vragen">
    <p class="eyebrow">Vragen</p>
    <h2 id="h-vragen">Wat klanten ons eerst vragen.</h2>
    <dl class="faq">
      <div><dt>Wat kost het?</dt><dd>Een groeipartnership is een vast bedrag per maand, geen uurtje-factuurtje. Een opdracht krijgt een eigen prijs in het voorstel.</dd></div>
      <div><dt>Garanderen jullie resultaten?</dt><dd>Nee. Posities en rendement garanderen we niet: die hangen ook af van je markt en je aanbod.</dd></div>
      <div><dt>Moeten we alles bij jullie onderbrengen?</dt><dd>Nee. Je eigen team of andere partners kunnen delen blijven doen. Wij zorgen dat alles van hetzelfde plan vertrekt.</dd></div>
      <div><dt>En AI-zoekmachines?</dt><dd>We kijken hoe Google én AI-assistenten je bedrijf vandaag samenvatten, als deel van je digitale aanwezigheid. Resultaten beloven we daar niet.</dd></div>
    </dl>
  </section>

</div>
</div>

${x.terminus({ heading: 'Welke vraag leg je <span class="t-accent">op tafel?</span>', text: '' })}
${x.powered()}
`,
  };
};
