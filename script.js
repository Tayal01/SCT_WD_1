window.addEventListener("load", () => {
  const hero = document.querySelector("#hero");
  if (hero) {
    hero.classList.add("loaded");
  }
});

window.addEventListener("load", () => {
  // Navbar scroll effect
  const navbar = document.querySelector("header");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Smooth reveal for hero
  const hero = document.querySelector("#hero");
  if (hero) hero.classList.add("loaded");
});
