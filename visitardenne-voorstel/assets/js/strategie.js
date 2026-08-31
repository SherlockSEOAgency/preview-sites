/* Strategie-modus: consultant-paneel per pagina, gevoed door data/blueprint.json.
   Publieke bezoekers zien niets tot de toggle aanstaat; stand onthouden in localStorage. */
(function () {
  var PAGE = document.body.getAttribute('data-page');
  var BP = null;

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  // Toggle-knop + paneel
  var toggle = el('button', null, 'Strategie');
  toggle.id = 's-toggle';
  toggle.setAttribute('aria-pressed', 'false');
  toggle.title = 'Consultant-onderbouwing (Sherlock) — waarom elke pagina zo is voorgesteld. Geen onderdeel van de voorgestelde bezoekerservaring.';
  document.body.appendChild(toggle);

  var panel = el('aside');
  panel.id = 's-panel';
  panel.setAttribute('aria-label', 'Strategie-paneel');
  document.body.appendChild(panel);

  function renderPanel() {
    if (!BP) return;
    var p = BP.pages[PAGE];
    if (!p) return;
    var h = '<div class="inner">';
    h += '<button class="close" aria-label="Sluiten">&times;</button>';
    h += '<div class="brand">Sherlock &middot; Digital Growth Intelligence &mdash; consultantlaag</div>';
    h += '<h2>' + esc(p.title) + '</h2>';
    h += '<span class="decision">' + esc(p.decision) + '</span>';
    h += '<dl>';
    h += '<dt>Waarom deze pagina bestaat</dt><dd>' + esc(p.role) + '</dd>';
    if (p.need && p.need !== '—') h += '<dt>Doelvraag &amp; markt</dt><dd>' + esc(p.need) + '</dd>';
    if (p.visibility && p.visibility !== '—') h += '<dt>Huidige zichtbaarheid</dt><dd>' + esc(p.visibility) + '</dd>';
    if (p.evidence && p.evidence.length) {
      h += '<dt>Bewijs</dt><dd>';
      p.evidence.forEach(function (e) { h += '<div class="ev">' + esc(e) + '</div>'; });
      h += '</dd>';
    }
    if (p.entities && p.entities.length) h += '<dt>Entiteiten</dt><dd>' + esc(p.entities.join(' · ')) + '</dd>';
    if (p.linkrole && p.linkrole !== '—') h += '<dt>Rol in het linkweefsel</dt><dd>' + esc(p.linkrole) + '</dd>';
    if (p.measurement && p.measurement !== '—') h += '<dt>Zo meten we of het werkt</dt><dd>' + esc(p.measurement) + '</dd>';
    h += '<dt>Herkomst van deze beslissing</dt><dd>' + esc(p.provenance) + '</dd>';
    h += '<dt>Basislijn</dt><dd class="src">' + esc(BP.meta.strategy_baseline) + ' &middot; <a href="' + BP.meta.dossier_url + '" target="_blank" rel="noopener">volledig dossier</a> &middot; <a href="verantwoording.html">site-blueprint</a></dd>';
    h += '</dl></div>';
    panel.innerHTML = h;
    panel.querySelector('.close').addEventListener('click', function () { panel.classList.remove('open'); });
  }

  function setMode(on) {
    document.body.classList.toggle('strategy-on', on);
    toggle.setAttribute('aria-pressed', String(on));
    if (on) { panel.classList.add('open'); } else { panel.classList.remove('open'); }
    try { localStorage.setItem('va-strategy', on ? '1' : '0'); } catch (e) {}
  }

  toggle.addEventListener('click', function () {
    var on = !document.body.classList.contains('strategy-on');
    setMode(on);
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') panel.classList.remove('open'); });

  // Blokvlaggen (s-flag) heropenen het paneel
  document.addEventListener('click', function (e) {
    var f = e.target.closest('.s-flag');
    if (f) { e.preventDefault(); panel.classList.add('open'); }
  });

  fetch('data/blueprint.json').then(function (r) { return r.json(); }).then(function (d) {
    BP = d;
    renderPanel();
    var saved = null;
    try { saved = localStorage.getItem('va-strategy'); } catch (e) {}
    if (saved === '1') { document.body.classList.add('strategy-on'); toggle.setAttribute('aria-pressed', 'true'); }
  }).catch(function () { /* paneel blijft leeg; publieke site onaangetast */ });
})();
