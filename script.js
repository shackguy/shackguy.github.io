const button = document.getElementById("theme-toggle");

function updateIcon() {
    button.textContent =
        document.documentElement.getAttribute("data-theme") === "dark"
        ? "☀"
        : "☾";
}

updateIcon();

button.addEventListener("click", () => {
    const current =
        document.documentElement.getAttribute("data-theme");

    const newTheme =
        current === "dark"
        ? "light"
        : "dark";

    document.documentElement.setAttribute(
        "data-theme",
        newTheme
    );

    localStorage.setItem(
        "theme",
        newTheme
    );

    updateIcon();
});