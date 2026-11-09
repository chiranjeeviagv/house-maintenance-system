const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🚀 Successfully connected to MongoDB Atlas!'))
  .catch(err => console.error('❌ Database connection error:', err));

// Basic Route for testing
app.get('/api/status', (req, res) => {
  res.json({ message: 'House Maintenance API is running smoothly.' });
});
app.use('/api/tasks', require('./routes/tasks'));
app.use(express.static('public'));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
