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
