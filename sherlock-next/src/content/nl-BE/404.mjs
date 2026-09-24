// 404 (Dutch). A utility page, not a concept in the model.
export default (x) => ({
  title: 'Pagina niet gevonden | Sherlock SEO Agency',
  description: 'Deze pagina bestaat niet (meer).',
  main: `
<section class="notfound" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">404</p>
    <h1 id="h1" class="h1-inner">Deze pagina bestaat <span class="accent">niet (meer).</span></h1>
    <p class="lead">Begin opnieuw bij het begin, of vertel ons meteen wat je zocht.</p>
    <div class="actions" style="margin-top:28px"><a class="btn btn-primary" href="${x.href('home')}">Naar de startpagina</a><a class="btn btn-secondary" href="${x.href('contact')}">${x.common.cta}</a></div>
  </div>
</section>`,
});
