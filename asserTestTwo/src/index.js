import _ from 'lodash';

let take = (coll, val) => {
    return _.take(coll, val);
};

console.log(take([],2));//[]
console.log(take([1, 2, 3]));//[1]
console.log(take([1, 2, 3], 2));//[1,2]
console.log(take([4, 3], 9));//[4,3]

export default take;