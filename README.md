Npm javascript package

cycle-values
============

Cycle through values.

```js
// npm install cycle-values
var cycle = require('cycle-values')

// cycle(Array values = [])
var nums = cycle([1, 2, 3])

// Returns a function that when called will give you a new value
console.log(nums())
// > 1
console.log(nums())
// > 2

// You can pass an offset to the fn to skip or go back
console.log(nums(0))
// > 2
console.log(nums(2))
// > 1
console.log(nums(-1))
// > 3
```

Dev
---

`npm test` for testing the code after doing an `npm install`
