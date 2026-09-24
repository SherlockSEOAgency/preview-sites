// /nl/over-ons/ : about + the proof layer that needs no client approval.
// Sources: team names/roles/quotes = the live team page (WP 2569, extracted 24/9/2026) — Jef,
// Joan and Franny get a portrait; Dries, Dirk and Ronny are named without a portrait, same source.
// Founding fact (2008) and the Seopoly mention = the live team page's own story text.
// Sortlist and Clutch links verified live on 24/9/2026 (browser, this session):
// https://www.sortlist.be/nl/agency/sherlock-seo-agency (4 reviews) and https://clutch.co/profile/sherlock-seo-agency
// (2 reviews) both resolve to Sherlock SEO Agency's own profile. No score is quoted on the page: a live rating drifts,
// so only the link is ours to state; the number stays on the page that owns it. No Google Business Profile link:
// Maps sits behind a bot check we do not bypass, so it is not linked without a verified URL.
export default (x) => {
  const { C } = x;
  return {
    title: 'Over Sherlock: het team en hoe we werken | Sherlock SEO Agency',
    description: "Het team achter Sherlock: Jef, Joan, Franny en collega's in SEO, techniek en administratie. Hoe we werken, sinds wanneer, en met welke partners.",
    schemaType: 'AboutPage',
    main: `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Over Sherlock</p>
    <h1 id="h1" class="h1-inner">Wie je aan tafel <span class="accent">krijgt.</span></h1>
    <p class="lead">Sherlock is een klein, senior team. Dezelfde mensen die je eerste gesprek voeren, bouwen en meten ook mee — niet een los netwerk van freelancers.</p>
    <dl class="facts facts-4">
      <div><dt>Land</dt><dd>België</dd></div>
      <div><dt>Talen</dt><dd>Nederlands, Frans, Engels</dd></div>
      <div><dt>Actief sinds</dt><dd>2008</dd></div>
      <div><dt>Partners</dt><dd>Google, Meta, Semrush</dd></div>
    </dl>
    <div class="actions">
      <a class="btn btn-primary" href="${x.href('contact')}">${x.common.cta}</a>
      ${x.go('case.boven-yvo', 'Lees een case')}
    </div>
  </div>
</section>

<div class="wrap">
<div class="rail rail-ends">

  <section class="station" aria-labelledby="h-team">
    <p class="eyebrow">Het team</p>
    <h2 id="h-team">Klein, senior, en zelf aan het stuur.</h2>
    <p class="lead" style="margin-top:18px">Bij Sherlock vind je een klein, gespecialiseerd en ervaren team van digitale marketingexperts.</p>
    <div class="team-grid">
      <div class="team-card">
        <img src="/assets/img/jef-van-gool.webp" alt="Jef Van Gool" width="88" height="88">
        <div>
          <b>Jef Van Gool</b>
          <span class="t-role">Oprichter. Hij voert je eerste gesprek.</span>
          <span class="t-tag">Sales &amp; marketing</span>
          <p class="t-quote">Jouw succes is ons succes!</p>
        </div>
      </div>
      <div class="team-card">
        <img src="/assets/img/joan.webp" alt="Joan" width="88" height="88">
        <div>
          <b>Joan</b>
          <span class="t-role">Web-analist.</span>
          <span class="t-tag">Big data &amp; performance</span>
          <p class="t-quote">Van data naar inzichten.</p>
        </div>
      </div>
      <div class="team-card">
        <img src="/assets/img/franny.webp" alt="Franny" width="88" height="88">
        <div>
          <b>Franny</b>
          <span class="t-role">Google Ads.</span>
          <span class="t-tag">Ex-Google Partners</span>
          <p class="t-quote">Gericht en relevant adverteren met zoekadvertenties.</p>
        </div>
      </div>
    </div>
    <p class="small team-extra">Het team wordt aangevuld door Dries (SEO), Dirk (technische SEO) en Ronny (administratie).</p>
  </section>

  <section class="station" aria-labelledby="h-verhaal">
    <p class="eyebrow">Verhaal</p>
    <h2 id="h-verhaal">Gegroeid vanuit resultaat, sinds 2008.</h2>
    <p class="lead" style="margin-top:18px">Sherlock ontstond organisch: de eerste successen die Jef boekte in 2008 zorgden voor een toestroom aan nieuwe klanten, en sindsdien groeide het team mee.</p>
    <p class="measure" style="margin-top:18px">We ontwikkelden ook <b>Seopoly</b>, een bordspel over SEO: gezocht worden draait niet om zoekwoorden en links, maar om hoe mensen je écht vinden.</p>
  </section>

  <section class="station" aria-labelledby="h-methode">
    <p class="eyebrow">Hoe we werken</p>
    <h2 id="h-methode">Vijf stappen, telkens opnieuw.</h2>
    <ol class="steps">
      <li><span class="st-name">Bedrijf en markt begrijpen</span><span class="st-text">We starten niet bij het kanaal, maar bij jouw bedrijf en jouw markt.</span></li>
      <li><span class="st-name">Grootste commerciële kans bepalen</span><span class="st-text">Daaruit bepalen we wat eerst moet.</span></li>
      <li><span class="st-name">Bouwen en uitvoeren</span><span class="st-text">Strategie, website, search, advertenties en tracking: we voeren het zelf uit.</span></li>
      <li><span class="st-name">Meten wat verandert</span><span class="st-text">In aanvragen, niet in kliks.</span></li>
      <li><span class="st-name">Bijsturen</span><span class="st-text">Wat we zien, gebruiken we om het plan bij te sturen.</span></li>
    </ol>
    <div style="margin-top:28px">${x.go('werken', 'Bekijk hoe een traject eruitziet')}</div>
  </section>

  <section class="station st-green" aria-labelledby="h-bewijs">
    <p class="eyebrow">Bewijs dat je zelf kan nakijken</p>
    <h2 id="h-bewijs">Onze partners, en onze reviews.</h2>
    ${C.badges({ label: 'Partners', items: [
      { src: '/assets/img/badge-google-partners.webp', alt: 'Google Partners', w: 548, h: 152 },
      { src: '/assets/img/badge-meta-business-partner.webp', alt: 'Meta Business Partner', w: 786, h: 267 },
      { src: '/assets/img/badge-semrush-agency-partner.webp', alt: 'Semrush Certified Agency Partner', w: 158, h: 158, square: true },
    ] })}
    <nav class="continue" aria-label="Bewijs" style="margin-top:40px">
      <a href="${x.href('cases')}"><small>Cases</small><span>Wat we deden, en wat er veranderde, met bron en periode.${C.ARROW}</span></a>
      <a href="https://www.sortlist.be/nl/agency/sherlock-seo-agency" target="_blank" rel="noopener noreferrer"><small>Sortlist (externe pagina)</small><span>Onafhankelijke klantreviews, buiten onze eigen site.${C.ARROW}</span></a>
      <a href="https://clutch.co/profile/sherlock-seo-agency" target="_blank" rel="noopener noreferrer"><small>Clutch (externe pagina)</small><span>Onafhankelijke klantreviews, buiten onze eigen site.${C.ARROW}</span></a>
    </nav>
  </section>

</div>
</div>

${x.terminus({ heading: 'Zin om kennis te <span class="t-accent">maken?</span>', text: 'Een gesprek van 30 minuten, vrijblijvend. Je praat meteen met het team dat ook het werk doet.' })}
`,
  };
};
