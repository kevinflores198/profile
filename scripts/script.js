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
