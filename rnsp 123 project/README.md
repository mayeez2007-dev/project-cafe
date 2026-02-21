# The Golden Spoon - Restaurant Website

A complete, professional restaurant website with a fully functional online ordering system. Built with HTML, CSS, and JavaScript, featuring a clean, minimalist design perfect for cafes and restaurants.

## 🌟 Project Overview

**The Golden Spoon** is a modern, responsive restaurant website that allows customers to browse menus, customize orders, and place orders online. The website features an elegant, professional design with neutral colors and smooth user experience.

## ✅ Completed Features

### 1. **Home Page** (`index.html`)
- **Hero Section**: Eye-catching welcome banner with call-to-action
- **About Section**: Restaurant story and feature highlights
- **Features Display**: Three key features (Fresh Ingredients, Expert Chefs, Quality Service)
- **Opening Hours**: Clear display of restaurant hours
- **Responsive Navigation**: Sticky navbar with cart badge counter

### 2. **Menu Page** (`menu.html`)
- **Category Filtering**: Filter by All Items, Starters, Main Course, Desserts, Cold Drinks
- **12 Menu Items**: Complete with names, prices, ingredients, and emojis
  - 3 Starters (Garlic Bread, Spring Rolls, Soup of the Day)
  - 3 Main Courses (Grilled Chicken, Pasta Alfredo, Vegetable Curry)
  - 3 Desserts (Chocolate Brownie, Ice Cream, Cheesecake)
  - 3 Cold Drinks (Fresh Juice, Iced Coffee, Soft Drinks)
- **Add to Cart**: One-click add to cart with success notification
- **Toast Notifications**: Visual feedback when items are added

### 3. **Cart Page** (`cart.html`)
- **Item Management**: View all items with details
- **Quantity Controls**: Increase/decrease quantity with +/- buttons
- **Order Customization** for each item:
  - **Spice Level**: Mild, Medium, Spicy, Extra Spicy
  - **Additional Options**: 
    - Extra Sauce (+$0.99)
    - Extra Cheese (+$1.49)
    - No Onions (Free)
    - No Garlic (Free)
    - Gluten Free (+$2.00)
- **Price Calculation**: Automatic calculation with extras
- **Remove Items**: Delete items from cart
- **Order Summary**: Subtotal, Tax (8%), and Total
- **Empty Cart State**: Helpful message when cart is empty

### 4. **Payment/Checkout Page** (`payment.html`)
- **Order Review**: Summary of all items with customizations
- **Customer Information Form**:
  - Full Name (required)
  - Phone Number (required)
  - Email Address (optional)
  - Delivery Address (required)
  - City & ZIP Code (required)
- **Payment Method Selection**:
  - Credit/Debit Card
  - Cash on Delivery
  - Digital Wallet
- **Special Instructions**: Text area for dietary requirements or requests
- **Order Confirmation Modal**: Success message with unique order number
- **Order Number Generation**: Unique tracking number for each order

### 5. **Design Features**
- **Color Palette**: Professional and minimalist
  - Primary: Soft gold (#B8956A)
  - Background: Light beige (#F9F7F4)
  - Text: Dark gray (#2C2C2C)
  - Accents: Neutral tones
- **Typography**: 
  - Headings: Playfair Display (serif)
  - Body: Inter (sans-serif)
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Smooth Transitions**: Hover effects and animations
- **Professional Layout**: Clean spacing and visual hierarchy

### 6. **Technical Features**
- **localStorage**: Cart data persists across page refreshes
- **Cart Management System**: Full CRUD operations (Create, Read, Update, Delete)
- **Order History**: Orders saved to localStorage
- **Real-time Updates**: Cart count badge updates automatically
- **Form Validation**: Required fields checked before submission
- **Price Calculator**: Automatic calculation with tax and extras
- **Modular JavaScript**: Organized into separate files for maintainability

## 📁 Project Structure

```
restaurant-website/
│
├── index.html              # Home page
├── menu.html               # Menu page with categories
├── cart.html               # Shopping cart page
├── payment.html            # Checkout/payment page
│
├── css/
│   └── style.css           # Main stylesheet (professional design)
│
└── js/
    ├── cart.js             # Cart management & menu data
    ├── menu.js             # Menu page functionality
    ├── cart-page.js        # Cart page functionality
    └── payment.js          # Payment page functionality
```

## 🎯 Page URLs and Navigation Flow

1. **Home**: `index.html` → Welcome and restaurant information
2. **Menu**: `menu.html` → Browse and add items to cart
3. **Cart**: `cart.html` → Review and customize order
4. **Payment**: `payment.html` → Complete order with customer information

## 🛠️ Admin Configuration Guide

### How to Update Menu Items

Open `js/cart.js` and locate the `menuData` array (around line 6). Each item has:
- `id`: Unique identifier (number)
- `name`: Item name (string)
- `category`: Category slug (starters, main-course, desserts, cold-drinks)
- `categoryDisplay`: Display name (string)
- `price`: Item price (number)
- `ingredients`: Description of ingredients (string)
- `emoji`: Visual icon (emoji)

**Example: Add a new starter**
```javascript
{
    id: 13,
    name: "Caesar Salad",
    category: "starters",
    categoryDisplay: "Starters",
    price: 9.99,
    ingredients: "Romaine lettuce, parmesan, croutons, Caesar dressing",
    emoji: "🥗"
}
```

### How to Update Prices

In `js/cart.js`, find the item in `menuData` and change the `price` value:
```javascript
price: 16.99  // Change this number
```

### How to Update Customization Options

In `js/cart.js`, locate `customizationOptions` (around line 100):

**Modify Spice Levels:**
```javascript
spiceLevel: ["Mild", "Medium", "Spicy", "Extra Spicy"]
```

**Modify Extras:**
```javascript
extras: [
    { name: "Extra Sauce", price: 0.99 },
    { name: "Extra Cheese", price: 1.49 },
    // Add more options here
]
```

### How to Change Restaurant Name

Replace "The Golden Spoon" in:
1. All HTML files: `<h1>The Golden Spoon</h1>` in the navbar
2. Page titles: `<title>The Golden Spoon - ...</title>`
3. Home page hero: `.hero-title` text

### How to Adjust Tax Rate

In `js/cart.js`, find the `calculateCartTotals()` function:
```javascript
const tax = subtotal * 0.08; // Change 0.08 to your tax rate (e.g., 0.10 for 10%)
```

## 💾 Data Storage

### localStorage Structure

**Cart Data**: `restaurantCart`
```javascript
[
  {
    id: 1,
    name: "Garlic Bread",
    price: 6.99,
    quantity: 2,
    category: "Starters",
    ingredients: "...",
    customization: {
      spiceLevel: "Mild",
      extras: ["Extra Sauce"]
    }
  }
]
```

**Orders Data**: `restaurantOrders`
```javascript
[
  {
    orderNumber: "ORD-1234567890-123",
    items: [...],
    customer: {...},
    totals: {...},
    timestamp: "2024-01-15T10:30:00.000Z",
    status: "Pending"
  }
]
```

## 🎨 Design System

### Color Variables (in `css/style.css`)
```css
--primary-color: #B8956A;      /* Soft gold */
--primary-dark: #9A7A4F;       /* Darker gold */
--text-dark: #2C2C2C;          /* Dark gray */
--text-light: #6B6B6B;         /* Light gray */
--bg-light: #F9F7F4;           /* Light beige */
--bg-white: #FFFFFF;           /* White */
--border-color: #E5E5E5;       /* Light border */
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 How to Use This Website

### For Customers:
1. **Browse**: Visit the home page to learn about the restaurant
2. **Select**: Go to the menu and choose items by category
3. **Customize**: Add items to cart and customize each order
4. **Checkout**: Review cart, proceed to payment, and place order
5. **Confirm**: Receive order number for tracking

### For Restaurant Owners:
1. **Update Menu**: Edit `js/cart.js` to change items and prices
2. **Customize Options**: Modify customization choices in the same file
3. **Brand**: Change restaurant name and colors throughout HTML/CSS
4. **Deploy**: Upload all files to web hosting service

## ❌ Features NOT Implemented (Future Enhancements)

### Recommended Next Steps:
1. **Backend Integration**: Connect to a real server/database
2. **Payment Gateway**: Integrate Stripe, PayPal, or other payment processors
3. **Admin Dashboard**: Create admin panel to manage orders and menu
4. **Order Tracking**: Real-time order status updates
5. **User Accounts**: Customer login and order history
6. **Email Notifications**: Send order confirmations via email
7. **Image Upload**: Allow uploading actual food images
8. **Reviews & Ratings**: Customer feedback system
9. **Table Reservations**: Online booking system
10. **Delivery Tracking**: GPS-based delivery tracking

## 🔧 Technical Requirements

- **No Server Required**: Pure frontend application
- **Modern Browser**: Chrome, Firefox, Safari, Edge (latest versions)
- **JavaScript Enabled**: Required for cart functionality
- **localStorage Support**: Must be enabled in browser

## 📞 Support Information

For customization help or technical questions, refer to the inline comments in the code files. Each JavaScript file is well-documented with clear section headers.

## 📄 License

This is a complete, production-ready restaurant website template. Feel free to customize it for your restaurant or cafe!

---

**Built with ❤️ for The Golden Spoon**  
*Simple. Elegant. Delicious.*
