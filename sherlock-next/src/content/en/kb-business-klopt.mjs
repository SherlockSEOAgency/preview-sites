// /en/academy/why-seo-only-works-when-your-business-does/ : knowledge, Academy section "Before you choose".
// Written fresh for an international buyer from the same lesson as the Dutch original (sherlockseo.com, WP 5123,
// published 28 March 2025): SEO cannot fix a business that does not yet convert. Not a sentence-by-sentence
// translation — same structure, same two anonymised practice stories (no invented numbers, matching the source's
// own no-fabrication rule), same closing attachment to one case, the way we work, and the conversation. Published
// under today's date because this English edition did not exist before this slice.
export default (x) => {
  const { C } = x;
  return {
    title: 'Why SEO Only Works When Your Business Does | Sherlock Academy',
    description: "SEO works, but only once your business does too. What has to be right before visibility turns into sales: your proposition, your customer experience, your website and your strategy.",
    schemaType: 'Article',
    schema: { headline: 'Why SEO Only Works When Your Business Does', datePublished: '2026-09-24', dateModified: '2026-09-24', author: { '@id': `${x.model.site.origin}/#org` }, articleSection: 'Before you choose' },
    main: `
<header class="article-head">
  <div class="wrap">
    <p class="crumbs">Academy<span class="sep" aria-hidden="true">›</span>Before you choose</p>
    <h1 id="h1" class="h1-inner" style="max-width:15em">Why SEO Only Works When Your Business Does</h1>
    <p class="article-meta">Sherlock · September 2026</p>
  </div>
</header>

<article class="article" aria-labelledby="h1">
  <div class="wrap article-grid">
    <div class="body rail rail-article">
      <p class="pull">&ldquo;SEO works, but only once your business does too.&rdquo;</p>

      <h2>SEO often fails &mdash; but not because SEO doesn't work</h2>
      <p>You invest in search engine optimisation, and the results don't show up. SEO usually fails not because of SEO itself, but because it's applied too early, or in the wrong way.</p>
      <p>Your website can be technically flawless and rank #1 in Google for a term that matters, and customers still don't come. If your business doesn't work yet &mdash; your product, your service or the experience a customer has with you &mdash; SEO can't perform a miracle. What SEO can do is scale a business that already works, and make it visible to the right audience.</p>

      <h2>Visibility is not a guarantee of sales</h2>
      <p>Ranking at the top of Google means you get found &mdash; but what happens after the click? If a visitor doesn't immediately see the value on your site, or leaves because the experience is poor, that high ranking gets you nothing.</p>
      <p>We've seen a landing page with a strong click-through rate still deliver disappointing results, because the page itself didn't convince anyone once they arrived. Visibility earns attention; only the right message and a compelling offer turn that attention into action.</p>

      <h2>Two stories from the field: why business comes before SEO</h2>
      <ul class="practice">
        <li><h3>The client who paused ads after watching session recordings</h3><p>Clicks were plentiful, but conversions weren't. Watching screen recordings of real visitors showed why: confusion, a rough user experience, and unclear information. That insight freed up ad budget that went into fixing the website instead.</p></li>
        <li><h3>An article that kept its promise</h3><p>For a local trades business, we wrote one clear, well-illustrated article that underlined their specific expertise. When we later asked the client whether it had brought in work, they confirmed it had.</p></li>
      </ul>

      <h2>What actually works: the basics first, then SEO</h2>
      <h3>A strategic intake: understand the business context</h3>
      <p>We start every engagement with a strategic intake. What do you sell? Who are your customers? What are your goals? A data-driven strategy is built from that understanding, not before it.</p>
      <h3>Does your offer match the demand?</h3>
      <p>We check whether your offer actually matches demand in the market. If it doesn't, we say so first &mdash; before we invest in SEO.</p>
      <h3>Improve UX, copy &amp; positioning</h3>
      <p>SEO brings people in. UX and copy convince them to stay. We work on site structure, load speed, the words on the page, and how the brand comes across.</p>
      <h3>A strong brand</h3>
      <p>People click on brands they recognise or trust. A strong brand means a higher click-through rate and better conversion. Branding reinforces SEO &mdash; and the other way around.</p>
      <h3>SEO as part of the whole strategy</h3>
      <p>SEO doesn't work in a silo. Content built for SEO also feeds your campaigns, and search behaviour is input for your offer and your positioning.</p>

      <h2>So: get the business right first, then SEO</h2>
      <p>If you want SEO to actually pay off, get these right first:</p>
      <ul class="checklist">
        <li>A strong proposition</li>
        <li>A good customer experience</li>
        <li>A convincing website</li>
        <li>A clear strategy</li>
      </ul>
      <p>SEO is then the accelerator that scales all of it.</p>
    </div>
    <aside class="article-aside" aria-labelledby="h-practice">
      <p class="eyebrow" id="h-practice">In practice</p>
      <nav class="continue" aria-label="Continue reading">
        <a href="${x.href('case.boven-yvo')}"><small>How this played out at Boven Yvo</small><span>First measure. Then grow. Then, only then, a new website.${C.ARROW}</span></a>
        <a href="${x.href('werken')}"><small>How we work together</small><span>Start with one question. Grow with one partner.${C.ARROW}</span></a>
      </nav>
    </aside>
  </div>
</article>

${x.terminus({ heading: 'Where does <span class="t-accent">your business</span> stand today?', text: 'A 30-minute conversation, no obligation. You’ll then get our first read of your biggest commercial opportunity.' })}
`,
  };
};
