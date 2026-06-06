const numbers = [1, 0, 3, 0, 5, 0, 7, 9];

const nonZeros = numbers.filter(num => num !== 0);
const zeros = numbers.filter(num => num === 0);

const result = [...nonZeros, ...zeros];

console.log(result);