#!/usr/bin/env node
// Builds the static site from one model and one content set per market. Plain Node, no dependencies.
//
//   node src/build.mjs [--out dist]
//
// model.json holds the concepts (what a page IS: role, parent, slug and status per locale).
// content/<locale>/<concept>.mjs holds what a page SAYS in that market, written for that market.
// Everything structural is computed here from the model and never kept by hand:
// <html lang>, canonical, hreflang, the language switch (same concept, else its nearest built
// ancestor), the navigation, the footer and cross-language fallback labels.
//
// The build refuses to write a site that breaks its own rules: every page one H1, every internal
// link resolving to a built page or asset, noindex on every page, hreflang reciprocal.

import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as C from './components.mjs';

const SRC = dirname(fileURLToPath(import.meta.url));
const outArg = process.argv.indexOf('--out');
const OUT = resolve(outArg > -1 ? process.argv[outArg + 1] : join(SRC, '..', 'dist'));
const model = JSON.parse(readFileSync(join(SRC, 'model.json'), 'utf8'));
const LOCALES = Object.keys(model.locales);
const CONCEPTS = Object.keys(model.concepts);

/* ---------- the model's rules ---------- */

const built = (c, l) => model.concepts[c]?.status?.[l] === 'built';
const pathOf = (c, l) => { const s = model.concepts[c].slug[l]; return model.locales[l].path + (s ? `${s}/` : ''); };
const absolute = (p) => model.site.origin + p;

// A link from locale `l` to concept `c`: the same locale if built, else the locale's reading fallback.
function resolveLink(c, l) {
  if (!model.concepts[c]) throw new Error(`unknown concept "${c}"`);
  if (built(c, l)) return { href: pathOf(c, l), locale: l, fallback: false };
  for (const f of model.locales[l].fallback) if (built(c, f)) return { href: pathOf(c, f), locale: f, fallback: true };
  return null;
}

// The language switch goes to the same concept in the target locale, else its nearest built ancestor.
function switchTarget(c, target) {
  for (let k = c; k; k = model.concepts[k].parent) if (built(k, target)) return { href: pathOf(k, target), same: k === c };
  return null;
}

// hreflang lists only variants that exist. One variant alone gets none.
function alternates(c) {
  const locs = LOCALES.filter((l) => built(c, l));
  if (locs.length < 2) return [];
  const list = [];
  for (const l of locs) for (const h of model.locales[l].hreflang) if (h !== 'x-default') list.push({ hreflang: h, href: absolute(pathOf(c, l)) });
  const xd = model.xDefault.find((l) => built(c, l));
  if (xd) list.push({ hreflang: 'x-default', href: absolute(pathOf(c, xd)) });
  return list;
}

const switchLocales = () => LOCALES.filter((l) => built('home', l));

/* ---------- content ---------- */

const load = async (file) => (await import(pathToFileURL(file).href)).default;
const commons = {};
for (const l of LOCALES) {
  const f = join(SRC, 'content', l, 'common.mjs');
  if (existsSync(f)) commons[l] = await load(f);
}

function context(l, c) {
  const common = commons[l];
  const link = (k) => {
    const r = resolveLink(k, l);
    if (!r) throw new Error(`${l}/${c}: links to "${k}", which has no built variant to fall back to`);
    return r;
  };
  const fbLabel = (r) => (r.fallback ? ` ${common.fallbackLabel[r.locale]}` : '');
  return {
    loc: l, concept: c, common, C, model,
    href: (k) => link(k).href,
    fb: (k) => fbLabel(link(k)),
    hreflangOf: (k) => { const r = link(k); return r.fallback ? r.locale : null; },
    // A text link with an arrow; when it crosses language, the target language is named.
    go: (k, label) => {
      const r = link(k);
      const lang = r.fallback ? ` hreflang="${r.locale}"` : '';
      return `<a class="textlink" href="${r.href}"${lang}><span>${C.esc(label)}</span>${C.ARROW}</a>${r.fallback ? ` <span class="lang-note">${C.esc(common.fallbackLabel[r.locale])}</span>` : ''}`;
    },
    cta: () => ({ href: link('contact').href, label: common.cta }),
    terminus: (o = {}) => C.terminus({ id: `t-${c.replace(/\W/g, '')}`, cta: { href: link('contact').href, label: common.cta }, person: common.terminus.person, ...common.terminus, ...o }),
    rtb: () => C.reasonToBelieve(common.rtb),
  };
}

function headerFor(l, c) {
  const common = commons[l];
  const nav = CONCEPTS.filter((k) => model.concepts[k].nav && built(k, l))
    .sort((a, b) => model.concepts[a].nav - model.concepts[b].nav)
    .map((k) => ({ href: pathOf(k, l), label: common.nav[k], current: k === c || model.concepts[c]?.parent === k }));
  const langs = switchLocales().map((t) => {
    const s = switchTarget(c, t);
    return { label: model.locales[t].switchLabel, name: model.locales[t].name, hreflang: t, href: s.href, current: t === l,
      title: s.same ? model.locales[t].name : `${model.locales[t].name}: ${commons[t].switchFallbackTitle}` };
  });
  return {
    header: C.header({ homeHref: pathOf('home', l), logoAlt: common.logoAlt, skipLabel: common.skip, menuLabel: common.menu, nav, cta: { href: resolveLink('contact', l).href, label: common.cta }, langs }),
    langs,
  };
}

function footerFor(l, langs) {
  const common = commons[l];
  const cols = common.footer.cols.map((col) => ({
    title: col.title,
    items: col.items.flatMap((i) => {
      if (!i.concept) return [i];
      const r = resolveLink(i.concept, l);
      if (!r) return [];
      return [{ label: r.fallback ? `${i.label} ${common.fallbackLabel[r.locale]}` : i.label, href: r.href }];
    }),
  })).filter((col) => col.items.length);
  return C.footer({ homeHref: pathOf('home', l), logoAlt: common.logoAlt, tagline: common.footer.tagline, cols, base: common.footer.base, langs });
}

// French typography, applied to text and to visible attribute values of fr-* pages only:
// a narrow no-break space (U+202F) before : ; ? ! % » and after «, and as the thousands separator.
const NNBSP = '\u202f';
const frText = (t) => t
  .replace(/ ([:;?!%\u00bb])/g, `${NNBSP}$1`)
  .replace(/\u00ab /g, `\u00ab${NNBSP}`)
  .replace(/(?<![+\d])(\d{1,3}) (\d{3})(?!\d| \d)/g, `$1${NNBSP}$2`);
function frenchTypography(html) {
  return html.split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>)/g).map((seg) => {
    if (!seg) return seg;
    if (seg.startsWith('<script') || seg.startsWith('<style')) return seg;
    if (seg.startsWith('<')) return seg.replace(/\b(placeholder|data-message|aria-label|alt|title|content)="([^"]*)"/g, (m, k, v) => `${k}="${frText(v)}"`);
    return frText(seg);
  }).join('');
}

function jsonld(l, c, page) {
  const org = { '@type': 'Organization', '@id': `${model.site.origin}/#org`, name: model.site.name, url: absolute(pathOf('home', l)),
    logo: absolute('/assets/img/logo-full.svg'), email: model.site.email, telephone: model.site.phone,
    areaServed: { '@type': 'Country', name: 'BE' } };
  const node = { '@type': page.schemaType || 'WebPage', '@id': absolute(pathOf(c, l)), url: absolute(pathOf(c, l)), name: page.title, inLanguage: l,
    isPartOf: { '@type': 'WebSite', name: model.site.name, url: model.site.origin }, publisher: { '@id': org['@id'] } };
  if (page.schema) Object.assign(node, page.schema);
  return { '@context': 'https://schema.org', '@graph': [org, node] };
}

/* ---------- build ---------- */

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync(join(SRC, 'static'), OUT, { recursive: true });

const pages = [];
for (const l of LOCALES) {
  for (const c of CONCEPTS) {
    if (!built(c, l)) continue;
    const file = join(SRC, 'content', l, `${c.replace(/\./g, '-')}.mjs`);
    if (!existsSync(file)) throw new Error(`${c} is "built" in ${l}, but ${file} does not exist`);
    if (!commons[l]) throw new Error(`${l} has built pages but no content/${l}/common.mjs`);
    const page = (await load(file))(context(l, c));
    const { header, langs } = headerFor(l, c);
    const html = C.shell({
      lang: l, title: page.title, description: page.description, canonical: absolute(pathOf(c, l)), alternates: alternates(c),
      jsonld: jsonld(l, c, page), header, footer: footerFor(l, langs), main: page.main, bodyClass: page.bodyClass,
      
    });
    const final = l.startsWith('fr') ? frenchTypography(html) : html;
    const dir = join(OUT, pathOf(c, l));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), final);
    pages.push({ l, c, path: pathOf(c, l), html: final, alternates: alternates(c) });
  }
}

// 404 (Dutch): a utility page, not a concept.
{
  const l = 'nl-BE';
  const page = (await load(join(SRC, 'content', l, '404.mjs')))(context(l, 'home'));
  const { header, langs } = headerFor(l, 'home');
  const html = C.shell({ lang: l, title: page.title, description: page.description, canonical: absolute('/404.html'), alternates: [],
    jsonld: jsonld(l, 'home', page), header, footer: footerFor(l, langs), main: page.main });
  writeFileSync(join(OUT, '404.html'), html);
  pages.push({ l, c: '404', path: '/404.html', html, alternates: [] });
}
// Root: the server answers "/" with a redirect to /nl/; this file only covers a server without that rule.
writeFileSync(join(OUT, 'index.html'), '<!doctype html><html lang="nl-BE"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow"><meta http-equiv="refresh" content="0; url=/nl/"><title>Sherlock SEO Agency</title></head><body><a href="/nl/">Sherlock SEO Agency</a></body></html>\n');

/* ---------- invariants ---------- */

const problems = [];
const exists = (p) => (p.endsWith('/') ? existsSync(join(OUT, p, 'index.html')) : existsSync(join(OUT, p)));
const DO_NOT_CLAIM = [/AI-powered/i, /Digital Growth Intelligence/i, /Results guaranteed/i, /100\+ bedrijven/i, /#1 in Belgi/i, /gegarandeerd/i, /garantie op/i];
for (const p of pages) {
  const h1 = (p.html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) problems.push(`${p.path}: ${h1} <h1> elements (want exactly 1)`);
  if (!p.html.includes('<meta name="robots" content="noindex,nofollow">')) problems.push(`${p.path}: no noindex meta`);
  for (const m of p.html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) if (!exists(m[1])) problems.push(`${p.path}: internal link to missing ${m[1]}`);
  const text = p.html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');
  for (const re of DO_NOT_CLAIM) if (re.test(text)) problems.push(`${p.path}: copy contains a DO-NOT-CLAIM phrase ${re}`);
  for (const a of p.alternates) {
    const target = pages.find((q) => absolute(q.path) === a.href);
    if (!target) problems.push(`${p.path}: hreflang ${a.hreflang} points to an unbuilt page ${a.href}`);
    else if (!target.alternates.some((b) => b.href === absolute(p.path))) problems.push(`${p.path}: hreflang to ${a.href} is not reciprocal`);
  }
}
const css = readFileSync(join(OUT, 'assets', 'site.css'), 'utf8');
for (const m of css.matchAll(/url\("?(\/[^")]+)"?\)/g)) if (!exists(m[1])) problems.push(`site.css: missing ${m[1]}`);

if (problems.length) {
  console.error(`BUILD REFUSED (${problems.length}):\n  - ${problems.join('\n  - ')}`);
  process.exit(1);
}
console.log(`built ${pages.length} pages into ${OUT}`);
for (const p of pages) console.log(`  ${p.l.padEnd(6)} ${p.path}${p.alternates.length ? `   hreflang: ${[...new Set(p.alternates.map((a) => a.hreflang))].join(' ')}` : ''}`);
