(function(){
  var dl=window.dataLayer=window.dataLayer||[];
  var hdr=document.getElementById('hdr'),spine=document.getElementById('spine'),doc=document.documentElement;
  var inverse=[].slice.call(document.querySelectorAll('[data-hdr="inverse"]'));
  function onScroll(){
    var y=window.scrollY||doc.scrollTop;
    hdr.classList.toggle('solid',y>40);
    if(spine){spine.classList.toggle('on',y>window.innerHeight*0.6);var h=doc.scrollHeight-window.innerHeight;
      spine.style.setProperty('--spinefill',(h>0?Math.min(100,(y/h)*100):0)+'%');}
  }
  window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll);onScroll();
  var rises=[].slice.call(document.querySelectorAll('.rise'));
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.12});
    rises.forEach(function(el){io.observe(el);});
  }else{rises.forEach(function(el){el.classList.add('in');});}
  // mobile menu
  var mb=document.getElementById('mb'),nl=document.getElementById('nl');
  if(mb&&nl){mb.addEventListener('click',function(){var o=nl.classList.toggle('open');mb.setAttribute('aria-expanded',o?'true':'false');mb.textContent=o?'Sluit':'Menu';});}
  // measurement: dataLayer only (no loader in preview)
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('[data-evt]');if(!a)return;
    var ev=a.getAttribute('data-evt'),d={event:ev};
    if(ev==='cta_click'){d.location=a.getAttribute('data-loc');d.label=(a.textContent||'').trim();}
    if(ev==='case_click'){d.case=a.getAttribute('data-case');}
    if(ev==='nav_click'){d.label=a.getAttribute('data-label');}
    dl.push(d);
  });
  // preview form: validates, sends NOTHING (no network request)
  var f=document.querySelector('form[data-preview-form]');
  if(f){f.addEventListener('submit',function(e){
    e.preventDefault();
    if(!f.checkValidity()){f.reportValidity();return;}
    var s=f.querySelector('.form-status');s.classList.add('on');s.focus();
    dl.push({event:'contact_form_submit',preview:true});
  });}
})();
