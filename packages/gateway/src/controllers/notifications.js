'use strict'

const pushToQueue = require('../queue/producer')
const { responses, errorCustomStatus } = require('../middlewares/utility')

exports.pushMultiDevice = (req, res) => {
  req.checkBody('title', 'title is required').notEmpty()
  req.checkBody('content', 'content is required').notEmpty()
  req.checkBody('tokens', 'tokens is required').notEmpty()
  req.checkBody('image', 'image is required').notEmpty()

  if (req.validationErrors()) {
    return errorCustomStatus(res, req.validationErrors(true))
  }

  let data = {
    title: req.body.title,
    body: req.body.content,
    image: req.body.image,
    screenId: 1,
    token: req.body.tokens,
    type: 0
  }

  const publish = pushToQueue(data)

  if (publish) {
    return responses(res, publish)
  } else {
    return errorCustomStatus(res, 'Something is wrong', 400)
  }
}

exports.pushTopic = (req, res) => {
  req.checkBody('title', 'title is required').notEmpty()
  req.checkBody('content', 'content is required').notEmpty()
  req.checkBody('topic', 'topic is required').notEmpty()
  req.checkBody('image', 'image is required').notEmpty()

  if (req.validationErrors()) {
    return errorCustomStatus(res, req.validationErrors(true))
  }

  let data = {
    title: req.body.title,
    body: req.body.content,
    image: req.body.image,
    screenId: 1,
    topic: req.body.topic,
    type: 1
  }

  const publish = pushToQueue(data)

  if (publish) {
    return responses(res, publish)
  } else {
    return errorCustomStatus(res, 'Something is wrong', 400)
  }
}