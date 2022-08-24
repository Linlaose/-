const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const toggleMenu = document.querySelector('.menu-list');

if (logo) {
  hamburger.addEventListener('click', (e) => { /* 點到 checkbox */
    toggleMenu.classList.toggle('menu-show');
  })
};

// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 1,
      // spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});