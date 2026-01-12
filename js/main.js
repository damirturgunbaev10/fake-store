const url = "https://fakestoreapi.com/products";
const elProductHome = document.querySelector(".container-items");
const elProduct = document.querySelector(".container-products");
const elLoading = document.querySelector(".loading");
const elCarts = document.querySelector(".container-carts");

axios.get(url).then((res) => {
  const data = res.data;
  if (elProductHome) {
    showProductHome(data.slice(0, 4));
  }
  if (elProduct) {
    showProduct(data);
  }
  if (elCarts) {
    showCarts(data);
  }
});

function showProductHome(data) {
  data.forEach((item) => {
    elProductHome.innerHTML += `
    <div class="card">
          <img
            src="${item.image}"
            alt="${item.category}"
          />
          <h4>${item.title.slice(0, 15)}...</h4>
          <p class="category">${item.category}</p>
          <span class="price">$${item.price}</span>
    </div>`;
  });
}

function showProduct(data) {
  data.forEach((item) => {
    elProduct.innerHTML += `
      <div class="card">
            <img
              src="${item.image}"
              alt="${item.category}"
            />
            <h4>${item.title.slice(0, 20)}</h4>
            <p class="category">${item.category}</p>
            <span class="price">$${item.price}</span>
      </div>`;
  });
}

function showCarts(data) {
  data.forEach((item) => {
    elCarts.innerHTML += `
    <div class="card">
    <h3>${item.id}
    </h3>
    </div>
            `;
  });
}
