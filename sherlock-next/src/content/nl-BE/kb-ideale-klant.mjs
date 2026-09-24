// /nl/academie/wie-is-jouw-ideale-klant/ : knowledge, Academy section "Voor je kiest".
// Source: the published blog post (sherlockseo.com, WP 5264, 28 September 2025). Rewritten by cutting only: no
// unsourced claims in the raw text, nothing to drop but the generic "plan een intake" CTA (replaced with the
// site's own terminus and 30-minute promise).
export default (x) => {
  const { C } = x;
  return {
    title: 'Wie is jouw ideale klant? | Sherlock Academie',
    description: 'Je kan pas gevonden worden als je weet door wie. Waarom niet elke klant die je nu hebt de klant is die je zou moeten najagen, en hoe we dat in het eerste gesprek scherpstellen.',
    schemaType: 'Article',
    schema: { headline: 'Wie is jouw ideale klant?', datePublished: '2025-09-28', dateModified: '2026-09-24', author: { '@id': `${x.model.site.origin}/#org` }, articleSection: 'Voor je kiest' },
    main: `
<header class="article-head">
  <div class="wrap">
    <p class="crumbs"><a href="${x.href('academy')}">Academie</a><span class="sep" aria-hidden="true">›</span>Voor je kiest</p>
    <h1 id="h1" class="h1-inner" style="max-width:13em">Wie is jouw ideale klant?</h1>
    <p class="article-meta">Sherlock · september 2025 · herwerkt september 2026</p>
  </div>
</header>

<article class="article" aria-labelledby="h1">
  <div class="wrap article-grid">
    <div class="body rail rail-article">
      <p class="pull">“Je kan pas gevonden worden als je weet door wie.”</p>

      <h2>Waarom dit de eerste vraag is</h2>
      <p>Elke digitale strategie — van SEO tot advertenties — staat of valt met een duidelijke doelgroep. Niet "voor wie zou dit kunnen werken", maar: voor wie doen we dit eigenlijk? Zonder een scherp antwoord optimaliseer je voor iedereen, en dus voor niemand in het bijzonder.</p>

      <h2>Niet per se de klant die je nu hebt</h2>
      <p>Je ideale klant is niet automatisch je huidige klant. Het is de klant die het meeste potentieel biedt op lange termijn, goed past bij je aanbod, beslissingsbevoegd is én koopintentie toont, en past binnen je marge en je schaalbaarheid. Voor de ene onderneming is dat een lokaal publiek binnen één werkgebied, voor een andere een internationale zakelijke koper met een langer aankooptraject.</p>

      <h2>Hoe we dat in kaart brengen</h2>
      <p>In het eerste gesprek en de audit die daarop volgt, zoeken we antwoorden op: welke persona's bezoeken je website vandaag, welke zoekwoorden gebruiken zij om je aanbod te vinden, welke pagina's sluiten aan op hun intentie — en welke niet, en welke concurrenten claimen nu hun aandacht? Dat combineren we met zoekwoorddata, gedrag in Analytics en Search Console, conversiedata en concurrentieanalyse.</p>

      <h2>Wat die oefening oplevert</h2>
      <ul class="checklist">
        <li>Je huidige doelgroep blijkt niet altijd de meest rendabele</li>
        <li>Je besteedt geen budget meer aan profielen die toch niet converteren</li>
        <li>Je kan gerichter content maken voor de fase waarin een koper zich bevindt</li>
        <li>Je website en campagnes worden aantrekkelijker voor de juiste mensen</li>
      </ul>
      <p>Vooral waardevol voor bedrijven met een complex aankooptraject (beslissers versus beïnvloeders), lokale dienstverleners die hun regio willen domineren, en ondernemingen met meerdere doelgroepen die willen focussen op de meest rendabele.</p>

      <h3>Geen fantasieprofiel voor de vorm</h3>
      <p>Een doelgroepanalyse die na het gesprek in de kast belandt, heeft niets opgeleverd. Wij koppelen ze aan concrete zoekwoorden, conversiepunten en tracking — zodat je ze kan bijsturen zodra de data iets anders toont.</p>
    </div>
    <aside class="article-aside" aria-labelledby="h-praktijk">
      <p class="eyebrow" id="h-praktijk">In de praktijk</p>
      <nav class="continue" aria-label="Verder lezen">
        <a href="${x.href('kb.positionering')}"><small>Daarna</small><span>Wat is de kracht van positionering en branding?${C.ARROW}</span></a>
        <a href="${x.href('werken')}"><small>Hoe we samenwerken</small><span>Start met één vraag. Groei met één partner.${C.ARROW}</span></a>
      </nav>
    </aside>
  </div>
</article>

${x.terminus({ heading: 'Weet je wie je <span class="t-accent">écht najaagt?</span>', text: 'Een gesprek van 30 minuten, vrijblijvend. Daarna krijg je onze eerste inschatting van je grootste commerciële kans.' })}
`,
  };
};
