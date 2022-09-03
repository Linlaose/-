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
  autoplay: {
    delay: 5000
  },
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
    1280: {
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
//! 要再加上判斷式以防多頁式衝突

if (window.innerWidth >= 992 && signUpMask) {
  loginButton.addEventListener('click', function (e) {
    // 登入的遮罩按鈕觸發後
    // 遮罩移動，文字反向移動
    loginMask.classList.add('translate-x-full', 'opacity-0');
    loginMaskText.classList.add('-translate-x-full');
    loginMask.classList.add('-z-10');
    signUpMask.classList.remove('-z-10'); // 避免按不到註冊按鈕，將其移除

    loginMask.classList.remove('z-10'); // 讓註冊遮罩回歸

    signUpMask.classList.remove('translate-x-full', 'opacity-0');
    signUpText.classList.remove('translate-x-full');
  });
  signUpButton.addEventListener('click', function (e) {
    // 註冊的遮罩按鈕觸發後
    // 遮罩移動，文字反向移動
    signUpMask.classList.add('translate-x-full', 'opacity-0'); // signUpMask.classList.add('transform-translate-x-full') //只有寫 translate-x-full 會正常移動，其他數值都沒辦法

    signUpText.classList.add('translate-x-full'); // signUpMask.classList.add('-z-10')
    // 避免註冊按鈕觸發後，無法再次觸發登入按鈕

    loginMask.classList.add('z-10');
    loginMask.classList.remove('-z-10'); // 讓登入遮罩回歸

    loginMask.classList.remove('opacity-0', 'translate-x-full');
    loginMaskText.classList.remove('-translate-x-full');
  });
} // 購物車視窗


var orderButton = document.querySelector('#order');
var closeCart = document.querySelector('#cart-close');
var cartBox = document.querySelector('#cart-box');
var continueShopping = document.querySelector('#continue-shopping');

if (orderButton) {
  closeCart.addEventListener('click', function (e) {
    cartBox.classList.add('hidden');
  });
  continueShopping.addEventListener('click', function (e) {
    cartBox.classList.add('hidden');
  });
} // pre-loader


var fadeOut = function fadeOut() {
  var loaderWrapper = document.querySelector('#loader-wrapper');
  loaderWrapper.classList.add('opacity-0', 'invisible', 'hidden');
};
/* 全部 logo 動畫
1. logo 左右搖
2. 本店特色、吃得安心 左移
3. 餐點訂購、關於我們 右移
4. banner 圖片放大
*/
// logo
// const shake = () => {
//   const logoImage = document.querySelector('#logo-img');
//   logoImage.classList.add('md:animate-shakeX');
// }


var shake = function shake() {
  var logoImage = document.querySelector('#logo-img');
  logoImage.classList.add('animation-shake');
}; // 本店特色
// const moveLeftFar = () => {
//   const navSecret = document.querySelector('#nav-secret');
//   navSecret.classList.add('animation-delay-1000', 'animate-moveLeftFar')
// }


var moveLeftFar = function moveLeftFar() {
  var navSecret = document.querySelector('#nav-secret');
  navSecret.classList.add('animation-move-left-far');
}; // 吃得安心
// const moveLeftNear = () => {
//   const navSafety = document.querySelector('#nav-safety');
//   navSafety.classList.add('animate-moveLeftNear')
// }


var moveLeftNear = function moveLeftNear() {
  var navSafety = document.querySelector('#nav-safety');
  navSafety.classList.add('animation-move-left-near');
}; // 會員中心
// const moveRightFar = () => {
//   const navOrder = document.querySelector('#nav-order');
//   navOrder.classList.add('animation-delay-2000', 'animate-moveRightFar')
// }


var moveRightFar = function moveRightFar() {
  var navOrder = document.querySelector('#nav-order');
  navOrder.classList.add('animation-move-right-far');
}; // 關於我們
// const moveRightNear = () => {
//   const navAboutUs = document.querySelector('#nav-about-us');
//   navAboutUs.classList.add('animation-delay-1000', 'animate-moveRightNear')
// }


var moveRightNear = function moveRightNear() {
  var navAboutUs = document.querySelector('#nav-about-us');
  navAboutUs.classList.add('animation-move-right-near');
}; // banner
// const banner = () => {
//   const bannerImage = document.querySelector('#banner-img');
//   bannerImage.classList.add('animate-goBig');
// }
// const banner = () => {
//   const bannerImage = document.querySelector('#banner-img');
//   bannerImage.classList.add('animation-scale');
// } 等等註解取消


window.addEventListener('load', function () {
  fadeOut();
  shake();
  moveLeftFar();
  moveLeftNear();
  moveRightFar();
  moveRightNear(); // banner();
}); // 所有讀取完成後須立即執行的動畫
//!為何一定要是頁面曾經讀取過的動畫，才有辦法在 js 動態加入後產生一樣的效果 (可能是 tailwind 讀取問題，因為純寫 CSS 可以動；如上)

function showBtnCondition() {
  if ($(this).scrollTop() > 1000) {
    $('#member-order-nav').fadeIn();
  } else {
    $('#member-order-nav').fadeOut();
  }
}

$(window).scroll(showBtnCondition);
"use strict";

var loginEmail = document.querySelector('#login-email');
var loginPassword = document.querySelector('#login-password');
var loginButton = document.querySelector('#login-button');
loginButton.addEventListener('click', function () {
  var goLogin = function goLogin() {
    var email = loginEmail.value;
    var pwd = loginPassword.value;
    obj = {
      "user": {
        "email": email,
        "password": pwd
      }
    };
    axios.post("".concat(urlAPI, "/users/sign_in"), obj).then(function (res) {
      console.log(res.data.message);
      console.log(res.headers.authorization);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: res.data.message,
        showConfirmButton: true
      });
    })["catch"](function (err) {
      console.log(err.response.data.message);
      Swal.fire({
        title: err.response.data.message,
        text: err.response.data.error,
        icon: 'error',
        confirmButtonText: 'Cool'
      });
    });
    loginEmail.value = "";
    loginPassword.value = "";
  };

  goLogin();
});
"use strict";

var urlAPI = 'https://todoo.5xcamp.us';
var signUpEmail = document.querySelector('#sign-up-email');
var signUpNickname = document.querySelector('#nickname');
var signUpPassword = document.querySelector('#sign-up-password');
var signUpButton = document.querySelector('#sign-up-submit');
var obj = {};
signUpButton.addEventListener('click', function () {
  var goSignUp = function goSignUp() {
    var email = signUpEmail.value;
    var nickname = signUpNickname.value;
    var pwd = signUpPassword.value;
    obj = {
      "user": {
        "email": email,
        "nickname": nickname,
        "password": pwd
      }
    };
    axios.post("".concat(urlAPI, "/users"), obj).then(function (res) {
      console.log(res);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: res.data.message,
        showConfirmButton: true
      });
    })["catch"](function (err) {
      console.log(err);
      Swal.fire({
        title: err.response.data.message,
        text: err.response.data.error,
        icon: 'error',
        confirmButtonText: 'Cool'
      });
    });
    signUpEmail.value = "";
    signUpNickname.value = "";
    signUpPassword.value = "";
  };

  goSignUp();
});
//# sourceMappingURL=all.js.map
