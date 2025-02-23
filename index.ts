export function add(numbers: string): number {
  if (numbers.length === 0) return 0;
  const stringNumbers = numbers.split(",");
  return stringNumbers.reduce(
    (accumulator, currentValue) => parseInt(currentValue, 10) + accumulator,
    0,
  );
}
