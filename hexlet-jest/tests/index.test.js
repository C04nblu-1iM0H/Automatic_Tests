
const reverse = require('../src/index');
const {takeFunc, getFunc, indexOfLodash} = require('../src/funcLodash');

describe('Тестирование функций' , () => {

  test('reverse - переворачиваем строку', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('')).toEqual('');
  });

  test('take - Создаем срез array с n элементами, взятыми с самого начала', () => {
    expect(takeFunc([1, 2, 3], 2)).toEqual([1, 2]);
    expect(takeFunc([1, 2, 3])).toEqual([1]);
  });

  test('get - получаем свойство ключа, если его нет, то выводим defaultValue', () => {
    expect(getFunc({ hello: 'world' }, 'hello')).toEqual('world');
    expect(getFunc({ hello: 'world' }, 'hello', 'kitty')).toEqual('world');
    //пример с defaultValue, так как объект пуст и ключа hello нет выводится defaultValue со значением - kitty
    expect(getFunc({}, 'hello', 'kitty')).toEqual('kitty');
  });

  test('indexOf - производить поиск заданного эл-а в value и выводит его индекс', () => {
    expect(indexOfLodash([1, 2, 1, 2], 2)).toEqual(1);
    expect(indexOfLodash([1, 2, 1, 2], 2, 2)).toEqual(3);
    expect(indexOfLodash([2, 'one', 'cat', false], 8)).toEqual(-1);
  });
});

