
const lb=document.getElementById('lightbox'), lbImg=document.getElementById('lightboxImg');
document.querySelectorAll('.zoomable').forEach(b=>b.addEventListener('click',()=>{lbImg.src=b.querySelector('img').src;lb.classList.add('open');document.body.style.overflow='hidden'}));
function closeLb(){if(!lb)return;lb.classList.remove('open');document.body.style.overflow=''}
if(lb){lb.querySelector('.close').onclick=closeLb;lb.addEventListener('click',e=>{if(e.target===lb)closeLb()});}
const drawer=document.getElementById('drawer');const openDrawer=document.getElementById('openDrawer');const closeDrawer=document.getElementById('closeDrawer');
if(openDrawer)openDrawer.onclick=()=>drawer.classList.add('open');if(closeDrawer)closeDrawer.onclick=()=>drawer.classList.remove('open');if(drawer)drawer.querySelector('.drawer-bg').onclick=()=>drawer.classList.remove('open');
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeLb();if(drawer)drawer.classList.remove('open')}});
document.querySelectorAll('.video-input').forEach(input=>input.addEventListener('change',()=>{const file=input.files&&input.files[0];if(!file)return;const card=input.closest('.video-card');const holder=card.querySelector('.video-placeholder');holder.style.display='none';let v=card.querySelector('video');if(!v){v=document.createElement('video');v.controls=true;v.playsInline=true;card.appendChild(v)}v.src=URL.createObjectURL(file);v.style.display='block';v.play().catch(()=>{});}));
