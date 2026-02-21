// ===================================
// Payment Page JavaScript
// ===================================

// Initialize payment page
document.addEventListener('DOMContentLoaded', function() {
    const cart = getCart();
    
    // Redirect to menu if cart is empty
    if (cart.length === 0) {
        alert('Your cart is empty!');
        window.location.href = 'menu.html';
        return;
    }
    
    displayOrderSummary();
    setupPaymentForm();
});

// Display order summary
function displayOrderSummary() {
    const cart = getCart();
    const orderItemsContainer = document.getElementById('order-items');
    
    orderItemsContainer.innerHTML = cart.map(item => {
        const extrasText = item.customization.extras.length > 0 
            ? item.customization.extras.join(', ') 
            : 'None';
        
        return `
            <div class="order-item">
                <div class="order-item-header">
                    <span class="order-item-name">${item.name} (x${item.quantity})</span>
                    <span class="order-item-price">${formatPrice(calculateItemTotal(item))}</span>
                </div>
                <div class="order-item-details">
                    <div>Spice Level: ${item.customization.spiceLevel}</div>
                    <div>Extras: ${extrasText}</div>
                </div>
            </div>
        `;
    }).join('');
    
    // Update totals
    const totals = calculateCartTotals();
    document.getElementById('summary-subtotal').textContent = formatPrice(totals.subtotal);
    document.getElementById('summary-tax').textContent = formatPrice(totals.tax);
    document.getElementById('summary-total').textContent = formatPrice(totals.total);
}

// Setup payment form submission
function setupPaymentForm() {
    const form = document.getElementById('payment-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('customer-name').value,
            phone: document.getElementById('customer-phone').value,
            email: document.getElementById('customer-email').value,
            address: document.getElementById('customer-address').value,
            city: document.getElementById('customer-city').value,
            zip: document.getElementById('customer-zip').value,
            paymentMethod: document.querySelector('input[name="payment-method"]:checked').value,
            notes: document.getElementById('order-notes').value
        };
        
        // Create order
        const order = {
            orderNumber: generateOrderNumber(),
            items: getCart(),
            customer: formData,
            totals: calculateCartTotals(),
            timestamp: new Date().toISOString(),
            status: 'Pending'
        };
        
        // Save order to localStorage (in a real app, this would be sent to a server)
        saveOrder(order);
        
        // Clear cart
        clearCart();
        
        // Show confirmation
        showConfirmation(order.orderNumber);
    });
}

// Generate unique order number
function generateOrderNumber() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `ORD-${timestamp}-${random}`;
}

// Save order to localStorage
function saveOrder(order) {
    let orders = localStorage.getItem('restaurantOrders');
    orders = orders ? JSON.parse(orders) : [];
    orders.push(order);
    localStorage.setItem('restaurantOrders', JSON.stringify(orders));
}

// Show confirmation modal
function showConfirmation(orderNumber) {
    const modal = document.getElementById('confirmation-modal');
    const orderNumberDisplay = document.getElementById('order-number');
    
    orderNumberDisplay.innerHTML = `
        <strong>Order Number:</strong><br>
        ${orderNumber}<br><br>
        <small>Please save this number for tracking your order</small>
    `;
    
    modal.classList.add('show');
}

// Close modal and redirect
function closeModal() {
    const modal = document.getElementById('confirmation-modal');
    modal.classList.remove('show');
    window.location.href = 'index.html';
}
