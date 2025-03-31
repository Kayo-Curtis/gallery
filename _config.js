// require('dotenv').config(); // Make sure to require dotenv if you're using a .env file
// 
// var config = {}
// 
// config.mongoURI = {
//     production: process.env.MONGO_URI_PRODUCTION,
//     development: process.env.MONGO_URI_DEVELOPMENT,
//     test: process.env.MONGO_URI_TEST,
// }
// 
// module.exports = config;

var config = {}

config.mongoURI = {
    production: 'mongodb+srv://kayo:R$EuLf5UoOMJE3gn@gallery.l5ytn85.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://kayo:R$EuLf5UoOMJE3gn@gallery.l5ytn85.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://kayo:R$EuLf5UoOMJE3gn@gallery.l5ytn85.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}

module.exports = config;

