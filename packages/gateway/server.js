'use strict'
require('dotenv').config()

global.env = process.env.NODE_ENV || 'development'

const autoload = require('./autoload')()

const path = require('path')
global.express = require('express')

global.CONFIG = require(path.join(__dirname, '/src/config'))
global._ = require('lodash')

const http = require('http')
const app = express()
const server = require('http').createServer(app)

app.config = CONFIG

autoload((err, result) => {
  if (err) throw err

  require(path.join(__dirname, '/src/config/express'))(app)

  server.listen(app.get('port'), () => {
    if (env === 'development') console.log(`\n✔ Asal - asalan project ${CONFIG.SERVER.BASE_WEBHOST} in ${env} mode`)
  })
})

process.on('uncaughtException', (err) => {
  console.error(new Date() + ' uncaughtException: ', err.message)
  console.error(err.stack)
  process.exit(1)
})

process.on('SIGINT', () => {
  process.exit(1)
})

module.exports.server = http.createServer(app)
