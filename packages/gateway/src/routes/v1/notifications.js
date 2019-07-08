'use strict'

const NotificationControllers = require('../../controllers/notifications')
var Route = express.Router()

Route
  .post('/devices', NotificationControllers.pushMultiDevice)
  .post('/topic', NotificationControllers.pushTopic)

module.exports = Route
