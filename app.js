const express = require('express');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/authRoutes');
const medicineRoutes = require('./routes/medicineRoutes');

// Initialize Express app
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true })); // for html form data
app.use(express.json());


// Use medicine routes
app.use('/api/medicines', medicineRoutes);

// Use routes
app.use('/api/auth', authRoutes);

//health check route
app.get('/', (req, res) => {
    res.send('API is running...');
});

//404 route
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

//error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server Error', error: err.message });
});

module.exports = app;