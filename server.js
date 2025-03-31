const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const config = require('./_config.js');
const env = process.env.NODE_ENV || 'development';

let index = require('./routes/index');
let image = require('./routes/image');

// Initializing the app
const app = express();

// MongoDB connection
mongoose.connect(config.mongoURI[env])
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

// Express app setup
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Routes
app.use('/', index);
app.use('/image', image);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);



});
