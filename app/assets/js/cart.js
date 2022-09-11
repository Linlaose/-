const orderBtn = document.querySelectorAll('#order');
const menuUrl = 'https://cryptic-sea-97657.herokuapp.com';
let orderImg = []; // 菜品圖片陣列
let orderClass = [];
let orderFood = [];
let orderPrice = [];
let count = 0;

orderBtn.forEach((item) => {
  item.addEventListener('click', (e) => {
    count++
    e.preventDefault(); // 不要讓 a 標籤的 href 作動
    // console.log(e.target);// 選定目前按鈕的元素

    // 抓菜品圖片位址
    let vegetableUrl = e.target.parentNode.closest("div").firstChild.nextElementSibling.firstChild.nextElementSibling.getAttribute('src');
    console.log(vegetableUrl);
    // 菜品圖片陣列新增位址
    // orderImg.push(vegetableUrl);
    // 將菜品圖片陣列寫入 localStorage
    // localStorage.setItem('orderImg', JSON.stringify(orderImg));


    // 抓菜品類別
    let menuClass = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.firstChild.nextElementSibling.textContent;
    console.log(menuClass);
    // console.log(e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.firstChild.nextElementSibling.textContent);
    // orderClass.push(e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.firstChild.nextElementSibling.textContent);
    // localStorage.setItem('orderClass', JSON.stringify(orderClass));

    // 抓菜品名稱
    let mealName = e.target.parentNode.previousElementSibling.previousElementSibling.firstChild.textContent;
    console.log(mealName);
    // console.log(e.target.parentNode.previousElementSibling.previousElementSibling.firstChild.textContent);
    // orderFood.push(e.target.parentNode.previousElementSibling.previousElementSibling.firstChild.textContent);
    // localStorage.setItem('orderFood', JSON.stringify(orderFood))

    // 抓價格
    let price = e.target.parentNode.previousElementSibling.firstChild.textContent;
    console.log(price);
    // console.log(e.target.parentNode.previousElementSibling.firstChild.textContent);
    // orderPrice.push(e.target.parentNode.previousElementSibling.firstChild.textContent);
    // localStorage.setItem('orderPrice', JSON.stringify(orderPrice))
    // 選定目前按鈕元素 => 此元素的父層元素 => 父層元素同階級但上一個順位的元素 => 上一順位元素的子元素 => 子元素的文字內容
    // console.log(orderImg);
    // addCart(count, vegetableUrl, menuClass, mealName, price);
    console.log(count);
  })
})

const findMenu = () => {
  axios.get(`${menuUrl}/menu`)
    .then((res) => {
      let menuArr = res.data
      menuArr.forEach((item) => {
        console.log(item.name);
      })
    })
    .catch((err) => {
      console.log(err);
    })
};

const findCart = () => {
  axios.get(`${menuUrl}/cart`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}

const addCart = (count, vegetableUrl, menuClass, mealName, price) => {
  obj = {
    "id": count,
    "imgUrl": vegetableUrl,
    "class": menuClass,
    "name": mealName,
    "price": price
  }

  axios.post(`${menuUrl}/cart`, obj)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}