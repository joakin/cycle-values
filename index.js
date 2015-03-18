var isNumber = require('isnumber')
var mod = require('mod-loop')

module.exports = function(values) {
  var pos = null
  return function(count) {
    count = count!=null && isNumber(count) ?
      parseInt(count, 10)
      : (pos == null? 0: 1)
    pos = mod((pos == null? 0: pos) + count, values.length)
    return values[pos]
  }
}
