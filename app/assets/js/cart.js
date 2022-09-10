const orderBtn = document.querySelectorAll('#order');
let orderImg = []; // 菜品圖片陣列
let orderClass = [];
let orderFood = [];
let orderPrice = [];

orderBtn.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault(); // 不要讓 a 標籤的 href 作動
    // console.log(e.target);// 選定目前按鈕的元素

    // 抓菜品圖片位址
    console.log(e.target.parentNode.closest("div").firstChild.nextElementSibling.firstChild.nextElementSibling.getAttribute('src'));
    // 菜品圖片陣列新增位址
    orderImg.push(e.target.parentNode.closest("div").firstChild.nextElementSibling.firstChild.nextElementSibling.getAttribute('src'));
    // 將菜品圖片陣列寫入 localStorage
    localStorage.setItem('orderImg', JSON.stringify(orderImg));


    // 抓菜品類別
    console.log(e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.firstChild.nextElementSibling.textContent);
    orderClass.push(e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.firstChild.nextElementSibling.textContent);
    localStorage.setItem('orderClass', JSON.stringify(orderClass));

    // 抓菜品名稱
    console.log(e.target.parentNode.previousElementSibling.previousElementSibling.firstChild.textContent);
    orderFood.push(e.target.parentNode.previousElementSibling.previousElementSibling.firstChild.textContent);
    localStorage.setItem('orderFood', JSON.stringify(orderFood))

    // 抓價格
    console.log(e.target.parentNode.previousElementSibling.firstChild.textContent);
    orderPrice.push(e.target.parentNode.previousElementSibling.firstChild.textContent);
    localStorage.setItem('orderPrice', JSON.stringify(orderPrice))
    // 選定目前按鈕元素 => 此元素的父層元素 => 父層元素同階級但上一個順位的元素 => 上一順位元素的子元素 => 子元素的文字內容
    console.log(orderImg);
  })
})
