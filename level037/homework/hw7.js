// example 1
let fruits = ['apple', 'banana'];
let newLength = fruits.push('cherry'); 

console.log(fruits);
console.log(newLength);

// example 2
let numbers = [1, 2];
numbers.push(3, 4, 5);

console.log(numbers);

// example 1
let tasks = ['wash car', 'buy milk', 'call mom'];
let lastTask = tasks.pop();

console.log(lastTask); // 'call mom'
console.log(tasks);    // ['wash car', 'buy milk']

// example 2
let emptyList = [];
let result = emptyList.pop();

console.log(result); // undefined