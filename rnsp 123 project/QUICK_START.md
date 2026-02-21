# 🚀 Quick Start Guide

## Welcome to Your Restaurant Website!

This is a **complete, production-ready** restaurant website with a fully functional online ordering system.

## 📦 What You Have

- ✅ **4 Complete Pages**: Home, Menu, Cart, Payment
- ✅ **12 Menu Items**: Pre-configured with prices and ingredients
- ✅ **Full Order System**: Add to cart, customize, checkout
- ✅ **Professional Design**: Minimalist gold & neutral theme
- ✅ **Mobile Responsive**: Works on all devices
- ✅ **No Backend Needed**: Pure frontend application

## 🎯 Getting Started (3 Steps)

### Step 1: Open the Website
Simply open `index.html` in your web browser:
- Double-click `index.html`, or
- Right-click → Open with → Your Browser

### Step 2: Test the Order Flow
1. Click "View Our Menu" button
2. Browse different categories (Starters, Main Course, etc.)
3. Click "Add to Cart" on any items
4. Go to Cart and customize your order
5. Click "Proceed to Payment"
6. Fill out the form and place a test order
7. You'll receive an order confirmation number!

### Step 3: Customize It (Optional)
- Change restaurant name in all HTML files
- Update menu items in `js/cart.js`
- Adjust colors in `css/style.css`
- See `ADMIN_GUIDE.md` for detailed instructions

## 📱 Try These Features

### Menu Browsing
- Filter by category buttons
- Each item shows price and ingredients
- One-click add to cart

### Cart Management
- **Quantity Control**: Increase/decrease with +/- buttons
- **Customization**: Choose spice level for each item
- **Extras**: Add sauce, cheese, etc. (with prices)
- **Remove**: Delete items you don't want
- **Price Calculation**: Automatic total with tax

### Checkout Process
- Review your entire order
- Enter delivery information
- Choose payment method
- Add special instructions
- Get unique order number

## 🎨 Current Setup

**Restaurant Name:** The Golden Spoon  
**Theme:** Elegant gold & neutral tones  
**Tax Rate:** 8%  

**Menu Categories:**
- Starters (3 items)
- Main Course (3 items)  
- Desserts (3 items)
- Cold Drinks (3 items)

**Customization Options:**
- Spice Levels: Mild, Medium, Spicy, Extra Spicy
- Extras: Sauce, Cheese, No Onions, No Garlic, Gluten Free

## 📂 File Organization

```
📁 Your Restaurant Website
├── 📄 index.html              ← Home page (start here)
├── 📄 menu.html               ← Menu with categories
├── 📄 cart.html               ← Shopping cart
├── 📄 payment.html            ← Checkout page
│
├── 📁 css/
│   └── 📄 style.css           ← All styling
│
├── 📁 js/
│   ├── 📄 cart.js             ← Menu data & cart functions
│   ├── 📄 menu.js             ← Menu page logic
│   ├── 📄 cart-page.js        ← Cart page logic
│   └── 📄 payment.js          ← Payment page logic
│
└── 📚 Documentation
    ├── 📄 README.md           ← Full documentation
    ├── 📄 ADMIN_GUIDE.md      ← How to customize
    └── 📄 WEBSITE_STRUCTURE.md ← Visual guide
```

## 🔧 Common Customizations

### Change Restaurant Name
Find and replace "The Golden Spoon" in all HTML files

### Update Menu Items
Edit the `menuData` array in `js/cart.js`

### Change Colors
Edit CSS variables in `css/style.css` (line 18)

### Update Prices
Change the `price` value for any item in `js/cart.js`

### Adjust Tax Rate
Modify the tax calculation in `js/cart.js` (line 129)

**See `ADMIN_GUIDE.md` for detailed instructions!**

## 💾 Where Data is Stored

All data is stored in your browser's **localStorage**:
- **Cart**: `restaurantCart` - Current shopping cart
- **Orders**: `restaurantOrders` - All placed orders

To view saved data:
1. Open browser DevTools (F12)
2. Go to Application → Local Storage
3. Find your domain

## 🌐 Publishing Your Website

To make your website live online:

1. **Get Web Hosting**: Choose a hosting provider
   - Netlify (free)
   - GitHub Pages (free)
   - Vercel (free)
   - Traditional hosting

2. **Upload Files**: Upload all files maintaining the folder structure

3. **Share**: Your website URL will be provided by the host

## ✨ Features Highlight

### What Works Right Now
- ✅ Browse menu by categories
- ✅ Add unlimited items to cart
- ✅ Customize each order individually
- ✅ Adjust quantities
- ✅ Calculate prices with extras
- ✅ Place orders with customer info
- ✅ Save orders locally
- ✅ Responsive mobile design

### Future Enhancements (Optional)
- Real backend integration
- Payment gateway (Stripe, PayPal)
- Email notifications
- Admin dashboard
- Order tracking
- User accounts

## 🆘 Need Help?

**Check these files:**
- `ADMIN_GUIDE.md` - How to customize everything
- `README.md` - Complete technical documentation
- `WEBSITE_STRUCTURE.md` - Visual guide to pages

**Common Questions:**

**Q: How do I change the restaurant name?**  
A: Search and replace "The Golden Spoon" in all HTML files

**Q: How do I add more menu items?**  
A: Edit the `menuData` array in `js/cart.js`

**Q: Can customers actually pay?**  
A: Currently it's a frontend demo. For real payments, you need to integrate a payment gateway like Stripe.

**Q: Where do orders go?**  
A: Orders are saved to browser localStorage. For a real restaurant, integrate with a backend server.

**Q: Is this mobile-friendly?**  
A: Yes! The design is fully responsive and works on all devices.

## 🎉 You're All Set!

Your professional restaurant website is ready to use. Start by opening `index.html` and exploring all the features!

**Enjoy your new website! 🍽️✨**

---

**Need to customize?** → Open `ADMIN_GUIDE.md`  
**Want technical details?** → Open `README.md`  
**See page layouts?** → Open `WEBSITE_STRUCTURE.md`
