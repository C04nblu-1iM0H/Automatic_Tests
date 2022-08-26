# Jest установка
```
$ npm i --save-dev jest
```
## Настройка package.json
Добавим в объект scripts новый ключь со значением запуск самого теста
```javascript
   "scripts": {
    "test": "jest"
  },
```
Это означет что мы можем при помощи команды (которая будет ниже) запускать наши тесты
```
npm run test или npx jest
```
## Установим библиотеку Lodash
```
npm i lodash
```
После установки создадим отдельный файл в каталоге src. Далее импортируем функции, которые нам понадобятся в работе
```javascript
const take = require('lodash/take');
const get = require('lodash/get');
const indexOf = require('lodash/indexOf');
```
После реализации данных функции нужно их экспортировать для проверки с помощью jest в файл index.test.js
```javascript
module.exports={
    takeFunc,
    getFunc,
    indexOfLodash,
}
```
Далее импортируем их в файл index.test.js
```javascript
const {takeFunc, getFunc, indexOfLodash} = require('../src/your js file');
```
>Реализация тестов находится по пути ./test/index.test.js
