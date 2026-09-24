// Shared, locale-agnostic components. Every string a visitor reads comes from the locale's
// content files (content/<locale>/common.mjs and the page files); these functions only render.

export const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const ARROW = '<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h15"/><path d="M13 6l6 6-6 6"/></svg>';
let uid = 0;
const nid = (p) => `${p}${++uid}`;
const FIG_ARROW = () => { const id = nid('fa'); return `<svg class="fig-arrow" viewBox="0 0 38 16" aria-hidden="true"><defs><linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="1" y1="0" x2="33" y2="0"><stop offset="0" stop-color="#662483"/><stop offset="1" stop-color="#6BB869"/></linearGradient></defs><path d="M1 8h32" stroke="url(#${id})" stroke-width="2" fill="none"/><path d="M28 3l6 5-6 5" stroke="#6BB869" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`; };
const LENS = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5" fill="#fff" stroke="#662483" stroke-width="3"/><circle cx="12" cy="12" r="5" fill="#6BB869"/></svg>';
const MENU = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';

/* ---------------- page shell ---------------- */

export function shell(p) {
  const { lang, title, description, canonical, alternates, jsonld, header, footer, main, bodyClass = '', scripts = '' } = p;
  const alt = alternates.map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${a.href}">`).join('\n  ');
  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <script>document.documentElement.classList.add('js')</script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="noindex,nofollow">
  <meta name="color-scheme" content="light">
  <meta name="theme-color" content="#662483">
  <link rel="canonical" href="${canonical}">
  ${alt}
  <link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
  <link rel="preload" href="/assets/fonts/raleway-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/opensans-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/assets/site.css">
  <script type="application/ld+json">${JSON.stringify(jsonld)}</script>
</head>
<body class="${bodyClass}">
${header}
<main id="inhoud">
${main}
</main>
${footer}
<script src="/assets/site.js" defer></script>
</body>
</html>
`;
}

export function header({ homeHref, logoAlt, skipLabel, menuLabel, nav, cta, langs }) {
  const navItems = nav.map((n) => `<li><a href="${n.href}"${n.current ? ' aria-current="page"' : ''}>${esc(n.label)}</a></li>`).join('');
  return `<a class="skip" href="#inhoud">${esc(skipLabel)}</a>
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="${homeHref}"><img src="/assets/img/logo-full.svg" alt="${esc(logoAlt)}" width="112" height="46"></a>
    <nav class="nav" aria-label="${esc(menuLabel)}">
      <ul class="nav-list">${navItems}</ul>
      <a class="btn btn-primary btn-sm" href="${cta.href}">${esc(cta.label)}</a>
      ${langSwitch(langs)}
    </nav>
    <a class="btn btn-primary head-cta" href="${cta.href}">${esc(cta.label)}</a>
    <details class="menu">
      <summary>${MENU}<span class="visually-hidden">${esc(menuLabel)}</span></summary>
      <div class="menu-panel">
        <ul>${navItems}</ul>
        <a class="btn btn-primary" href="${cta.href}">${esc(cta.label)}</a>
        ${langSwitch(langs)}
      </div>
    </details>
  </div>
</header>`;
}

export function langSwitch(langs) {
  if (langs.length < 2) return '';
  const items = langs.map((l) => l.current
    ? `<span aria-current="true" title="${esc(l.name)}">${esc(l.label)}</span>`
    : `<a href="${l.href}" hreflang="${l.hreflang}" lang="${l.hreflang}" title="${esc(l.title)}">${esc(l.label)}</a>`);
  return `<div class="langs">${items.join('<span class="sep" aria-hidden="true">/</span>')}</div>`;
}

export function footer({ homeHref, logoAlt, tagline, cols, base, langs }) {
  const col = (c) => `<div><h4>${esc(c.title)}</h4><ul>${c.items.map((i) => `<li>${i.href ? `<a href="${i.href}">${esc(i.label)}</a>` : `<span>${esc(i.label)}</span>`}</li>`).join('')}</ul></div>`;
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-brand"><a href="${homeHref}"><img src="/assets/img/logo-full.svg" alt="${esc(logoAlt)}" width="107" height="44"></a><p>${esc(tagline)}</p></div>
      ${cols.map(col).join('\n      ')}
    </div>
    <div class="foot-base"><span>${esc(base.left)}</span>${langSwitch(langs)}<span>${esc(base.right)}</span></div>
  </div>
</footer>`;
}

/* ---------------- the line devices ---------------- */

// Home hero: the method as one line. Business first (the logo's lens), then market and presence,
// and only then the channels, drawn smaller and lighter.
export function methodLine({ stations, channels, summary }) {
  const [s0, s1, s2] = stations;
  const ys = [16, 40, 64, 88, 112];
  const fanX = 846;
  const branches = channels.map((c, i) => `<path class="dv-tick" d="M${fanX} 64 C ${fanX + 34} 64, ${fanX + 44} ${ys[i]}, ${fanX + 84} ${ys[i]} H ${fanX + 104}"/><circle class="dv-dot" cx="${fanX + 104}" cy="${ys[i]}" r="2.5"/><text class="dv-channel" x="${fanX + 116}" y="${ys[i] + 4.5}">${esc(c)}</text>`).join('');
  const h = `<svg class="dv-h" viewBox="0 0 1120 132" role="presentation" aria-hidden="true" focusable="false">
    <defs><linearGradient id="dvh" gradientUnits="userSpaceOnUse" x1="24" y1="0" x2="${fanX}" y2="0"><stop offset="0" stop-color="#662483"/><stop offset=".55" stop-color="#8a4f9f"/><stop offset="1" stop-color="#6BB869"/></linearGradient></defs>
    <path class="dv-draw" pathLength="1" d="M38 64 H ${fanX}" stroke="url(#dvh)" stroke-width="2" fill="none"/>
    <circle cx="24" cy="64" r="13" fill="#fff" stroke="#662483" stroke-width="3"/><circle cx="24" cy="64" r="7" fill="#6BB869"/>
    <circle cx="340" cy="64" r="7" fill="#fff" stroke="#7a3a93" stroke-width="2"/>
    <circle cx="620" cy="64" r="7" fill="#fff" stroke="#8c77a4" stroke-width="2"/>
    <text class="dv-station" x="11" y="104">${esc(s0)}</text>
    <text class="dv-station" x="340" y="104" text-anchor="middle">${esc(s1)}</text>
    <text class="dv-station" x="620" y="104" text-anchor="middle">${esc(s2)}</text>
    <g class="dv-late"><circle cx="${fanX}" cy="64" r="5" fill="#6BB869"/>${branches}</g>
  </svg>`;
  const vys = [208, 232, 256, 280, 304];
  const vBranches = channels.map((c, i) => `<path class="dv-tick" d="M20 190 C 20 ${vys[i] - 8}, 30 ${vys[i]}, 52 ${vys[i]} H 66"/><circle class="dv-dot" cx="66" cy="${vys[i]}" r="2.5"/><text class="dv-channel" x="78" y="${vys[i] + 4.5}">${esc(c)}</text>`).join('');
  const v = `<svg class="dv-v" viewBox="0 0 340 316" role="presentation" aria-hidden="true" focusable="false">
    <defs><linearGradient id="dvv" gradientUnits="userSpaceOnUse" x1="0" y1="20" x2="0" y2="190"><stop offset="0" stop-color="#662483"/><stop offset="1" stop-color="#6BB869"/></linearGradient></defs>
    <path class="dv-draw" pathLength="1" d="M20 33 V 190" stroke="url(#dvv)" stroke-width="2" fill="none"/>
    <circle cx="20" cy="20" r="13" fill="#fff" stroke="#662483" stroke-width="3"/><circle cx="20" cy="20" r="7" fill="#6BB869"/>
    <circle cx="20" cy="84" r="7" fill="#fff" stroke="#7a3a93" stroke-width="2"/>
    <circle cx="20" cy="140" r="7" fill="#fff" stroke="#8c77a4" stroke-width="2"/>
    <text class="dv-station" x="48" y="24.5">${esc(s0)}</text>
    <text class="dv-station" x="48" y="88.5">${esc(s1)}</text>
    <text class="dv-station" x="48" y="144.5">${esc(s2)}</text>
    <g class="dv-late"><circle cx="20" cy="190" r="5" fill="#6BB869"/>${vBranches}</g>
  </svg>`;
  return `<figure class="device" aria-label="${esc(summary)}">${h}${v}<figcaption class="visually-hidden">${esc(summary)}</figcaption></figure>`;
}

// Werken hero: one bounded question first (a segment with a known finish), then one partner (the line keeps going).
export function ladderLine({ start, first, firstSub, second, secondSub, loop, summary }) {
  const h = `<svg class="dv-h ladder" viewBox="0 0 1120 120" role="presentation" aria-hidden="true" focusable="false">
    <defs><linearGradient id="lgh" gradientUnits="userSpaceOnUse" x1="24" y1="0" x2="1090" y2="0"><stop offset="0" stop-color="#662483"/><stop offset=".5" stop-color="#8a4f9f"/><stop offset="1" stop-color="#6BB869"/></linearGradient></defs>
    <path class="dv-draw" pathLength="1" d="M38 56 H 1060" stroke="url(#lgh)" stroke-width="2" fill="none"/>
    <circle cx="24" cy="56" r="13" fill="#fff" stroke="#662483" stroke-width="3"/><circle cx="24" cy="56" r="7" fill="#6BB869"/>
    <text class="l-name" x="11" y="96">${esc(start)}</text>
    <path d="M300 40 V 72 M560 40 V 72" stroke="#2E2E2E" stroke-width="2"/>
    <text class="l-name" x="430" y="30" text-anchor="middle">${esc(first)}</text>
    <text class="l-sub" x="430" y="96" text-anchor="middle">${esc(firstSub)}</text>
    <g class="dv-late">
      <circle cx="560" cy="56" r="6" fill="#fff" stroke="#8a4f9f" stroke-width="2"/>
      <text class="l-name" x="830" y="30" text-anchor="middle">${esc(second)}</text>
      <text class="l-sub" x="830" y="96" text-anchor="middle">${esc(secondSub)}</text>
      <path d="M1060 56 c 0 -22 -20 -30 -40 -30 h -60" stroke="#BDBDC4" stroke-width="1.25" stroke-dasharray="4 5" fill="none"/>
      <path d="M966 20 l -8 6 8 6" stroke="#BDBDC4" stroke-width="1.25" fill="none"/>
      <text class="l-sub" x="1044" y="96" text-anchor="middle">${esc(loop)}</text>
      <circle cx="1060" cy="56" r="7" fill="#6BB869"/>
    </g>
  </svg>`;
  const v = `<svg class="dv-v ladder" viewBox="0 0 340 300" role="presentation" aria-hidden="true" focusable="false">
    <defs><linearGradient id="lgv" gradientUnits="userSpaceOnUse" x1="0" y1="20" x2="0" y2="270"><stop offset="0" stop-color="#662483"/><stop offset="1" stop-color="#6BB869"/></linearGradient></defs>
    <path class="dv-draw" pathLength="1" d="M20 33 V 270" stroke="url(#lgv)" stroke-width="2" fill="none"/>
    <circle cx="20" cy="20" r="13" fill="#fff" stroke="#662483" stroke-width="3"/><circle cx="20" cy="20" r="7" fill="#6BB869"/>
    <text class="l-name" x="48" y="24.5">${esc(start)}</text>
    <path d="M6 70 H 34 M6 150 H 34" stroke="#2E2E2E" stroke-width="2"/>
    <text class="l-name" x="48" y="104">${esc(first)}</text>
    <text class="l-sub" x="48" y="124">${esc(firstSub)}</text>
    <g class="dv-late">
      <text class="l-name" x="48" y="206">${esc(second)}</text>
      <text class="l-sub" x="48" y="226">${esc(secondSub)}</text>
      <circle cx="20" cy="270" r="7" fill="#6BB869"/>
      <text class="l-sub" x="48" y="274.5">${esc(loop)}</text>
    </g>
  </svg>`;
  return `<figure class="device" aria-label="${esc(summary)}">${h}${v}<figcaption class="visually-hidden">${esc(summary)}</figcaption></figure>`;
}

// Six stations of one system. The first is the client's business (the lens); the last is measurement,
// and a dashed loop returns from it to strategy (continu bijsturen).
export function systemLine({ stations, loop }) {
  const items = stations.map((s, i) => `<li${i === 0 ? ' class="origin"' : ''}><span class="s-name">${esc(s.name)}</span>${s.text ? `<p>${s.text}</p>` : ''}</li>`).join('');
  return `<div class="system-wrap"><div class="system-loop" aria-hidden="true"><span>${esc(loop)}</span></div><ol class="system">${items}</ol></div>`;
}

/* ---------------- proof ---------------- */

export function browserFrame({ src, alt, domain, width, height, caption }) {
  return `<figure class="frame"><div class="browser"><div class="browser-bar"><i></i><i></i><i></i><span>${esc(domain)}</span></div><img src="${src}" alt="${esc(alt)}" width="${width}" height="${height}"></div>${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
}

// One proof frame, one image per device: a browser frame with the desktop capture on wide screens,
// a phone frame with the mobile capture on small screens. Real captures only, never drawn.
export function deviceFrame({ desktop, mobile, alt, domain, caption }) {
  return `<figure class="frame dframe"><div class="dframe-shell"><div class="browser-bar"><i></i><i></i><i></i><span>${esc(domain)}</span></div><picture><source media="(max-width: 719px)" srcset="${mobile.src}" width="${mobile.w}" height="${mobile.h}"><img src="${desktop.src}" alt="${esc(alt)}" width="${desktop.w}" height="${desktop.h}"></picture></div>${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
}

export function phoneFrame({ src, alt, width, height, caption, cls = '', lazy = false }) {
  return `<figure class="frame ${cls}"><div class="phone"><img src="${src}" alt="${esc(alt)}" width="${width}" height="${height}"${lazy ? ' loading="lazy"' : ''}></div>${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
}

// A measured figure: from → to, or a single change. Every figure carries its source and period.
export function figure({ from, to, value, label, source }) {
  const v = from !== undefined
    ? `<span class="fig-from">${esc(from)}</span>${FIG_ARROW()}<span class="fig-to">${esc(to)}</span>`
    : `<span class="fig-up">${esc(value)}</span>`;
  return `<div class="figure"><div class="fig-value num">${v}</div><div class="fig-label">${esc(label)}</div><div class="fig-source">${esc(source)}</div></div>`;
}
export const figures = (list, cls = '') => `<div class="figures ${cls}">${list.map(figure).join('')}</div>`;
export const smallArrow = () => '<svg viewBox="0 0 26 12" aria-hidden="true"><path d="M1 6h20" stroke="#8a4f9f" stroke-width="2"/><path d="M17 1.5l5 4.5-5 4.5" stroke="#6BB869" stroke-width="2" fill="none" stroke-linecap="round"/></svg>';
export const bigArrow = () => { const id = nid('ba'); return `<svg viewBox="0 0 64 22" aria-hidden="true"><defs><linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="2" y1="0" x2="56" y2="0"><stop offset="0" stop-color="#662483"/><stop offset="1" stop-color="#6BB869"/></linearGradient></defs><path d="M2 11h54" stroke="url(#${id})" stroke-width="3"/><path d="M49 3l9 8-9 8" stroke="#6BB869" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`; };

export function badges({ label, items }) {
  return `<div class="badges"><span class="b-label">${esc(label)}</span>${items.map((b) => `<img src="${b.src}" alt="${esc(b.alt)}" width="${b.w}" height="${b.h}"${b.square ? ' class="b-square"' : ''}>`).join('')}</div>`;
}

export function quote({ text, name, company, lang }) {
  return `<blockquote class="quote"${lang ? ` lang="${lang}"` : ''}><p>${esc(text)}</p><footer><b>${esc(name)}</b>, ${esc(company)}</footer></blockquote>`;
}

export function textLink(href, label, extra = '') {
  return `<a class="textlink" href="${href}"><span>${esc(label)}</span>${ARROW}</a>${extra}`;
}

/* ---------------- terminus + powered by ---------------- */

export function terminus({ id, heading, text, cta, person }) {
  const who = person ? `<figure class="t-person"><img src="/assets/img/jef-van-gool.webp" alt="${esc(person.alt)}" width="584" height="500"><figcaption><b>${esc(person.name)}</b>${esc(person.role)}</figcaption></figure>` : '';
  return `<section class="terminus" aria-labelledby="${id}">
  <div class="wrap">
    <div class="t-copy">
      <h2 id="${id}">${heading}</h2>
      ${text ? `<p>${text}</p>` : ''}
      <div class="actions"><a class="btn btn-white" href="${cta.href}">${esc(cta.label)}</a></div>
    </div>
    ${who}
  </div>
  <svg class="angle" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true" focusable="false"><polygon points="0,0 100,10 0,10" fill="#6BB869"/><polygon points="0,2.4 82,10 0,10" fill="#ffffff"/></svg>
</section>`;
}

export function poweredBy({ label, text }) {
  return `<aside class="powered" aria-label="${esc(label)}"><div class="wrap"><span class="p-label">${LENS}${esc(label)}</span><p>${text}</p></div></aside>`;
}
