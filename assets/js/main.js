(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var sv=$('cv-svg');if(sv){var D=[1,2,3,5,7,10,14,21,30],sel=[1,3,7],box=$('cv-d');box.innerHTML=D.map(function(d){return '<button type="button" aria-pressed="'+(sel.indexOf(d)>-1)+'" data-d="'+d+'">'+d+'d</button>';}).join('');
 var X0=50,X1=500,Y0=280,Y1=30;function x(d){return X0+d/30*(X1-X0);}function y(r){return Y0-r*(Y0-Y1);}
 function draw(){var rs=sel.slice().sort(function(a,b){return a-b;}),pts=[],s=1.2,last=0,o='';
  for(var t=0;t<=30;t+=.25){var hit=rs.filter(function(r){return r>last&&r<=t;});if(hit.length){last=hit[hit.length-1];s=s*2.2;}var r=Math.exp(-(t-last)/s);pts.push(x(t).toFixed(1)+','+y(r).toFixed(1));}
  var base=[];for(var t2=0;t2<=30;t2+=.25)base.push(x(t2).toFixed(1)+','+y(Math.exp(-t2/1.2)).toFixed(1));
  o+='<line class="ax" x1="'+X0+'" y1="'+Y0+'" x2="'+X1+'" y2="'+Y0+'"/><line class="ax" x1="'+X0+'" y1="'+Y0+'" x2="'+X0+'" y2="'+Y1+'"/><text x="'+X0+'" y="304">Day 0</text><text x="'+(X1-40)+'" y="304">Day 30</text><text x="8" y="'+(Y1+4)+'">100%</text><text x="14" y="'+(Y0)+'">0%</text>';
  o+='<polyline class="cv0" points="'+base.join(' ')+'"/><polyline class="cv" points="'+pts.join(' ')+'"/>';rs.forEach(function(r){o+='<circle class="rv-m" cx="'+x(r).toFixed(1)+'" cy="'+y(1)+'" r="6"/>';});sv.innerHTML=o;
  var fin=Math.round(Math.exp(-(30-(rs[rs.length-1]||0))/s)*100);$('cv-o').textContent=rs.length?rs.length+' reviews: about '+fin+'% still remembered on day 30 (red line: no reviews).':'No reviews: almost everything fades within a week.';}
 [].forEach.call(box.children,function(b){b.addEventListener('click',function(){var d=+b.getAttribute('data-d'),i=sel.indexOf(d);if(i>-1)sel.splice(i,1);else sel.push(d);b.setAttribute('aria-pressed',i===-1);draw();});});draw();}
var ps=[].slice.call(document.querySelectorAll('.ls-acc-p'));ps.forEach(function(p){function on(){ps.forEach(function(q){q.classList.toggle('on',q===p);});}p.addEventListener('mouseenter',function(){if(matchMedia('(hover:hover)').matches)on();});p.addEventListener('click',on);p.addEventListener('focus',on);});
[].forEach.call(document.querySelectorAll('.ls-fc'),function(c){function f(){c.classList.toggle('flip');}c.addEventListener('click',f);c.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();f();}});});
var go=$('tm-go');if(go){var tl=[].slice.call(document.querySelectorAll('input[name=tl]')),sec=$('timer'),run=false,brk=false,left=0,tot=0,iv,n=0;
 function len(){var v=25;tl.forEach(function(e){if(e.checked)v=+e.value;});return v;}function brkLen(v){return v===45?10:(v===15?3:5);}
 function show(){var m=Math.floor(left/60),s=left%60;$('tm-t').textContent=(m<10?'0':'')+m+':'+(s<10?'0':'')+s;$('tm-p').style.strokeDashoffset=(100-(tot?left/tot*100:100)).toFixed(2);$('tm-m').textContent=brk?'Break':'Focus';sec.classList.toggle('brk',brk);}
 function reset(){clearInterval(iv);run=false;brk=false;tot=left=len()*60;go.textContent='Start';show();}
 function tick(){left--;if(left<=0){if(!brk){n++;$('tm-n').textContent=n;brk=true;tot=left=brkLen(len())*60;}else{brk=false;tot=left=len()*60;}}show();}
 go.addEventListener('click',function(){if(run){clearInterval(iv);run=false;go.textContent='Resume';}else{run=true;go.textContent='Pause';iv=setInterval(tick,1000);}});$('tm-rs').addEventListener('click',reset);tl.forEach(function(e){e.addEventListener('change',reset);});reset();}
})();
