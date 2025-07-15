function displayProducts(list) {
  const container = document.getElementById("menuContainer");
  container.innerHTML = "";
  list.forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

function filterProducts(category) {
  if (category === 'all') {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const exists = cart.find(p => p.id === id);
  if (exists) {
    exists.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item.name} added to cart!`);
}

window.onload = () => displayProducts(products);
