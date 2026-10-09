// Direction C, "Kom eens babbelen": built on the word of mouth Jef wants to hear ("mijn website trekt op niks"
// -> "je moet eens met Sherlock babbelen") and on his core proposition: keep old-school marketing that works,
// add new-school (AI search, automation), and make it pay off measurably.
// Big idea: what always worked, plus what works now, and you see what it returns.
export default ({ header, services, page }) => page({
  title: "Sherlock SEO Agency: online marketing voor kmo's die moet opbrengen",
  description: "Haal je niets uit online marketing? Sherlock combineert klassieke marketing met AI-zoeken en automatisering, en meet wat het oplevert. Kom eens babbelen.",
  bodyClass: 'dir-c',
  banner: 'C · Kom eens babbelen',
  main: `
<main id="main">
<div class="hero-c">
${header('Kom eens babbelen')}
<section class="hero" style="padding-bottom:0" aria-labelledby="h1">
  <div class="wrap grid-2">
    <div style="padding-bottom:var(--sec)">
      <p class="kicker">Sherlock SEO<span class="dot">•</span>Online groeipartner voor kmo's</p>
      <h1 id="h1" class="display">Trekt je website op niks? <em>Kom eens babbelen.</em></h1>
      <p class="lead" style="margin-top:28px">Voor kmo's die goed zijn in wat ze doen, en dat online nog niet terugzien in aanvragen.</p>
      <div class="actions">
        <a class="btn btn-on-dark" href="#gesprek">Plan een gesprek van 30 minuten</a>
      </div>
      <p class="note">Vrijblijvend. Met de mensen die het ook uitvoeren.</p>
    </div>
    <img class="photo" src="/assets/img/franny-jef.webp" alt="Franny (Google Ads) en Jef Van Gool (oprichter) van Sherlock" width="1067" height="800" fetchpriority="high">
  </div>
</section>
</div>

<section class="sec sec-white" aria-labelledby="h-oudnieuw">
  <div class="wrap">
    <p class="kicker">Wat we anders doen</p>
    <h2 id="h-oudnieuw" class="h2">We gooien niets overboord <em>dat werkt.</em></h2>
    <div class="oldnew">
      <div class="old"><h3>Wat altijd werkte</h3><ul><li>Een scherp aanbod</li><li>Een verhaal dat klanten herkennen</li><li>Goed gevonden worden in Google</li><li>Advertenties die verkopen</li></ul></div>
      <div class="new"><h3>Wat er nu bij komt</h3><ul><li>Gevonden worden in ChatGPT en Google AI</li><li>Automatisering waar het tijd bespaart</li><li>Meten tot aan de aanvraag</li><li>Bijsturen op wat het opbrengt</li></ul></div>
      <p class="sum">Samen moet het iets opleveren. En dat laten we zien.</p>
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="h-wizard">
  <div class="wrap grid-2">
    <div>
      <p class="kicker">Achter de schermen</p>
      <h2 id="h-wizard" class="h2">Geen toverformule. <em>Wel een wizard.</em></h2>
    </div>
    <div class="measure">
      <p class="lead">Alles wat we over je bedrijf, je markt en je resultaten weten, zit op één plek: ons eigen platform.</p>
      <p>Daardoor zien onze mensen sneller wat werkt en wat niet. Jij merkt dat niet aan de technologie, maar aan de aanvragen.</p>
    </div>
  </div>
</section>

<section class="sec sec-white" id="bewijs" aria-labelledby="h-bewijs">
  <div class="wrap">
    <p class="kicker">Bewijs</p>
    <h2 id="h-bewijs" class="h2">Wat het <em>opbrengt.</em></h2>
    <div class="proof">
      <figure>
        <div class="browser"><div class="bar"><i></i><i></i><i></i><span>styleathome.be</span></div>
          <img src="/assets/img/styleathome-2026-10-09.webp" alt="De startpagina van styleathome.be" width="1440" height="800" loading="lazy"></div>
        <figcaption class="cap">Style at Home, home staging en meubelverhuur. Schermafdruk van 9 oktober 2026.</figcaption>
      </figure>
      <div>
        <div class="fig"><b>+50%</b><span>nieuwe klanten via Google <span class="tbc">te bevestigen</span></span><small>Periode en bron nog vast te leggen.</small></div>
        <div class="fig"><b>4.261 → 0</b><span>dubbele pagina's tussen talen bij een meertalige marketplace</span><small>Screaming Frog, voor en na de opdracht. Case gepubliceerd juli 2026.</small></div>
      </div>
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="h-seopoly">
  <div class="wrap grid-2 rev">
    <img src="/assets/img/seopoly.webp" alt="Seopoly, het SEO-bordspel van Sherlock" width="900" height="900" loading="lazy" style="max-width:440px;justify-self:center">
    <div>
      <p class="kicker">Wat we geloven</p>
      <p class="quote">Gevonden worden is maar <b>het halve werk.</b> Je moet nog verkopen.</p>
      <p style="margin-top:24px" class="measure">Uit Seopoly, ons SEO-bordspel en e-boek: techniek, content en autoriteit, plus een vierde laag die vaak vergeten wordt: meten wat het opbrengt.</p>
      <p class="small">Dit najaar bij Voka: hoe Jef zijn agency herbouwde met AI. <span class="tbc">te bevestigen</span></p>
    </div>
  </div>
</section>

<section class="sec sec-dark close" id="gesprek" aria-labelledby="h-gesprek">
  <div class="wrap">
    <h2 id="h-gesprek" class="display" style="font-size:clamp(2.4rem,1.4rem + 4.4vw,5rem)">Kom eens <em>babbelen.</em></h2>
    <p class="lead" style="margin-top:24px">Een halfuur over je bedrijf en waar je naartoe wil. Daarna krijg je onze eerste lezing van je grootste kans.</p>
    <div style="margin-top:32px"><a class="btn btn-on-dark" href="#" data-inert>Plan een gesprek van 30 minuten</a></div>
  </div>
</section>
${services('Elk kanaal, uitgelegd.')}
</main>`,
});
