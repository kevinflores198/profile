// Year
document.getElementById('year').textContent = new Date().getFullYear();

//  NAVBAR 
const cwNav      = document.getElementById('nav');
const cwBurger   = document.getElementById('burger');
const cwLinks    = document.getElementById('links');
const cwBackdrop = document.getElementById('backdrop');
const cwNavClose = document.getElementById('nav-close');

window.addEventListener('scroll', () => {
  cwNav.classList.toggle('scrolled', window.scrollY > 60);
});

function cwOpen() {
  cwBurger.classList.add('open');
  cwLinks.classList.add('open');
  if (cwBackdrop) cwBackdrop.classList.add('visible');
  document.body.style.overflow = 'hidden';
}
function cwClose() {
  cwBurger.classList.remove('open');
  cwLinks.classList.remove('open');
  if (cwBackdrop) cwBackdrop.classList.remove('visible');
  document.body.style.overflow = '';
}

cwBurger.addEventListener('click', () => {
  cwLinks.classList.contains('open') ? cwClose() : cwOpen();
});
if (cwBackdrop) cwBackdrop.addEventListener('click', cwClose);
if (cwNavClose) cwNavClose.addEventListener('click', cwClose);
document.addEventListener('keydown', e => { if (e.key === 'Escape') cwClose(); });
cwLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', cwClose));
window.addEventListener('resize', () => { if (window.innerWidth > 768) cwClose(); });

//  ACTIVE SECTION 
const cwSections  = document.querySelectorAll('main section[id]');
const cwNavLinks  = document.querySelectorAll('.links a[href^="#"]');

const cwSectionObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      cwNavLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-35% 0px -60% 0px', threshold: 0 });

cwSections.forEach(s => cwSectionObs.observe(s));

//  LANG 
const cwLangBtn  = document.getElementById('lang-btn');
const cwLangDrop = document.getElementById('lang-drop');
const cwLangLabel = document.getElementById('lang-label');

cwLangBtn.addEventListener('click', e => {
  e.stopPropagation();
  cwLangDrop.classList.toggle('open');
});
document.addEventListener('click', () => cwLangDrop.classList.remove('open'));

function cwLang(lang) {
  cwLangLabel.textContent = lang.toUpperCase();
  localStorage.setItem('lang', lang);
  cwLangDrop.classList.remove('open');
  // translations hook: applyTranslations(lang)
}

const savedLang = localStorage.getItem('lang') || 'es';
cwLangLabel.textContent = savedLang.toUpperCase();

//  FABs
const cwFab = document.getElementById('fab');
const cwTop = document.getElementById('top');

window.addEventListener('scroll', () => {
  const show = window.scrollY > 300;
  cwFab.classList.toggle('visible', show);
  cwTop.classList.toggle('visible', show);
});

//  SCROLL REVEAL
const revealEls = document.querySelectorAll(
  '.service, .case, .price-card, .maint-card, .testi, .step, .prob-item, .stat'
);
revealEls.forEach(el => el.classList.add('reveal'));

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObs.observe(el));

