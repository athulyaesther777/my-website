
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/checkout', async (req, res) => {
    const { products, totalAmount } = req.body;
    const order = new Order({
        user: req.user._id,
        products,
        totalAmount
    });
    await order.save();
    res.redirect('/');
});

module.exports = router;
