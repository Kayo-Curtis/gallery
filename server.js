const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path'); // Ensure this is used for path operations
require('dotenv').config(); // Correctly load environment variables at the beginning

const config = require('./_config.js'); // Assuming config file holds your DB URIs

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Connecting to the database using configuration from _config.js
mongoose.connect(config.mongoURI[process.env.NODE_ENV], { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

// Initializing the app
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware (Note: bodyParser.json() is deprecated in favor of express.json())
app.use(express.json()); // for parsing application/json

// Using routes
app.use('/', index);
app.use('/image', image);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
