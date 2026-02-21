// ===================================
// Cart Page JavaScript
// ===================================

// Initialize cart page
document.addEventListener('DOMContentLoaded', function() {
    displayCart();
});

// Display cart items
function displayCart() {
    const cart = getCart();
    const cartEmpty = document.getElementById('cart-empty');
    const cartContent = document.getElementById('cart-content');
    
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartContent.style.display = 'none';
        return;
    }
    
    cartEmpty.style.display = 'none';
    cartContent.style.display = 'grid';
    
    displayCartItems(cart);
    updateCartSummary();
}

// Display individual cart items
function displayCartItems(cart) {
    const cartItemsContainer = document.getElementById('cart-items');
    
    cartItemsContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-header">
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p style="color: var(--text-light); font-size: 0.9rem;">${item.category}</p>
                </div>
                <span class="cart-item-price">${formatPrice(calculateItemTotal(item))}</span>
            </div>
            
            <div class="cart-item-customization">
                <h4>Customize Your Order</h4>
                
                <!-- Spice Level -->
                <div class="customization-group">
                    <label for="spice-${index}">Spice Level:</label>
                    <select id="spice-${index}" onchange="updateItemCustomization(${index})">
                        ${customizationOptions.spiceLevel.map(level => `
                            <option value="${level}" ${item.customization.spiceLevel === level ? 'selected' : ''}>
                                ${level}
                            </option>
                        `).join('')}
                    </select>
                </div>
                
                <!-- Extras -->
                <div class="customization-group">
                    <label>Additional Options:</label>
                    <div class="checkbox-group">
                        ${customizationOptions.extras.map(extra => `
                            <div class="checkbox-option">
                                <input 
                                    type="checkbox" 
                                    id="extra-${index}-${extra.name.replace(/\s+/g, '-')}"
                                    value="${extra.name}"
                                    ${item.customization.extras.includes(extra.name) ? 'checked' : ''}
                                    onchange="updateItemCustomization(${index})"
                                >
                                <label for="extra-${index}-${extra.name.replace(/\s+/g, '-')}">
                                    ${extra.name} ${extra.price > 0 ? `(+${formatPrice(extra.price)})` : ''}
                                </label>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="changeQuantity(${index}, -1)">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="changeQuantity(${index}, 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        </div>
    `).join('');
}

// Update cart summary
function updateCartSummary() {
    const totals = calculateCartTotals();
    
    document.getElementById('subtotal').textContent = formatPrice(totals.subtotal);
    document.getElementById('tax').textContent = formatPrice(totals.tax);
    document.getElementById('total').textContent = formatPrice(totals.total);
}

// Update item customization
function updateItemCustomization(index) {
    const spiceLevel = document.getElementById(`spice-${index}`).value;
    
    // Get checked extras
    const extras = [];
    customizationOptions.extras.forEach(extra => {
        const checkbox = document.getElementById(`extra-${index}-${extra.name.replace(/\s+/g, '-')}`);
        if (checkbox && checkbox.checked) {
            extras.push(extra.name);
        }
    });
    
    const customization = {
        spiceLevel: spiceLevel,
        extras: extras
    };
    
    updateCustomization(index, customization);
    displayCart(); // Refresh display
}

// Change quantity
function changeQuantity(index, change) {
    updateQuantity(index, change);
    displayCart(); // Refresh display
}

// Remove item
function removeItem(index) {
    if (confirm('Remove this item from your cart?')) {
        removeFromCart(index);
        displayCart(); // Refresh display
    }
}

// Proceed to payment
function proceedToPayment() {
    const cart = getCart();
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    window.location.href = 'payment.html';
}
