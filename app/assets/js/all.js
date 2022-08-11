const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const toggleMenu = document.querySelector('.menu-list');

if (logo) {
  hamburger.addEventListener('click', (e) => { /* 點到 checkbox */
    toggleMenu.classList.toggle('menu-show');
  })
};