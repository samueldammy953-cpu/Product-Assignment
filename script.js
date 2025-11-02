// Array of product objects (using local images)
const products = [
  {
    name: "Wireless Headphones",
    price: 79.99,
    image: "images/Headphones.png",
    description: "High-quality sound with noise cancellation.",
  },
  {
    name: "Smart Watch",
    price: 120.0,
    image: "images/Watch.png",
    description: "Track your fitness and stay connected.",
  },
  {
    name: "Bluetooth Speaker",
    price: 49.5,
    image: "images/Speaker.png",
    description: "Portable and powerful with deep bass.",
  },
  {
    name: "Laptop Bag",
    price: 35.0,
    image: "images/Bag.png",
    description: "Stylish and durable laptop carrying bag.",
  },
];

const productContainer = document.getElementById("product-container");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <img src="${product.image}" alt="${
    product.name
  }" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Not+Found'">
    <div class="product-info">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p class="price">$${product.price.toFixed(2)}</p>
      <button class="btn">Add to Cart</button>
    </div>
  `;

  productContainer.appendChild(card);
});
