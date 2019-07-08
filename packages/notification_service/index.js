const server = require('express')()
const config = require('./src/config')
const { consumer } = require('./src/queue/consumer')
const handler = require('./src/handlers/notification')

const queue = 'notification_queue'

consumer(queue, async (message) => {
  if (message.type === 1) {
    try {
      const result = await handler.pushTopics(message)

      console.log(result)
    } catch (error) {
      console.error(error)
    }
  } else if (message.type === 0) {
    try {
      const result = await handler.pushDevices(message)
      
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }
})

server.listen(config.port, () => {
  console.log(`Listening in ${config.port}`)
})

module.exports = server