'use strict'

const PORT = 2001
const BASE_DOMAIN = process.env.BASE_DOMAIN || '0.0.0.0'

const CONFIG = {
  SERVER: {
    PORT: PORT,
    BASE_DOMAIN: BASE_DOMAIN,
    BASE_WEBHOST: `http://${BASE_DOMAIN}:${PORT}/`
  }
}

module.exports = CONFIG
