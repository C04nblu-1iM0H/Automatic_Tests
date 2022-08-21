

let assert = require('chai').assert
import get from './get';

assert.equal(get({ hello: 'world' }, 'hello'), 'world');
assert.equal(get({}, 'hello', 'kitty'), 'kitty');
assert.equal(get({ hello: 'world' }, 'hello', 'kitty'), 'world');