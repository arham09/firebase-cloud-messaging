/* global describe it before */

const App = require('../server.js')
const supertest = require('supertest')
const CONFIG = require('../src/config/index')
const should = require('should')
const expect = require('chai').expect
const assert = require('assert')
const _ = require('lodash')

const server = supertest(App.server)

before((done) => {
  done()
})

describe('Index Page', () => {
  it('GET /v1/ should return 404 page', (done) => {
    server
      .get('/v1')
      .expect('Content-type', /json/)
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404)
        done()
      })
  })
})

after((done) => {
  App.server.close()
  done()
})
