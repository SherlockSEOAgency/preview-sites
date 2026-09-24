// /nl/academie/de-kracht-van-positionering-en-branding/ : knowledge, Academy section "Voor je kiest".
// Source: the published blog post (sherlockseo.com, WP 5266, 28 September 2025). Rewritten: dropped "we zijn geen
// klassiek SEO-bureau" and "geen pakketten, maar gefaseerde trajecten" (contradicts the priced plans in the offer
// catalog, §17-7) and the self-description as "strategisch digitaal marketingbureau" (off the Lock's CATEGORY:
// Agency). Reframed the closing around the site's own working line (Creatie station) instead of a generic pitch.
export default (x) => {
  const { C } = x;
  return {
    title: 'Wat is de kracht van positionering en branding? | Sherlock Academie',
    description: 'Zichtbaarheid zonder positionering is lawaai. Wat positionering en branding elk doen, wat er zonder een scherpe positie misgaat, en waar dat in ons traject past.',
    schemaType: 'Article',
    schema: { headline: 'Wat is de kracht van positionering en branding?', datePublished: '2025-09-28', dateModified: '2026-09-24', author: { '@id': `${x.model.site.origin}/#org` }, articleSection: 'Voor je kiest' },
    main: `
<header class="article-head">
  <div class="wrap">
    <p class="crumbs"><a href="${x.href('academy')}">Academie</a><span class="sep" aria-hidden="true">›</span>Voor je kiest</p>
    <h1 id="h1" class="h1-inner" style="max-width:15em">Wat is de kracht van positionering en branding?</h1>
    <p class="article-meta">Sherlock · september 2025 · herwerkt september 2026</p>
  </div>
</header>

<article class="article" aria-labelledby="h1">
  <div class="wrap article-grid">
    <div class="body rail rail-article">
      <p class="pull">“Zichtbaarheid zonder positionering is lawaai.”</p>

      <h2>“We willen meer online zichtbaarheid”</h2>
      <p>Dat horen we vaak, en het is zelden het echte probleem. Hoger in Google staan betekent niet automatisch meer omzet: als de boodschap niet duidelijk is voor de juiste mensen, trekt zichtbaarheid wel aandacht, maar zet ze die aandacht niet om in een aanvraag.</p>

      <h2>Wat positionering is</h2>
      <p>Positionering is de plek die je bewust inneemt in het hoofd van je ideale klant — het antwoord op: waarom zou iemand voor jou kiezen in plaats van voor een concurrent? Goede positionering is eenvoudig uit te leggen, herkenbaar voor je doelgroep, onderscheidend in je markt, en in lijn met wat je écht levert.</p>

      <h2>Wat branding daarin doet</h2>
      <p>Branding maakt die positie zichtbaar en tastbaar: in je toon, je copy, je visuals, je website. Waar positionering de keuze is, is branding hoe die keuze overkomt. Mensen kopen geen dienst, ze kopen vertrouwen — en positionering maakt dat vertrouwen mogelijk.</p>

      <h2>Wat er misgaat zonder een scherpe positie</h2>
      <ul class="checklist">
        <li>Een website die vertelt wie je bent, niet wat de bezoeker eraan heeft</li>
        <li>Copy die iedereen zou kunnen schrijven — "kwalitatief", "op maat", "flexibel"</li>
        <li>SEO dat verkeer trekt zonder conversie, omdat de pagina niet overtuigt</li>
        <li>Advertenties met veel kliks en weinig klanten, omdat er geen duidelijke reden is om te kiezen</li>
      </ul>

      <h3>Waar dit in ons traject past</h3>
      <p>Positionering en branding zitten bij ons niet los van SEO of advertenties, ze gaan eraan vooraf. In ons eigen werk noemen we die stap Creatie: we vertalen wat je bedrijf anders maakt naar een verhaal, een aanbod en een site die dat ook tonen. Pas daarna zetten we SEO, advertenties of content in — anders versterk je alleen de verkeerde boodschap.</p>

      <h2>Hoe je dit zelf test</h2>
      <p>Vraag je af wat een bezoeker na drie seconden op je website begrijpt. Kan hij niet meteen zeggen wat je doet en voor wie, dan is dat eerder een probleem dan je zichtbaarheid.</p>
    </div>
    <aside class="article-aside" aria-labelledby="h-praktijk">
      <p class="eyebrow" id="h-praktijk">In de praktijk</p>
      <nav class="continue" aria-label="Verder lezen">
        <a href="${x.href('kb.ideale-klant')}"><small>Eerst dit</small><span>Wie is jouw ideale klant?${C.ARROW}</span></a>
        <a href="${x.href('werken')}"><small>Hoe we samenwerken</small><span>Start met één vraag. Groei met één partner.${C.ARROW}</span></a>
      </nav>
    </aside>
  </div>
</article>

${x.terminus({ heading: 'Begrijpt een bezoeker <span class="t-accent">je site in drie seconden?</span>', text: 'Een gesprek van 30 minuten, vrijblijvend. Daarna krijg je onze eerste inschatting van je grootste commerciële kans.' })}
`,
  };
};
