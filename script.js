var button = document.getElementById("theme-toggle");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    /* ignore if localStorage is unsupported */
  }

  if (theme === "dark") {
    button.innerHTML = "☀";
  } else {
    button.innerHTML = "☾";
  }
}

var savedTheme = null;

try {
  savedTheme = localStorage.getItem("theme");
} catch (e) {
  savedTheme = null;
}

if (savedTheme === "dark" || savedTheme === "light") {
  setTheme(savedTheme);
}

button.onclick = function () {
  var current = document.documentElement.getAttribute("data-theme");

  if (current === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
};