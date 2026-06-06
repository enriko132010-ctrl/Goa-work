const numbers = [10, -5, 20, -15, 30, -2];

const sum = numbers
    .filter(num => num > 0)
    .reduce((acc, curr) => acc + curr, 0);

console.log(sum);