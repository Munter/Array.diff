Array.diff polyfil
==================

This polyfill will isntall a `diff` function on `Array.prototype`.

**WARNING**: This depends on `Array.filter`, which is an ES5 function. If you need to support ancient browsers I recommend using [ES5-shim](https://github.com/kriskowal/es5-shim)

**WARNING**: Browsers that don't support `Object.defineProperty` will see `diff` as an interable property, giving you problems if you use `for (i in array)` style iteration, [which you shouldn't](http://stackoverflow.com/a/500531).

[![browser support](https://ci.testling.com/Munter/Array.diff.png)](https://ci.testling.com/Munter/Array.diff)
