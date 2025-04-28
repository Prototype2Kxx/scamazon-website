// Load cart data from local storage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display cart items on the checkout page
function displayCheckoutItems() {
  const checkoutItemsContainer = document.getElementById("checkout-items");
  const checkoutTotalElement = document.getElementById("checkout-total");

  // Clear current items
  checkoutItemsContainer.innerHTML = "";

  // Recalculate and render items
  let total = 0;
  cart.forEach((item) => {
    total += item.price;

    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${item.name}</span>
      <span>£${item.price}</span>
    `;
    checkoutItemsContainer.appendChild(listItem);
  });

  // Update total
  checkoutTotalElement.textContent = `Total: £${total}`;
}

// Function to validate the form fields
function validateFields() {
  const form = document.getElementById("delivery-form");
  const requiredFields = form.querySelectorAll("input[required]");
  let allFieldsValid = true;

  requiredFields.forEach((field) => {
    const value = field.value.trim();
    let isValid = true;

    // Specific validation for each field
    if (field.id === "full-name" && /\d/.test(value)) {
      isValid = false;
      alert("Name cannot contain numbers.");
    }
    if (field.id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      isValid = false;
      alert("Please enter a valid email address.");
    }
    if (field.id === "postal-code" && !/^([A-Za-z\d\s-]{3,10}|[A-Za-z]{1,2}\d{1,2}[A-Za-z]? \d[A-Za-z]{2})$/.test(value)) {
      isValid = false;
      alert("Please enter a valid postal code (UK or international). Example: SW1A 1AA or 12345-6789.");
    }
    if (field.id === "phone" && !/^\d{10,15}$/.test(value)) {
      isValid = false;
      alert("Please enter a valid phone number.");
    }

    if (!value || !isValid) {
      allFieldsValid = false;
      field.style.border = "2px solid red"; // Highlight invalid fields
    } else {
      field.style.border = ""; // Remove highlight if valid
    }
  });

  return allFieldsValid;
}

// Function to simulate purchase completion
function completePurchase() {
  if (!validateFields()) {
    alert("Please correct the highlighted fields before completing your purchase.");
    return; // Stop further execution if validation fails
  }

  // If all fields are valid, proceed with the purchase
  alert("Thank you for your purchase!");
  localStorage.removeItem("cart"); // Clear the cart
  window.location.href = "index.html"; // Redirect to the homepage
}

// Display the cart items on page load
displayCheckoutItems();
