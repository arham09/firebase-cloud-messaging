'use strict'

const admin = require('../lib/firebase')

exports.pushDevices = async (data) => {
  try {
    const payload = {
      notification: {
        title: data.title,
        body: data.body
      },
      data: {
        screen: data.screen || 'Home',
        id: String(data.screenId),
        image: data.image
      },
      tokens: data.token
    }

    const response = await admin.messaging().sendMulticast(payload)

    return response
  } catch (error) {
    throw new Error(error)
  }
}

exports.pushTopics = async (data) => {
  try {
    const payload = {
      notification: {
        title: data.title,
        body: data.body
      },
      data: {
        screen: data.screen || 'Home',
        id: String(data.screenId),
        image: data.image
      }
    }

    const response = await admin.messaging().sendToTopic(data.topic, payload)

    return response
  } catch (error) {
    throw new Error(error)
  }
}
