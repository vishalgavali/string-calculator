export function add(numbers) {
    if (numbers.length === 0)
        return 0;
    let delimiters = ", \n";
    if (numbers.startsWith("//")) {
        const delimiterAndNumbers = numbers.split("\n");
        delimiters += "," + delimiterAndNumbers[0].substring(2);
        numbers = delimiterAndNumbers[1];
    }
    const stringNumbers = numbers.split(new RegExp(`[${delimiters}]`));
    let parsedNumbers = [];
    let negativenumbers = [];
    stringNumbers.forEach(number => {
        let parsedNumber = parseInt(number, 10);
        if (parsedNumber < 0)
            negativenumbers.push(parsedNumber);
        else if (parsedNumber < 1001)
            parsedNumbers.push(parsedNumber);
    });
    if (negativenumbers.length > 0)
        return `negative numbers not allowed ${negativenumbers.join()}`;
    return parsedNumbers.reduce((accumulator, currentValue) => currentValue + accumulator, 0);
}
