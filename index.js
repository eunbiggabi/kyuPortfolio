"use strict";

//Navbar toggle btn

const toggleBtn = document.querySelector(".navbar__toggle-btn");
const menu = document.querySelector(".navbar__menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

