const dev = require('./config.dev')
const prod = require('./config.prod')

module.exports = process.env.NODE_ENV === 'production' ? prod : dev