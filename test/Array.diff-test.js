var assert = require('assert');

require('../Array.diff');

describe('Array.diff', function () {
    it('Should not throw an error', function (done) {
        assert.doesNotThrow(function () {
            [1, 2].diff([2]);
        });
        done();
    });

    it('Should be a function', function (done) {
        assert.equal(typeof Array.prototype.diff, 'function');
        done();
    });

    it('Should not be iterable', function (done) {
        assert.ok(![].hasOwnProperty('diff'));
        done();
    });

    it('Sould work with integers', function (done) {
        assert.deepEqual([1, 2].diff([2]), [1]);
        assert.deepEqual([1].diff([1, 2]), [2]);
        assert.deepEqual([1].diff([2]), [1, 2]);
        assert.deepEqual([].diff([1]), [1]);
        assert.deepEqual([1].diff([]), [1]);
        assert.deepEqual([1].diff([1]), []);
        assert.deepEqual([].diff([]), []);
        done();
    });

    it('Sould work with strings', function (done) {
        assert.deepEqual(['foo', 'bar'].diff(['bar']), ['foo']);
        assert.deepEqual(['foo'].diff(['foo', 'bar']), ['bar']);
        assert.deepEqual(['foo'].diff(['bar']), ['foo', 'bar']);
        assert.deepEqual([].diff(['foo']), ['foo']);
        assert.deepEqual(['foo'].diff([]), ['foo']);
        assert.deepEqual(['foo'].diff(['foo']), []);
        done();
    });

    it('Sould work with objects', function (done) {
        var one = { name: 'Object 1'},
            two = { name: 'Object 2'};

        assert.deepEqual([one, two].diff([two]), [one]);
        assert.deepEqual([one].diff([one, two]), [two]);
        assert.deepEqual([one].diff([two]), [one, two]);
        assert.deepEqual([].diff([one]), [one]);
        assert.deepEqual([one].diff([]), [one]);
        assert.deepEqual([one].diff([one]), []);
        done();
    });
});
