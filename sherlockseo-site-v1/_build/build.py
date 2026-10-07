#!/usr/bin/env python3
"""Builds sherlockseo-site-v1 (static). Home = the baseline sherlock-site body (extracted verbatim, then edited);
inner pages share its tokens/components. Run from anywhere: python3 _build/build.py"""
import re, os, json, shutil
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
BASE = os.path.join(ROOT, '..', 'sherlock-site', 'index.html')
ORIGIN = 'https://sherlockseo-site-v1.preview.sherlockseo.com'
CTA = 'Bespreek je groeivraag'
ARR = '<span class="arr">→</span>'

NAV = [('/werken-met-sherlock/', 'Werken met Sherlock'), ('/cases/', 'Cases'),
       ('/over-ons/', 'Over ons'), ('/academie/waarom-seo-pas-werkt-als-je-business-klopt/', 'Academie')]
LENS = '''<svg class="lens" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="13" cy="13" r="9.5" stroke="currentColor" stroke-width="3"/><path d="M20 20 L29 29" stroke="var(--green)" stroke-width="3.4" stroke-linecap="round"/></svg>'''

# GTM / GA4: placeholders only. The loader is NOT included in the preview (no third-party requests);
# events are pushed to window.dataLayer so the container can be attached later without touching the pages.
GTM_COMMENT = '''<!-- MEASUREMENT (placeholder, preview loads nothing external):
     GTM container: GTM-XXXXXXX (to be created via the Sherlock GTM capability; publish is human-approved)
     GA4 property: 308267034 (sherlockseo.com), measurement id G-XXXXXXXXXX (via GTM, not hardcoded)
     dataLayer events pushed by /assets/site.js: cta_click{location,label} · case_click{case} · nav_click{label}
     · contact_form_submit{preview:true} (macro conversion; becomes generate_lead server-side via the lead rail)
     Loader snippet goes here at go-live:  <script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXXXX');</script> -->'''

def header(cur):
    links = ''.join(f'<a href="{h}"{" aria-current=\"page\"" if cur==h else ""} data-evt="nav_click" data-label="{t}">{t}</a>' for h, t in NAV)
    return f'''<header class="site" id="hdr">
  <div class="wrap nav">
    <a class="wordmark" href="/" aria-label="Sherlock SEO Agency, naar de startpagina">{LENS}Sherlock<span style="font-weight:600;color:var(--green-ink)">SEO</span></a>
    <div class="nav-right">
      <nav class="nav-links" id="nl" aria-label="Hoofdmenu">{links}<a href="/contact/" class="btn btn-primary nav-cta-d" data-evt="cta_click" data-loc="header">{CTA}</a></nav>
      <a href="/contact/" class="btn btn-primary nav-cta-m" data-evt="cta_click" data-loc="header-mobile">{CTA}</a>
      <button class="menu-btn" id="mb" aria-expanded="false" aria-controls="nl">Menu</button>
    </div>
  </div>
</header>'''

FOOTER = f'''<footer class="site">
  <div class="wrap">
    <div class="fgrid">
      <div><div class="wordmark" style="font-size:1.05rem;color:#fff">{LENS.replace('currentColor','#fff')}Sherlock SEO Agency</div>
        <p>SEO- en groei-agency voor gevestigde kmo's in België.</p></div>
      <div><h3>Sherlock</h3><ul><li><a href="/werken-met-sherlock/">Werken met Sherlock</a></li><li><a href="/cases/">Cases</a></li><li><a href="/over-ons/">Over ons</a></li><li><a href="/contact/">Contact</a></li></ul></div>
      <div><h3>Uit de Academie</h3><ul><li><a href="/academie/waarom-seo-pas-werkt-als-je-business-klopt/">Waarom SEO pas werkt als je business klopt</a></li></ul></div>
      <div><h3>Contact</h3><ul><li>info@sherlockseo.com</li><li>+32 479 25 43 57</li></ul></div>
    </div>
    <div class="fbase"><span>© 2026 Sherlock SEO Agency · <a href="/privacy/">Privacy</a></span><span>Preview: niet publiek, niet geïndexeerd</span></div>
  </div>
</footer>'''

def page(path, title, desc, body, cur=None, jsonld=None, status=200):
    ld = f'<script type="application/ld+json">{json.dumps(jsonld, ensure_ascii=False)}</script>' if jsonld else ''
    return f'''<!doctype html>
<html lang="nl-BE">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta property="og:title" content="{title}"><meta property="og:description" content="{desc}"><meta property="og:type" content="website">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/raleway-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/opensans-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/site.css">
{ld}
</head>
<body>
{GTM_COMMENT}
<a class="skip" href="#main">Naar de inhoud</a>
<div class="preview-banner">PREVIEW · interne review · <b>niet publiek</b> · formulier verstuurt nog niets · geen prijzen</div>
<div class="spine" id="spine"></div>
{header(cur)}
<main id="main"><div class="stage">
{body}
</div></main>
{FOOTER}
<script src="/assets/site.js" defer></script>
</body>
</html>
'''

def phero(kicker, h1, lede='', crumbs='', extra='', cta=True):
    c = f'<p class="crumbs">{crumbs}</p>' if crumbs else ''
    btn = f'<div class="hero-cta"><a href="/contact/" class="btn btn-primary" data-evt="cta_click" data-loc="hero">{CTA} {ARR}</a></div>' if cta else ''
    l = f'<p class="lede">{lede}</p>' if lede else ''
    return f'''<section class="phero" data-hdr="inverse"><div class="wrap">{c}<p class="kicker">{kicker}</p><h1>{h1}</h1>{l}{extra}{btn}</div></section>'''

def close(h, p='Een gesprek van 30 minuten, vrijblijvend. Daarna krijg je onze eerste inschatting van je grootste commerciële kans.'):
    return f'''<section class="close" data-hdr="inverse"><div class="wrap"><h2>{h}</h2><p>{p}</p><a href="/contact/" class="btn btn-primary" data-evt="cta_click" data-loc="close">{CTA} {ARR}</a></div></section>'''

def figs(items, light=False):
    out = []
    for f in items:
        if 'from' in f:
            v = f'<span>{f["from"]}</span><span class="ar">→</span><span class="to">{f["to"]}</span>'
        else:
            v = f'<span class="to">{f["value"]}</span>'
        out.append(f'<div class="fig"><div class="v">{v}</div><div class="l">{f["label"]}</div><div class="s">{f["source"]}</div></div>')
    return f'<div class="figures{" light" if light else ""}" style="--n:{len(items)}">{"".join(out)}</div>'

def facts(items):
    return '<dl class="facts">' + ''.join(f'<div><dt>{a}</dt><dd>{b}</dd></div>' for a, b in items) + '</dl>'

def rows(items, dark=False):
    return '<div class="rows">' + ''.join(f'<div class="row"><div class="a">{a}</div><div class="b">{b}</div></div>' for a, b in items) + '</div>'

def steps(items):
    return '<ol class="steps">' + ''.join(f'<li><div><b>{a}</b><span>{b}</span></div></li>' for a, b in items) + '</ol>'

def sec(inner, cls='', id=''):
    i = f' id="{id}"' if id else ''
    return f'<section class="sec {cls}"{i}><div class="wrap">{inner}</div></section>'

def head(kicker, h2, lede=''):
    l = f'<p class="lede">{lede}</p>' if lede else ''
    return f'<p class="kicker">{kicker}</p><h2>{h2}</h2>{l}'

BADGES = '''<div class="badges" role="list" aria-label="Partners">
<img role="listitem" src="/assets/img/badge-google-partners.webp" alt="Google Partners" width="548" height="152" loading="lazy">
<img role="listitem" src="/assets/img/badge-meta-business-partner.webp" alt="Meta Business Partner" width="786" height="267" loading="lazy">
<img role="listitem" src="/assets/img/badge-semrush-agency-partner.webp" alt="Semrush Certified Agency Partner" width="158" height="158" loading="lazy"></div>'''

pages = {}

# ------------------------------------------------------------------ HOME (baseline body, edited)
base = open(BASE, encoding='utf-8').read()
hs = base.index('<!-- ============================================================ 1 · HERO')
he = base.index('</div><!-- /stage -->')
home = base[hs:he]
home = home.replace('href="#contact" class="btn btn-primary">Bespreek je groeivraag', 'href="/contact/" class="btn btn-primary" data-evt="cta_click" data-loc="hero">Bespreek je groeivraag')
home = home.replace('<a href="#werkwijze" class="btn btn-line">Bekijk hoe we werken</a>', '<a href="#werkwijze" class="btn btn-line" data-evt="cta_click" data-loc="hero-secondary">Bekijk hoe we werken</a>')
home = home.replace('<a href="#werkwijze">Bekijk hoe we werken →</a>', '<a href="/werken-met-sherlock/">Bekijk hoe we werken →</a>')
# lanes: the two entry modes are now Opdracht / Groeipartner (Jef 24/9: Mission -> Growth Partnership; no price ladder)
ls = home.index('<div class="lanes">'); le = home.index('</section>', ls)
home = home[:ls] + '''<div class="lanes">
    <div class="lane rise">
      <div class="k">Heb je één concrete vraag</div>
      <h4>Start met een opdracht</h4>
      <p>Een nieuwe website, campagnes die te weinig opleveren, een plafond in je groei. We pakken die ene vraag aan, met een eindpunt dat je vooraf kent.</p>
      <a class="more" href="/werken-met-sherlock/#opdracht">Hoe een opdracht verloopt →</a>
    </div>
    <div class="lane rise d1">
      <div class="k">Wil je het geheel</div>
      <h4>Groei verder met één partner</h4>
      <p>Strategie, website, search, advertising en measurement als één plan dat we samen continu bijsturen, op wat echt aanvragen oplevert.</p>
      <a class="more" href="/werken-met-sherlock/#partner">Wat een groeipartner doet →</a>
    </div>
  </div>
''' + home[le:]
# proof: only published proof, with source + period (finding: Lock-proof list never published; Boven Yvo + anonymous marketplace are)
bs = home.index('<div class="roll">'); be = home.index('</div>\n  </div>\n</section>', home.index('class="honest')) 
bend = home.index('</section>', bs)
home = home[:bs] + '''<div class="roll">
      <div class="roll-row rise"><span class="name">Boven Yvo</span><span class="what"><b>+170% conversies</b> en bezoeken via Google van 291 naar 644: eerst meten, dan groeien, dan pas een nieuwe website.<span class="src">Google Analytics en Search Console, juni 2019 vs. juni 2020.</span></span><a class="go" href="/cases/boven-yvo/" data-evt="case_click" data-case="boven-yvo">Lees de case →</a></div>
      <div class="roll-row rise"><span class="name">Meertalige marketplace</span><span class="what">Van <b>4.261 dubbele URL's</b> tussen talen naar nul; interne redirects van 14.704 naar 247.<span class="src">Screaming Frog, crawl voor en na de opdracht. Case gepubliceerd juli 2026, klant anoniem.</span></span><a class="go" href="/cases/meertalige-marketplace/" data-evt="case_click" data-case="marketplace">Lees de case →</a></div>
    </div>
    <div class="proof-line rise">
      <span>Google Partner</span><span class="d">·</span><span>Meta Business Partner</span><span class="d">·</span><span>Semrush Certified Agency Partner</span><span class="d">·</span>
      <span>Reviews op <a href="https://www.sortlist.be/nl/agency/sherlock-seo-agency" target="_blank" rel="noopener noreferrer">Sortlist</a> en <a href="https://clutch.co/profile/sherlock-seo-agency" target="_blank" rel="noopener noreferrer">Clutch</a></span>
    </div>
    <p class="rise" style="margin-top:1.6rem"><a class="btn btn-line" href="/cases/" data-evt="cta_click" data-loc="proof">Alle cases</a></p>
  </div>
''' + home[bend:]
home = home.replace('<section class="powered tight" id="contact" data-hdr="inverse">', '<section class="powered tight" id="powered" data-hdr="inverse">')
home = home.replace('<a href="mailto:hello@sherlockseo.com" class="btn btn-primary rise d3">', '<a href="/contact/" class="btn btn-primary rise d3" data-evt="cta_click" data-loc="powered">')
home = home.replace('<a href="#werkwijze" class="btn btn-line">', '<a href="#werkwijze" class="btn btn-line">')
home = re.sub(r'<a href="#contact" class="btn btn-primary">', '<a href="/contact/" class="btn btn-primary" data-evt="cta_click" data-loc="werkwijze">', home)
org = {"@context": "https://schema.org", "@type": "Organization", "name": "Sherlock SEO Agency", "url": "https://www.sherlockseo.com/", "email": "info@sherlockseo.com", "telephone": "+32479254357", "areaServed": "BE", "foundingDate": "2008"}
pages['/'] = page('/', 'Sherlock SEO Agency — van gevonden naar gezocht én gekozen worden',
    "Sherlock is de SEO- en groei-agency voor gevestigde KMO's: één senior partner brengt je bedrijf, je markt en je digitale aanwezigheid op één lijn. Bespreek je groeivraag.",
    home, cur='/', jsonld=org)

# ------------------------------------------------------------------ WERKEN MET SHERLOCK
w = phero('Werken met Sherlock', 'Start met één vraag. <em>Groei met één partner.</em>',
  'Je komt met iets concreets: een nieuwe website, campagnes die te weinig opleveren, een plafond in je groei. We pakken die vraag aan vanuit je bedrijf, niet vanuit één kanaal. Werkt het, dan ga je met ons verder als groeipartner.')
w += sec(head('De opdracht', 'Waarmee je binnenkomt.') + rows([
  ('Een website die uitlegt waarom klanten voor jou kiezen', 'Pagina\'s die bezoek omzetten in aanvragen, met het resultaat gemeten.'),
  ('Weten welke campagnes echte klanten opleveren', 'Aanvragen betrouwbaar gemeten, zodat beslissingen over je site en je campagnes niet meer op gevoel lopen.'),
  ('Advertenties die aanvragen opleveren, niet alleen kliks', 'Campagnes volgens een mediaplan, doorlopend opgevolgd op aanvragen.'),
  ('Gevonden worden op wat je verkoopt', 'Meer relevant bezoek op de onderwerpen die aanvragen opleveren.')]) +
  '<p class="lede" style="color:var(--text)">Elke opdracht heeft een eindpunt dat je vooraf kent: wat we opleveren en hoe we zien dat het werkt.</p>', id='opdracht')
w += sec(head('De start', 'Eerst je bedrijf, <em>dan de opdracht.</em>') + steps([
  ('Het gesprek', '30 minuten over waar je bedrijf staat en waar je naartoe wil. Vrijblijvend.'),
  ('Onze eerste inschatting', 'Van je grootste commerciële kans.'),
  ('Een voorstel', 'Wat we doen, wanneer je resultaat ziet en wat het kost.')]) +
  f'<p style="margin-top:1.6rem"><a href="/contact/" class="btn btn-primary" data-evt="cta_click" data-loc="werken-start">{CTA} {ARR}</a></p>', 'alt')
w += sec(head('Het partnership', 'Daarna: <em>één partner.</em>', 'Als groeipartner nemen we de verantwoordelijkheid voor prioriteren, uitvoeren en bijleren. Eén plan, dat we samen bijsturen.') +
  rows([('In elk overleg zie je', 'wat we begrepen · wat we beslisten · wat we opleverden · wat er veranderde · wat we maten · wat we als volgende stap voorstellen')]), 'dark', id='partner')
w += sec(head('Wat we uitvoeren', 'Zes disciplines, <em>één groeiplan.</em>') + rows([
  ('Strategie &amp; positionering', 'Wat je verkoopt, aan wie, en waarom klanten voor jou kiezen: het plan waar de rest van uitgaat.'),
  ('Website &amp; content', 'Bestaande pagina\'s die beter presteren, of één nieuwe pagina met een duidelijk doel. Een volledig nieuwe website is een latere stap.'),
  ('SEO, search &amp; AI-zichtbaarheid', 'Audit van je topics en zoekintenties, en pagina\'s op de onderwerpen waar je gezag over moet hebben. We kijken ook hoe AI-assistenten je bedrijf vandaag samenvatten; resultaten beloven we daar niet.'),
  ('Google Ads', 'Campagnes volgens een mediaplan, opgevolgd op aanvragen. Het budget blijft jouw beslissing.'),
  ('CRO', 'Verbeteringen aan bestaande pagina\'s, met een preview vooraf en een stap terug als het niet werkt.'),
  ('Tracking &amp; measurement', 'GA4, conversie-events en een meetplan per fase van de klantreis. Meestal de eerste stap: zonder betrouwbare meting weet je niet of een volgende ingreep werkt.')]))
w += sec(head('Bewijs', 'Bewijs per stap.') + '''<div class="next">
<a href="/cases/meertalige-marketplace/" data-evt="case_click" data-case="marketplace"><small>Opdracht · meertalige marketplace</small><span>Per taal één pagina die Google toont, in plaats van duplicaten die elkaar beconcurreren. →</span></a>
<a href="/cases/boven-yvo/" data-evt="case_click" data-case="boven-yvo"><small>Groeipartner · Boven Yvo</small><span>Eerst meten, dan advertenties, SEO en content, en pas daarna een nieuwe website. →</span></a></div>''', 'alt')
w += sec(head('Vragen', 'Wat klanten ons eerst vragen.') + '''<dl class="faq">
<div><dt>Wat kost het?</dt><dd>Een groeipartnership is een vast bedrag per maand, geen uurtje-factuurtje. Een opdracht krijgt een eigen prijs in het voorstel.</dd></div>
<div><dt>Garanderen jullie resultaten?</dt><dd>Nee. Posities en rendement garanderen we niet: die hangen ook af van je markt en je aanbod.</dd></div>
<div><dt>Moeten we alles bij jullie onderbrengen?</dt><dd>Nee. Je eigen team of andere partners kunnen delen blijven doen. Wij zorgen dat alles van hetzelfde plan vertrekt.</dd></div>
<div><dt>Wat meten jullie precies?</dt><dd>Aanvragen: formulieren, telefoontjes, offertevragen. Hoeveel omzet daaruit volgt, zie je in je eigen verkoop.</dd></div>
<div><dt>En AI-zoekmachines?</dt><dd>We kijken hoe Google én AI-assistenten je bedrijf vandaag samenvatten, als deel van je digitale aanwezigheid. Resultaten beloven we daar niet.</dd></div></dl>''')
w += close('Welke vraag leg je <em>op tafel?</em>')
pages['/werken-met-sherlock/'] = page('/werken-met-sherlock/', 'Werken met Sherlock: marketing uitbesteden aan één partner | Sherlock SEO Agency',
  'Start met één concrete groeivraag en groei verder met één partner. Eerst je bedrijf, dan de opdracht, daarna samen bijsturen. Bespreek je groeivraag.', w, cur='/werken-met-sherlock/')

# ------------------------------------------------------------------ CASES HUB
c = phero('Cases', 'Wat we deden, <em>en wat er veranderde.</em>', 'Per case: de volgorde van het werk en de cijfers, met bron en periode. Alleen cases die op sherlockseo.com gepubliceerd zijn.', cta=False)
c += sec('''<p class="kicker">Groeipartner · alu ramen en deuren</p><h2>Boven Yvo: eerst meten, dan groeien, dan pas een nieuwe website.</h2>''' + figs([
  {'value': '+170%', 'label': 'conversies', 'source': 'Alle conversies, Google Analytics, juni 2019 vs. juni 2020'},
  {'from': '291', 'to': '644', 'label': 'bezoeken via Google', 'source': 'Search Console, zelfde periode'}], True) +
  '<p style="margin-top:1.6rem"><a class="btn btn-ghost" href="/cases/boven-yvo/" data-evt="case_click" data-case="boven-yvo">Lees de case</a></p>')
c += sec('''<p class="kicker">Opdracht · meertalige marketplace, België</p><h2>Van 4.261 dubbele URL's tussen talen naar nul.</h2>
<p class="lede">Een platform in vier talen maakte zijn eigen duplicaten aan. We herbouwden de meertalige URL-architectuur, van de code tot de tests: per taal één pagina die Google toont.</p>''' + figs([
  {'from': '14.704', 'to': '247', 'label': 'interne redirects', 'source': 'Screaming Frog, crawl voor en na de opdracht; case gepubliceerd juli 2026'},
  {'from': '835', 'to': '95', 'label': "kapotte pagina's (404)", 'source': 'Screaming Frog, zelfde crawls'}], True) +
  '<p style="margin-top:1.6rem"><a class="btn btn-ghost" href="/cases/meertalige-marketplace/" data-evt="case_click" data-case="marketplace">Lees de case</a></p>', 'alt')
c += sec('<p class="kicker">Partners en reviews</p>' + BADGES + '<p class="linkline" style="margin-top:1.6rem">Onafhankelijke klantreviews buiten onze eigen site: <a href="https://www.sortlist.be/nl/agency/sherlock-seo-agency" target="_blank" rel="noopener noreferrer">Sortlist</a> · <a href="https://clutch.co/profile/sherlock-seo-agency" target="_blank" rel="noopener noreferrer">Clutch</a> (externe pagina\'s).</p>')
c += close('Waar zit <em>jouw grootste kans?</em>', 'Vertel in 30 minuten waar je bedrijf staat. Daarna krijg je onze eerste inschatting.')
pages['/cases/'] = page('/cases/', 'Cases: wat we deden en wat er veranderde | Sherlock SEO Agency',
  'Wat Sherlock deed, in welke volgorde, en wat er veranderde. Per case de cijfers, met bron en periode.', c, cur='/cases/')

# ------------------------------------------------------------------ CASE: BOVEN YVO
b = phero('Case · Boven Yvo · groeipartner', 'Eerst meten. Dan groeien. <em>Dan pas een nieuwe website.</em>', crumbs='<a href="/cases/">Cases</a> › Boven Yvo', cta=False,
  extra=facts([('Sector', 'Bouw, beglazing: alu ramen en deuren'), ('Vestigingen', 'Vier, onder twee merknamen'), ('Klant sinds', '2017'), ('Case gepubliceerd', 'Februari 2023')]) + figs([
  {'value': '+170%', 'label': 'conversies', 'source': 'Alle conversies, Google Analytics, juni 2019 vs. juni 2020'},
  {'from': '291', 'to': '644', 'label': 'bezoeken via Google', 'source': 'Search Console, zelfde periode'}]))
b += sec('''<div class="shots"><figure><img src="/assets/img/bovenyvo-desktop-2026-09-24.jpg" width="1800" height="1025" alt="De startpagina van bovenyvo.be" loading="lazy"></figure>
<figure class="m"><img src="/assets/img/bovenyvo-mobile-2026-09-24.jpg" width="780" height="1504" alt="De startpagina van bovenyvo.be op een smartphone" loading="lazy"></figure></div>
<p class="cap">bovenyvo.be op 24 september 2026, jaren na de cijfers in deze case. Onbewerkte schermafdruk; het huidige ontwerp is niet ons werk.</p>''')
b += sec(head('Wat we begrepen en beslisten', 'Eerst alle conversies meten.') + rows([
  ('Wat we begrepen', 'Boven Yvo wilde meer lokale aanvragen, in Oost-Vlaanderen en Vlaams-Brabant.'),
  ('Wat we beslisten', 'Eerst alle conversies meten. Daarna de data van de zoekcampagnes gebruiken om zowel de organische als de betaalde campagnes op te zetten.'),
  ('Wat er veranderde', 'De aanvragen groeiden elk jaar. Toen werd de vraag: niet méér aanvragen, maar betere.'),
  ('Wat we voorstelden', 'Een nieuwe website, die de kwaliteit van het bedrijf beter toont. Dat was ons advies, na jaren van meten, campagnes, SEO en content.')]), 'alt')
b += sec(head('Wat we opleverden', 'In deze volgorde.') + steps([
  ('Conversiemeting', 'Eerst: alle conversies bijgehouden.'),
  ('Zoekcampagnes', 'Die aanvragen opleverden, en de data voor de organische en betaalde campagnes.'),
  ('Technische en on-page SEO', 'Samen met de ontwikkelaars van Boven Yvo, op de bestaande site.'),
  ('Content en een Pinterest-strategie', 'Extra inhoud op de bestaande site.'),
  ('Webmasterbeheer', 'Updates en beveiliging, toen hun ontwikkelaar stopte.')]))
b += sec('<p class="kicker">Verder</p><div class="next"><a href="/academie/waarom-seo-pas-werkt-als-je-business-klopt/"><small>Uit de Academie</small><span>Waarom SEO pas werkt als je business klopt →</span></a><a href="/cases/meertalige-marketplace/" data-evt="case_click" data-case="marketplace"><small>Nog een case · opdracht</small><span>Van 4.261 dubbele URL\'s tussen talen naar nul →</span></a></div>', 'alt')
b += close('Waar zit <em>jouw grootste kans?</em>', 'Vertel in 30 minuten waar je bedrijf staat. Daarna krijg je onze eerste inschatting.')
pages['/cases/boven-yvo/'] = page('/cases/boven-yvo/', 'Case Boven Yvo: eerst meten, dan groeien | Sherlock SEO Agency',
  'Boven Yvo, alu ramen en deuren: eerst alle conversies meten, dan advertenties, SEO en content, en pas daarna een nieuwe website. +170% conversies en 291 → 644 bezoeken via Google (juni 2019 vs. juni 2020).',
  b, cur='/cases/', jsonld={"@context": "https://schema.org", "@type": "Article", "headline": "Eerst meten. Dan groeien. Dan pas een nieuwe website.", "datePublished": "2023-02-21", "author": {"@type": "Organization", "name": "Sherlock SEO Agency"}, "about": "Boven Yvo"})

# ------------------------------------------------------------------ CASE: MARKETPLACE
m = phero('Case · opdracht · meertalige marketplace (België)', "Van 4.261 dubbele URL's tussen talen <em>naar nul.</em>", crumbs='<a href="/cases/">Cases</a> › Meertalige marketplace', cta=False,
  extra=facts([('Sector', 'Events, marketplace'), ('Platform', 'Drupal 10, vier talen (NL, FR, DE, EN), ±20.000 listings'), ('Wat we deden', 'Technische SEO, SEO-architectuur, full-stack development, QA'), ('Case gepubliceerd', 'Juli 2026')]) + figs([
  {'from': '14.704', 'to': '247', 'label': 'interne redirects', 'source': 'Screaming Frog, crawl voor en na de opdracht; case gepubliceerd juli 2026'},
  {'from': '835', 'to': '95', 'label': "kapotte pagina's (404)", 'source': 'Screaming Frog, zelfde crawls'},
  {'value': '5.554', 'label': 'unieke listings correct indexeerbaar, in vier talen', 'source': 'Screaming Frog, crawl na de opdracht'}]) +
  "<p class=\"tech-note\">Technische resultaten. De crawl-omvang halveerde, zodat Google zijn tijd besteedt aan pagina's die klanten kunnen opleveren. De klant blijft anoniem, zoals in de gepubliceerde case.</p>")
m += sec(head('De uitdaging', 'Een site die zijn eigen duplicaten maakte.') + '''<div class="prose"><p>De marketplace presteerde ondermaats in Google: dalende zichtbaarheid, pagina's die niet indexeerden, en een crawl vol ruis. Van de 91.614 gecrawlde URL's was 42% een redirect.</p>
<p>De site maakt zijn pagina's zelf aan. Elke combinatie van taal, categorie, regio en type kán een URL worden. Zonder regels groeit dat tot ±50.000 pagina's die elkaars posities wegnemen en het crawlbudget van Google opgebruiken.</p></div>''')
m += sec(head('Wat we beslisten', 'Het probleem zat in de machine, niet in de pagina\'s.') + '''<div class="prose"><p>Titels, teksten en links aanpassen lost dit niet op. Daarom legden we naast de crawl ook een audit van de code: hoe worden pagina's en URL's gemaakt? Daar zaten de oorzaken, onzichtbaar voor elke crawl.</p>
<p>De regel die we kozen: hoogstens twee dimensies per URL. Dat geeft ±3.000 beheersbare URL's in plaats van ±50.000.</p></div>''', 'alt')
m += sec(head('Wat we bouwden', 'Ontworpen, gebouwd en getest.') + steps([
  ('Een meertalige URL-architectuur', 'Vertaalde hubs, categorieën, regio\'s en facetten.'),
  ('Canonical en hreflang, herschreven', 'Vier talen, alleen volledige clusters.'),
  ('Indexatieregels', 'Unieke pagina\'s indexeerbaar; duplicaten en paginatie niet.'),
  ('XML-sitemaps per taal', 'Met strikte controle per cluster.'),
  ('Redirect-lagen', 'Voor oude URL\'s, parameters en varianten in hoofdletters.'),
  ('Tests en overdracht', 'Unit- en end-to-end-tests (PHPUnit, Playwright), 258 commits, en per probleem een geprioriteerde lijst voor hun ontwikkelaars.')]))
m += sec('<p class="kicker">Wat dit zegt</p><h2>Een crawl toont wat een site laat zien. Hoe pagina\'s ontstaan, zie je alleen in de code.</h2><div class="next"><a href="/werken-met-sherlock/"><small>Hoe een opdracht verloopt</small><span>Start met één vraag. Groei met één partner. →</span></a><a href="/cases/boven-yvo/" data-evt="case_click" data-case="boven-yvo"><small>Nog een case · groeipartner</small><span>Boven Yvo: eerst meten, dan groeien, dan pas een nieuwe website →</span></a></div>', 'alt')
m += close('Een vraag met een <em>duidelijk eindpunt?</em>', 'Een opdracht begint met een gesprek van 30 minuten. In het voorstel staat wat we doen, wanneer je resultaat ziet en wat het kost.')
pages['/cases/meertalige-marketplace/'] = page('/cases/meertalige-marketplace/', "Case meertalige marketplace: 4.261 dubbele URL's naar 0 | Sherlock SEO Agency",
  "Een meertalige marketplace in België: de URL-architectuur herbouwd. Dubbele URL's tussen talen 4.261 → 0, interne redirects 14.704 → 247 (Screaming Frog, crawl voor en na de opdracht; case gepubliceerd juli 2026).",
  m, cur='/cases/', jsonld={"@context": "https://schema.org", "@type": "Article", "headline": "Van 4.261 dubbele URL's tussen talen naar nul", "datePublished": "2026-07-03", "author": {"@type": "Organization", "name": "Sherlock SEO Agency"}})

# ------------------------------------------------------------------ OVER ONS
o = phero('Over Sherlock', 'Wie je aan tafel <em>krijgt.</em>', 'Sherlock is een klein, senior team. Dezelfde mensen die je eerste gesprek voeren, bouwen en meten ook mee, niet een los netwerk van freelancers.',
  extra=facts([('Land', 'België'), ('Talen', 'Nederlands, Frans, Engels'), ('Actief sinds', '2008'), ('Partners', 'Google, Meta, Semrush')]))
o += sec(head('Het team', 'Klein, senior, en zelf aan het stuur.') + '''<div class="team">
<div class="tm"><img src="/assets/img/jef-van-gool.webp" alt="Jef Van Gool" width="88" height="88"><div><b>Jef Van Gool</b><span class="r">Oprichter. Hij voert je eerste gesprek.</span><p class="q">“Jouw succes is ons succes!”</p></div></div>
<div class="tm"><img src="/assets/img/joan.webp" alt="Joan" width="88" height="88"><div><b>Joan</b><span class="r">Web-analist: big data en performance.</span><p class="q">“Van data naar inzichten.”</p></div></div>
<div class="tm"><img src="/assets/img/franny.webp" alt="Franny" width="88" height="88"><div><b>Franny</b><span class="r">Google Ads, ex-Google Partners.</span><p class="q">“Gericht en relevant adverteren met zoekadvertenties.”</p></div></div></div>
<p class="cap" style="margin-top:1.4rem">Het team wordt aangevuld door Dries (SEO), Dirk (technische SEO) en Ronny (administratie).</p>''')
o += sec(head('Verhaal', 'Gegroeid vanuit resultaat, sinds 2008.') + '''<div class="prose"><p>Sherlock ontstond organisch: de eerste successen die Jef boekte in 2008 zorgden voor een toestroom aan nieuwe klanten, en sindsdien groeide het team mee.</p>
<p>We ontwikkelden ook <b>Seopoly</b>, een bordspel over SEO: gezocht worden draait niet om zoekwoorden en links, maar om hoe mensen je écht vinden.</p></div>''', 'alt')
o += sec(head('Hoe we werken', 'Vijf stappen, telkens opnieuw.') + steps([
  ('Bedrijf en markt begrijpen', 'We starten niet bij het kanaal, maar bij jouw bedrijf en jouw markt.'),
  ('Grootste commerciële kans bepalen', 'Daaruit bepalen we wat eerst moet.'),
  ('Bouwen en uitvoeren', 'Strategie, website, search, advertenties en tracking: we voeren het zelf uit.'),
  ('Meten wat verandert', 'In aanvragen, niet in kliks.'),
  ('Bijsturen', 'Wat we zien, gebruiken we om het plan bij te sturen.')]) + '<p class="linkline" style="margin-top:1.4rem"><a href="/werken-met-sherlock/">Bekijk hoe een traject eruitziet →</a></p>')
o += sec('<p class="kicker">Bewijs dat je zelf kan nakijken</p><h2>Onze partners, en onze reviews.</h2>' + BADGES + '''<div class="next"><a href="https://www.sortlist.be/nl/agency/sherlock-seo-agency" target="_blank" rel="noopener noreferrer"><small>Sortlist (externe pagina)</small><span>Onafhankelijke klantreviews, buiten onze eigen site. →</span></a><a href="https://clutch.co/profile/sherlock-seo-agency" target="_blank" rel="noopener noreferrer"><small>Clutch (externe pagina)</small><span>Onafhankelijke klantreviews, buiten onze eigen site. →</span></a></div>''', 'alt')
o += close('Zin om kennis te <em>maken?</em>', 'Een gesprek van 30 minuten, vrijblijvend. Je praat meteen met het team dat ook het werk doet.')
pages['/over-ons/'] = page('/over-ons/', 'Over Sherlock: het team en hoe we werken | Sherlock SEO Agency',
  "Het team achter Sherlock: Jef, Joan, Franny en collega's in SEO, techniek en administratie. Hoe we werken, sinds wanneer, en met welke partners.", o, cur='/over-ons/')

# ------------------------------------------------------------------ CONTACT
k = phero('Contact', 'Bespreek je <em>groeivraag.</em>', 'Vertel waar je bedrijf staat en waar je naartoe wil. Een gesprek van 30 minuten, vrijblijvend; daarna krijg je onze eerste inschatting van je grootste commerciële kans.', cta=False)
k += sec('''<div class="cgrid"><div>
<div class="preview-note" role="note"><b>Preview.</b> Dit formulier verstuurt nog niets en bewaart niets. Bij livegang gaat het naar de leadintake van Sherlock. Liever meteen? Bel of mail rechtstreeks.</div>
<form class="form" id="cf" data-preview-form novalidate aria-describedby="fs">
<div class="row2"><div class="field"><label for="f-naam">Naam</label><input id="f-naam" type="text" autocomplete="name" required></div>
<div class="field"><label for="f-bedrijf">Bedrijf</label><input id="f-bedrijf" type="text" autocomplete="organization" required></div></div>
<div class="row2"><div class="field"><label for="f-mail">E-mail</label><input id="f-mail" type="email" autocomplete="email" required></div>
<div class="field"><label for="f-tel">Telefoon <span class="opt">(optioneel)</span></label><input id="f-tel" type="tel" autocomplete="tel"></div></div>
<div class="field"><label for="f-site">Website <span class="opt">(optioneel)</span></label><input id="f-site" type="text" inputmode="url" autocomplete="url" placeholder="jouwbedrijf.be"></div>
<div class="field"><label for="f-vraag">Wat is je groeivraag?</label><textarea id="f-vraag" required placeholder="Bijvoorbeeld: onze campagnes lopen, maar we weten niet welke klanten ze opleveren."></textarea></div>
<fieldset class="field"><legend>Taal van het gesprek</legend><div class="choice"><label><input type="radio" name="taal" value="nl-BE" checked> Nederlands</label><label><input type="radio" name="taal" value="fr-BE"> Français</label><label><input type="radio" name="taal" value="en"> English</label></div></fieldset>
<label class="consent"><input type="checkbox" id="f-consent" required><span>Ik ga akkoord dat Sherlock mijn gegevens gebruikt om op mijn vraag te antwoorden. Zie de <a href="/privacy/">privacyverklaring</a>.</span></label>
<div class="hp" aria-hidden="true"><label>Laat leeg <input type="text" tabindex="-1" autocomplete="off"></label></div>
<div><button class="btn btn-primary" type="submit">Verstuur je groeivraag</button></div>
<p class="form-status" id="fs" role="status" tabindex="-1">Dit is een preview: het formulier verstuurt nog niets. Bel of mail ons rechtstreeks, de gegevens staan hiernaast.</p>
</form></div>
<aside><div class="who"><img src="/assets/img/jef-van-gool.webp" alt="" width="84" height="84"><div><b>Jef Van Gool</b>Oprichter. Hij voert je eerste gesprek.</div></div>
<p class="direct">Liever meteen bellen of mailen?<br><b>+32 479 25 43 57</b><br><b>info@sherlockseo.com</b></p>
<p class="direct">In het team ook Joan, web-analist, en Franny, Google Ads.</p></aside></div>''')
pages['/contact/'] = page('/contact/', 'Bespreek je groeivraag | Sherlock SEO Agency',
  'Een gesprek van 30 minuten, vrijblijvend. Vertel waar je bedrijf staat en waar je naartoe wil; daarna krijg je onze eerste inschatting van je grootste commerciële kans.', k, cur='/contact/',
  jsonld={"@context": "https://schema.org", "@type": "ContactPage", "name": "Contact", "about": {"@type": "Organization", "name": "Sherlock SEO Agency"}})

# ------------------------------------------------------------------ ACADEMIE ARTICLE
a = phero('Academie · Voor je kiest', 'Waarom SEO pas werkt <em>als je business klopt</em>', 'Sherlock · maart 2025 · herwerkt september 2026', cta=False, crumbs='Academie › Voor je kiest')
a += sec('''<div class="prose"><p class="pull">“SEO werkt, maar alleen als je bedrijf ook werkt.”</p>
<h3>SEO faalt vaak, maar niet omdat het niet werkt</h3>
<p>Je investeert in zoekmachineoptimalisatie, maar de resultaten blijven uit. SEO faalt vaak niet door SEO zelf, maar doordat het te vroeg of op de verkeerde manier wordt ingezet.</p>
<p>Je website staat technisch als een huis en je staat op positie #1 in Google voor een belangrijk zoekwoord, maar toch komen er geen klanten uit. Als je business niet klopt (je product, je dienst of je klantbeleving), dan kan SEO geen wonderen verrichten. Wat SEO wél kan doen, is een goed werkende business opschalen en zichtbaar maken voor de juiste doelgroep.</p>
<h3>Zichtbaarheid is geen garantie voor verkoop</h3>
<p>Bovenaan in Google staan betekent dat je gevonden wordt, maar wat gebeurt er ná de klik? Als de bezoeker op je site niet meteen de waarde ziet, of afdruipt door een slechte gebruikerservaring, heb je niets aan die hoge ranking.</p>
<p>Zo hebben we gezien dat een landingspagina met een hoge doorklikratio (CTR) alsnog teleurstellende resultaten gaf, omdat de pagina zelf niet overtuigde. Zichtbaarheid trekt aandacht; alleen de juiste boodschap en een aantrekkelijk aanbod zetten die aandacht om in actie.</p>
<h3>Verhalen uit de praktijk</h3>
<ul><li><b>De klant die Ads uitzette na UX-video's.</b> Kliks waren er genoeg, maar conversies bleven uit. Na het zien van schermopnames begreep hij waarom: verwarring, slechte UX en onduidelijke info. Dat inzicht bespaarde hem advertentiebudget, dat naar de website ging.</li>
<li><b>Een artikel dat zijn belofte inloste.</b> Voor een lokale vakman schreven we een helder en aantrekkelijk artikel met goede foto's en informatie die zijn specialisme onderstreepte. Toen we de klant vroegen of het ook iets opleverde, bevestigde hij dit.</li></ul>
<h3>Wat werkt wél: eerst de basis, dan pas SEO</h3>
<p><b>Strategische intake.</b> We starten elk traject met de vraag: wat verkoop je, wie zijn je klanten, wat zijn je doelen? Vanuit dat begrip bouwen we een datagedreven strategie.</p>
<p><b>Past je aanbod bij de vraag?</b> Sluit het niet aan, dan zeggen we dat eerst, vóór we in SEO investeren.</p>
<p><b>UX, copy en positionering.</b> SEO trekt mensen aan. UX en copy overtuigen ze. We werken aan sitestructuur, laadsnelheid, teksten en branding.</p>
<p><b>SEO als versterking van je totale marketingstrategie.</b> SEO werkt niet in een silo. Content voor SEO voedt ook je campagnes, en zoekgedrag is input voor je aanbod en je positionering.</p>
<h3>Dus: eerst je business op orde</h3>
<ul><li>Een sterke propositie</li><li>Een goede klantbeleving</li><li>Een overtuigende website</li><li>Een duidelijke strategie</li></ul>
<p>SEO is dan de accelerator die alles vergroot.</p></div>''')
a += sec('<p class="kicker">In de praktijk</p><div class="next"><a href="/cases/boven-yvo/" data-evt="case_click" data-case="boven-yvo"><small>Zo liep het bij Boven Yvo</small><span>Eerst meten. Dan groeien. Dan pas een nieuwe website. →</span></a><a href="/werken-met-sherlock/"><small>Hoe we samenwerken</small><span>Start met één vraag. Groei met één partner. →</span></a></div>', 'alt')
a += close('Waar staat <em>jouw bedrijf</em> vandaag?')
pages['/academie/waarom-seo-pas-werkt-als-je-business-klopt/'] = page('/academie/waarom-seo-pas-werkt-als-je-business-klopt/', 'Waarom SEO pas werkt als je business klopt | Sherlock Academie',
  'SEO werkt, maar alleen als je bedrijf ook werkt. Wat er eerst moet kloppen voor zichtbaarheid iets oplevert: je propositie, je klantbeleving, je website en je strategie.', a, cur='/academie/waarom-seo-pas-werkt-als-je-business-klopt/',
  jsonld={"@context": "https://schema.org", "@type": "Article", "headline": "Waarom SEO pas werkt als je business klopt", "datePublished": "2025-03-28", "author": {"@type": "Organization", "name": "Sherlock SEO Agency"}})

# ------------------------------------------------------------------ PRIVACY
p = phero('Privacy', 'Wat deze <em>preview</em> doet met je gegevens.', cta=False)
p += sec('''<div class="prose"><p>Deze previewsite verzamelt, verstuurt en bewaart niets: er draait geen analytics, er worden geen externe scripts of lettertypen geladen en het contactformulier verstuurt niets.</p>
<p>De geldende privacyverklaring van Sherlock SEO Agency staat op <a class="linkline" href="https://www.sherlockseo.com/nl/privacyverklaring/" target="_blank" rel="noopener noreferrer"><span style="color:var(--green-ink);font-weight:700">sherlockseo.com/nl/privacyverklaring/</span></a>. De tekst voor de nieuwe site wordt bij livegang overgenomen en nagekeken door Jef; hier staat bewust geen eigen juridische tekst.</p></div>''')
pages['/privacy/'] = page('/privacy/', 'Privacy | Sherlock SEO Agency', 'Wat deze previewsite met je gegevens doet: niets. Verwijzing naar de geldende privacyverklaring.', p)

# ------------------------------------------------------------------ 404
n = phero('404', 'Deze pagina bestaat <em>niet.</em>', 'Ga terug naar de <a href="/" style="color:var(--green-onink)">startpagina</a> of naar <a href="/cases/" style="color:var(--green-onink)">de cases</a>.', cta=False)
pages['/404.html'] = page('/404.html', 'Pagina niet gevonden | Sherlock SEO Agency', 'Pagina niet gevonden.', n)

# ------------------------------------------------------------------ write
for f in ['index.html', '404.html']:
    pass
for path, html in pages.items():
    out = os.path.join(ROOT, 'index.html') if path == '/' else (os.path.join(ROOT, '404.html') if path == '/404.html' else os.path.join(ROOT, path.strip('/'), 'index.html'))
    os.makedirs(os.path.dirname(out), exist_ok=True)
    open(out, 'w', encoding='utf-8').write(html)
css = open(os.path.join(HERE, 'baseline.css'), encoding='utf-8').read() + open(os.path.join(HERE, 'extra.css'), encoding='utf-8').read()
open(os.path.join(ROOT, 'assets', 'site.css'), 'w', encoding='utf-8').write(css)
shutil.copy(os.path.join(HERE, 'site.js'), os.path.join(ROOT, 'assets', 'site.js'))
open(os.path.join(ROOT, 'robots.txt'), 'w').write('User-agent: *\nDisallow: /\n')
print('built', len(pages), 'pages')
