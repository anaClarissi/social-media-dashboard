const switchToggle = document.querySelector("#switch");

switchToggle.addEventListener("input", () => toggleTheme());

function toggleTheme() {

    const theme = switchToggle.checked ? "light" : "dark";

    const body = document.querySelector("body");

    body.setAttribute("data-theme", theme);

}