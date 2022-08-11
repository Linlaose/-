"use strict";

var logo = document.querySelector('.logo');
var hamburger = document.querySelector('.hamburger');
var toggleMenu = document.querySelector('.menu-list');

if (logo) {
  hamburger.addEventListener('click', function (e) {
    /* 點到 checkbox */
    toggleMenu.classList.toggle('menu-show');
  });
}

;
//# sourceMappingURL=all.js.map
