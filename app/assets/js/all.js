const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const toggleMenu = document.querySelector('.menu-list');

if (logo) {
  hamburger.addEventListener('click', (e) => { /* 點到 checkbox */
    toggleMenu.classList.toggle('menu-show');
  })
};

// foods-swiper
const swiper = new Swiper('.foods-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  autoplay: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 1,
      // spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 126
    }
  },

  // If we need pagination
  pagination: {
    el: '.foods-swiper-pagination',
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

// certificate-swiper
const certificateSwiper = new Swiper('.certificate-swiper', {
  // Optional parameters
  direction: 'horizontal',
  speed: 1000,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 1,
      loop: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: false,
    }
  },

  // If we need pagination
  pagination: {
    el: '.certificate-swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.certificate-swiper-button-next',
    prevEl: '.certificate-swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});