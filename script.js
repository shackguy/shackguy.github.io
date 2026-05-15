const button = document.getElementById("theme-toggle");

// Restore saved choice
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute(
        "data-theme",
        savedTheme
    );
}

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
});