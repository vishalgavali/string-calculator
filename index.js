"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function add(numbers) {
    if (numbers.length === 0)
        return 0;
    var stringNumbers = numbers.split(",");
    return stringNumbers.reduce(function (accumulator, currentValue) { return parseInt(currentValue, 10) + accumulator; }, 0);
}
