const items = document.querySelector(".items");
const quantityCart = document.querySelector(".quantity");
const costNav = document.querySelector(".cost-nav");
const crossIcon = document.querySelector(".fa-xmark");

//------------------total amount start------------------------

const updateTotalSumm = () => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  const totalSumElement = document.querySelector(".balance");
  const totalSum = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  totalSumElement.textContent = `${totalSum.toFixed(2)}`;
};

updateTotalSumm();

//------------------total amount finish------------------------

quantityCart.addEventListener("click", () => {
  costNav.style.right = "0";
  costNav.style.transitionDuration = "1s";
});

crossIcon.addEventListener("click", () => {
  costNav.style.right = "-700px";
  costNav.style.transitionDuration = "1s";
});
document.addEventListener("DOMContentLoaded", () => {
  async function fetchJSON() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    data.products.forEach((item, index) => {
      const discountPrice = discountPriceFun(
        item.price,
        item.discountPercentage
      );
      items.innerHTML += `
        <div id="carrttss" class="w-[310px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="/productItem.html?id=${item.id}&category=${item.category}">
            <img class="p-5 w-[320px] h-[250px] rounded-t-lg" src="${
              item.thumbnail
            }" alt="${item.title}" data-index="${item.id}" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
            <h3 class="text-xl h-[100px] mb-[20px]font-semibold tracking-tight text-gray-900 dark:text-white h-[30px]">${
              item.title
            }</h3>
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
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">${
                  item.discountPercentage
                }</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white text-[23px]">$ ${discountPrice.toFixed(
                  2
                )}<sup class="text-[14px]">$<del>${
        item.price
      }</del></sup></span>
                <span id="add" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <button class="cursor-pointer" type="button" onclick="addToCart(${
                  item.id
                })">Add to cart</button>
                </span>
            </div>
        </div>
    </div>`;
    });
  }
  fetchJSON();

  window.addToCart = async function (id) {
    console.log(id);
    const findProduct = await fetch(`https://dummyjson.com/products/${id}`);
    const res = await findProduct.json();

    const oldCart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    const newProduct = { ...res, qty: 1 };
    const productIndex = oldCart.findIndex((item) => item.id === newProduct.id);
    if (productIndex > -1) {
      oldCart[productIndex].qty += 1;
    } else {
      oldCart.push(newProduct);
    }
    localStorage.setItem("cart", JSON.stringify(oldCart));
    renderCartItems();
    updateTotalSum();
  };

  const renderCartItems = () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    const cartContainer = document.querySelector(".cart-items");
    cartContainer.innerHTML = "";
    cart.forEach((item, index) => {
      cartContainer.innerHTML += `
            <div class="flex items-center px-2 mt-3" data-cart-item="${
              item.id
            }">
                <div class="w-14 h-14 flex items-center">
                    <img src="${item.thumbnail}" class="w-14 h-14" alt="${
        item.title
      }">
                </div>
                <div class="px-2 text-[12px] w-20">${item.title.slice(
                  0,
                  10
                )}...<br><span>$ ${item.price}</span></div>
                <div class="flex px-2 gap-3">
                    <button type="button" class="qty-minus text-[12px] px-2 bg-gray-300 rounded-sm" data-id="${
                      item.id
                    }">-</button>
                    <input type="text" value="${
                      item.qty
                    }" class="w-8 text-center outline-none flex justify-center qty-input" data-id="${
        item.id
      }">
                    <button type="button" class="qty-plus text-[12px] px-2 bg-gray-300 rounded-sm" data-id="${
                      item.id
                    }">+</button>
                    <span class="w-20">${(item.qty * item.price).toFixed(
                      2
                    )}</span>
                    <button type="button" title="delete" class="text-[12px] p-2 bg-gray-300 rounded-sm delete-btn" data-id="${
                      item.id
                    }"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;
    });
    updateCartQuantity();
    addEventListenersToCartItems();
    updateTotalSum();
  };

  const cart = document.querySelector(".quantity");

  const updateCartQuantity = () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    const quantityCart = document.querySelector("#cartQuantity");
    quantityCart.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  };

  function updateTotalSum() {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    const totalSumElement = costNav.querySelector("#totalSum");
    console.log(totalSumElement);
    const totalSum = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
    totalSumElement.textContent = `${totalSum.toFixed(2)}`;
  }

  const addEventListenersToCartItems = () => {
    document.querySelectorAll(".qty-minus").forEach((button) => {
      button.addEventListener("click", (e) => {
        updateCartItemQuantity(e.target.dataset.id, "decrement");
      });
    });

    document.querySelectorAll(".qty-plus").forEach((button) => {
      button.addEventListener("click", (e) => {
        updateCartItemQuantity(e.target.dataset.id, "increment");
      });
    });

    document.querySelectorAll(".delete-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        removeCartItem(e.target.closest("button").dataset.id);
      });
    });
  };

  const updateCartItemQuantity = (id, action) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = cart.findIndex((item) => item.id == id);
    if (productIndex > -1) {
      if (action === "increment") {
        cart[productIndex].qty++;
      } else if (action === "decrement") {
        cart[productIndex].qty--;
        if (cart[productIndex].qty < 1) {
          cart.splice(productIndex, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCartItems();
    }
  };

  const removeCartItem = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.id != id);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCartItems();
  };
  document.addEventListener("DOMContentLoaded", () => {
    renderCartItems();
  });

  const withCartQuantity = () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    const quantityCart = document.querySelector("#cartQuantity");
    quantityCart.textContent = cart.length;
    return cart.length;
  };
  renderCartItems();
  withCartQuantity();
});

export function discountPriceFun(price, discountPercent) {
  const discountFactor = discountPercent / 100;

  const discountPrice = price - price * discountFactor;

  return discountPrice;
}
