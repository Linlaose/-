const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');
const loginButton = document.querySelector('#login-button');

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
        console.log(res.data.message);
        console.log(res.headers.authorization);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.data.message,
          showConfirmButton: true,
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