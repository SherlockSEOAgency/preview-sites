#!/usr/bin/env python3
"""Past de statusupdates van 19/11 toe op de HTML van het EventOnline-plan (Emiles versie).
Gebruik: python3 apply_19nov_updates.py <bron.html> <uit.html>
Elke vervanging meldt of de oude tekst is gevonden; ontbrekende tekst = Emile heeft die al aangepast, dan niets overschrijven."""
import sys
src,dst=sys.argv[1],sys.argv[2]
s=open(src,encoding='utf-8').read()
R=[
('nl: "Op staging, met een proefrun"','nl: "Eerst op onze teststaging, dan op die van Studio Koko, met een proefrun"'),
('en: "On staging, with a dry run"','en: "First on our test staging, then Studio Koko’s, with a dry run"'),
('nl: "Op staging"','nl: "Eerst op onze teststaging, dan op die van Studio Koko"'),
('en: "On staging"','en: "First on our test staging, then Studio Koko’s"'),
('nl: "Vandaag staan 101 van 200 gecontroleerde leverancierspagina’s in de sitemap op noindex, en lopen 20 van 58 footerlinks via een omweg."','nl: "Op 18 november stonden 101 van 200 gecontroleerde leverancierspagina’s in de sitemap op noindex, en liepen 20 van 58 footerlinks via een omweg. Op 19 november volgen sitemap en canonical op onze teststaging dezelfde regel als de pagina."'),
('en: "Today 101 of 200 checked supplier pages in the sitemap are set to noindex, and 20 of 58 footer links take a detour."','en: "On 18 November, 101 of 200 checked supplier pages in the sitemap were set to noindex, and 20 of 58 footer links took a detour. On 19 November, the sitemap and canonical on our test staging follow the same rule as the page."'),
('nl: "1.049 testpagina’s worden indexeerbaar tegenover 1.024 vergelijkbare controlepagina’s, op een nulmeting van 4.734. Werkt het na zes weken niet, dan draaien we terug."','nl: "1.049 testpagina’s worden indexeerbaar tegenover 1.024 vergelijkbare controlepagina’s, op een nulmeting van 4.734. Werkt het na zes weken niet, dan draaien we terug. Beslissing open: de proefrun op onze staging toont dat 1.892 van de 4.431 gevonden nulmetingspagina’s geen aanbod in hun eigen plaats hebben en daardoor noindex worden. Wij stellen voor te kiezen: die vloer houden, of die pagina’s vrijstellen."'),
('en: "1,049 test pages become indexable against 1,024 similar control pages, on a baseline of 4,734. Doesn’t work after six weeks? We roll it back."','en: "1,049 test pages become indexable against 1,024 similar control pages, on a baseline of 4,734. Doesn’t work after six weeks? We roll it back. Decision open: the dry run on our staging shows that 1,892 of the 4,431 baseline pages found have no supply in their own place and therefore become noindex. We propose to choose: keep that floor, or exempt those pages."'),
('data-nl="Het pakket op staging zetten en een proefrun draaien<span>Week 48 · 23–29 november</span>"','data-nl="Het pakket als pull request ontvangen, op staging zetten en een proefrun draaien<span>Voorstel: week 48 · 23–29 november, na onze controle</span>"'),
]
for old,new in R:
    n=s.count(old)
    print(('OK    ' if n else 'MISSING')+' '+old[:70])
    s=s.replace(old,new)
import re
pat=re.compile(r'Put the package on staging and do a dry run(\s*)<span>Week 48 · 23–29 November</span>')
s,n=pat.subn(lambda m:'Receive the package as a pull request, put it on staging and do a dry run'+m.group(1)+'<span>Proposal: week 48 · 23–29 November, after our check</span>',s)
print(('OK    ' if n else 'MISSING')+' EN to-do Studio Koko')
key='<p class="cap rise" data-nl="Gecontroleerd op de live site door Sherlock op 18 november 2026.'
if 'eventonlinestaging-production' in s: print('SKIP   teststaging-regel staat er al')
elif key in s:
    i=s.index(key); j=s.index('</p>',i)+4
    add='''
                <p class="cap rise" data-nl="Nieuw op 19 november: het pakket draait op onze eigen teststaging, waar Sherlock het eerst controleert met een volledige crawl en Emile het valideert. Daarna volgt de pull request voor Studio Koko. De teststaging is traag en staat op noindex: <a href='https://eventonlinestaging-production.up.railway.app/' target='_blank' rel='noopener'>bekijk de teststaging</a>.">New on 19 November: the package runs on our own test staging, where Sherlock checks it first with a full crawl and Emile validates it. The pull request for Studio Koko follows. The test staging is slow and set to noindex: <a href="https://eventonlinestaging-production.up.railway.app/" target="_blank" rel="noopener">view the test staging</a>.</p>'''
    s=s[:j]+add+s[j:]; print('OK     teststaging-regel toegevoegd')
else: print('MISSING teststaging-regel: ankertekst niet gevonden')
open(dst,'w',encoding='utf-8').write(s)
