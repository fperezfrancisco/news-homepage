const mobileNav = document.querySelector(".mobileNav");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".mobileCloseBtn");
const openBtn = document.querySelector(".menuOpen");
const menuItems = document.querySelectorAll(".mobileLink");

menuItems.forEach((li) => {
  li.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  mobileNav.classList.toggle("active");
  overlay.classList.toggle("active");
}

closeBtn.addEventListener("click", toggleMenu);
openBtn.addEventListener("click", toggleMenu);
