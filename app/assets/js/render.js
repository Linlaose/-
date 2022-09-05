// 定義需渲染的三個頁面
const orderHistoryHTML = document.querySelector('#order-history');
const accountHTML = document.querySelector('#account');
const changePwdHTML = document.querySelector('#change-password');

// 定義會員暱稱需渲染的元素位置
const userName = document.querySelector('#user-name');

// 定義帳號資料需渲染的位置
const disabledAccount = document.querySelector('#disabled-account');
const disabledLINE = document.querySelector('#disabled-LINE-user');

// 定義登入頁面
const loginHTML = document.querySelector('#login-page');


// 確定為要渲染的頁面，而非其他的
if (orderHistoryHTML || accountHTML || changePwdHTML) {
  const memberToken = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  if (memberToken !== null) {
    // 判斷是否已登入會員
    console.log(memberToken);
    userName.textContent = `${user}，您好`
    if (disabledAccount) {
      // 因 disabledAccount 或 disabledLINE 欄位只存在 accountHTML 頁面
      // 所以必須加上此判斷式，避免在 orderHistoryHTML 或 changePwdHTML 頁面出現錯誤
      // 導致無法進行登出
      disabledAccount.value = localStorage.getItem('account');
      disabledLINE.value = localStorage.getItem('user');
    }
  } else {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: '請登入會員',
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'login.html';
      }// 按下確定之後進行畫面跳轉
    })
  }
};

// 判斷是否已登入並做頁面引導
if (loginHTML) {
  const memberToken = localStorage.getItem('token');
  if (memberToken !== null) {
    window.location.href = 'order-history.html';
  }
};