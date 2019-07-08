const amqp = require('amqplib/callback_api')

const queue = 'notification_queue' 
let channel = null

amqp.connect(CONFIG.MQ.HOST, (err, conn) => {
  if (err) throw new Error(err)

  conn.createChannel((err, ch) => {
    if (err) throw new Error(err)

    ch.assertQueue(queue, { durable: true })
    
    channel = ch
  })
})

const pushToQueue = msg => {
  if (!channel) setTimeout(pushToQueue(msg), 1000)

  channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)))
  return { message: 'Success' }
}

module.exports = pushToQueue