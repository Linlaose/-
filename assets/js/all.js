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

; // foods-swiper

var swiper = new Swiper('.foods-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  autoplay: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 1 // spaceBetween: 20

    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 126
    }
  },
  // If we need pagination
  pagination: {
    el: '.foods-swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
}); // certificate-swiper

var certificateSwiper = new Swiper('.certificate-swiper', {
  // Optional parameters
  direction: 'horizontal',
  speed: 1000,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 1,
      loop: true
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: false
    }
  },
  // If we need pagination
  pagination: {
    el: '.certificate-swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.certificate-swiper-button-next',
    prevEl: '.certificate-swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
}); // Animate on scroll

AOS.init(); //! 自寫邏輯 (登入和註冊動畫)

/* 登入按鈕、區塊、區塊文字宣告 */

var loginButton = document.querySelector('#login-mask-signIn');
var loginMask = document.querySelector('#login-mask');
var loginMaskText = document.querySelector('#login-mask-text-title');
var loginSubmit = document.querySelector('#loginSubmit'); //* sign in

/* 註冊按鈕、區塊、區塊文字宣告 */

var signUpButton = document.querySelector('#sign-up-mask-signUp');
var signUpMask = document.querySelector('#sign-up-mask');
var signUpText = document.querySelector('#sign-up-mask-text-title');
var signUpSubmit = document.querySelector('#signUpSubmit');
/* 電腦以上才 show 出遮罩動畫 */

if (window.innerWidth >= 992) {
  loginButton.addEventListener('click', function (e) {
    // 登入的遮罩按鈕觸發後
    // 遮罩移動，文字反向移動
    loginMask.classList.add('translate-x-full', 'opacity-0');
    loginMaskText.classList.add('-translate-x-full');
    loginMask.classList.add('-z-10');
    signUpMask.classList.remove('-z-10'); // 避免按不到註冊按鈕，將其移除

    loginMask.classList.remove('z-10'); // 讓註冊遮罩回歸

    signUpMask.classList.remove('-translate-x-full', 'opacity-0');
    signUpText.classList.remove('translate-x-full');
  });
  signUpButton.addEventListener('click', function (e) {
    // 註冊的遮罩按鈕觸發後
    // 遮罩移動，文字反向移動
    signUpMask.classList.add('-translate-x-full', 'opacity-0');
    signUpText.classList.add('translate-x-full');
    signUpMask.classList.add('-z-10'); // 避免註冊按鈕觸發後，無法再次觸發登入按鈕

    loginMask.classList.add('z-10');
    loginMask.classList.remove('-z-10'); // 讓登入遮罩回歸

    loginMask.classList.remove('opacity-0', 'translate-x-full');
    loginMaskText.classList.remove('-translate-x-full');
  });
}
//# sourceMappingURL=all.js.map
