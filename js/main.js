const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show-menu");

  toggle.classList.toggle("light");
});

const links = document.querySelectorAll(".nav__menu a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show-menu");
    toggle.classList.remove("light");
  });
});
