// ===================================
// Menu Page JavaScript
// ===================================
let currentCategory = 'all';

// Initialize menu page
document.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(currentCategory);
    setupCategoryFilters();
});

// Setup category filter buttons
function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Get category and display items
            const category = this.getAttribute('data-category');
            currentCategory = category;
            displayMenuItems(category);
        });
    });
}

// Display menu items based on category
function displayMenuItems(category) {
    const menuContainer = document.getElementById('menu-items');
    
    // Filter items by category
    let filteredItems = menuData;
    if (category !== 'all') {
        filteredItems = menuData.filter(item => item.category === category);
    }
    
    // Generate HTML for menu items
    menuContainer.innerHTML = filteredItems.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <div class="menu-item-image" style="background-image: url('${item.image}');"></div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <span class="menu-item-price">${formatPrice(item.price)}</span>
                </div>
                <div class="menu-item-category">${item.categoryDisplay}</div>
                <p class="menu-item-ingredients">
                    <strong>Ingredients:</strong> ${item.ingredients}
                </p>
                <button class="btn btn-primary btn-full" onclick="addToCart(${item.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}
