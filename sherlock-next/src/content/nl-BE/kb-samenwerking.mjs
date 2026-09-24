// /nl/academie/hoe-verloopt-een-samenwerking-met-sherlock/ : knowledge, Academy section "Voor je kiest".
// Source: the published blog post (sherlockseo.com, WP 5252, 28 September 2025). Rewritten, not edited by cutting:
// the raw post promises a 60-90 minute intake, which conflicts with the 30-minute first conversation the rest of
// the site promises (flagged in the architecture map §19, "settle that before it goes into the journey") — resolved
// here in favour of the site's own promise. Dropped: "geen standaardpakketten" (contradicts the priced plans in the
// offer catalog, §17-7) and "we onderscheiden ons van 90% van onze concurrenten" (unsourced).
export default (x) => {
  const { C } = x;
  return {
    title: 'Hoe verloopt een samenwerking met Sherlock? | Sherlock Academie',
    description: 'Wat er gebeurt nadat je besluit te starten: het eerste gesprek, onze eerste inschatting, en dan een opdracht met een vast eindpunt of een doorlopend partnership.',
    schemaType: 'Article',
    schema: { headline: 'Hoe verloopt een samenwerking met Sherlock?', datePublished: '2025-09-28', dateModified: '2026-09-24', author: { '@id': `${x.model.site.origin}/#org` }, articleSection: 'Voor je kiest' },
    main: `
<header class="article-head">
  <div class="wrap">
    <p class="crumbs"><a href="${x.href('academy')}">Academie</a><span class="sep" aria-hidden="true">›</span>Voor je kiest</p>
    <h1 id="h1" class="h1-inner" style="max-width:16em">Hoe verloopt een samenwerking met Sherlock?</h1>
    <p class="article-meta">Sherlock · september 2025 · herwerkt september 2026</p>
  </div>
</header>

<article class="article" aria-labelledby="h1">
  <div class="wrap article-grid">
    <div class="body rail rail-article">
      <p class="pull">“Je weet vooraf wat we doen, wanneer je resultaat ziet en wat het kost.”</p>

      <h2>Het eerste gesprek: 30 minuten, geen verkooppraatje</h2>
      <p>We starten met luisteren, niet met een voorstel. Wat is je businessmodel, wie is je klant, waar wil je naartoe, en wat heb je al geprobeerd? Dat gesprek duurt 30 minuten en is vrijblijvend: je vertelt waar je bedrijf staat, wij stellen kritische vragen.</p>
      <p>Daarna krijg je onze eerste inschatting van je grootste commerciële kans, en een voorstel: wat we doen, wanneer je resultaat ziet en wat het kost. Geen aannames — als er meer onderzoek nodig is om die inschatting te onderbouwen, zeggen we dat erbij.</p>

      <h2>Dan: een opdracht met een vast eindpunt, of een doorlopend partnership</h2>
      <p>Wat daarna volgt hangt af van je vraag. Kom je met iets concreets — een website die niet overtuigt, campagnes zonder zicht op echte klanten, geen idee wat er converteert — dan wordt dat een <b>opdracht</b>: een afgebakend stuk werk met een eindpunt dat je vooraf kent. Werkt het, dan kan het een doorlopend <b>groeipartnership</b> worden, waarin we samen prioriteren, uitvoeren en bijsturen.</p>
      <p>We werken niet met één vast pakket voor iedereen. Sommige bedrijven hebben eerst tracking nodig, andere direct content of een nieuwe website; timing en budget verschillen. Het traject volgt waar jouw bedrijf vandaag staat, niet een sjabloon.</p>

      <h3>Waarom we hiermee beginnen, en niet met de campagne</h3>
      <p>Voor we optimaliseren of adverteren, zorgen we dat elke actie meetbaar is. Zonder correcte tracking stuur je een campagne op gevoel. <a href="${x.href('kb.tracking')}">Waarom investeren in tracking essentieel is</a> gaat daar dieper op in.</p>

      <h2>Wat je bij elk overleg ziet</h2>
      <p>Als groeipartnership loopt dit door: één plan, dat we samen bijsturen. Bij elk overleg krijg je hetzelfde beeld, in deze volgorde:</p>
      <ul class="checklist">
        <li>Wat we begrepen — over je bedrijf, je markt of de resultaten van de vorige stap</li>
        <li>Wat we beslisten — en waarom, in het licht van je grootste kans</li>
        <li>Wat we opleverden — concreet, niet "we zijn ermee bezig"</li>
        <li>Wat er veranderde — gemeten, niet aangevoeld</li>
        <li>Wat we maten — in aanvragen: formulieren, telefoontjes, offerteaanvragen. Wat daaruit aan omzet volgt, zie je in je eigen verkoop</li>
        <li>Wat we als volgende stap voorstellen</li>
      </ul>
      <p>Resultaten garanderen we niet: posities en rendement hangen ook af van je markt en je aanbod. Wat we wel garanderen is dat je op elk moment weet wat we deden en waarom.</p>
    </div>
    <aside class="article-aside" aria-labelledby="h-praktijk">
      <p class="eyebrow" id="h-praktijk">In de praktijk</p>
      <nav class="continue" aria-label="Verder lezen">
        <a href="${x.href('case.boven-yvo')}"><small>Zo liep het bij Boven Yvo</small><span>Eerst meten. Dan groeien. Dan pas een nieuwe website.${C.ARROW}</span></a>
        <a href="${x.href('werken')}"><small>Start met één vraag</small><span>Groei met één partner.${C.ARROW}</span></a>
      </nav>
    </aside>
  </div>
</article>

${x.terminus({ heading: 'Welke vraag leg je <span class="t-accent">op tafel?</span>', text: 'Een gesprek van 30 minuten, vrijblijvend. Daarna krijg je onze eerste inschatting van je grootste commerciële kans.' })}
`,
  };
};
