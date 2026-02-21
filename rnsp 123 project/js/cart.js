// ===================================
// Menu Data Configuration
// ===================================

const menuData = [

  // STARTERS (2 items)
  {
    id: 1,
    name: "Paneer Tikka",
    category: "starters",
    categoryDisplay: "Starters",
    price: 249,
    ingredients: "Cottage cheese cubes, yogurt, tandoori spices, bell peppers, onions",
    image: "images/paneer-tikka.jpg",
    imageSource: ""
  },
  {
    id: 2,
    name: "Samosa",
    category: "starters",
    categoryDisplay: "Starters",
    price: 89,
    ingredients: "Crispy pastry, spiced potatoes, peas, coriander, tamarind chutney",
    image: "images/samosa.jpg",
    imageSource: ""
  },

  // MAIN COURSE (2 items)
  {
    id: 3,
    name: "Butter Chicken",
    category: "main-course",
    categoryDisplay: "Main Course",
    price: 399,
    ingredients: "Tender chicken, tomato gravy, butter, cream, fenugreek, naan/rice",
    image: "images/butter-chicken.jpg",
    imageSource: ""
  },
  {
    id: 4,
    name: "Paneer Butter Masala",
    category: "main-course",
    categoryDisplay: "Main Course",
    price: 329,
    ingredients: "Cottage cheese, tomato cashew gravy, butter, cream, spices",
    image: "images/paneer-butter-masala.jpg",
    imageSource: ""
  },

  // DESSERTS (2 items)
  {
    id: 5,
    name: "Gulab Jamun",
    category: "desserts",
    categoryDisplay: "Desserts",
    price: 99,
    ingredients: "Milk solids, sugar syrup, cardamom, saffron, rose water",
    image: "images/gulab-jamun.jpg",
    imageSource: ""
  },
  {
    id: 6,
    name: "Kulfi",
    category: "desserts",
    categoryDisplay: "Desserts",
    price: 89,
    ingredients: "Traditional Indian ice cream, milk, cardamom, pistachios, saffron",
    image: "images/kulfi.jpg",
    imageSource: ""
  },

  // COLD DRINKS (2 items)
  {
    id: 7,
    name: "Lassi (Sweet/Salted)",
    category: "cold-drinks",
    categoryDisplay: "Cold Drinks",
    price: 79,
    ingredients: "Yogurt, sugar/salt, cardamom, rose water",
    image: "images/lassi.jpg",
    imageSource: ""
  },
  {
    id: 8,
    name: "Mango Lassi",
    category: "cold-drinks",
    categoryDisplay: "Cold Drinks",
    price: 99,
    ingredients: "Fresh mango pulp, yogurt, sugar, cardamom",
    image: "images/mango-lassi.jpg",
    imageSource: ""
  }

];

// ===================================
// Customization Options Configuration
// ===================================

const customizationOptions = {
  spiceLevel: ["Mild", "Medium", "Spicy", "Extra Spicy"],
  extras: [
    { name: "Extra Gravy", price: 29 },
    { name: "Extra Paneer", price: 49 },
    { name: "No Onions", price: 0 },
    { name: "No Garlic", price: 0 },
    { name: "Extra Butter", price: 19 },
    { name: "Jain Style", price: 0 }
  ]
};


// ===================================
// Cart Management Functions
// ===================================

function getCart() {
  const cart = localStorage.getItem("restaurantCart");
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem("restaurantCart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll("#cart-count");
  badges.forEach(badge => {
    badge.textContent = totalItems;
  });
}

function addToCart(itemId) {
  const item = menuData.find(i => i.id === itemId);
  if (!item) return;

  const cart = getCart();

  const cartItem = {
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: 1,
    category: item.categoryDisplay,
    ingredients: item.ingredients,
    image: item.image,
    imageSource: item.imageSource,
    customization: {
      spiceLevel: "Mild",
      extras: []
    }
  };

  cart.push(cartItem);
  saveCart(cart);
  showToast("Item added to cart");
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function updateQuantity(index, change) {
  const cart = getCart();
  if (cart[index]) {
    cart[index].quantity = Math.max(1, cart[index].quantity + change);
    saveCart(cart);
  }
}

function updateCustomization(index, customization) {
  const cart = getCart();
  if (cart[index]) {
    cart[index].customization = customization;
    saveCart(cart);
  }
}

function calculateItemTotal(item) {
  let total = item.price * item.quantity;

  if (item.customization && item.customization.extras) {
    item.customization.extras.forEach(extraName => {
      const extra = customizationOptions.extras.find(e => e.name === extraName);
      if (extra) total += extra.price * item.quantity;
    });
  }

  return total;
}

function calculateCartTotals() {
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + calculateItemTotal(item), 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return {
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    total: total.toFixed(2)
  };
}

function clearCart() {
  localStorage.removeItem("restaurantCart");
  updateCartCount();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (toast) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
  }
}

function formatPrice(price) {
  return `₹${parseFloat(price).toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();
});