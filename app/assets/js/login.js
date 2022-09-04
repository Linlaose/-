const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');
const loginButton = document.querySelector('#login-button');

if (loginButton) {
  loginButton.addEventListener('click', () => {
    const goLogin = () => {
      const email = loginEmail.value;
      const pwd = loginPassword.value;

      obj = {
        "user": {
          "email": email,
          "password": pwd
        }
      }

      axios.post(`${urlAPI}/users/sign_in`, obj)
        .then((res) => {
          localStorage.setItem('token', res.headers.authorization); // 儲存會員憑證
          localStorage.setItem('user', res.data.nickname); // 儲存會員暱稱
          localStorage.setItem('account', email); // 儲存會員帳號
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: res.data.message,
            showConfirmButton: true,
          })
            .then((result) => { // 這段語法出自 sweetAlert2 
              if (result.isConfirmed) {
                window.location.href = 'order-history.html';
              }
            })
        })
        .catch((err) => {
          console.log(err.response.data.message);
          Swal.fire({
            title: err.response.data.message,
            text: err.response.data.error,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        })
      loginEmail.value = "";
      loginPassword.value = "";
    };
    goLogin();
  });
};