const set = require('lodash/set');

const setFunc = (object, path, value) =>{
    return set(object, path, value);
}

const delDateObject = (obj) =>{
    for (const prop of Object.getOwnPropertyNames(obj)) {
        delete obj[prop];
    }
}

module.exports = {
    setFunc,
    delDateObject
}