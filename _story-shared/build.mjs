// Builds the three sherlockseo.com homepage story directions (preview only, noindex).
// Each direction is a self-contained folder (Coolify base_directory) with its own copy of the shared assets.
//   node _story-shared/build.mjs
import { readFileSync, writeFileSync, mkdirSync, cpSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const directions = ['story-gesprek', 'story-deductie', 'story-babbelen'];

const NAV = `<nav aria-label="Hoofdnavigatie"><a href="#diensten">Diensten</a><a href="#bewijs">Resultaten</a><a href="#team" data-inert>Over ons</a></nav>`;
const header = (cta) => `<header class="wrap top"><a class="logo" href="/" aria-label="Sherlock SEO Agency, naar de startpagina"><img src="/assets/img/logo-full.svg" alt="Sherlock SEO Agency" width="156" height="64"></a>${NAV}<a class="btn btn-primary btn-small" href="#gesprek">${cta}</a></header>`;

// Service-page IA: shown as a list, one line each. These pages are not built in this round (links inert).
const SERVICES = [
  ['SEO', 'Gevonden worden op wat je klanten zoeken, niet op wat jij jezelf noemt.'],
  ['Google Ads', 'Advertenties die op aanvragen sturen, niet op klikken.'],
  ['Analytics & tracking', 'Weten welke kanalen klanten opleveren, tot aan de aanvraag.'],
  ['Websites', 'Een site die uitlegt waarom iemand voor jou moet kiezen, en het meetbaar maakt.'],
  ['Zichtbaar in AI-zoekmachines', 'Genoemd worden wanneer iemand het aan ChatGPT of Google AI vraagt.'],
];
const services = (heading) => `
<section class="sec sec-white" id="diensten" aria-labelledby="h-diensten">
  <div class="wrap">
    <p class="kicker">Diensten</p>
    <h2 id="h-diensten" class="h2" style="font-size:clamp(1.6rem,1.2rem + 1.6vw,2.4rem)">${heading}</h2>
    <ul class="services">
      ${SERVICES.map(([t, d]) => `<li><a href="#" data-inert>${t}</a><span>${d}</span></li>`).join('\n      ')}
    </ul>
  </div>
</section>`;

const footer = `
<footer class="foot"><div class="wrap row">
  <span>© 2026 Sherlock SEO Agency · België · sinds 2008</span>
  <span>info@sherlockseo.com · +32 479 25 43 57</span>
  <span>Voorstel, niet publiek, niet geïndexeerd</span>
</div></footer>
<div class="inert-tip" role="status" aria-live="polite"></div>
<script>
document.addEventListener('click',function(e){var a=e.target.closest('[data-inert]');if(!a)return;e.preventDefault();var t=document.querySelector('.inert-tip');t.textContent='Voorbeeld: nog niet actief';t.classList.add('on');clearTimeout(window.__it);window.__it=setTimeout(function(){t.classList.remove('on')},1600);});
</script>`;

const page = ({ title, description, bodyClass = '', banner, main }) => `<!doctype html>
<html lang="nl-BE">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/raleway-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/story.css">
</head>
<body class="${bodyClass}">
<div class="pv">Richting ${banner} · voorstel voor de homepage van sherlockseo.com · knoppen zijn inactief</div>
${main}
${footer}
</body>
</html>
`;

const ctx = { header, services, page };
for (const d of directions) {
  const mod = await import(join(here, 'pages', `${d}.mjs`));
  const html = mod.default(ctx);
  mkdirSync(join(root, d), { recursive: true });
  writeFileSync(join(root, d, 'index.html'), html);
  cpSync(join(here, 'assets'), join(root, d, 'assets'), { recursive: true });
  cpSync(join(here, 'nginx.conf'), join(root, d, 'nginx.conf'));
  cpSync(join(here, 'Dockerfile'), join(root, d, 'Dockerfile'));
  writeFileSync(join(root, d, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) throw new Error(`${d}: expected exactly one <h1>, found ${h1}`);
  console.log(`built ${d}`);
}
