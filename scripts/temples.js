const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");
const header = document.querySelector("header");
const headerTitle = document.querySelector("#header-title");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    headerTitle.classList.toggle("open");
    menuButton.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuButton.textContent = "X";
        headerTitle.classList.add("hide-title")
    } else {
        menuButton.textContent = "☰";
        headerTitle.classList.remove("hide-title");
    }
});

const currentYear = new Date().getFullYear();
document.querySelector("#currentYear").textContent = currentYear;
document.querySelector("#lastModified").innerHTML = document.lastModified;