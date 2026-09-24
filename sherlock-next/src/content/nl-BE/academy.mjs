// /nl/academie/ : knowledge hub. Three moments: Voor je kiest (built, this file),
// Samenwerken and Vakkennis (their source pieces exist on the current site but are not moved over in this
// slice). Those two sections get one honest, grounded line each, no dead links and no invented titles.
export default (x) => {
  const { C } = x;
  const pieces = [
    { c: 'kb.ideale-klant', q: 'Wie is jouw ideale klant?', a: 'Niet elke klant die je nu hebt, is de klant die je zou moeten najagen.' },
    { c: 'kb.positionering', q: 'Wat is de kracht van positionering en branding?', a: 'Zichtbaarheid zonder positionering is lawaai voor de verkeerde mensen.' },
    { c: 'kb.business-klopt', q: 'Waarom SEO pas werkt als je business klopt', a: 'SEO versterkt een werkende business. Het repareert er geen.' },
    { c: 'kb.leads', q: 'De verschillende manieren om online leads te genereren', a: 'Een lead is geen klik. Het is iemand met koopintentie die contact opneemt.' },
    { c: 'kb.tracking', q: 'Waarom investeren in tracking essentieel is', a: 'Zonder juiste tracking stuur je een campagne op gevoel, niet op aanvragen.' },
    { c: 'kb.opbrengen', q: 'Hoe laat je online marketing écht opbrengen?', a: 'Meer kanalen lossen het niet op. Een doel, tracking en een scherpe boodschap wel.' },
    { c: 'kb.audit', q: 'Het belang van een strategische online marketing audit', a: 'Een goede audit zet problemen in volgorde van wat ze je kosten, niet in een lange lijst.' },
    { c: 'kb.samenwerking', q: 'Hoe verloopt een samenwerking met Sherlock?', a: 'Een gesprek van 30 minuten, een eerste inschatting, dan een opdracht of een doorlopend partnership.' },
  ];
  const item = (p) => `<li><a href="${x.href(p.c)}"><span class="kb-q"><span>${C.esc(p.q)}</span>${C.ARROW}</span><p class="kb-a">${C.esc(p.a)}</p></a></li>`;
  return {
    title: 'Academie: wat je moet weten voor je kiest | Sherlock SEO Agency',
    description: 'Geen SEO-blog. Antwoorden op de vragen die een ondernemer zich stelt voor en tijdens een samenwerking met een marketingpartner, met een bron bij elk cijfer.',
    schemaType: 'CollectionPage',
    schema: { headline: 'Wat je moet weten, voor je kiest en terwijl je samenwerkt' },
    main: `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Academie</p>
    <h1 id="h1" class="h1-inner">Wat je moet weten, <span class="accent s">voor je kiest en terwijl je samenwerkt.</span></h1>
    <p class="lead" style="margin-top:22px">Geen SEO-jargon. Antwoorden op de vragen die je jezelf stelt voor en tijdens een samenwerking met een marketingpartner, met bewijs waar we dat hebben.</p>
  </div>
</section>

<div class="wrap">
  <section class="station" aria-labelledby="h-kiest" style="padding-top:8px">
    <p class="eyebrow">Voor je kiest</p>
    <h2 id="h-kiest">Wat je wil weten voor je begint.</h2>
    <ul class="kb-index">${pieces.map(item).join('')}</ul>
  </section>

  <section class="station" aria-labelledby="h-samen">
    <p class="eyebrow">Samenwerken</p>
    <h2 id="h-samen">Voor wie al klant is.</h2>
    <p class="kb-soon">Handleidingen voor het praktische deel van een samenwerking — zoals een gebruiker toevoegen aan je Google Ads-, Google Business- of Tag Manager-account. Die stukken landen hier zodra ze overgezet zijn; vandaag bespreken we dat gewoon in het traject zelf.</p>
  </section>

  <section class="station" aria-labelledby="h-vak">
    <p class="eyebrow">Vakkennis</p>
    <h2 id="h-vak">Verdieping.</h2>
    <p class="kb-soon">Vakstukken in de diepte — zoals hoe je advertentiestructuur opzet voor meerdere vestigingen of merknamen. Die landen hier na de eerste gepubliceerde cases in dat segment.</p>
  </section>
</div>

${x.terminus({ heading: 'Iets van dit alles <span class="t-accent">herkenbaar?</span>', text: 'Een gesprek van 30 minuten, vrijblijvend. Daarna krijg je onze eerste inschatting van je grootste commerciële kans.' })}
`,
  };
};
