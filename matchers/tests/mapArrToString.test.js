const mapArrToString = require('../src/mapArrToString');

describe('mapArrToString', () => {
    test('Корректное значение', () => {
        expect(mapArrToString([1,2,3])).toEqual(['1','2','3']);
    });
    test('Любые данные в массиве', () => {
        expect(mapArrToString([1,2,3, null, undefined, 'hello'])).toEqual(['1','2','3']);
    });
    test('Пустой массив', () => {
        expect(mapArrToString([])).toEqual([]);
    });
    test('Отрицание', () => {
        expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
    });
});