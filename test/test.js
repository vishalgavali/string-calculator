const equal = require('assert').equal;
const add = require('../index').add;
describe("String Calculator Tests", () => {
  it('Input as empty string', function () {
    equal(add(''), 0);
  });
  it('Input as single number', function () {
    equal(add('1'), 1);
  });
  it('Input as multiple numbers', function () {
    equal(add('5,80,2,3'), 90);
  });
  it('Input with \\n delimiter along with comma.', function () {
    equal(add('1\n2,3'), 6);
  });
});