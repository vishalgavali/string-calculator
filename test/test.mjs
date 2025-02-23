import { equal } from 'assert';
import { add } from '../index.js';
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
  it('Input with custom delimiter.', function () {
    equal(add('//;\n1;2;5;8'), 16);
  })
  it('Input with custom delimiter (2).', function () {
    equal(add('//-\n1-2-5-8-10'), 26);
  })
});