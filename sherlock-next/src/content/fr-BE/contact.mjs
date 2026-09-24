// /fr/contact/ : conversion, FR-BE. Same rules as /nl/contact/: the preview form sends nothing.
export default (x) => ({
  title: 'Parlons de votre croissance | Sherlock SEO Agency',
  description: 'Un entretien de 30 minutes, sans engagement. Dites-nous où en est votre entreprise et où vous voulez aller ; vous recevez ensuite notre première analyse de votre plus grande opportunité commerciale.',
  schemaType: 'ContactPage',
  scripts: true,
  bodyClass: 'page-contact',
  main: `
<section class="contact" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Contact</p>
    <h1 id="h1" class="h1-inner">Parlons de votre <span class="accent">croissance.</span></h1>
    <p class="lead" style="margin-top:22px">Dites-nous où en est votre entreprise et où vous voulez aller.</p>
    <div class="contact-grid">
      <p class="who-mini"><img src="/assets/img/jef-van-gool.webp" alt="" width="584" height="500"><span>Vous parlez avec <b>Jef Van Gool</b>, fondateur.</span></p>
      <div class="c-form">
        <form class="form" data-preview-form aria-describedby="form-note">
          <div class="row2">
            <div class="field"><label for="f-nom">Nom</label><input id="f-nom" autocomplete="name" required></div>
            <div class="field"><label for="f-entreprise">Entreprise</label><input id="f-entreprise" autocomplete="organization" required></div>
          </div>
          <div class="row2">
            <div class="field"><label for="f-mail">E-mail</label><input id="f-mail" type="email" autocomplete="email" required></div>
            <div class="field"><label for="f-tel">Téléphone <span class="opt">(facultatif)</span></label><input id="f-tel" type="tel" autocomplete="tel"></div>
          </div>
          <div class="field"><label for="f-site">Site web</label><input id="f-site" inputmode="url" autocomplete="url" placeholder="votreentreprise.be"></div>
          <div class="field"><label for="f-question">Quel est votre enjeu de croissance ?</label><textarea id="f-question" required placeholder="Par exemple : nos campagnes tournent, mais nous ne savons pas lesquelles nous amènent des clients."></textarea></div>
          <fieldset class="field"><legend>Langue de l’entretien</legend>
            <div class="choice"><label><input type="radio" name="langue" value="fr-BE" checked> Français</label><label><input type="radio" name="langue" value="nl-BE"> Nederlands</label><label><input type="radio" name="langue" value="en"> English</label></div>
          </fieldset>
          <div class="submit"><button class="btn btn-primary" type="submit">Envoyer</button></div>
          <p class="form-status" id="form-note" role="status" tabindex="-1" data-message="Ceci est un aperçu : le formulaire n’envoie encore rien. Appelez-nous ou écrivez-nous directement, les coordonnées sont ci-dessous."></p>
        </form>
        <div class="direct">
          <p>Vous préférez appeler ou écrire ?</p>
          <div class="lines"><span>+32 479 25 43 57</span><span>info@sherlockseo.com</span></div>
        </div>
      </div>
      <aside class="who c-who" aria-labelledby="h-who">
        <p class="eyebrow" id="h-who" style="margin:0">Avec qui vous parlez</p>
        <div class="who-main">
          <img src="/assets/img/jef-van-gool.webp" alt="" width="584" height="500">
          <div><b>Jef Van Gool</b><span>Fondateur. Il mène le premier entretien.</span></div>
        </div>
        <div class="who-team"><span class="faces"><img src="/assets/img/joan.webp" alt="" width="200" height="211"><img src="/assets/img/franny.webp" alt="" width="300" height="300"></span><span>Dans l’équipe aussi : Joan, analyste web, et Franny, Google Ads.</span></div>
      </aside>
      <div class="c-next">
        <div class="next-steps">
          <h2>Et ensuite</h2>
          <ol class="steps">
            <li><span class="st-name">L’entretien</span><span class="st-text">30 minutes, sans engagement.</span></li>
            <li><span class="st-name">Notre première analyse</span><span class="st-text">De votre plus grande opportunité commerciale.</span></li>
            <li><span class="st-name">Une proposition</span><span class="st-text">Ce que nous faisons, quand vous voyez des résultats et ce que cela coûte.</span></li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>
`,
});
