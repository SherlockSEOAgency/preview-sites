#!/usr/bin/env python3
"""
CK Service in four design directions (A craft / B professional / C warm / D modern).

Same content on every variant; only the DIRECTION differs. The direction comes from
Sherlock's own code (backend/app/services/design/design_direction.py):

    derive_default_direction(mood)  -> the direction (axes)
    direction_tokens(direction)     -> the --bouw-dir-* tokens the engine reads
    art_direct(direction, roles)    -> per-section gesture / surface / media role / emphasis
    hero_render_params(direction)   -> hero min-height + dim

The engine's real css/direction.css + css/design-tokens.css (WP-block-theme-bouw, main)
are copied verbatim into _engine/. _skin/<v>.css realises the axes the engine has no CSS
for yet (palette, type pairing, banded surface, pull quote, highlight, image treatment).

Run:  SHERLOCK_BACKEND=/path/to/mcp-audit-platform/backend python3 build.py
"""
import html
import json
import os
import shutil
import sys
from pathlib import Path

HERE = Path(__file__).parent
BACKEND = os.environ.get("SHERLOCK_BACKEND", "/Users/jefvangool/Documents/GitHub/mcp-audit-platform/backend")
sys.path.insert(0, BACKEND)
from app.services.design.design_direction import (  # noqa: E402
    art_direct, derive_default_direction, direction_tokens, hero_render_params,
)

IMG = "https://ckservice.preview.sherlockseo.com/wp-content/themes/watson-ckservice/img/"
LOGO = IMG + "Logo-CK-Service-v2.png.webp"
E = html.escape

# --------------------------------------------------------------------------- #
# The four variants: Sherlock mood preset + the skin (what the engine has no CSS for)
# --------------------------------------------------------------------------- #
VARIANTS = {
    "a": dict(
        mood="craft", name="Vakman", slug="a",
        line="Zacht afgerond, warm papier, documentaire foto's, overlappende kaarten.",
        skin=dict(
            primary="#2F5597", accent="#B8560F", cta="#B8560F", cta_ink="#fff", ink="#2A241E", mute="#6B6258",
            base="#FFFFFF", band="#2F5597", line="rgba(42,36,30,.14)", hl="#F3D9B8",
            fh="'Oswald', 'Arial Narrow', sans-serif", fb="'Montserrat', system-ui, sans-serif",
            img_filter="sepia(.10) saturate(1.06) contrast(1.02)", hh_case="none", track="0",
            fonts="family=Oswald:wght@500;600;700&family=Montserrat:wght@400;500;600;700",
        ),
    ),
    "b": dict(
        mood="professional", name="Professioneel", slug="b",
        line="Hoekig, neutraal, dunne lijnen, serif-koppen, redactioneel beeld.",
        skin=dict(
            primary="#1D3B6E", accent="#2F5597", cta="#14213D", cta_ink="#fff", ink="#101826", mute="#5B6472",
            base="#FFFFFF", band="#14213D", line="rgba(16,24,38,.18)", hl="#E3E9F4",
            fh="'Source Serif 4', Georgia, serif", fb="'Inter', system-ui, sans-serif",
            img_filter="saturate(.72) contrast(1.06)", hh_case="none", track="-.01em",
            fonts="family=Source+Serif+4:opsz,wght@8..60,500;8..60,700&family=Inter:wght@400;500;600",
        ),
    ),
    "c": dict(
        mood="warm", name="Warm", slug="c",
        line="Rond en luchtig, zachte kleuren, lichte koppen, citaten en markeringen.",
        skin=dict(
            primary="#3C6A94", accent="#C85A3C", cta="#C85A3C", cta_ink="#fff", ink="#3A322C", mute="#7A6E64",
            base="#FFFCF8", band="#3C6A94", line="rgba(58,50,44,.12)", hl="#F9DCCB",
            fh="'Fraunces', Georgia, serif", fb="'Nunito Sans', system-ui, sans-serif",
            img_filter="sepia(.12) saturate(1.1) brightness(1.02)", hh_case="none", track="-.005em",
            fonts="family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700",
        ),
    ),
    "d": dict(
        mood="modern", name="Modern", slug="d",
        line="Hoekig, koel, zware koppen, gekleurde banden, producten op tegels.",
        skin=dict(
            primary="#1550FF", accent="#19C2A0", cta="#1550FF", cta_ink="#fff", ink="#0B1220", mute="#55627A",
            base="#FFFFFF", band="#0B1F4B", line="rgba(11,18,32,.14)", hl="#19C2A0",
            fh="'Archivo', system-ui, sans-serif", fb="'Inter', system-ui, sans-serif",
            img_filter="contrast(1.08) saturate(1.08)", hh_case="none", track="-.02em",
            fonts="family=Archivo:wght@700;800;900&family=Inter:wght@400;500;600",
        ),
    ),
}

HOME_ROLES = ["hero", "statement", "narrative", "proof", "narrative", "features", "pricing", "narrative", "faq", "cta"]
SVC_ROLES = ["hero", "statement", "narrative", "proof", "process", "features", "pricing", "proof", "cta"]

PHONE, PHONE_HREF, MAIL = "0493 33 39 88", "tel:+32493333988", "info@ckservice.be"

PROJECTS_HOME = [
    ("Project Geel", "Van bad naar comfortabele douche, in 1 dag.", "badkamerrenovatie-geel-bad-naar-comfortabele-douche"),
    ("Project Hallaar", "Terug douchen zonder rugpijn, in 1 dag.", "badkamerrenovatie-hallaar-terug-douchen-zonder-rugpijn"),
    ("Project Berlaar", "Van bad naar douche in 1 dag tijd.", "live-2023-05-ck-service-project-berlaar"),
]
PROJECTS_SVC = [PROJECTS_HOME[0], PROJECTS_HOME[1],
                ("Project Wachtebeke", "Een ruime, veilige douche op de plaats van het bad.", "live-2020-10-ck-service-project-wachtebeke")]


def proj_img(base: str, which: str) -> str:
    ext = "jpg" if base.startswith("live-") else "webp"
    return f"{IMG}{base}-{which}.{ext}"


SOLUTIONS = [
    ("Van bad naar douche", "Je bad eruit, een veilige douche met lage instap erin, in één dag.", "serenite.jpg"),
    ("Seniorendouche", "Lage instap, antislip, handgrepen en een zitje, om thuis veilig te blijven douchen.", "serenite-plus.jpg"),
    ("Onze douches", "Kinemagic-douchecabines met een instap van 3 of 3,8 cm, in verschillende maten.", "live-2019-11-ck-service-douche-kinemagic-design.jpg"),
    ("Inloopdouche", "Een ruime douche zonder hoge rand, met een glazen wand op maat.", "project-wiekevorst-moderne-badkamer-met-inloopdouche-1.webp"),
    ("Wandpanelen", "Waterdichte wandpanelen zonder voegen over je bestaande tegels, meestal binnen de week klaar.", "wandpanelen.jpg"),
    ("Toiletten", "Staand, verhoogd, hangend of een Japans douchetoilet, geplaatst in één dag.", "hangtoilet.webp"),
]

FAQ_HOME = [
    ("In welke regio werken jullie?", "We komen uit Zammel, bij Geel. Een douche plaatsen we in heel België. Volledige badkamerrenovaties doen we tot zo’n 43 km rond Geel en Antwerpen."),
    ("Hebben jullie een toonzaal?", "Nee. Je kunt onze realisaties online bekijken, ons treffen op een renovatiebeurs, of een klant bezoeken die zijn badkamer graag toont."),
    ("Kan dat ook in een kleine badkamer?", "Ja. Een kleine badkamer is niet minder werk, soms zelfs meer, omdat er minder bewegingsruimte is. Door het bad te vervangen door een douche oogt de badkamer vaak veel ruimer."),
    ("Is CK Service alleen iets voor senioren?", "Nee. Veel klanten gebruiken hun bad gewoon niet meer en willen een ruime, makkelijke douche. Een lage instap is voor iedereen comfortabel."),
]

REVIEWS = [
    ("Een paar maanden geleden liet ik mijn ligbad vervangen door een inloopdouche bij CK service. Tot mijn verbazing en tevredenheid gebeurde dit in slechts 1 dag. Het contact met deze firma was correct, vriendelijk en volgens afspraak. Goede snelle plaatsing afwerking en opkuis, zodat ik dezelfde avond kon douchen. Ook het papierwerk verliep vlot en correct zoals de aanvraag voor subsidies.", "Magda Adams", "Google-review, augustus 2026"),
    ("Zeer tevreden met de vervanging van ons bad door een douche. De planning verliep precies zoals overeengekomen, geen verassingen of vertragingen. De douche werd, zoals beloofd, in één dag volledig geplaatst, sneller dan ik had verwacht.", "Tom Schrijvers", "Google-review, juli 2026"),
    ("Dit bedrijf doet wat het beloofd. Een vervanging van een bad door een inloopdouche in minder dan 1 dag. Ook de opvolging en hulp bij het aanvragen van de premie van de overheid was zeer waardevol.", "Staf Leysen", "Google-review, april 2023"),
]

NAV = [("Van bad naar douche", "van-bad-naar-douche/"), ("Inloopdouche", "#"), ("Onze douches", "#"),
       ("Wandpanelen", "#"), ("Toiletten", "#"), ("Premie", "#"), ("Contact", "#contact")]


# --------------------------------------------------------------------------- #
# helpers
# --------------------------------------------------------------------------- #
def gclass(g: str) -> str:
    return f"watson-gesture--{g.replace('_', '-')}"


def img(src: str, alt: str = "", cls: str = "", eager: bool = False) -> str:
    full = src if src.startswith("http") else IMG + src
    return f'<img src="{E(full)}" alt="{E(alt)}" class="{cls}" loading="{"eager" if eager else "lazy"}" decoding="async">'


def btn(label: str, kind: str = "primary", href: str = "#contact") -> str:
    return f'<a class="wp-block-button__link btn btn--{kind}" href="{href}" data-inert>{E(label)}</a>'


def eyebrow(t: dict, text: str) -> str:
    return f'<span class="watson-eyebrow">{E(text)}</span>' if "eyebrow" in t["emphasis"] else ""


def rule(t: dict) -> str:
    return '<hr class="watson-lockup-rule">' if ("rule" in t["emphasis"] or t["gesture"] == "lockup") else ""


def hl(t: dict, text: str, phrase: str) -> str:
    """highlight_phrase device: mark one phrase of the heading."""
    esc = E(text)
    if "highlight_phrase" in t["emphasis"] and phrase in text:
        return esc.replace(E(phrase), f'<mark class="hl">{E(phrase)}</mark>', 1)
    return esc


def section(t: dict, shape: str, inner: str, extra: str = "", sid: str = "") -> str:
    # Gestures that need a host element (frame -> figure, broken grid -> grid, line -> list, bleed -> hero
    # figure) are applied there by the renderers; the section keeps only the ones that act on the section.
    cls = [c for c in t["classes"] if not c.startswith("watson-shape--")
           and c not in ("watson-gesture--implicit-frame", "watson-gesture--broken-grid",
                         "watson-gesture--line", "watson-gesture--bleed")]
    # art_direct() emits `watson-shape--<shape>`; engine direction.css styles `watson-shape-<shape>`.
    cls.append(f"watson-shape-{shape}")
    if t["gesture"] in ("overlap", "lockup", "bleed"):
        cls.append(f"g-{t['gesture']}")
    sid_attr = f' id="{sid}"' if sid else ""
    return (f'<section{sid_attr} class="{" ".join(cls)} {extra}" data-role="{t["role"]}">'
            f'<div class="watson-section__inner">{inner}</div></section>\n')


def fig(t: dict, src: str, alt: str, host_frame: bool = False, cls: str = "") -> str:
    g = gclass("implicit_frame") if (host_frame and t["gesture"] == "implicit_frame") else ""
    return f'<figure class="fig fig--{t["media_role"].replace("_", "-")} {g} {cls}">{img(src, alt)}</figure>'


def lead_block(t: dict, eb: str, title: str, phrase: str = "", intro: str = "") -> str:
    p = f"<p>{E(intro)}</p>" if intro else ""
    return (f'<div class="watson-section__lead">{eyebrow(t, eb)}<h2>{hl(t, title, phrase)}</h2>{rule(t)}{p}</div>')


# --------------------------------------------------------------------------- #
# section renderers (role -> markup). The treatment `t` is Sherlock's art_direct() output.
# --------------------------------------------------------------------------- #
def r_hero(t, shape, params, page):
    g, media = t["gesture"], t["media_role"]
    if g == "bleed" and media == "hero_background":
        mode = "bg"
    elif g == "implicit_frame":
        mode = "frame"
    elif g == "overlap":
        mode = "overlap"
    else:
        mode = "panel"
    if page == "home":
        h1pre, h1 = "Badkamergevoel?", "Van bad naar douche in 1 dag"
        lead = "Wij vervangen je bad door een veilige inloopdouche in één dag, uitgevoerd door onze eigen mensen en de zaakvoerder."
        photo, alt = "hero-vrouw.jpg", "Tevreden klant in een nieuwe douche"
        phrase = "douche"
        b2 = btn("Of check eerst je premie", "ghost", "#premie")
    else:
        h1pre, h1 = "Van bad naar douche", "Je bad vervangen door een douche in 1 dag"
        lead = "Je oude bad eruit, een veilige douche met lage instap erin. We breken af, plaatsen en werken af op één dag, met onze eigen vakmensen en zonder siliconen."
        photo, alt = "veilig-douchen-na.webp", "Nieuwe douche met lage instap"
        phrase = "1 dag"
        b2 = btn("Wat kost het?", "ghost", "#kosten")
    text = (f'<div class="hero__text">{eyebrow(t, "CK Service · Geel")}'
            f'<h1><span class="h1pre">{E(h1pre)}</span> {hl(t, h1, phrase)}</h1>{rule(t)}'
            f'<p class="lead">{E(lead)}</p>'
            f'<div class="wp-block-buttons">{btn("Plan je gratis adviesgesprek")}{b2}</div></div>')
    fg = gclass("implicit_frame") if mode == "frame" else ""
    figure = f'<figure class="fig fig--{media.replace("_", "-")} hero__fig {fg}">{img(photo, alt, eager=True)}</figure>'
    inner = f'<div class="hero__grid">{text}{figure}</div>'
    return section(t, shape, inner, extra=f"hero hero--{mode}")


def stats_items(page):
    if page == "home":
        return [("Honderden", "tevreden klanten"), ("1 dag", "van bad naar douche"),
                ("tot €1.250", "aanpassingspremie"), ("Eigen", "vakmensen & afwerking")]
    return [("1 dag", "van bad naar douche"), ("Antislip", "met zitje & grepen"),
            ("Vaste prijs", "na opmeting"), ("Eigen", "vakmensen & afwerking")]


def r_statement(t, shape, params, page):
    items = "".join(f'<li><strong>{E(a)}</strong><span>{E(b)}</span></li>' for a, b in stats_items(page))
    return section(t, shape, f'{rule(t)}<ul class="stats">{items}</ul>', extra="stats-band")


def pull(t, text):
    """pull_quote device: first sentence becomes the quote, the rest stays prose."""
    if "pull_quote" not in t["emphasis"]:
        return f"<p>{E(text)}</p>"
    first, _, rest = text.partition(". ")
    first = first.rstrip(".")
    return f'<blockquote class="pull">{E(first)}.</blockquote>' + (f"<p>{E(rest)}</p>" if rest else "")


def r_narrative(t, shape, params, page, idx=0):
    if page == "svc":
        title, eb = "Wat kost het om je bad te vervangen door een douche?", "Kort antwoord"
        body = ("Bij CK Service kost een nieuwe douche op de plaats van je bad vanaf €6.000 inclusief btw. "
                "Alles zit erin: de afbraak van het bad, het aanpassen van de leidingen, de douche met kraanwerk, de afwerking en het afval. "
                "Is je woning ouder dan 10 jaar, dan betaal je 6% btw. Ben je 65 of ouder, dan kun je daarbovenop een aanpassingspremie krijgen.")
        photo = "seniorendouche-plaatsen.jpg"
        extra_html, sid = "", "kosten"
    elif idx == 0:
        title, eb, phrase = "Kan een badkamer in 1 dag gerenoveerd worden?", "Kort antwoord", ""
        body = ("Een nieuwe douche op de plaats van je bad, of een nieuw toilet: ja, dat doen we in één dag, met weinig breekwerk en een afzuigsysteem tegen het stof. "
                "Een badkamer met nieuwe wandpanelen is meestal binnen de week klaar. Voor een volledige renovatie spreken we de planning vooraf met je af.")
        photo, extra_html, sid = "veilig-douchen-na.webp", "", ""
    elif idx == 1:
        title, eb = "’s Morgens je bad, ’s avonds je douche", "Eigen vakmensen"
        body = "Claude, de zaakvoerder, en Lukasz komen zelf bij je langs en werken mee tot alles opgeruimd is."
        photo = "team-ck-service.webp"
        pts = [("Gratis adviesgesprek.", "We komen kijken, vrijblijvend."), ("Vaste prijs.", "Na de opmeting, met alles wat inbegrepen is."),
               ("Installatie in 1 dag.", "Bad eruit, douche erin."), ("Klaar.", "Opgeruimd en afgevoerd.")]
        extra_html = '<ul class="points">' + "".join(f"<li><strong>{E(a)}</strong> {E(b)}</li>" for a, b in pts) + "</ul>"
        sid = ""
    else:
        title, eb = "Check eerst je premie.", "Premie"
        body = ("Ben je 65 of ouder, dan krijg je via de Vlaamse aanpassingspremie de helft van de factuur terug, tot €1.250 per categorie van werken. "
                "We bekijken samen of je in aanmerking komt.")
        photo = None
        extra_html = f'<div class="wp-block-buttons">{btn("Zo werkt de premie", "ghost", "#")}</div>'
        sid = "premie"
    title_html = hl(t, title, "")
    text = f'<div class="narr__text">{eyebrow(t, eb)}<h2>{title_html}</h2>{rule(t)}{pull(t, body)}{extra_html}</div>'
    media = fig(t, photo, "", host_frame=True) if photo else ""
    flip = " narr--flip" if idx % 2 == 1 else ""
    inner = f'<div class="narr{flip}{" narr--solo" if not photo else ""}">{text}{media}</div>'
    return section(t, shape, inner, extra="narrative-sec", sid=sid)


def r_proof(t, shape, params, page, idx=0):
    if page == "svc" and idx == 1:
        cards = "".join(
            f'<figure class="review"><blockquote>{E(q)}</blockquote><figcaption><strong>{E(n)}</strong>, {E(d)}</figcaption></figure>'
            for q, n, d in REVIEWS)
        grid_cls = gclass("broken_grid") if t["gesture"] == "broken_grid" else ""
        num = gclass("oversized_numeral") if False else ""
        inner = (lead_block(t, "Google-reviews", "Wat klanten zeggen") + f'<div class="grid grid--3 {grid_cls}">{cards}</div>')
        return section(t, shape, inner, extra="proof-sec reviews-sec")
    projects = PROJECTS_HOME if page == "home" else PROJECTS_SVC
    num = " watson-emphasis--oversized-numeral" if "oversized_numeral" in t["emphasis"] else ""
    grid_cls = gclass("broken_grid") if t["gesture"] == "broken_grid" else ""
    cards = ""
    for name, sub, base in projects:
        cards += (f'<article class="project"><div class="project__pair">'
                  f'<figure class="fig fig--realisatie"><span class="tag">Voor</span>{img(proj_img(base, "voor"), name + " voor")}</figure>'
                  f'<figure class="fig fig--realisatie"><span class="tag tag--na">Na</span>{img(proj_img(base, "na"), name + " na")}</figure></div>'
                  f'<h3>{E(name)}</h3><p>{E(sub)}</p></article>')
    intro = "Geen stockfoto’s: dit zijn badkamers van klanten van CK Service." if page == "svc" else ""
    title = "Van bad naar douche bij echte klanten"
    inner = (lead_block(t, "Echte realisaties", title, intro=intro)
             + f'<div class="grid grid--3 {grid_cls}{num}">{cards}</div>'
             + f'<p class="more"><a href="#" data-inert>Alle realisaties bekijken →</a></p>')
    return section(t, shape, inner, extra="proof-sec")


def r_features(t, shape, params, page):
    if page == "svc":
        rows = [("Instap", "Lage douchebak, 3 tot 4 cm", "Kinemagic: 3 of 3,8 cm"),
                ("Afsluiting", "Een vaste glazen wand, open aan één kant", "Wanden en een deur rondom"),
                ("Spatwater", "Kan buiten de douche komen", "Blijft binnen de douchebak"),
                ("Warmte", "Ontsnapt sneller", "Blijft in de cabine"),
                ("Zitje en handgrepen", "Als optie", "Standaard bij de Kinemagic Serenite en Serenite Plus"),
                ("Past vooral bij", "Wie een open, ruime douche wil", "Wie geen spatwater wil, zoals gezinnen met kleine kinderen, en wie het warm wil houden")]
        grid_cls = gclass("broken_grid") if t["gesture"] == "broken_grid" else ""

        def col(i, name, photo):
            lis = "".join(f"<li><span>{E(r[0])}</span><b>{E(r[i])}</b></li>" for r in rows)
            return f'<article class="compare"><figure class="fig fig--{t["media_role"].replace("_","-")}">{img(photo, name)}</figure><h3>{E(name)}</h3><ul>{lis}</ul></article>'
        inner = (lead_block(t, "Waarom een douche", "Inloopdouche of douchecabine?",
                            intro="Op de plaats van je bad kan een open inloopdouche met een glazen wand komen, of een gesloten douchecabine. Beide plaatsen we in 1 dag.")
                 + f'<div class="grid grid--2 {grid_cls}">'
                 + col(1, "Inloopdouche met glazen wand", "project-wiekevorst-moderne-badkamer-met-inloopdouche-1.webp")
                 + col(2, "Gesloten douchecabine", "live-2019-11-ck-service-douche-kinemagic-design.jpg") + "</div>")
        return section(t, shape, inner, extra="features-sec")
    grid_cls = gclass("broken_grid") if t["gesture"] == "broken_grid" else ""
    cards = "".join(
        f'<a class="card" href="#" data-inert><figure class="fig fig--{t["media_role"].replace("_","-")}">{img(p, n)}</figure>'
        f'<h3>{E(n)}</h3><p>{E(d)}</p><span class="card__go">Bekijk →</span></a>' for n, d, p in SOLUTIONS)
    inner = (lead_block(t, "Onze oplossingen", "Onze oplossingen") + f'<div class="grid grid--3 {grid_cls}">{cards}</div>'
             + '<p class="more">Alles samen vernieuwen? <a href="#" data-inert>Volledige badkamerrenovatie →</a></p>')
    return section(t, shape, inner, extra="features-sec")


def r_process(t, shape, params, page):
    steps = [("Voorbereiden", "We overlopen de plannen, sluiten het water af en beschermen je badkamer tegen schade."),
             ("Afbreken", "Je oude bad gaat eruit en we nemen het mee. Aansluitingen en afvoer passen we aan op je nieuwe douche."),
             ("Plaatsen", "Eerst de douchebak, dan de wanden, het glas en het kraanwerk, met zitje en handgrepen als je dat wilt. Zonder siliconen, dus meteen bruikbaar."),
             ("Testen en opruimen", "We testen alles, leggen uit hoe je de douche onderhoudt en laten je badkamer netjes achter.")]
    num = " watson-emphasis--oversized-numeral" if "oversized_numeral" in t["emphasis"] else ""
    line = " " + gclass("line") if t["gesture"] == "line" else ""
    lis = "".join(f"<li><h3>{E(a)}</h3><p>{E(b)}</p></li>" for a, b in steps)
    inner = (lead_block(t, "Zo gaan we te werk", "’s Morgens je bad, ’s avonds je douche",
                        intro="Vier stappen op één dag. Het gratis adviesgesprek en de opmeting bij je thuis gaan eraan vooraf.")
             + f'<ol class="steps{num}{line}">{lis}</ol>')
    return section(t, shape, inner, extra="process-sec")


def r_pricing(t, shape, params, page):
    if page == "home":
        rows = [("Nieuwe douche", "vanaf €6.000", "op de plaats van je bad, inclusief btw, met afbraak, leidingen en afval"),
                ("Nieuw toilet", "vanaf €1.700", "inclusief btw, van afbraak tot afwerking"),
                ("Wandpanelen of volledige badkamer", "op offerte", "met een vaste prijs na de opmeting")]
        cards = "".join(f'<li><span class="price__what">{E(a)}</span><strong class="price__amt">{E(b)}</strong><span class="price__note">{E(c)}</span></li>' for a, b, c in rows)
        inner = (lead_block(t, "Prijzen", "Wat kost het?", intro="Bij CK Service weet je vooraf waar je aan toe bent.")
                 + f'<ul class="prices">{cards}</ul><p class="more">Is je woning ouder dan 10 jaar, dan betaal je 6% btw. <a href="#" data-inert>Waar de prijs van afhangt</a></p>')
    else:
        items = ["Een inloopdouche met glazen wand of een gesloten douchecabine",
                 "Het model: met of zonder zitje en handgrepen, met een gewone of een extra brede deur",
                 "De afmetingen van de douchebak en het glas, transparant of decor",
                 "Het kraanwerk: thermostaatkraan, handdouche, regendouche",
                 "Leidingen die op hun plaats blijven, of die verlegd moeten worden",
                 "De wanden: alleen rond de douche, of de hele badkamer met wandpanelen"]
        lis = "".join(f"<li>{E(i)}</li>" for i in items)
        inner = (lead_block(t, "Prijzen", "Wat bepaalt de prijs?", intro="De prijs vanaf €6.000 hangt vooral af van deze keuzes.")
                 + f'<ul class="ticks">{lis}</ul>'
                 + '<p class="more">Na het gratis adviesgesprek en de opmeting krijg je een vaste prijs, met in de offerte alles wat inbegrepen is. '
                   '<a href="#" data-inert>Alle prijzen op een rij</a></p>')
    return section(t, shape, inner, extra="pricing-sec")


def r_faq(t, shape, params, page):
    items = "".join(f"<details><summary>{E(q)}</summary><p>{E(a)}</p></details>" for q, a in FAQ_HOME)
    inner = lead_block(t, "Veelgestelde vragen", "Goed om te weten") + f'<div class="faq">{items}</div>'
    return section(t, shape, inner, extra="faq-sec")


def r_cta(t, shape, params, page):
    form = ('<form class="form" onsubmit="return false" data-inert>'
            '<label>Naam<input type="text" autocomplete="off"></label>'
            '<label>Telefoon<input type="tel" autocomplete="off"></label>'
            '<label>Waarvoor mogen we langskomen?<select><option>Veilige inloopdouche</option><option>Wandpanelen</option><option>Toilet</option><option>Ik weet het nog niet</option></select></label>'
            '<label>E-mail (optioneel)<input type="email" autocomplete="off"></label>'
            '<button type="submit" class="wp-block-button__link btn btn--primary">Plan mijn gratis adviesgesprek</button></form>')
    text = (f'<div class="cta__text">{eyebrow(t, "Gratis en vrijblijvend")}<h2>Klaar voor jouw badkamergevoel?</h2>{rule(t)}'
            f'<p>Gratis en vrijblijvend. We komen kijken en rekenen je premie uit.</p>'
            f'<p class="cta__call">Liever bellen? <a href="{PHONE_HREF}"><strong>{PHONE}</strong></a><br><a href="mailto:{MAIL}">{MAIL}</a></p></div>')
    return section(t, shape, f'<div class="cta">{text}{form}</div>', extra="cta-sec", sid="contact")


RENDER = dict(hero=r_hero, statement=r_statement, faq=r_faq, cta=r_cta, pricing=r_pricing, features=r_features, process=r_process)


def render_body(roles, treatments, shape, params, page):
    out, seen = [], {"narrative": 0, "proof": 0}
    for role, t in zip(roles, treatments):
        if role == "narrative":
            out.append(r_narrative(t, shape, params, page, seen["narrative"])); seen["narrative"] += 1
        elif role == "proof":
            out.append(r_proof(t, shape, params, page, seen["proof"])); seen["proof"] += 1
        else:
            out.append(RENDER[role](t, shape, params, page))
    return "".join(out)


# --------------------------------------------------------------------------- #
# chrome
# --------------------------------------------------------------------------- #
def header(v, page):
    prefix = "../" if page == "svc" else ""
    links = "".join(
        f'<a href="{(prefix + h) if h.endswith("/") else h}"{"" if h.endswith("/") or h == "#contact" else " data-inert"}>{E(n)}</a>'
        for n, h in NAV)
    return (f'<header class="site-head"><div class="head__in"><a class="brand" href="{prefix or "./"}"><img src="{LOGO}" alt="CK Service" width="120" height="55"></a>'
            f'<nav class="nav">{links}</nav><a class="head__call" href="{PHONE_HREF}">Bel {PHONE}</a>'
            f'<details class="menu"><summary aria-label="Menu"><span></span></summary><div class="menu__panel">{links}</div></details></div></header>\n')


def footer():
    return (f'<footer class="site-foot"><div class="foot__in"><div><span class="brandchip"><img src="{LOGO}" alt="CK Service" width="110" height="51"></span>'
            f'<p>Eigen vakmensen, de zaakvoerder werkt mee.</p><p class="mute">Thuisbasis Geel (Kempen). Volledige renovaties tot zo’n 43 km rond Antwerpen, douche-installaties in heel België.</p></div>'
            f'<div><h4>Diensten</h4><a href="#" data-inert>Veilige douche</a><a href="#" data-inert>Seniorendouches</a><a href="#" data-inert>Onze douches</a><a href="#" data-inert>Badkamer met wandpanelen</a><a href="#" data-inert>Onze toiletten</a></div>'
            f'<div><h4>CK Service</h4><p>Zammelseweg 92<br>2440 Geel</p><a href="{PHONE_HREF}">{PHONE}</a><a href="mailto:{MAIL}">{MAIL}</a><p class="mute">BTW BE0845.789.223</p></div></div></footer>\n')


def variant_chip(v, page):
    back = "https://ck-design.preview.sherlockseo.com/"
    tail = "van-bad-naar-douche/" if page == "svc" else ""
    others = "".join(f'<a href="https://ck-design-{k}.preview.sherlockseo.com/{tail}" class="{"on" if k == v["slug"] else ""}">{k.upper()}</a>' for k in VARIANTS)
    return (f'<div class="vchip" data-sb="chrome"><span>Ontwerprichting <b>{v["slug"].upper()}</b> · {E(v["name"])}</span>{others}'
            f'<a class="vchip__all" href="{back}">Alle richtingen</a></div>')


SCRIPT = ("<script>document.addEventListener('click',function(e){var a=e.target.closest('[data-inert]');if(!a)return;e.preventDefault();"
          "var t=document.getElementById('inert-toast');t.hidden=false;clearTimeout(window.__it);window.__it=setTimeout(function(){t.hidden=true},1800)});"
          "document.addEventListener('submit',function(e){e.preventDefault();document.getElementById('inert-toast').hidden=false});</script>")


def page_html(v, direction, page):
    roles = HOME_ROLES if page == "home" else SVC_ROLES
    treatments = art_direct(direction, roles)
    shape = direction.get("shape_language") or "soft"
    params = hero_render_params(direction)
    body = render_body(roles, treatments, shape, params, page)
    title = ("Badkamergevoel? Van bad naar douche in 1 dag | CK Service" if page == "home"
             else "Bad vervangen door een inloopdouche in 1 dag | CK Service") + f" — ontwerprichting {v['slug'].upper()}"
    up = "../" if page == "svc" else ""
    # engine CSS is served at /_engine/ ; relative so it also works under /a/ on the path-based route
    root = "../../" if page == "svc" else "../"
    return (f'<!doctype html><html lang="nl-BE"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
            f'<meta name="robots" content="noindex,nofollow"><title>{E(title)}</title>'
            f'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
            f'<link rel="stylesheet" href="https://fonts.googleapis.com/css2?{v["skin"]["fonts"]}&display=swap">'
            f'<link rel="stylesheet" href="{root}_engine/design-tokens.css"><link rel="stylesheet" href="{root}_engine/direction.css">'
            f'<link rel="stylesheet" href="{root}_skin/base.css"><link rel="stylesheet" href="{root}_skin/{v["slug"]}.css"></head>'
            f'<body class="v-{v["slug"]}" data-direction-mood="{v["mood"]}">'
            f'<a class="skip" href="#main">Naar de inhoud</a>{header(v, page)}<main id="main">{body}</main>{footer()}{variant_chip(v, page)}'
            f'<div id="inert-toast" hidden>voorbeeld — nog niet actief</div>{SCRIPT}</body></html>')


def variant_css(v, direction):
    toks = direction_tokens(direction)
    params = hero_render_params(direction)
    dirvars = "\n".join(f"  --bouw-dir-{k.replace('_', '-')}: {val};" for k, val in toks.items())
    s = v["skin"]
    return f""":root {{
{dirvars}
  --c-primary:{s['primary']}; --c-accent:{s['accent']}; --c-cta:{s['cta']}; --c-cta-ink:{s['cta_ink']};
  --c-ink:{s['ink']}; --c-mute:{s['mute']}; --c-base:{s['base']}; --c-band:{s['band']};
  --c-line:{s['line']}; --c-hl:{s['hl']}; --f-head:{s['fh']}; --f-body:{s['fb']};
  --img-filter:{s['img_filter']}; --track:{s['track']};
  --hero-min:{params['min_height']}px; --hero-dim:{params['dim_ratio']/100};
  --surface-card:{s['base']}; --color-primary:{s['primary']};
}}
"""


def main():
    out = HERE
    (out / "_skin").mkdir(exist_ok=True)
    shutil.copy(out / "src" / "base.css", out / "_skin" / "base.css")
    meta = {}
    for k, v in VARIANTS.items():
        direction = derive_default_direction({}, v["mood"])
        meta[k] = dict(mood=v["mood"], tokens=direction_tokens(direction), hero=hero_render_params(direction),
                       axes=dict(shape=direction["shape_language"], density=direction["density"],
                                 type_voice=direction["type_voice"], colour=direction["colour"],
                                 imagery=direction["imagery"]["treatment"],
                                 emphasis=direction["emphasis_devices"]),
                       sections_home=[dict(role=t["role"], gesture=t["gesture"], surface=t["surface"], media=t["media_role"], emphasis=t["emphasis"])
                                      for t in art_direct(direction, HOME_ROLES)])
        (out / "_skin" / f"{k}.css").write_text(variant_css(v, direction) + (out / "src" / f"{k}.css").read_text())
        for page, sub in (("home", k), ("svc", f"{k}/van-bad-naar-douche")):
            d = out / sub
            d.mkdir(parents=True, exist_ok=True)
            (d / "index.html").write_text(page_html(v, direction, page))
    (out / "directions.json").write_text(json.dumps(meta, indent=1, ensure_ascii=False))
    print("built", list(VARIANTS))


if __name__ == "__main__":
    main()
