(function () {
    var diff = function (array) {
            var self = this,
                a = self.filter(function (item) {
                    return array.indexOf(item) === -1;
                }),
                b = array.filter(function (item) {
                    return self.indexOf(item) === -1;
                });

            return a.concat(b);
        },
        proto = Array.prototype;

    if (!proto.diff) {
        if (Object.defineProperty) {
            try {
                // IE8 might throw an exception here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty?#Browser_compatibility
                Object.defineProperty(proto, 'diff', {
                    value: diff
                });
            } catch (err) {
                proto.diff = diff;
            }
        } else {
            proto.diff = diff;
        }
    }
}());
