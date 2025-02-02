const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cartRoutes = require('./routes/cartRoutes'); // Path to your cart routes

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/cart', cartRoutes);

// Connect to MongoDB
mongoose.connect('your-mongo-db-connection-string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error: ', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
