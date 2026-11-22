#!/usr/bin/env python3
"""Watson Web Studio prospect-preview generator.

    python3 _wws-template/build.py wws-<slug>

Reads  wws-<slug>/site.json  (facts from the public Google Business Profile +
proposals the owner still decides on) and writes wws-<slug>/index.html from
_wws-template/template.html. Also writes the Dockerfile + robots.txt so a new
prospect folder needs nothing but site.json.

Rules (preview-sites README): nothing is sent (all CTAs inert), noindex,
no external hosts, only real material — reviews are verbatim fragments with
first name + month, photos are marked placeholders until the owner sends his own.
"""
from __future__ import annotations

import html
import json
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent

# Trade icons (24x24, stroke). Key = service "icon" in site.json.
ICONS = {
    "lek": '<path d="M12 2.7s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z"/><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"/>',
    "ontstopping": '<path d="M12 2v9"/><path d="M6.5 11h11l-1.5 5h-8z"/><path d="M4 20h16"/>',
    "dringend": '<path d="M7 18v-6a5 5 0 0 1 10 0v6"/><path d="M5 21h14v-3H5z"/><path d="M12 3V2M4.9 5.6l-.7-.7M19.1 5.6l.7-.7M2 12h1M21 12h1"/>',
    "badkamer": '<path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z"/><path d="M6 12V5.5a2.5 2.5 0 0 1 5 0"/><path d="M7 20l-1 2M17 20l1 2"/>',
    "boiler": '<rect x="6" y="2" width="12" height="16" rx="3"/><path d="M12 7.5c1.6 1.6 2.2 2.7 2.2 3.7a2.2 2.2 0 0 1-4.4 0c0-1 .6-2 2.2-3.7z"/><path d="M9 18v3M15 18v3"/>',
    "leiding": '<path d="M3 7h7a4 4 0 0 1 4 4v10"/><path d="M3 11h7v10"/><path d="M2 5v8M9 19h6"/>',
}
PHONE_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>'
CHECK_SVG = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>'

DOCKERFILE = """FROM nginx:alpine
RUN printf 'server{listen 80;root /usr/share/nginx/html;index index.html;add_header X-Robots-Tag "noindex, nofollow, noarchive" always;location = /robots.txt{default_type text/plain;}location /{try_files $uri $uri/ /index.html =404;}}' > /etc/nginx/conf.d/default.conf
COPY index.html robots.txt /usr/share/nginx/html/
"""
ROBOTS = "User-agent: *\nDisallow: /\n"


def e(s) -> str:
    return html.escape(str(s), quote=True)


def icon(key: str) -> str:
    return (f'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" '
            f'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{ICONS[key]}</svg>')


def stars(n: int) -> str:
    return "★" * n


def render(d: dict) -> str:
    b = d["business"]
    tel = b["phone_e164"]
    phone = e(b["phone_display"])
    services = "".join(
        f'<div class="svc"><div class="ic">{icon(s["icon"])}</div><h3>{e(s["title"])}</h3><p>{e(s["text"])}</p></div>'
        for s in d["services"])
    usps = "".join(f'<li>{CHECK_SVG}<span><b>{e(u["title"])}</b> {e(u["text"])}</span></li>' for u in d["usps"])
    reviews = d.get("reviews") or []
    if reviews:
        review_html = "".join(
            f'<figure class="review"><div class="stars" aria-label="{r["rating"]} sterren">{stars(r["rating"])}</div>'
            f'<blockquote>“{e(r["text"])}”</blockquote><figcaption>{e(r["author"])} · {e(r["when"])}</figcaption></figure>'
            for r in reviews)
        review_block = (f'<div class="reviews">{review_html}</div>'
                        f'<p class="src">Fragmenten uit Google-beoordelingen · {e(b["rating"])} gemiddeld uit '
                        f'{e(b["rating_count"])} beoordelingen</p>')
    else:
        review_block = ""
    steps = "".join(
        f'<li><span class="n">{i}</span><div><h3>{e(s["title"])}</h3><p>{e(s["text"])}</p></div></li>'
        for i, s in enumerate(d["steps"], 1))
    photos = "".join(
        f'<div class="ph"><span>Foto van je eigen werk</span><small>{e(p)}</small></div>' for p in d["photo_slots"])
    area = "".join(f"<span>{e(a)}</span>" for a in d["area"])
    known = "".join(f"<li>{e(x)}</li>" for x in d["preview"]["known"])
    todo = "".join(f"<li>{e(x)}</li>" for x in d["preview"]["owner_decides"])
    golive = "".join(f"<li>{e(x)}</li>" for x in d["preview"]["go_live"])

    tpl = (HERE / "template.html").read_text()
    repl = {
        "NAME": e(b["name"]), "INITIALS": e(b["initials"]), "TRADE": e(b["trade"]), "CITY": e(b["city"]),
        "TEL": e(tel), "PHONE": phone, "PHONE_SVG": PHONE_SVG,
        "STREET": e(b["street"]), "POSTCODE_CITY": e(b["postcode_city"]), "HOURS": e(b["hours"]),
        "HOURS_SHORT": e(b["hours_short"]), "RATING": e(b["rating"]), "RATING_COUNT": e(b["rating_count"]),
        "H1": d["hero"]["h1"], "LEAD": e(d["hero"]["lead"]),
        "SERVICES_INTRO": e(d["services_intro"]), "SERVICES": services, "USPS": usps,
        "REVIEWS": review_block, "STEPS": steps, "PHOTOS": photos, "AREA": area,
        "WHY_PREVIEW": e(d["preview"]["why"]), "KNOWN": known, "OWNER_DECIDES": todo, "GO_LIVE": golive,
        "SOURCE": e(d["preview"]["source"]),
    }
    for k, v in repl.items():
        tpl = tpl.replace("{{" + k + "}}", str(v))
    assert "{{" not in tpl, "unfilled placeholder"
    return tpl


def main(folder: str) -> None:
    out = Path(folder)
    data = json.loads((out / "site.json").read_text())
    (out / "index.html").write_text(render(data))
    (out / "Dockerfile").write_text(DOCKERFILE)
    (out / "robots.txt").write_text(ROBOTS)
    print(f"built {out}/index.html")


if __name__ == "__main__":
    main(sys.argv[1])
