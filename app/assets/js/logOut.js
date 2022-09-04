const logOut = document.querySelector('#log-out');

if (logOut) {
  logOut.addEventListener('click', () => {
    goLogOut();
  });

  const goLogOut = () => {
    const token = localStorage.getItem('token');

    obj = {
      headers: {
        Authorization: token
      }
    }

    axios.delete(`${urlAPI}/users/sign_out`, obj)
      .then((res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500
        })
        localStorage.clear();
        window.location.href = 'index.html';
      }).catch((err) => {
        console.log(err);
      });
  }
}