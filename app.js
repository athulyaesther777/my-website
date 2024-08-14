const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const app = express();

// Database connection
mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Static files
app.use(express.static('public'));

// EJS setup
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));
app.use('/orders', require('./routes/orders'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
