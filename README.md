Array.diff polyfill
===================

This polyfill will install a `diff` function on `Array.prototype`.

**WARNING**: This depends on `Array.filter` and `Array.indexOf`, which are ES5 functions. If you need to support ancient browsers I recommend using [ES5-shim](https://github.com/kriskowal/es5-shim)

**WARNING**: Browsers that don't support `Object.defineProperty` will see `diff` as an iterable property, giving you problems if you use `for (i in array)` style iteration, [which you shouldn't](http://stackoverflow.com/a/500531).


Browser support
---------------

[![browser support](https://ci.testling.com/Munter/Array.diff.png)](https://ci.testling.com/Munter/Array.diff)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/Munter/array.diff/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

