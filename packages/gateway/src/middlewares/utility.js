'use strict'

const uuidV4 = require('uuid/v4')

module.exports = {
  errorCustomStatus: (res, err, status) => {
    let resultPrint = {}
    resultPrint.id = uuidV4()
    resultPrint.status = _.result(err, 'status') || 400
    resultPrint.errors = {}

    if (_.isObject(err)) {
      resultPrint.errors.message = _.result(err, 'message') || _.result(err, 'msg') || 'Bad Request'
      resultPrint.errors.fields = err
    } else {
      resultPrint.status = status || resultPrint.status
      resultPrint.message = err
      resultPrint.errors.message = err || 'The server encountered an unexpected condition which prevented it from fulfilling the request.'
    }

    return res.status(resultPrint.status).json(resultPrint)
  },
  notFound: (res, message) => {
    let resultPrint = {}
    resultPrint.id = uuidV4()
    resultPrint.errors = {
      message: message || 'Sorry, that page does not exist'
    }
    resultPrint.status = 404
    return res.status(404).json(resultPrint)
  },
  responses: (res, obj, status, extra) => {
    var resultPrint = {}

    resultPrint.id = uuidV4()
    resultPrint.status = status || 200

    if (_.isObject(obj)) {
      resultPrint.data = obj
    } else {
      resultPrint.message = obj
    }

    if (_.isObject(extra)) {
      Object.assign(resultPrint, extra)
    }

    return res.status(resultPrint.status).json(resultPrint)
  },
  setPassword: (password, salt) => {
    const crypto = require('crypto')
    let hash = crypto.createHmac('sha512', salt)
    hash.update(password)
    let value = hash.digest('hex')
    return {
      salt: salt,
      passwordHash: value
    }
  },
  generateSalt: (length) => {
    const crypto = require('crypto')
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length)
  },
  validatePassword: (password) => {
    var patt = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W_]){1,})(?!.*\s).{6,15}$/
    return patt.test(password)
  }
}
