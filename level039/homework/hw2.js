const numbers = [10, 20, 30, 40, 50];

function findNumInArr(num) {
    if (numbers.includes(num)) {
        return "The number is in the array";
    } else {
        return "The number is not in the array";
    }
}

let userNum = Number(prompt("Enter a number:"));
console.log(findNumInArr(userNum));