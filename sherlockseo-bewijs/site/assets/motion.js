(function(){var R=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.cards > *,.how > *,.list-grid > *,.team-grid > *').forEach(function(el,i){el.setAttribute('data-reveal','');el.style.setProperty('--d',(i%3)*110+'ms')});
document.querySelectorAll('main section:not(.hero) .wrap > *:not([data-reveal]):not(.story):not(.quotes)').forEach(function(el){if(!el.closest('[data-reveal]')&&!el.querySelector('[data-reveal]'))el.setAttribute('data-reveal','')});
function count(el){var t=el.textContent,m=t.match(/[\d.]+/);if(!m||R)return;var raw=m[0],n=parseFloat(raw.replace(/\./g,'')),dots=raw.indexOf('.')>-1,t0=null;
function f(x){var v=Math.round(n*x);return dots?v.toLocaleString('nl-BE'):String(v)}
function step(ts){if(!t0)t0=ts;var p=Math.min(1,(ts-t0)/1400),e=1-Math.pow(1-p,3);el.textContent=t.replace(raw,f(e));if(p<1)requestAnimationFrame(step);else el.textContent=t}requestAnimationFrame(step)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target;el.classList.add('in');el.querySelectorAll('[data-count]').forEach(count);if(el.hasAttribute('data-count'))count(el);io.unobserve(el)})},{threshold:.15,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('[data-reveal],.steps-wrap,.hero [data-count]').forEach(function(el){if(R){el.classList.add('in')}else io.observe(el)})})();