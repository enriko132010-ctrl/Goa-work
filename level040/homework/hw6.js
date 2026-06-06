function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
}

const numbers = [45, 2, 18, 7, 100, 1];

console.log(sortNumbers(numbers));