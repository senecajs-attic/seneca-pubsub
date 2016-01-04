'use strict'

var Varo = require('varo')
var varo

// Tell Varo that we want to match based on depth
// (more wins), rather than insertion.
var defaults = {
  indexing: 'depth'
}

module.exports = function (options) {
  var seneca = this
  var extend = seneca.util.deepextend

  // Merge our default options with the users
  options = extend(defaults, options)

  // Allow varo to be passed via options
  varo = options.varo || new Varo(options)

  // These may throw if, for any reason, seneca rejects our decoration. Since
  // we are a plugin that others may depend on, we just let it throw, seneca
  // will handle and dump the error for us as our parent.
  seneca.decorate('subscribe', varo.observe.bind(varo))
  seneca.decorate('publish', varo.emit.bind(varo))

  // The standard format for seneca plugins is
  // to omit the seneca section of the name.
  return {
    name: 'pubsub'
  }
}
