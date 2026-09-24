// /en/contact/ : conversion, international. Same rules as /nl/contact/ and /fr/contact/: the preview form sends
// nothing (preview-sites README, rule 1).
export default (x) => {
  const { C } = x;
  return {
    title: 'Discuss Your Growth Question | Sherlock SEO Agency',
    description: "A 30-minute conversation, no obligation. Tell us where your business stands and where you want to take it; you'll then get our first read of your biggest commercial opportunity.",
    schemaType: 'ContactPage',
    scripts: true,
    bodyClass: 'page-contact',
    main: `
<section class="contact" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Contact</p>
    <h1 id="h1" class="h1-inner">Discuss your <span class="accent">growth question.</span></h1>
    <p class="lead" style="margin-top:22px">Tell us where your business stands and where you want to take it.</p>
    <div class="contact-grid">
      <p class="who-mini"><img src="/assets/img/jef-van-gool.webp" alt="" width="584" height="500"><span>You'll talk to <b>Jef Van Gool</b>, founder.</span></p>
      <div class="c-form">
        <form class="form" data-preview-form aria-describedby="form-note">
          <div class="row2">
            <div class="field"><label for="f-name">Name</label><input id="f-name" autocomplete="name" required></div>
            <div class="field"><label for="f-company">Company</label><input id="f-company" autocomplete="organization" required></div>
          </div>
          <div class="row2">
            <div class="field"><label for="f-mail">Email</label><input id="f-mail" type="email" autocomplete="email" required></div>
            <div class="field"><label for="f-tel">Phone <span class="opt">(optional)</span></label><input id="f-tel" type="tel" autocomplete="tel"></div>
          </div>
          <div class="field"><label for="f-site">Website</label><input id="f-site" inputmode="url" autocomplete="url" placeholder="yourbusiness.com"></div>
          <div class="field"><label for="f-question">What is your growth question?</label><textarea id="f-question" required placeholder="For example: our campaigns are running, but we don't know which customers they bring in."></textarea></div>
          <fieldset class="field"><legend>Language of the conversation</legend>
            <div class="choice"><label><input type="radio" name="lang" value="en" checked> English</label><label><input type="radio" name="lang" value="nl-BE"> Nederlands</label><label><input type="radio" name="lang" value="fr-BE"> Français</label></div>
          </fieldset>
          <div class="submit"><button class="btn btn-primary" type="submit">Send your growth question</button></div>
          <p class="form-status" id="form-note" role="status" tabindex="-1" data-message="This is a preview: the form doesn't send anything yet. Call or email us directly, the details are below."></p>
        </form>
        <div class="direct">
          <p>Prefer to call or email right away?</p>
          <div class="lines"><span>+32 479 25 43 57</span><span>info@sherlockseo.com</span></div>
        </div>
      </div>
      <aside class="who c-who" aria-labelledby="h-who">
        <p class="eyebrow" id="h-who" style="margin:0">Who you'll talk to</p>
        <div class="who-main">
          <img src="/assets/img/jef-van-gool.webp" alt="" width="584" height="500">
          <div><b>Jef Van Gool</b><span>Founder. He leads your first conversation.</span></div>
        </div>
        <div class="who-team"><span class="faces"><img src="/assets/img/joan.webp" alt="" width="200" height="211"><img src="/assets/img/franny.webp" alt="" width="300" height="300"></span><span>Also on the team: Joan, web analyst, and Franny, Google Ads.</span></div>
      </aside>
      <div class="c-next">
        <div class="next-steps">
          <h2>What happens next</h2>
          <ol class="steps">
            <li><span class="st-name">The conversation</span><span class="st-text">30 minutes, no obligation.</span></li>
            <li><span class="st-name">Our first read</span><span class="st-text">Of your biggest commercial opportunity.</span></li>
            <li><span class="st-name">A proposal</span><span class="st-text">What we'll do, when you'll see results, and what it costs.</span></li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>
`,
  };
};
