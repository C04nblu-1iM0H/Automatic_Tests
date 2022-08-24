import assert from 'power-assert';
import user from './index';

assert(user.name === 'Madonna');
assert.deepEqual(user.friends, ['Kate', 'Madonna']);

console.log('Все тесты пройдены!');