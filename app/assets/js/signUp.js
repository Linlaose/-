const urlAPI = 'https://todoo.5xcamp.us';
const signUpEmail = document.querySelector('#sign-up-email');
const signUpNickname = document.querySelector('#nickname');
const signUpPassword = document.querySelector('#sign-up-password');
const signUpButton = document.querySelector('#sign-up-submit');

let obj = {};

if (signUpButton) {
  signUpButton.addEventListener('click', () => {
    const goSignUp = () => {
      const email = signUpEmail.value;
      const nickname = signUpNickname.value;
      const pwd = signUpPassword.value;

      obj = {
        "user": {
          "email": email,
          "nickname": nickname,
          "password": pwd
        }
      }

      axios.post(`${urlAPI}/users`, obj)
        .then((res) => {
          console.log(res);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: res.data.message,
            showConfirmButton: true,
          })
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            title: err.response.data.message,
            text: err.response.data.error,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        });
      signUpEmail.value = "";
      signUpNickname.value = "";
      signUpPassword.value = "";
    };
    goSignUp();
  });
};