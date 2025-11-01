const today = new Date();
currentyear.innerHTML = today.getFullYear();
document.body.setAttribute("data-theme", "dark");

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Guardar preferencia del usuario en localStorage
if (localStorage.getItem("theme")) {
  body.setAttribute("data-theme", localStorage.getItem("theme"));
  toggleBtn.textContent = localStorage.getItem("theme") === "dark" ? "☀️" : "🌙";
}

toggleBtn.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".glass-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//video switch
const themeToggle = document.getElementById('theme-toggle');
const videoDark = document.getElementById('video-dark');
const videoLight = document.getElementById('video-light');

function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (savedTheme === 'dark') {
    videoDark.classList.add('visible');
    videoDark.classList.remove('hidden');
    videoLight.classList.add('hidden');
    videoLight.classList.remove('visible');
  } else {
    videoLight.classList.add('visible');
    videoLight.classList.remove('hidden');
    videoDark.classList.add('hidden');
    videoDark.classList.remove('visible');
  }
}

applySavedTheme();

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  applySavedTheme();
});

function toggleLanguageMenu() {
  document.getElementById("lang-menu").classList.toggle("hidden");
}

function updateLangButton(langCode) {
  document.getElementById("current-lang").innerText = langCode.toUpperCase();
  document.getElementById("lang-menu").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  updateLangButton(savedLang.toUpperCase());
});

document.addEventListener("click", (e) => {
  const menu = document.getElementById("lang-menu");
  const btn = document.querySelector(".lang-btn");
  if (!btn.contains(e.target)) {
    menu.classList.add("hidden");
  }
});

window.addEventListener("scroll", () => {
  const scroll = document.documentElement.scrollTop;
  if (scroll > 100) {
    arrowUp.style.right = 20 + "px";
  } else {
    arrowUp.style.right = -100 + "px";
  }
})

window.addEventListener("scroll", () => {
  const scroll = document.documentElement.scrollTop;
  if (scroll > 100) {
    contactMe.style.left = 20 + "px";
  } else {
    contactMe.style.left = -100 + "px";
  }
})


const text = "Web Developer";
const element = document.getElementById("typewriter");
let index = 0;

function typeLoop() {
  element.textContent = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 1;
    setTimeout(typeLoop, 1000);
    return;
  }

  setTimeout(typeLoop, 300);
}

typeLoop();

function modalSetup(openId, modalId) {
  const openBtn = document.getElementById(openId);
  const modal = document.getElementById(modalId);
  const closeBtn = modal.querySelector(".close");

  openBtn.addEventListener("click", () => modal.style.display = "block");
  closeBtn.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
}

window.addEventListener("scroll", () => {
  const scroll = document.documentElement.scrollTop;
  if (scroll > 100) {
    arrowUp.style.right = 20 + "px";
  } else {
    arrowUp.style.right = -100 + "px";
  }
})

modalSetup("card-cont1", "cardModal1");
modalSetup("card-cont2", "cardModal2");
modalSetup("card-cont3", "cardModal3");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3 // aparece cuando el 30% del bloque es visible
});

const fadeSection = document.querySelector('.cards.fade-in');
if (fadeSection) observer.observe(fadeSection);

// Abrir modal
document.querySelectorAll('.card-project').forEach((card, index) => {
  card.addEventListener('click', () => {
    const modal = document.getElementById(`cardModal${index + 1}`);
    modal.classList.add('active');
  });
});

// Cerrar modal al hacer clic en la “X” o fuera del contenido
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal') || e.target.classList.contains('close')) {
      modal.classList.remove('active');
      // Espera a que termine la transición antes de ocultarlo
      setTimeout(() => modal.style.display = 'none', 500);
    }
  });
});

// Cuando abrís el modal
document.body.classList.add('modal-open');

// Cuando lo cerrás
document.body.classList.remove('modal-open');

const modal = document.getElementById("cardModal1");
const openBtn = document.getElementById("project1-btn");
const closeBtn = modal.querySelector(".close");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.classList.add("modal-open");
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
});


const toggle = document.getElementById('button-burger');
const bodyy = document.querySelector('body');
const menu_options = document.querySelector('#contentnav');

toggle.addEventListener('click', function () {
  toggle.classList.toggle('active');
  bodyy.classList.toggle('active');
  menu_options.classList.toggle('show');
});