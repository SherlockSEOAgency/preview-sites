// /nl/academie/hoe-laat-je-online-marketing-echt-opbrengen/ : knowledge, Academy section "Voor je kiest".
// Source: the published blog post (sherlockseo.com, WP 5269, 28 September 2025). Rewritten: dropped the unsourced
// "90% van bedrijven" framing and the unpublished case results ("de beste maand ooit", "#1 positie", an
// unbounded-length client story) — replaced with the patterns we see, stated as observation, not statistic.
export default (x) => {
  const { C } = x;
  return {
    title: 'Hoe laat je online marketing écht opbrengen? | Sherlock Academie',
    description: 'Meer kanalen lossen het niet op. Wat we vaak tegenkomen bij bedrijven die al "iets aan marketing doen" zonder resultaat, en wat wel werkt: een doel, tracking, een scherpe boodschap, en dan pas schalen.',
    schemaType: 'Article',
    schema: { headline: 'Hoe laat je online marketing écht opbrengen?', datePublished: '2025-09-28', dateModified: '2026-09-24', author: { '@id': `${x.model.site.origin}/#org` }, articleSection: 'Voor je kiest' },
    main: `
<header class="article-head">
  <div class="wrap">
    <p class="crumbs"><a href="${x.href('academy')}">Academie</a><span class="sep" aria-hidden="true">›</span>Voor je kiest</p>
    <h1 id="h1" class="h1-inner" style="max-width:14em">Hoe laat je online marketing écht opbrengen?</h1>
    <p class="article-meta">Sherlock · september 2025 · herwerkt september 2026</p>
  </div>
</header>

<article class="article" aria-labelledby="h1">
  <div class="wrap article-grid">
    <div class="body rail rail-article">
      <p class="pull">“Meer kanalen lossen het niet op. Een doel, tracking en een scherpe boodschap wel.”</p>

      <h2>“We doen al iets aan marketing, maar het brengt weinig op”</h2>
      <p>Dat horen we vaak. Er is een website, er draait een advertentiecampagne, er verschijnt af en toe een blogpost. En toch: geen duidelijke aanvragen, geen zicht op wat werkt. Wat meestal ontbreekt is niet nog een kanaal, maar een doel, tracking en een scherpe boodschap — in die volgorde.</p>

      <h2>Wat we vaak tegenkomen</h2>
      <ul class="checklist">
        <li>Marketing starten zonder te definiëren wat een aanvraag waard is of wat succes betekent</li>
        <li>Meteen adverteren of content maken, zonder een strategie waar dat in past</li>
        <li>Wel Analytics, maar geen conversiemeting — kliks tellen, geen klanten</li>
        <li>Content over het eigen bedrijf, niet over de vraag van de klant</li>
        <li>Een campagne die maandenlang "gewoon loopt" zonder ooit bijgestuurd te worden</li>
      </ul>
      <p>Geen van deze losstaand is fataal. Samen zorgen ze ervoor dat je nooit weet welk deel van je budget iets oplevert.</p>

      <h2>Wat wél werkt</h2>
      <p>Bij ons komt dat altijd in dezelfde volgorde: eerst een intake om te weten waar je nu staat en wat realistisch is. Dan tracking, zodat elke volgende beslissing op data steunt, niet op aanvoelen. Dan pas een strategie op maat van jouw doelen — doelgroep, positionering, kanalen, prioriteiten. Daarna gefaseerde uitvoering: eerst de basis, dan uitbouwen. En maandelijks bijsturen op basis van wat de cijfers tonen, niet op basis van gevoel.</p>

      <h3>Waarom de volgorde ertoe doet</h3>
      <p>Adverteren zonder tracking betekent dat je nooit weet welk deel werkte. Content maken zonder positionering betekent dat je overtuigend schrijft voor niemand in het bijzonder. Elke stap die je overslaat, betaal je later terug in budget dat je niet kunt verantwoorden.</p>

      <h2>Kosten versus investeren</h2>
      <p>Zonder duidelijk doel en tracking is een marketingbudget een kost: je geeft uit en hoopt. Met een plan en meting wordt het een investering waarvan je het rendement kunt volgen — in aanvragen, niet in beloftes.</p>
    </div>
    <aside class="article-aside" aria-labelledby="h-praktijk">
      <p class="eyebrow" id="h-praktijk">In de praktijk</p>
      <nav class="continue" aria-label="Verder lezen">
        <a href="${x.href('kb.tracking')}"><small>Eerst dit</small><span>Waarom investeren in tracking essentieel is.${C.ARROW}</span></a>
        <a href="${x.href('werken')}"><small>Hoe we samenwerken</small><span>Start met één vraag. Groei met één partner.${C.ARROW}</span></a>
      </nav>
    </aside>
  </div>
</article>

${x.terminus({ heading: 'Weet je waar <span class="t-accent">je budget lekt?</span>', text: 'Een gesprek van 30 minuten, vrijblijvend. Daarna krijg je onze eerste inschatting van je grootste commerciële kans.' })}
`,
  };
};
