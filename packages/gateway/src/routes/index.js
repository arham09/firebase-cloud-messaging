'use strict'

const fs = require('fs')
const path = require('path')

module.exports = (app) => {
  fs.readdirSync(app.config.ROOT + '/src/routes/v1').forEach((file) => {
    let extname = path.extname(file)
    let basename = path.basename(file, extname)
    if (~file.indexOf('.js') && basename !== 'index') {
      app.use('/v1/' + basename, require(app.config.ROOT + '/src/routes/v1/' + file))
    }
  })
}
