// Load cart from localStorage or initialize an empty array
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to update the cart UI
function updateCartUI() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  // Check if required elements exist to avoid errors
  if (!cartItemsContainer || !cartTotalElement) return;

  // Clear current items
  cartItemsContainer.innerHTML = "";

  // Recalculate and render items
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;

    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${item.name}</span>
      <span>£${item.price}</span>
      <button onclick="removeFromCart(${index})" style="color: red; cursor: pointer;">Remove</button>
    `;
    cartItemsContainer.appendChild(listItem);
  });

  // Update total
  cartTotalElement.textContent = `Total: £${total}`;
}

// Function to add an item to the cart
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart)); // Save to localStorage
  updateCartUI();
  updateCartCount();

  // Optional: Highlight cart or give feedback
  const cartElement = document.getElementById("cart");
  if (cartElement) {
    cartElement.classList.add("highlight");
    setTimeout(() => {
      cartElement.classList.remove("highlight");
    }, 1000);
  }
}

// Function to remove an item from the cart
function removeFromCart(index) {
  cart.splice(index, 1); // Remove item
  localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
  updateCartUI();
  updateCartCount();
}

// Function to update cart count
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

// Function to toggle cart visibility
function toggleCart() {
  const cartElement = document.getElementById("cart");
  if (cartElement) {
    cartElement.classList.toggle("visible");
  }
}

// Function to proceed to checkout
function proceedToCheckout() {
  // Redirect to the checkout page
  window.location.href = "checkout.html";
}

// Initialize cart UI on page load
updateCartUI();
updateCartCount();
