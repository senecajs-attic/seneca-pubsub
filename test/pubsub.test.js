
var PubSub = require('..')
var Seneca = require('seneca')
var expect = require('code').expect

var Lab = require('lab')
var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it

describe('seneca pubsub', function () {
  it('happy', function (done) {
    var seneca = Seneca()
    seneca.use(PubSub)

    seneca.subscribe({role: 'foo'}, function (msg) {
      expect(msg.data.value).to.equal(10)
      done()
    })

    seneca.publish({role: 'foo', data: {value: 10}})
  })
})
