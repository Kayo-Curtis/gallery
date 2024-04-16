require('dotenv').config(); // Make sure to require dotenv if you're using a .env file

var config = {}

config.mongoURI = {
    production: process.env.MONGO_URI_PRODUCTION,
    development: process.env.MONGO_URI_DEVELOPMENT,
    test: process.env.MONGO_URI_TEST,
}

module.exports = config;
