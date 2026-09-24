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

// Home hero: the whole system as one line. It starts at the client's business (the logo's lens), runs through
// strategy, creation and technology, fans out into the channels at execution, gathers again in measurement,
// and a dashed return brings it back to strategy (continu bijsturen). The same stations as the systemLine below.
export function methodLine({ stations, channels, loop, loopLong, summary }) {
  const Y = 70;
  const xs = [40, 232, 424, 616, 808];
  const meting = 1082;
  const fanX = 856;
  const cys = [34, 58, 82, 106];
  const strokes = ['#662483', '#7a3a93', '#8a4f9f', '#8c77a4', '#7ea08a'];
  const branches = channels.map((c, i) => {
    const y = cys[i];
    const tx = fanX + 60;
    const rx = Math.round(tx + c.length * 7.1 + 10);
    return `<path class="dv-tick" d="M${fanX} ${Y} C ${fanX + 30} ${Y}, ${fanX + 30} ${y}, ${fanX + 52} ${y}"/><text class="dv-channel" x="${tx}" y="${y + 4.5}">${esc(c)}</text><path class="dv-tick" d="M${rx} ${y} H 1016 C 1046 ${y}, 1046 ${Y}, ${meting - 14} ${Y}"/>`;
  }).join('');
  const nodes = xs.slice(1).map((x, i) => `<circle cx="${x}" cy="${Y}" r="8" fill="#fff" stroke="${strokes[i + 1]}" stroke-width="2.5"/>`).join('');
  const labels = stations.map((s, i) => `<text class="dv-station" x="${i < 5 ? xs[i] : meting}" y="${Y + 56}" text-anchor="middle">${esc(s)}</text>`).join('');
  const lx = Math.round((xs[1] + meting) / 2);
  const h = `<svg class="dv-h" viewBox="0 0 1120 140" role="presentation" aria-hidden="true" focusable="false">
    <defs><linearGradient id="dvh" gradientUnits="userSpaceOnUse" x1="40" y1="0" x2="${fanX}" y2="0"><stop offset="0" stop-color="#662483"/><stop offset=".6" stop-color="#8a4f9f"/><stop offset="1" stop-color="#6BB869"/></linearGradient></defs>
    <path class="dv-draw" pathLength="1" d="M60 ${Y} H ${fanX}" stroke="url(#dvh)" stroke-width="3" fill="none"/>
    <circle cx="${xs[0]}" cy="${Y}" r="20" fill="#fff" stroke="#662483" stroke-width="4"/><circle cx="${xs[0]}" cy="${Y}" r="10" fill="#6BB869"/>
    ${nodes}
    ${labels}
    <g class="dv-late">
      ${branches}
      <circle cx="${meting}" cy="${Y}" r="11" fill="#6BB869"/>
      <path class="dv-loop" d="M${meting} ${Y - 16} V 26 Q ${meting} 12 ${meting - 14} 12 H ${xs[1] + 14} Q ${xs[1]} 12 ${xs[1]} 26 V ${Y - 24}"/>
      <path class="dv-loop-head" d="M${xs[1] - 6} ${Y - 25} L ${xs[1]} ${Y - 16} L ${xs[1] + 6} ${Y - 25} Z"/>
      <rect x="${lx - 52}" y="2" width="104" height="20" fill="#fff"/>
      <text class="dv-channel" x="${lx}" y="16.5" text-anchor="middle">${esc(loop)}</text>
    </g>
  </svg>`;
  // Mobile: the same line, vertical. The spine sits on the page rail's x (see .dv-v in site.css) and runs on
  // past measurement into the page, so hero and sections are one continuous line.
  const vy = [22, 80, 130, 180, 230];
  const vc = [262, 288, 314, 340];
  const vMeting = 380;
  const vBranches = channels.map((c, i) => `<path class="dv-tick" d="M7 ${vc[i] - 16} C 7 ${vc[i] - 4}, 16 ${vc[i]}, 30 ${vc[i]} H 36"/><circle class="dv-dot" cx="36" cy="${vc[i]}" r="2.5"/><text class="dv-channel" x="46" y="${vc[i] + 4.5}">${esc(c)}</text>`).join('');
  const vNodes = vy.slice(1).map((y, i) => `<circle cx="7" cy="${y}" r="7" fill="#fff" stroke="${strokes[i + 1]}" stroke-width="2.5"/>`).join('');
  const vLabels = stations.slice(0, 5).map((s, i) => `<text class="dv-station" x="40" y="${vy[i] + 6}">${esc(s)}</text>`).join('');
  const v = `<svg class="dv-v" viewBox="0 0 340 420" width="340" height="420" role="presentation" aria-hidden="true" focusable="false">
    <defs><linearGradient id="dvv" gradientUnits="userSpaceOnUse" x1="0" y1="22" x2="0" y2="${vMeting}"><stop offset="0" stop-color="#662483"/><stop offset=".55" stop-color="#8a4f9f"/><stop offset="1" stop-color="#6BB869"/></linearGradient>
    <linearGradient id="dvv2" gradientUnits="userSpaceOnUse" x1="0" y1="${vMeting}" x2="0" y2="420"><stop offset="0" stop-color="#6BB869"/><stop offset="1" stop-color="#662483"/></linearGradient></defs>
    <path class="dv-draw" pathLength="1" d="M7 36 V ${vMeting}" stroke="url(#dvv)" stroke-width="3" fill="none"/>
    <path d="M7 ${vMeting} V 420" stroke="url(#dvv2)" stroke-width="2" fill="none"/>
    <circle cx="7" cy="22" r="14" fill="#fff" stroke="#662483" stroke-width="3.5"/><circle cx="7" cy="22" r="7" fill="#6BB869"/>
    ${vNodes}
    ${vLabels}
    <g class="dv-late">${vBranches}<circle cx="7" cy="${vMeting}" r="9" fill="#6BB869"/>
      <text class="dv-station" x="40" y="${vMeting + 6}">${esc(stations[5])}<tspan class="dv-channel" dx="10">${esc(loopLong)}</tspan></text></g>
  </svg>`;
  return `<figure class="device device-method" aria-label="${esc(summary)}">${h}${v}<figcaption class="visually-hidden">${esc(summary)}</figcaption></figure>`;
}

// Werken hero: one bounded question first (a span with a known end), then one partner (the line keeps going and
// loops back). Same station style as the home line; all labels on one side, spans drawn as brackets under the line.
export function ladderLine({ start, first, firstSub, second, secondSub, loop, loopLong, summary }) {
  const Y = 58;
  const h = `<svg class="dv-h ladder" viewBox="0 0 1120 150" role="presentation" aria-hidden="true" focusable="false">
    <defs><linearGradient id="lgh" gradientUnits="userSpaceOnUse" x1="40" y1="0" x2="1080" y2="0"><stop offset="0" stop-color="#662483"/><stop offset=".5" stop-color="#8a4f9f"/><stop offset="1" stop-color="#6BB869"/></linearGradient></defs>
    <path class="dv-draw" pathLength="1" d="M60 ${Y} H 1070" stroke="url(#lgh)" stroke-width="3" fill="none"/>
    <circle cx="40" cy="${Y}" r="20" fill="#fff" stroke="#662483" stroke-width="4"/><circle cx="40" cy="${Y}" r="10" fill="#6BB869"/>
    <text class="dv-station" x="40" y="${Y + 56}" text-anchor="middle">${esc(start)}</text>
    <path class="dv-span" d="M150 ${Y + 22} v 8 H 510 v -8"/>
    <circle cx="530" cy="${Y}" r="8" fill="#fff" stroke="#8a4f9f" stroke-width="2.5"/>
    <text class="dv-station" x="330" y="${Y + 60}" text-anchor="middle">${esc(first)}</text>
    <text class="dv-channel" x="330" y="${Y + 82}" text-anchor="middle">${esc(firstSub)}</text>
    <g class="dv-late">
      <path class="dv-span" d="M550 ${Y + 22} v 8 H 1082 v -8"/>
      <text class="dv-station" x="816" y="${Y + 60}" text-anchor="middle">${esc(second)}</text>
      <text class="dv-channel" x="816" y="${Y + 82}" text-anchor="middle">${esc(secondSub)}</text>
      <circle cx="1082" cy="${Y}" r="11" fill="#6BB869"/>
      <path class="dv-loop" d="M1082 ${Y - 16} V 24 Q 1082 10 1068 10 H 604 Q 590 10 590 24 V ${Y - 14}"/>
      <path class="dv-loop-head" d="M584 ${Y - 15} L 590 ${Y - 6} L 596 ${Y - 15} Z"/>
      <rect x="784" y="0" width="104" height="20" fill="#fff"/>
      <text class="dv-channel" x="836" y="14.5" text-anchor="middle">${esc(loop)}</text>
    </g>
  </svg>`;
  const v = `<svg class="dv-v ladder" viewBox="0 0 340 330" width="340" height="330" role="presentation" aria-hidden="true" focusable="false">
    <defs><linearGradient id="lgv" gradientUnits="userSpaceOnUse" x1="0" y1="22" x2="0" y2="300"><stop offset="0" stop-color="#662483"/><stop offset="1" stop-color="#6BB869"/></linearGradient></defs>
    <path class="dv-draw" pathLength="1" d="M7 36 V 300" stroke="url(#lgv)" stroke-width="3" fill="none"/>
    <path d="M7 300 V 330" stroke="#8a4f9f" stroke-width="2" fill="none"/>
    <circle cx="7" cy="22" r="14" fill="#fff" stroke="#662483" stroke-width="3.5"/><circle cx="7" cy="22" r="7" fill="#6BB869"/>
    <text class="dv-station" x="40" y="28">${esc(start)}</text>
    <path class="dv-span" d="M28 66 h -6 V 146 h 6"/>
    <text class="dv-station" x="40" y="100">${esc(first)}</text>
    <text class="dv-channel" x="40" y="122">${esc(firstSub)}</text>
    <circle cx="7" cy="162" r="7" fill="#fff" stroke="#8a4f9f" stroke-width="2.5"/>
    <g class="dv-late">
      <path class="dv-span" d="M28 180 h -6 V 262 h 6"/>
      <text class="dv-station" x="40" y="214">${esc(second)}</text>
      <text class="dv-channel" x="40" y="236">${esc(secondSub)}</text>
      <circle cx="7" cy="300" r="9" fill="#6BB869"/>
      <text class="dv-channel" x="40" y="304.5">${esc(loopLong)}</text>
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

/* ---------------- terminus + reason to believe ---------------- */

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

// The reason to believe (our own intelligence layer), shown once, inside the system it explains. Never a badge.
export function reasonToBelieve({ label, text }) {
  return `<div class="rtb"><span class="p-label">${LENS}${esc(label)}</span><p>${text}</p></div>`;
}
