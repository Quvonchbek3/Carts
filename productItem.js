import { discountPriceFun } from "./script.js";

const url = window.location.search;
const searchProdId = url.split("?")[1];
const params = new URLSearchParams(searchProdId);

const id = params.get("id");
const category = params.get("category")

const singleProd = async () => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    const discountPrice = discountPriceFun(
      data.price,
      data.discountPercentage
    );

    const productDiv = document.querySelector("#prodItem");

    productDiv.innerHTML += `
<div class="relative flex ml-[100px]">
<div class="w-[400px] h-[350px]">
<img src="${data.thumbnail}" id="flower2" class="w-[400px] h-[350px] rounded-[10px]" alt="${data.title}" class="object-cover w-full h-full">
<div class="images"></div>
</div>
<div class="w-96 leading-[50px]">
<a class="block text-[25px] dark:text-black" href="#">
<h3 class="block text-[28px] mt-[70px] ml-[50px] font-[800] dark:text-black">${data.title}</h3></a>
<div class="flex">
<p class="text-[35px] ml-[50px] font-[700] text-gray-600">$ ${discountPrice.toFixed(2)}</p>
<sub class="text-[20px] relative top-[35px] font-[700] text-gray-600"><del>$ ${data.price}</del></sub>
</div>
<p class="ml-[50px] w-[470px]">${data.description}</p>

<div class="w-full px-4 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
<div class="flex items-center relative top-[-30px] left-[35px]">
<h2 class="mr-4 font-medium dark:text-gray-400 text-[25px]">Quatity:</h2>

<div class="py-2 px-3 inline-block bg-white relative top-[60px] left-[-100px] border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700" data-hs-input-number>
  <div class="flex items-center gap-x-1.5">
    <button type="button" id="minus" class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-input-number-decrement>
-
    </button>
    <span id="raq" class="text-center dark:text-white">0</span>
    <button type="button" id="plus" class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-input-number-increment >+</button>
  </div>
</div>
</div>
</div>
<div class="flex mt-[70px] w-[410px] gap-[10px] ml-[58px]">
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[150px] rounded cursor-pointer" type="button" onclick="addToCart(${
  data.id
})">
 Add to cart
</button>
<button class="bg-transparent w-[150px] hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded">
  Buy now
</button></div>
</div>
    `;

    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    let raq = document.getElementById("raq");

    function updateCount(amount) {
        let currentCount = parseInt(raq.innerText);
        raq.innerText = currentCount + amount;
    }

    plus.addEventListener("click", () => {
        updateCount(1);
    });

    minus.addEventListener("click", () => {
        updateCount(-1);
    })





    const images = productDiv.querySelector(".images");
    let container = document.querySelector(".container")

    // let container = ``;

    for (let img of data.images) {
      // container += `<img src="${img}" class="img1" onclick="updateImg(${img})" />`;

      const image = document.createElement("img");
      image.src = img;
      image.addEventListener("click", () => updateImg(img));
      images.appendChild(image);
    }
    container.appendChild("images");
  } catch (error) {
    console.error(error);
  }
};

function updateImg(img) {
  const defaultImg = document.getElementById("flower2");
  defaultImg.src = img;
}
singleProd();

// category

const getCategoryProduct = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/products/category/${category}`);
    const categoryProduct = await res.json();
    console.log(categoryProduct);

    categoryProduct.products.forEach(async (items, index) => {
      const discountPrice = await discountPriceFun(
      items.price,
      items.discountPercentage
      );

      const more = document.getElementById("more");
      
      more.innerHTML += `
      <div class="w-[310px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/productItem.html?id=${items.id}&category=${items.category}">
          <img class="p-5 w-[320px] h-[250px] rounded-t-lg" src="${items.thumbnail}" alt="${items.title}" data-index="${items.id}" />
      </a>
      <div class="px-5 pb-5">
          <a href="#">
          <h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white h-[30px]">${items.title}</h3>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                  <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
              </div>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">${items.discountPercentage}</span>
          </div>
          <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-white text-[23px]">$ ${discountPrice.toFixed(2)}<sup class="text-[14px]">$<del>${items.price}</del></sup></span>
              <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
          </div>
      </div>
  </div>
        `;
    });

  } catch (error) {
    console.log(error);
  }
};


getCategoryProduct();
