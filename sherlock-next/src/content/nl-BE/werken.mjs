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
<section class="hero hero-line" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Werken met Sherlock</p>
    <h1 id="h1">Start met één vraag. <span class="accent s">Groei met één partner.</span></h1>
    <p class="lead">Je komt met iets concreets: een nieuwe website, campagnes die te weinig opleveren, een plafond in je groei. We pakken die vraag aan vanuit je bedrijf, niet vanuit één kanaal. Werkt het, dan ga je met ons verder als groeipartner.</p>
    <div class="actions">
      <a class="btn btn-primary" href="${x.href('contact')}">${x.common.cta}</a>
      <a class="btn btn-secondary" href="${x.href('case.boven-yvo')}">Bekijk een case</a>
    </div>
    ${C.ladderLine({ start: 'Je vraag', first: 'Opdracht', firstSub: 'met een eindpunt dat je vooraf kent', second: 'Groeipartner', secondSub: 'doorlopend, samen bijgestuurd', loop: 'bijsturen', loopLong: 'en dan bijsturen',
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
    <p class="lead" style="margin-top:18px">Het begint met een gesprek van 30 minuten over waar je bedrijf staat en waar je naartoe wil. Daarna krijg je onze eerste inschatting van je grootste commerciële kans, en een voorstel: wat we doen, wanneer je resultaat ziet en wat het kost.</p>
    <div class="actions" style="margin-top:28px"><a class="btn btn-primary" href="${x.href('contact')}">${x.common.cta}</a></div>
  </section>

  <section class="station" aria-labelledby="h-partner" data-offer-rung="groeipartner" data-offer-key="${offers.groeipartner.join(' ')}">
    <p class="eyebrow">Het partnership</p>
    <h2 id="h-partner">Daarna: één partner.</h2>
    <p class="lead" style="margin-top:18px">Als groeipartner nemen we de verantwoordelijkheid voor prioriteren, uitvoeren en bijleren. Eén plan, dat we samen bijsturen.</p>
    <p style="margin:34px 0 0;font:700 16px var(--head)">In elk overleg zie je:</p>
    <ul class="seen">
      <li>wat we begrepen</li>
      <li>wat we beslisten</li>
      <li>wat we opleverden</li>
      <li>wat er veranderde</li>
      <li>wat we maten</li>
      <li>wat we als volgende stap voorstellen</li>
    </ul>
  </section>

  <section class="station st-green" aria-labelledby="h-bewijs">
    <p class="eyebrow">Bewijs</p>
    <h2 id="h-bewijs">Bewijs per stap.</h2>
    <div class="proof-pair">
      ${C.quote({ text: 'Sherlock SEO Agency bestaat uit een team dat met je meedenkt en op een unieke manier je business-opportuniteiten blootlegt en ontplooit.', name: 'Emiel Denis', company: 'Saniswitch' })}
      <nav class="continue" aria-label="Cases">
        <a href="${x.href('case.marketplace')}" data-offer-rung="opdracht"><small>Opdracht · meertalige marketplace</small><span>Per taal één pagina die Google toont, in plaats van duplicaten die elkaar beconcurreren.${C.ARROW}</span></a>
        <a href="${x.href('case.boven-yvo')}" data-offer-rung="groeipartner"><small>Groeipartner · Boven Yvo</small><span>Eerst meten, dan advertenties, SEO en content, en pas daarna een nieuwe website.${C.ARROW}</span></a>
      </nav>
    </div>
  </section>

  <section class="station" aria-labelledby="h-vragen">
    <p class="eyebrow">Vragen</p>
    <h2 id="h-vragen">Wat klanten ons eerst vragen.</h2>
    <dl class="faq">
      <div><dt>Wat kost het?</dt><dd>Een groeipartnership is een vast bedrag per maand, geen uurtje-factuurtje. Een opdracht krijgt een eigen prijs in het voorstel.</dd></div>
      <div><dt>Garanderen jullie resultaten?</dt><dd>Nee. Posities en rendement garanderen we niet: die hangen ook af van je markt en je aanbod.</dd></div>
      <div><dt>Moeten we alles bij jullie onderbrengen?</dt><dd>Nee. Je eigen team of andere partners kunnen delen blijven doen. Wij zorgen dat alles van hetzelfde plan vertrekt.</dd></div>
      <div><dt>Wat meten jullie precies?</dt><dd>Aanvragen: formulieren, telefoontjes, offertevragen. Hoeveel omzet daaruit volgt, zie je in je eigen verkoop.</dd></div>
      <div><dt>En AI-zoekmachines?</dt><dd>We kijken hoe Google én AI-assistenten je bedrijf vandaag samenvatten, als deel van je digitale aanwezigheid. Resultaten beloven we daar niet.</dd></div>
    </dl>
  </section>

</div>
</div>

${x.terminus({ heading: 'Welke vraag leg je <span class="t-accent">op tafel?</span>', text: '' })}
`,
  };
};
