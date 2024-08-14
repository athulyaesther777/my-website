const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.render('index', { products });
});

router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render('product', { product });
});

module.exports = router;
