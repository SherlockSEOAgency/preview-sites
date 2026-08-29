(function(){
  var html=document.documentElement;
  function set(l){
    html.setAttribute('data-lang',l); html.setAttribute('lang',l);
    document.querySelectorAll('.langbtns button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.lang===l));});
    try{localStorage.setItem('va-room-lang',l);}catch(e){}
  }
  document.querySelectorAll('.langbtns button').forEach(function(b){b.addEventListener('click',function(){set(b.dataset.lang);});});
  var saved=null; try{saved=localStorage.getItem('va-room-lang');}catch(e){}
  set(saved==='nl'?'nl':'fr');
})();
