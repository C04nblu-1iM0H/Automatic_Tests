
//import reverse from '../src/index';
const reverse = require('../src/index');

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

