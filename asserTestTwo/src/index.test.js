let assert = require('chai').assert;
import take from './index';

assert.deepStrictEqual(take([],2),[]);//проверка на то, что длина маасива ранвна нулю
assert.deepStrictEqual(take([1, 2, 3]),[1]);//проверка на то, если не указан второй параметр, 
                                //то по умолчанию функция делает срез по первому элементу
assert.deepStrictEqual(take([1, 2, 3], 2), [1, 2]);//проверка на то, выводит ли первые два числа
assert.deepStrictEqual(take([4, 3], 9), [4, 3]);//функция deepStrictEqual должна проверить выведит ли функция take 9 числ, 
                                                //в нашем случае массив состит из 2 элементов, ниже убедимся в том выведет ли функция все 9 элементов
assert.deepStrictEqual(take([4, 3, 5, 10, 11, 2, 23, 6, 9], 9), [4, 3, 5, 10, 11, 2, 23, 6, 9]);//проверка на то, 
                                                                //выводит 9 чисел как и мы задали 2 параметром
