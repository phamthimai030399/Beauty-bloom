const productData = [
  {
    imageURL: "assets/images/product-1.png",
    title: "Foaming Face Wash",
    price: "69.96",
    shortDes: "Cultured Oil, Mixed Tocopherols (Vitamin E)",
  },
  {
    imageURL: "assets/images/product-2.png",
    title: "Coconut Body Oil",
    price: "89.00",
    shortDes: "Cultured Oil, Mixed Tocopherols (Vitamin E)",
  },
  {
    imageURL: "assets/images/product-3.png",
    title: "Evolve Organic Beauty",
    price: "39.00",
    shortDes: "Cultured Oil, Mixed Tocopherols (Vitamin E)",
  },
  {
    imageURL: "assets/images/product-1.png",
    title: "Foaming Face Wash",
    price: "69.96",
    shortDes: "Cultured Oil, Mixed Tocopherols (Vitamin E)",
  },
];

const handleProductData = (productData) => {
  return productData.reduce(
    (addListProduct, product) =>
      addListProduct +
      `<div class="product">
    <div class="product-img">
      <img src="${product.imageURL}" alt="${product.title}" title="${product.title}" />
      <span class="product-price">$${product.price}</span>
    </div>
    <a href="#" title="${product.title}" class="product-title">${product.title}</a>
    <div class="product-content">
      <p class="product-des">
        ${product.shortDes}
      </p>
      <button
        class="main-btn"
        data-bs-toggle="offcanvas"
        data-bs-target="#cart-popup"
        aria-controls="cart-popup"
      >
        Add to Cart
      </button>
    </div>
  </div>`,
    ""
  );
};

const loadMore = document.querySelector(".load-more");
if (loadMore) {
loadMore.addEventListener('click', () => {
    const list = document.querySelector(".products-list");
    if (list && productData) {
      const content = handleProductData(productData);
      list.insertAdjacentHTML("beforeend", content);
    }
  });
}
