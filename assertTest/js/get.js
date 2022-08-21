
import _ from 'lodash';

let get = (obj,val,defaultValue) => {
    return _.get(obj, val,defaultValue);
}

console.log(get({ hello: 'world' }, 'hello')); // world
console.log(get({ hello: 'world' }, 'hello', 'kitty')); // 'world'
console.log(get({}, 'hello', 'kitty'));// 'kitty'

export default get;