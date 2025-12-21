// open and close navbar on mobile size
const toggle = document.getElementById('button-burger');
const bodyy = document.querySelector('body');
const menu_options = document.querySelector('#contentnav');

toggle.addEventListener('click', function () {
  toggle.classList.toggle('active');
  bodyy.classList.toggle('active');
  menu_options.classList.toggle('show');
});



// Button to switch theme on navbar.
document.body.setAttribute("data-theme", "dark");

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

//// saves user prefecences in localStorage for theme.
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

// switches navbar color when scrolled
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".glass-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//switches video on #profile when theme is switched.
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


// switches language when use button lang.
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

// top up botton to be back on top
window.addEventListener("scroll", () => {
  const scroll = document.documentElement.scrollTop;
  if (scroll > 100) {
    arrowUp.style.right = 20 + "px";
  } else {
    arrowUp.style.right = -100 + "px";
  }
})

// whatsapp button fixed and showed when scroll is used
window.addEventListener("scroll", () => {
  const scroll = document.documentElement.scrollTop;
  if (scroll > 100) {
    contactMe.style.left = 20 + "px";
  } else {
    contactMe.style.left = -100 + "px";
  }
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  // appears when 30% of block is visible.
  threshold: 0.3
});

// Type effect on #profile for web developer.
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


// today year on footer
const today = new Date();
currentyear.innerHTML = today.getFullYear();

new simpleParallax(document.querySelectorAll('.image'));

gsap.from(".box", {
  scrollTrigger: ".box",
  y: 100,
  opacity: 0
});
