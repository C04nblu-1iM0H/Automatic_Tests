const take = require('lodash/take');
const get = require('lodash/get');
const indexOf = require('lodash/indexOf');

let takeFunc = (coll, val) => {
    return take(coll, val);
};

let getFunc = (obj,val,defaultValue) => {
    return get(obj, val,defaultValue);
}

let indexOfLodash = (array, value, fromIndex) => {
    return indexOf(array, value, fromIndex)
}; 

module.exports={
    takeFunc,
    getFunc,
    indexOfLodash,
}