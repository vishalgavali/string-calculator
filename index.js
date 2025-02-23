export function add(numbers) {
    if (numbers.length === 0)
        return 0;
    let delimiters = ", \n";
    if (numbers.startsWith("//")) {
        const delimiterAndNumbers = numbers.split("\n");
        delimiters += ',' + delimiterAndNumbers[0].substring(2);
        numbers = delimiterAndNumbers[1];
    }
    const stringNumbers = numbers.split(new RegExp(`[${delimiters}]`));
    return stringNumbers.reduce((accumulator, currentValue) => parseInt(currentValue, 10) + accumulator, 0);
}
