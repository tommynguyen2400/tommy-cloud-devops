const root=document.documentElement;
const saved=localStorage.getItem('theme');
if(saved) root.dataset.theme=saved;
document.getElementById('themeToggle').addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('theme',root.dataset.theme)});
const words=['DevOps Engineer','người thích Đà Lạt','người ghi lại khoảnh khắc','người xây dựng hệ thống'];let wi=0,ci=0,del=false;const el=document.getElementById('typeText');function type(){const w=words[wi];el.textContent=w.slice(0,ci);if(!del&&ci<w.length)ci++;else if(del&&ci>0)ci--;else{del=!del;if(!del)wi=(wi+1)%words.length;setTimeout(type,del?900:250);return}setTimeout(type,del?45:80)}type();
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
document.querySelectorAll('.filter button').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('.filter button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.project-card').forEach(card=>{card.style.display=(f==='all'||card.dataset.cat.split(' ').includes(f))?'block':'none'})})});
