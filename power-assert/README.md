# Утверждения (power-assert)
Для того чтобы использовать утверждения (assert) использовал babel-loader с webpack
## Установка
Для начала установим babel-loader 
```
$ npm install -D babel-loader @babel/cli @babel/core @babel/node @babel/preset-env webpack
```
Потом установим сами утверждения power-assert:
```
npm i -D babel-preset-power-assert
```
```
npm i -D power-assert
```
## Настройка package.json
Добавим в объект scripts новый ключь со значением запуск самого текст и ваш файл с тестом который вы указываете отностиельно вашему пути:
```javascript
   "scripts": {
    "tests": "babel-node --presets power-assert ./src/index.test.js"
  },
```
# Настройка webpack.config.js

В созданый ранее файл вставляю следующий код:

```javascript
module.exports = {
     module: {
        rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env'],
                }
            }
        }
        ]
    },
}
 ```

# Создание и настройка babel.config.js

Создадим файл с названием babel.config.js и запишим в него следующий код:  

```javascript
module.exports = {
    presets: [
        ['@babel/env', {
            targets: {
                node: 'current',
            },
        }],
    ],
};
```
после запускаем тест командой:
```
npm run tests
```
