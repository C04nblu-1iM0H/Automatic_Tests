const {get, indexOf, slice} = require('../src/index');

const array = [1, 2, 3, 4];
const arrOf = [1, 2, 3, 2, 5];
const arr = [1, 2, 3, 4, 5];

describe('Testing function in file index.js', () => {
    test('get function', () => {
        expect(get(array,1)).toEqual(2);
        expect(get(array, 5, 'nothing')).toEqual('nothing');
        expect(get(array, 5)).toBeNull();
    });    
    test('indexOf function', () => {
        expect(indexOf(arrOf,2)).toEqual(1);
        expect(indexOf(arrOf, 7)).toEqual(-1);
        expect(indexOf(arrOf,2,-3)).toEqual(3);
    });
    test('slice function', () => {
        expect(slice(arr)).toEqual([1, 2, 3, 4, 5]);
        expect(slice(arr, 1, 4)).toEqual([2,3,4]);
        expect(slice(arr, -4, -2)).toEqual([2,3]);
        expect(slice(arr, 7)).toEqual([]);
    });
});