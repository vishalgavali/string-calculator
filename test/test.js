const equal = require('assert').equal;
const add = require('../index').add;
describe("String Calculator Tests", () => {
  it('First case', function () {
    equal(add(''), 0);
  });
});