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
  });
  it('Input with custom delimiter (2).', function () {
    equal(add('//-\n1-2-5-8-10'), 26);
  });
  it('Negative number exception.', function () {
    equal(add('1,3,-5,-10,15,-25'), 'negative numbers not allowed -5,-10,-25');
  })
  it('Numbers greater than 1000 should be ignored.', function () {
    equal(add('2,1000,1001,1002,5000'), 1002);
  })
  it('Delimiter greater than one character.', function () {
    equal(add('//[***]\n1***2***3'), 6);
  })
  it('Delimiter greater than one character (2).', function () {
    equal(add('//[;;]\n6;;2;;4'), 12);
  })
});