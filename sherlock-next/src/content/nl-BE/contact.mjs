// /nl/contact/ : conversion. "Bespreek je groeivraag" (Positioning Lock v1 primary CTA).
// Preview rule (preview-sites README, rule 1): a preview sends nothing. The form is complete and validates, but its
// personal fields carry no name attribute, so nothing can be transmitted; on submit it shows a preview notice.
// At go-live the form is wired to the agency's lead intake (decision for go-live, not for the preview).
export default (x) => {
  const { C } = x;
  return {
    title: 'Bespreek je groeivraag | Sherlock SEO Agency',
    description: 'Een gesprek van 30 minuten, vrijblijvend. Vertel waar je bedrijf staat en waar je naartoe wil; daarna krijg je onze eerste lezing van je grootste commerciële kans.',
    schemaType: 'ContactPage',
    scripts: true,
    main: `
<section class="contact" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Contact</p>
    <h1 id="h1" class="h1-inner">Bespreek je <span class="accent">groeivraag.</span></h1>
    <p class="lead" style="margin-top:22px">Vertel waar je bedrijf staat en waar je naartoe wil.</p>
    <div class="contact-grid">
      <div class="c-form">
        <form class="form" data-preview-form aria-describedby="form-note">
          <div class="row2">
            <div class="field"><label for="f-naam">Naam</label><input id="f-naam" autocomplete="name" required></div>
            <div class="field"><label for="f-bedrijf">Bedrijf</label><input id="f-bedrijf" autocomplete="organization" required></div>
          </div>
          <div class="row2">
            <div class="field"><label for="f-mail">E-mail</label><input id="f-mail" type="email" autocomplete="email" required></div>
            <div class="field"><label for="f-tel">Telefoon <span class="opt">(optioneel)</span></label><input id="f-tel" type="tel" autocomplete="tel"></div>
          </div>
          <div class="field"><label for="f-site">Website</label><input id="f-site" inputmode="url" autocomplete="url" placeholder="jouwbedrijf.be"></div>
          <div class="field"><label for="f-vraag">Wat is je groeivraag?</label><textarea id="f-vraag" required placeholder="Bijvoorbeeld: onze campagnes lopen, maar we weten niet welke klanten ze opleveren."></textarea></div>
          <fieldset class="field"><legend>Taal van het gesprek</legend>
            <div class="choice"><label><input type="radio" name="taal" value="nl-BE" checked> Nederlands</label><label><input type="radio" name="taal" value="fr-BE"> Français</label><label><input type="radio" name="taal" value="en"> English</label></div>
          </fieldset>
          <div class="submit"><button class="btn btn-primary" type="submit">Verstuur je groeivraag</button></div>
          <p class="form-status" id="form-note" role="status" tabindex="-1" data-message="Dit is een preview: het formulier verstuurt nog niets. Bel of mail ons rechtstreeks, de gegevens staan hieronder."></p>
        </form>
        <div class="direct">
          <p>Liever meteen bellen of mailen?</p>
          <div class="lines"><span>+32 479 25 43 57</span><span>info@sherlockseo.com</span></div>
        </div>
      </div>
      <aside class="who c-who" aria-labelledby="h-who">
        <p class="eyebrow" id="h-who" style="margin:0">Met wie je praat</p>
        <div class="who-main">
          <img src="/assets/img/jef-van-gool.webp" alt="" width="584" height="500">
          <div><b>Jef Van Gool</b><span>Oprichter. Hij voert je eerste gesprek.</span></div>
        </div>
        <div class="who-team"><span class="faces"><img src="/assets/img/joan.webp" alt="" width="200" height="211"><img src="/assets/img/franny.webp" alt="" width="300" height="300"></span><span>In het team ook Joan, web-analist, en Franny, Google Ads.</span></div>
      </aside>
      <div class="c-next">
        <div class="next-steps">
          <h2>Wat er daarna gebeurt</h2>
          <ol class="steps">
            <li><span class="st-name">Het gesprek</span><span class="st-text">30 minuten, vrijblijvend.</span></li>
            <li><span class="st-name">Onze eerste lezing</span><span class="st-text">Van je grootste commerciële kans.</span></li>
            <li><span class="st-name">Een voorstel</span><span class="st-text">Wat we doen, wanneer het af is en wat het kost.</span></li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>
`,
  };
};
