const {setFunc,delDateObject} = require('../src/index');

//объявляем коллекцию на уровне модуля, чтобы не дублировать её в каждом тесте
const object = { a: [{ b: { c: 3 } }] };

describe('set function in lodash', () => {
    test('set function', () => {
        expect(object).toHaveProperty('a[0].b.c', 3);
        expect(setFunc(object,'a[0].b.c',4)).toEqual({ a: [{ b: { c: 4 } }] });
        expect(object).toHaveProperty('a[0].b.c', 4);
        expect(setFunc(object, ['x', '0', 'y', 'z'], 5)).toEqual({"a": [{"b": {"c": 4}}], "x": [{"y": {"z": 5}}]});
        expect(object).toHaveProperty(['x', '0', 'y', 'z'], 5);
    })
    afterAll(() => {
        delDateObject(object);
        expect(setFunc(object,'a[0].b.c',3)).toEqual({ a: [{ b: { c: 3 } }] });
    });
})

test('Проверка изначальных данных в коллекции', () => {
    expect(object).toHaveProperty('a[0].b.c', 3);
})
