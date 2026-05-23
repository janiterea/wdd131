const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu")
const header = document.querySelector("header")
const headerTitle = document.querySelector("#header-title")

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    header.classList.toggle("open");
    menuButton.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuButton.textContent = "X";
        headerTitle.style.display = "none";
    } else {
        menuButton.textContent = "☰";
        headerTitle.style.display = "block";
    }
});
// const currentYear = new Date().getFullYear();
// document.getElementById("currentYear").textContent = currentYear;
// document.getElementById("lastModified").innerHTML = document.lastModified;

// document.body.style.backgroundColor = ""