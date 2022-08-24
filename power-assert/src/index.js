import _ from 'lodash';

export const user = {
    name: 'Madonna',
    friends: ['Kate', 'Michel'],
    email: 'madonna@example.com',
};

export let indexOfLodash = (array, value, fromIndex) => {
    return _.indexOf(array, value, fromIndex)
}; 

console.log(indexOfLodash([1, 2, 1, 2], 2));//1
console.log(indexOfLodash([1, 2, 1, 2], 2, 2));//3
console.log(indexOfLodash([2, 'one', 'cat', false], 8));//-1
