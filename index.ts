export function add(numbers: string): number | string {
  if (numbers.length === 0) return 0;
  let delimiters = ", \n";
  if (numbers.startsWith("//")) {
    const delimiterAndNumbers = numbers.split("\n");
    numbers = delimiterAndNumbers[1];
    if (delimiterAndNumbers[0][2] === "[") {
      let delimitorString = delimiterAndNumbers[0].substring(
        3,
        delimiterAndNumbers[0].length - 1,
      );
      let multipleDelimiters = delimitorString.split("][");
      delimiters += "," + multipleDelimiters.join();
    } else {
      delimiters += "," + delimiterAndNumbers[0].substring(2);
    }
  }
  const stringNumbers = numbers.split(new RegExp(`[${delimiters}]`));
  let parsedNumbers = [];
  let negativenumbers = [];
  stringNumbers.forEach((number) => {
    if (number) {
      let parsedNumber: number = parseInt(number, 10);
      if (parsedNumber < 0) negativenumbers.push(parsedNumber);
      else if (parsedNumber < 1001) parsedNumbers.push(parsedNumber);
    }
  });
  if (negativenumbers.length > 0)
    return `negative numbers not allowed ${negativenumbers.join()}`;
  return parsedNumbers.reduce(
    (accumulator, currentValue) => currentValue + accumulator,
    0,
  );
}
