// /nl/cases/meertalige-marketplace/ : proof for the opdracht rung (one bounded assignment).
// Source: the published case (sherlockseo.com, WP 5382/5379, published 3 July 2026). The client stays anonymous,
// as published; no screenshot, because it would reveal the client. These are technical results, and the page says so.
export default (x) => {
  const { C } = x;
  return {
    title: "Case meertalige marketplace: 4.261 dubbele URL's naar 0 | Sherlock SEO Agency",
    description: "Een meertalige marketplace in België: de URL-architectuur herbouwd. Dubbele URL's tussen talen 4.261 → 0, interne redirects 14.704 → 247 (Screaming Frog, crawl voor en na).",
    schemaType: 'Article',
    schema: { headline: "Van 4.261 dubbele URL's tussen talen naar nul", datePublished: '2026-07-03', dateModified: '2026-09-24', author: { '@id': `${x.model.site.origin}/#org` } },
    main: `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Case · opdracht · meertalige marketplace (België)</p>
    <h1 id="h1" class="h1-inner">Van 4.261 dubbele URL's tussen talen <span class="accent">naar nul.</span></h1>
    <dl class="facts facts-4">
      <div><dt>Sector</dt><dd>Events, marketplace</dd></div>
      <div><dt>Platform</dt><dd>Drupal 10, vier talen (NL, FR, DE, EN), ±20.000 listings</dd></div>
      <div><dt>Wat we deden</dt><dd>Technische SEO, SEO-architectuur, full-stack development, QA</dd></div>
      <div><dt>Case gepubliceerd</dt><dd>Juli 2026</dd></div>
    </dl>
    ${C.figures([
      { from: '14.704', to: '247', label: 'interne redirects', source: 'Screaming Frog, crawl voor en na de opdracht' },
      { from: '835', to: '95', label: "kapotte pagina's (404)", source: 'Screaming Frog, crawl voor en na de opdracht' },
      { value: '5.554', label: 'unieke listings correct indexeerbaar, in vier talen', source: 'Screaming Frog, crawl na de opdracht' },
    ], 'figures-3')}
    <p class="tech-note">Technische resultaten: ze tonen wat er in de site veranderde. De crawl-omvang halveerde, zodat Google zijn tijd besteedt aan pagina's die klanten kunnen opleveren.</p>
  </div>
</section>

<div class="wrap">
<div class="rail rail-ends">

  <section class="station" aria-labelledby="h-uitdaging">
    <p class="eyebrow">De uitdaging</p>
    <h2 id="h-uitdaging">Een site die zijn eigen duplicaten maakte.</h2>
    <div class="measure" style="margin-top:20px">
      <p>De marketplace presteerde ondermaats in Google: dalende zichtbaarheid, pagina's die niet indexeerden, en een crawl vol ruis. Van de 91.614 gecrawlde URL's was 42% een redirect.</p>
      <p>De site maakt zijn pagina's zelf aan. Elke combinatie van taal, categorie, regio en type kán een URL worden. Zonder regels groeit dat tot ±50.000 pagina's die elkaars posities wegnemen en het crawlbudget van Google opgebruiken.</p>
    </div>
  </section>

  <section class="station" aria-labelledby="h-beslist">
    <p class="eyebrow">Wat we beslisten</p>
    <h2 id="h-beslist">Het probleem zat in de machine, niet in de pagina's.</h2>
    <div class="measure" style="margin-top:20px">
      <p>Titels, teksten en links aanpassen lost dit niet op. Daarom legden we naast de crawl ook een audit van de code: hoe worden pagina's en URL's gemaakt? Daar zaten de oorzaken, onzichtbaar voor elke crawl.</p>
      <p>De regel die we kozen: hoogstens twee dimensies per URL. Dat geeft ±3.000 beheersbare URL's in plaats van ±50.000.</p>
    </div>
  </section>

  <section class="station" aria-labelledby="h-gebouwd">
    <p class="eyebrow">Wat we bouwden</p>
    <h2 id="h-gebouwd">Ontworpen, gebouwd en getest.</h2>
    <ol class="story">
      <li><b>Een meertalige URL-architectuur</b><span>Vertaalde hubs, categorieën, regio's en facetten.</span></li>
      <li><b>Canonical en hreflang, herschreven</b><span>Vier talen, alleen volledige clusters.</span></li>
      <li><b>Indexatieregels</b><span>Unieke pagina's indexeerbaar; duplicaten en paginatie niet.</span></li>
      <li><b>XML-sitemaps per taal</b><span>Met strikte controle per cluster.</span></li>
      <li><b>Redirect-lagen</b><span>Voor oude URL's, parameters en varianten in hoofdletters.</span></li>
      <li><b>Tests en overdracht</b><span>Unit- en end-to-end-tests (PHPUnit, Playwright), 258 commits, en per probleem een geprioriteerde lijst voor hun ontwikkelaars.</span></li>
    </ol>
  </section>

  <section class="station st-green" aria-labelledby="h-zegt">
    <p class="eyebrow">Wat dit zegt</p>
    <h2 id="h-zegt">Een crawl toont wat een site laat zien. Hoe pagina's ontstaan, zie je alleen in de code.</h2>
    <div class="next-read" style="margin-top:48px">
      <p class="proof-meta" style="margin:0">Hoe een opdracht verloopt</p>
      <a class="big" href="${x.href('werken')}">Start met één vraag. Groei met één partner.${C.ARROW}</a>
    </div>
    <div class="next-read" style="margin-top:40px">
      <p class="proof-meta" style="margin:0">Nog een case · groeipartner</p>
      <a class="big" href="${x.href('case.boven-yvo')}">Boven Yvo: eerst meten, dan groeien, dan pas een nieuwe website${C.ARROW}</a>
    </div>
  </section>

</div>
</div>

${x.terminus({ heading: 'Een vraag met een <span class="t-accent">duidelijk eindpunt?</span>', text: 'Een opdracht begint met een gesprek van 30 minuten. In het voorstel staat wat we doen, wanneer het af is en wat het kost.' })}
`,
  };
};
