import assert from 'power-assert';
import {user, indexOfLodash} from './index';
// import indexOfLodash from './index';

assert(user.name === 'Madonna');
assert.deepEqual(user.friends, ['Kate', 'Michel']);

//проверяем на существующие элементы под данными индексами
assert.deepEqual(indexOfLodash([1, 2, 1, 2],2), 1,); 
assert.deepEqual(indexOfLodash([1, 2, 1, 2], 2, 2), 3);
assert.deepEqual(indexOfLodash([2, 'one', 'cat', false], 8), -1);

console.log('Все тесты пройдены!');