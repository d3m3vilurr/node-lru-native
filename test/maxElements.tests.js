var assert = require('chai').assert;
var LRUCache = require('..');

describe('maxElements', () => {
  describe('a cache with a maxElements of 1', () => {
    var cache = undefined;
    beforeEach(() => {
      cache = new LRUCache({maxElements: 1});
    });

    describe('when a single value is added', () => {
      it('should return the value when requested', () => {
        cache.set('foo', 42);
        var value = cache.get('foo');
        assert.equal(value, 42);
      });
    });

    describe('when two values are added', () => {
      it('should return undefined when the older value is requested', () => {
        cache.set('foo', 42);
        cache.set('bar', 21);
        var value = cache.get('foo');
        assert(value === undefined, 'value was not undefined');
      });
    });
  });
});
