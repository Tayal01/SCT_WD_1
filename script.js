window.addEventListener("load", () => {
    // Smooth reveal for hero
    const hero = document.querySelector("#hero");
    if (hero) hero.classList.add("loaded");

    // Navbar scroll effect
    const navbar = document.querySelector("header");
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
});

// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("header nav ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll("header nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
    });
});
