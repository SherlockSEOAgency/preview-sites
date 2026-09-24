// /en/work-with-sherlock/ : commercial surface. Start with one question (mission), grow with one partner
// (growth partner). Offer elements carry data-offer-key = keys of the Sherlock offer catalog: the catalog
// decides what an offer is; this page only words it for the customer. No prices here (the catalog has not
// decided them). No testimonial: the published quote (Emiel Denis, Saniswitch) exists in Dutch only and is
// never translated (same rule as the other pages).
export default (x) => {
  const { C } = x;
  const offers = x.model.concepts.werken.offers;
  return {
    title: 'Work with Sherlock: outsource your marketing to one partner | Sherlock SEO Agency',
    description: 'Start with one concrete growth question, then grow with one partner. Your business first, then the mission, then adjusted together. Discuss your growth question.',
    main: `
<section class="hero hero-line" aria-labelledby="h1">
  <div class="wrap">
    <p class="eyebrow">Work with Sherlock</p>
    <h1 id="h1">Start with one question. <span class="accent s">Grow with one partner.</span></h1>
    <p class="lead">You come to us with something concrete: a new website, campaigns that don't deliver enough, a ceiling on your growth. We tackle that question starting from your business, not from a single channel. If it works, you continue with us as a growth partner.</p>
    <div class="actions">
      <a class="btn btn-primary" href="${x.href('contact')}">${x.common.cta}</a>
      <a class="btn btn-secondary" href="${x.href('case.boven-yvo')}">See a case</a>
    </div>
    ${C.ladderLine({ start: 'Your question', first: 'Mission', firstSub: 'with an end point you know in advance', second: 'Growth partner', secondSub: 'ongoing, adjusted together', loop: 'adjust', loopLong: 'and then adjust',
      summary: 'Your question first becomes one mission with a fixed end point. From there it can grow into an ongoing partnership that we adjust together.' })}
  </div>
</section>

<div class="wrap">
<div class="rail rail-ends">

  <section class="station" aria-labelledby="h-ask" data-offer-rung="opdracht" data-offer-key="${offers.opdracht.join(' ')}">
    <p class="eyebrow">The mission</p>
    <h2 id="h-ask">What you come in with.</h2>
    <ul class="asks">
      <li data-offer-key="website_conversion landing_page"><span class="a-ask">A website that explains why customers choose you</span><p class="a-out">Pages that turn visits into enquiries, with the result measured.</p></li>
      <li data-offer-key="tracking_foundation"><span class="a-ask">Knowing which campaigns bring real customers</span><p class="a-out">Enquiries reliably measured, so decisions about your site and your campaigns stop running on gut feel.</p></li>
      <li data-offer-key="paid_acquisition"><span class="a-ask">Advertising that brings enquiries, not just clicks</span><p class="a-out">Campaigns run to a media plan, tracked continuously on enquiries.</p></li>
      <li data-offer-key="seo_growth"><span class="a-ask">Being found for what you sell</span><p class="a-out">More relevant traffic on the topics that turn into enquiries.</p></li>
    </ul>
    <p class="close-line">Every mission has an end point you know in advance: what we deliver, and how we see that it works.</p>
  </section>

  <section class="station" aria-labelledby="h-start">
    <p class="eyebrow">The start</p>
    <h2 id="h-start">Your business first, then the mission.</h2>
    <p class="lead" style="margin-top:18px">It starts with a 30-minute conversation about where your business stands and where you want to take it. You then get our first read of your biggest commercial opportunity, and a proposal: what we'll do, when you'll see the result, and what it costs.</p>
    <div class="actions" style="margin-top:28px"><a class="btn btn-primary" href="${x.href('contact')}">${x.common.cta}</a></div>
  </section>

  <section class="station" aria-labelledby="h-partner" data-offer-rung="groeipartner" data-offer-key="${offers.groeipartner.join(' ')}">
    <p class="eyebrow">The partnership</p>
    <h2 id="h-partner">After that: one partner.</h2>
    <p class="lead" style="margin-top:18px">As a growth partner, we take responsibility for prioritising, executing and learning. One plan, which we adjust together.</p>
    <p style="margin:34px 0 0;font:700 16px var(--head)">In every review, you see:</p>
    <ul class="seen">
      <li>what we understood</li>
      <li>what we decided</li>
      <li>what we delivered</li>
      <li>what changed</li>
      <li>what we measured</li>
      <li>what we propose as the next step</li>
    </ul>
  </section>

  <section class="station st-green" aria-labelledby="h-proof">
    <p class="eyebrow">Proof</p>
    <h2 id="h-proof">Proof, step by step.</h2>
    <nav class="continue" aria-label="Cases">
      <a href="${x.href('case.marketplace')}" data-offer-rung="opdracht"><small>Mission · multilingual marketplace${x.fb('case.marketplace')}</small><span>One page per language for Google to show, instead of duplicates competing with each other.${C.ARROW}</span></a>
      <a href="${x.href('case.boven-yvo')}" data-offer-rung="groeipartner"><small>Growth partner · Boven Yvo</small><span>First measure, then advertising, SEO and content, and only then a new website.${C.ARROW}</span></a>
    </nav>
  </section>

  <section class="station" aria-labelledby="h-questions">
    <p class="eyebrow">Questions</p>
    <h2 id="h-questions">What clients ask us first.</h2>
    <dl class="faq">
      <div><dt>What does it cost?</dt><dd>A growth partnership is a fixed amount per month, not billed by the hour. A mission gets its own price in the proposal.</dd></div>
      <div><dt>Do you guarantee results?</dt><dd>No. We don't guarantee rankings or returns: those also depend on your market and your offer.</dd></div>
      <div><dt>Do we have to move everything to you?</dt><dd>No. Your own team or other partners can keep doing parts of the work. We make sure everything starts from the same plan.</dd></div>
      <div><dt>What exactly do you measure?</dt><dd>Enquiries: forms, calls, quote requests. How much revenue follows from those is something you see in your own sales.</dd></div>
      <div><dt>What about AI search engines?</dt><dd>We look at how Google and AI assistants summarise your business today, as part of your digital presence. We don't promise results there.</dd></div>
    </dl>
  </section>

</div>
</div>

${x.terminus({ heading: 'Which question do you want to <span class="t-accent">put on the table?</span>', text: '' })}
`,
  };
};
