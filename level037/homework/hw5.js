/*
5) შექმენით მასივი, სადაც შეინახავთ რიცხვებს, თქვენი დავალებაა, რომ თქვენით დაწეროთ ამ მასივში 
არსებული რიცხვების საბოლოო ჯამის გამოსათვლელი ლოგიკა
*/

const numbers = [1, 5, 7, 10, 9, 8, 6];

function calculate(array) {
    let sum = 0;

    for (i = 0; i < array.length; i++) {
        sum += array[i]
    };
    return sum;
}
const total = calculate(numbers)
console.log("total of array is:" + total);
