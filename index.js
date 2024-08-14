const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// Cart route
router.get('/cart', (req, res) => {
    const cartItems = []; // Replace with actual cart items from your data source
    res.render('cart', { cartItems });
});

module.exports = router;

