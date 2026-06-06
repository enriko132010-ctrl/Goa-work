const numbers = [5, 20, 10, 50, 15];

const max = numbers.reduce((acc, curr) => {
    if (curr > acc) {
        return curr;
    }

    return acc;
}, numbers[0]);

console.log(max);