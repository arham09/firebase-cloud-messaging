'use strict'

const BASE_DOMAIN = process.env.BASE_DOMAIN

const CONFIG = {
  ROOT: process.cwd(),
  APP: {
    name: BASE_DOMAIN
  },
  MQ: {
    HOST: process.env.RABBIT_URL
  },
  SESSION_SECRET: process.env.SESSION_SECRET || 'zd_TEkgW5C_$8]j.',
  REQUEST_HEADERS: {
    Authorization: 'X_MONEY_API'
  },
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  TOKEN_EXPIRED: '1 day'
}

module.exports = CONFIG
