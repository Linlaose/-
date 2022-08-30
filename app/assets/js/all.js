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
  autoplay: {
    delay: 5000,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 1,
      // spaceBetween: 20
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
    1280: {
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

// Animate on scroll
AOS.init();

//! 自寫邏輯 (登入和註冊動畫)

/* 登入按鈕、區塊、區塊文字宣告 */
const loginButton = document.querySelector('#login-mask-signIn');
const loginMask = document.querySelector('#login-mask');
const loginMaskText = document.querySelector('#login-mask-text-title')
const loginSubmit = document.querySelector('#loginSubmit') //* sign in

/* 註冊按鈕、區塊、區塊文字宣告 */
const signUpButton = document.querySelector('#sign-up-mask-signUp')
const signUpMask = document.querySelector('#sign-up-mask');
const signUpText = document.querySelector('#sign-up-mask-text-title')
const signUpSubmit = document.querySelector('#signUpSubmit')

/* 電腦以上才 show 出遮罩動畫 */ //! 要再加上判斷式以防多頁式衝突
if (window.innerWidth >= 992 && signUpMask) {
  loginButton.addEventListener('click', (e) => {
    // 登入的遮罩按鈕觸發後

    // 遮罩移動，文字反向移動
    loginMask.classList.add('translate-x-full', 'opacity-0')
    loginMaskText.classList.add('-translate-x-full')

    loginMask.classList.add('-z-10')
    signUpMask.classList.remove('-z-10')

    // 避免按不到註冊按鈕，將其移除
    loginMask.classList.remove('z-10')

    // 讓註冊遮罩回歸
    signUpMask.classList.remove('-translate-x-full', 'opacity-0')
    signUpText.classList.remove('translate-x-full')
  });

  signUpButton.addEventListener('click', (e) => {
    // 註冊的遮罩按鈕觸發後

    // 遮罩移動，文字反向移動
    signUpMask.classList.add('-translate-x-full', 'opacity-0')
    signUpText.classList.add('translate-x-full')

    signUpMask.classList.add('-z-10')

    // 避免註冊按鈕觸發後，無法再次觸發登入按鈕
    loginMask.classList.add('z-10')
    loginMask.classList.remove('-z-10')

    // 讓登入遮罩回歸
    loginMask.classList.remove('opacity-0', 'translate-x-full')
    loginMaskText.classList.remove('-translate-x-full')
  });
}

// 購物車視窗
const orderButton = document.querySelector('#order');
const closeCart = document.querySelector('#cart-close');
const cartBox = document.querySelector('#cart-box');
const continueShopping = document.querySelector('#continue-shopping')

if (orderButton) {
  closeCart.addEventListener('click', (e) => {
    cartBox.classList.add('hidden');
  });
  continueShopping.addEventListener('click', (e) => {
    cartBox.classList.add('hidden');
  });
}