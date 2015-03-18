var cycle = require('../')
var test = require('tape')

test('exports a function', function(t) {
  t.equal(typeof cycle, 'function', 'cycle exports a function')
  t.end()
})

function isCycleFunction(fn, t) {
  t.equal(typeof fn, 'function', 'fn is a function')
  t.equal(fn.length, 1, 'fn takes 1 param')
}

test('can create a cycle only with array', function (t) {
  var nums = cycle([1, 2, 3])
  isCycleFunction(nums, t)
  // Returns a function that when called will give you a new value
  t.equal(nums(), 1)
  t.equal(nums(), 2)
  // You can pass an offset to the fn to skip or go back
  t.equal(nums(0), 2)
  t.equal(nums(2), 1)
  t.equal(nums(-1), 3)
  t.end()
})

