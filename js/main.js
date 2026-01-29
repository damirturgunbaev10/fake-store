const url = "https://fakestoreapi.com/products";
const elProductHome = document.querySelector(".container-items");
const elProduct = document.querySelector(".container-products");
const elCarts = document.querySelector(".container-carts");
const elCategoriesSelect = document.querySelector(".filter__select");
const elBtn = document.querySelector("#filter__btn");
const elCheckboxInputs = document.querySelectorAll(".checkbox__input");
const elCheckboxBtn = document.querySelector(".checkbox__filter__btn");

let allProducts = [];

axios.get(url).then((res) => {
  allProducts = res.data;

  if (elProductHome) {
    showProductHome(allProducts.slice(0, 4));
  }

  if (elProduct) {
    showData(allProducts);
  }

  if (elCarts) {
    showCarts(allProducts);
  }
});

function showProductHome(data) {
  elProductHome.innerHTML = "";
  data.forEach((item) => {
    elProductHome.innerHTML += `
      <div class="card">
        <img src="${item.image}" alt="${item.category}" />
        <h4>${item.title.slice(0, 15)}...</h4>
        <p class="category">${item.category}</p>
        <span class="price">$${item.price}</span>
      </div>
    `;
  });
}

function showData(data) {
  elProduct.innerHTML = "";
  data.forEach((item) => {
    elProduct.innerHTML += `
      <div class="card">
        <img src="${item.image}" alt="${item.category}" />
        <h4>${item.title.slice(0, 20)}</h4>
        <p class="category">${item.category}</p>
        <span class="price">$${item.price}</span>
      </div>
    `;
  });
}

function showCarts(data) {
  elCarts.innerHTML = "";
  data.forEach((item) => {
    elCarts.innerHTML += `
      <div class="card">
        <h3>${item.id}</h3>
        <h3>${item.title}</h3>
      </div>
    `;
  });
}

elBtn.addEventListener("click", function (e) {
  e.preventDefault();
  filterBySelect();
});

function filterBySelect() {
  const selectedCategory = elCategoriesSelect.value;

  if (selectedCategory === "all") {
    showData(allProducts);
    return;
  }

  const filteredData = allProducts.filter(
    (item) => item.category === selectedCategory,
  );

  showData(filteredData);
}

elCheckboxBtn.addEventListener("click", function (e) {
  e.preventDefault();
  filterByCheckbox();
});

function filterByCheckbox() {
  const checkedCategories = [];

  elCheckboxInputs.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCategories.push(checkbox.value);
    }gu
  });

  if (checkedCategories.length === 0) {
    showData(allProducts);
    return;
  }

  const filteredData = allProducts.filter((item) =>
    checkedCategories.includes(item.category),
  );

  showData(filteredData);
}