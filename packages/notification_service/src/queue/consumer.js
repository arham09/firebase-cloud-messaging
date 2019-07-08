const amqp = require('amqplib/callback_api')
const config = require('../config/index')

module.exports = {
  consumer: (queue, callback) => {
    amqp.connect(config.mq, (err, conn) => {
      if (err) throw new Error(err)

      conn.createChannel((err, channel) => {
        if (err) throw new Error(err)

        channel.assertQueue(queue, { durable: true })
        
        channel.consume(queue, (message) => {
          const notif = JSON.parse(message.content)
          channel.ack(message)
          
          callback(notif)
        }, { noAck: false })
      })
    })
  }
}