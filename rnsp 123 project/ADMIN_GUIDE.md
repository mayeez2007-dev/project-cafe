# 🛠️ Quick Admin Guide - How to Update Your Restaurant Website

## 📋 Common Tasks

### 1. Change Restaurant Name

**Where to edit:**
- Open ALL HTML files (`index.html`, `menu.html`, `cart.html`, `payment.html`)
- Find and replace "The Golden Spoon" with your restaurant name

**Locations in each file:**
```html
<!-- In navbar -->
<h1>Your Restaurant Name</h1>

<!-- In page title -->
<title>Your Restaurant Name - Home</title>
```

---

### 2. Update Menu Items (Add/Edit/Remove)

**File:** `js/cart.js` (starting at line 6)

**To add a new item:**
```javascript
{
    id: 13,                              // Use next available number
    name: "Your New Dish",               // Dish name
    category: "starters",                // starters, main-course, desserts, cold-drinks
    categoryDisplay: "Starters",         // Display name
    price: 12.99,                        // Price
    ingredients: "list, of, ingredients", // Description
    emoji: "🍕"                          // Choose an emoji
}
```

**To edit existing item:**
- Find the item by name in the `menuData` array
- Change the values (name, price, ingredients, etc.)

**To remove an item:**
- Delete the entire item object from the `menuData` array

---

### 3. Update Prices

**File:** `js/cart.js`

Find the item in `menuData` and change the price:
```javascript
{
    id: 1,
    name: "Garlic Bread",
    price: 8.99,  // ← Change this number
    // ... rest of item
}
```

---

### 4. Change Customization Options

**File:** `js/cart.js` (around line 100)

**Spice Levels:**
```javascript
spiceLevel: ["Mild", "Medium", "Spicy", "Extra Spicy"]
// Add or remove options as needed
```

**Add/Remove Extras:**
```javascript
extras: [
    { name: "Extra Sauce", price: 0.99 },
    { name: "Extra Cheese", price: 1.49 },
    { name: "No Onions", price: 0 },        // Free option
    { name: "Your New Extra", price: 1.99 }, // Add new
]
```

---

### 5. Change Tax Rate

**File:** `js/cart.js`

Find the `calculateCartTotals()` function:
```javascript
function calculateCartTotals() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + calculateItemTotal(item), 0);
    const tax = subtotal * 0.08;  // ← Change 0.08 to your tax rate
    // For 10% tax, use 0.10
    // For 5% tax, use 0.05
    const total = subtotal + tax;
    // ...
}
```

---

### 6. Update Colors and Branding

**File:** `css/style.css` (top of file, around line 18)

```css
:root {
    --primary-color: #B8956A;        /* Main brand color */
    --primary-dark: #9A7A4F;         /* Darker shade */
    --text-dark: #2C2C2C;            /* Text color */
    --text-light: #6B6B6B;           /* Light text */
    --bg-light: #F9F7F4;             /* Background */
    --bg-white: #FFFFFF;             /* White */
}
```

**Change the hex codes** to your brand colors.

---

### 7. Update Contact Information

**Where to edit:** Footer in ALL HTML files

```html
<footer class="footer">
    <div class="container">
        <p>&copy; 2024 Your Restaurant. All rights reserved.</p>
        <p>📞 +1 (555) 123-4567 | 📧 info@yourrestaurant.com</p>
    </div>
</footer>
```

---

### 8. Change Opening Hours

**File:** `index.html`

Find the hours section:
```html
<div class="hours-item">
    <span class="day">Monday - Friday</span>
    <span class="time">11:00 AM - 10:00 PM</span>
</div>
```

---

## 🎯 Testing Your Changes

After making changes:

1. **Save all files**
2. **Clear browser cache** (Ctrl+Shift+R or Cmd+Shift+R)
3. **Test the order flow:**
   - Browse menu
   - Add items to cart
   - Customize items
   - Proceed to payment
   - Place test order
4. **Test on mobile:** Resize browser or use mobile device

---

## 📱 View Saved Orders

Orders are saved in browser's localStorage. To view them:

1. Open browser Developer Tools (F12)
2. Go to "Application" tab (Chrome) or "Storage" tab (Firefox)
3. Look for "Local Storage"
4. Find key: `restaurantOrders`
5. Click to view all orders

---

## 🚨 Important Notes

- **Backup First:** Always keep a backup before making changes
- **Test Everything:** Test the full order flow after updates
- **Item IDs:** Each menu item must have a unique `id` number
- **Category Names:** Use exact category names: `starters`, `main-course`, `desserts`, `cold-drinks`
- **Prices:** Always use numbers (12.99, not "$12.99")

---

## 💡 Quick Reference: File Purposes

| File | Purpose |
|------|---------|
| `index.html` | Home page - restaurant introduction |
| `menu.html` | Menu display with categories |
| `cart.html` | Shopping cart with customization |
| `payment.html` | Checkout and order form |
| `css/style.css` | All styling and colors |
| `js/cart.js` | Menu data & cart management |
| `js/menu.js` | Menu page functionality |
| `js/cart-page.js` | Cart page functionality |
| `js/payment.js` | Payment page functionality |

---

## 🎨 Color Palette Reference

Current theme: **Elegant Gold & Neutral**

- Primary Gold: `#B8956A`
- Dark Gold: `#9A7A4F`
- Light Beige: `#F9F7F4`
- Dark Gray: `#2C2C2C`
- Light Gray: `#6B6B6B`
- White: `#FFFFFF`

---

## 📞 Need Help?

Check the detailed README.md file for complete documentation and examples.

---

**Last Updated:** February 2024  
**Version:** 1.0
