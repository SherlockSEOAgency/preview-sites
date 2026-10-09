// Direction A, "Eerst een gesprek": close to Jan's copy (UCAN Direct, 2026-10-06), dating metaphor toned down
// to two winks (step 1 and 4). Big idea: a good collaboration starts like any good relationship: first a talk,
// then an honest proposal, then for the long run.
export default ({ header, services, page }) => page({
  title: 'Sherlock SEO Agency: gezocht, gevonden én gekozen worden',
  description: "Sherlock is de online groeipartner voor kmo's: SEO, Google Ads, websites en meting die samen aanvragen opleveren. Plan een gesprek van 30 minuten.",
  banner: 'A · Eerst een gesprek',
  main: `
${header('Plan een gesprek')}
<main id="main">
<section class="hero" aria-labelledby="h1">
  <div class="wrap grid-2">
    <div>
      <p class="kicker">Sherlock SEO<span class="dot">•</span>Online groeipartner voor jouw kmo</p>
      <h1 id="h1" class="display">Gezocht, gevonden én <em>gekozen</em> worden.</h1>
      <p class="lead" style="margin-top:28px">Je bedrijf is goed in wat het doet. Wij zorgen dat de juiste mensen je online vinden, en dan ook voor jou kiezen.</p>
      <div class="actions">
        <a class="btn btn-primary" href="#gesprek">Plan een gesprek van 30 minuten</a>
      </div>
      <p class="note">Vrijblijvend. Je praat met Jef, de oprichter.</p>
    </div>
    <figure class="hero-photo">
      <img src="/assets/img/jef.webp" alt="Jef Van Gool, oprichter van Sherlock" width="783" height="1000" fetchpriority="high">
      <figcaption><b>Jef Van Gool</b> · oprichter, helpt kmo's online groeien sinds 2008</figcaption>
    </figure>
  </div>
</section>

<section class="sec sec-white" aria-labelledby="h-lawaai">
  <div class="wrap grid-2">
    <h2 id="h-lawaai" class="h2">Veel lawaai.<br><em>Weinig aanvragen.</em></h2>
    <div class="measure">
      <p class="lead" style="margin-bottom:20px">Je hebt een website. Je adverteert. Je post. Er gebeurt van alles, maar de telefoon gaat niet vaker.</p>
      <p>Dat ligt zelden aan je bedrijf. Het ligt aan hoe je bedrijf online overkomt: wie je ziet, wat ze lezen, en of ze daarna nog een reden hebben om voor jou te kiezen.</p>
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="h-wizard">
  <div class="wrap grid-2 rev">
    <div>
      <p class="kicker">Hoe we het aanpakken</p>
      <h2 id="h-wizard" class="h2">Geen toverformules. <em>Wel een wizard.</em></h2>
    </div>
    <div class="measure">
      <p>We gooien niet overboord wat altijd werkte: een scherp aanbod, een helder verhaal, goed vakwerk in Google. We combineren het met wat nu werkt: zoeken via AI, automatisering en een eigen platform waarin alles over je bedrijf, je markt en je resultaten samenkomt.</p>
      <p>Jij merkt dat niet aan de technologie. Je merkt het aan de aanvragen.</p>
    </div>
  </div>
</section>

<section class="sec sec-white" aria-labelledby="h-samen">
  <div class="wrap">
    <p class="kicker">Zo begint het</p>
    <h2 id="h-samen" class="h2">Eerst kennismaken. <em>Dan pas beloven.</em></h2>
    <ol class="steps">
      <li><div><h3><span class="wink">Never on a first date.</span></h3><p>Een gesprek van een halfuur. We luisteren, stellen de vragen die ertoe doen, en jij beslist of het klikt. Niets verplicht.</p></div></li>
      <li><div><h3>Een eerlijk voorstel.</h3><p>Zwart op wit: wat we doen, waar, hoe en wat het kost. Geen kleine lettertjes.</p></div></li>
      <li><div><h3>Alles op tafel.</h3><p>Je klanten, je marges, je concurrenten. Wie je bedrijf niet van binnen kent, kan niet kiezen wat eerst moet.</p></div></li>
      <li><div><h3><span class="wink">Geen one-night stand.</span></h3><p>We blijven meten en bijsturen, maand na maand. The proof of the pudding is in the return.</p></div></li>
    </ol>
  </div>
</section>

<section class="sec" id="bewijs" aria-labelledby="h-bewijs">
  <div class="wrap">
    <p class="kicker">Bewijs</p>
    <h2 id="h-bewijs" class="h2">Wat het <em>oplevert.</em></h2>
    <div class="proof">
      <figure>
        <div class="browser"><div class="bar"><i></i><i></i><i></i><span>styleathome.be</span></div>
          <img src="/assets/img/styleathome-2026-10-09.webp" alt="De startpagina van styleathome.be" width="1440" height="800" loading="lazy"></div>
        <figcaption class="cap">Style at Home, home staging en meubelverhuur. Klant van Sherlock. Schermafdruk van 9 oktober 2026.</figcaption>
      </figure>
      <div>
        <div class="fig"><b>+50%</b><span>nieuwe klanten via Google voor Style at Home <span class="tbc">te bevestigen</span></span><small>Periode en bron nog vast te leggen (GA4 / CRM).</small></div>
        <div class="fig"><b>4,6 / 5</b><span>gemiddelde score in onze Google-reviews <span class="tbc">te bevestigen</span></span><small>Aantal reviews en datum nog vast te leggen.</small></div>
        <div class="fig"><b>2008</b><span>sinds dan groeien kmo's met Sherlock.</span></div>
      </div>
    </div>
    <div class="badges" aria-label="Partners">
      <img src="/assets/img/badge-google-partners.webp" alt="Google Partner" width="548" height="152" loading="lazy">
      <img src="/assets/img/badge-meta-business-partner.webp" alt="Meta Business Partner" width="786" height="267" loading="lazy">
      <img class="sq" src="/assets/img/badge-semrush-agency-partner.webp" alt="Semrush Agency Partner" width="158" height="158" loading="lazy">
    </div>
  </div>
</section>

<section class="sec sec-dark close" id="gesprek" aria-labelledby="h-gesprek">
  <div class="wrap">
    <p class="kicker">It's a date?</p>
    <h2 id="h-gesprek" class="display" style="font-size:clamp(2.4rem,1.4rem + 4.4vw,5rem)">Een halfuur. Jouw bedrijf. <em>Onze eerste lezing.</em></h2>
    <p class="lead" style="margin-top:24px">Vertel waar je staat en waar je naartoe wil. Na het gesprek weet je waar wij de grootste kans zien, ook als we niet samenwerken.</p>
    <div style="margin-top:32px"><a class="btn btn-on-dark" href="#" data-inert>Plan een gesprek van 30 minuten</a></div>
    <div class="who"><img src="/assets/img/jef.webp" alt="" width="72" height="72" loading="lazy"><p><b>Jef Van Gool</b><br><span class="muted">voert je eerste gesprek</span></p></div>
  </div>
</section>
${services('Waar we dieper ingaan.')}
</main>`,
});
