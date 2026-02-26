// FUNCTION DECLARATION ფუნქცია რომელსაც აქვს სახელი და ხელმისაწვდომია სანამ კოდი გაეშვება
function sayHello() {
  console.log("Hello from declaration!");
}



// FUNCTION EXPRESSION  აქ ფუნქცია ინახება ცვლადში ფუნქცია არ იტვირთება წინასწარ და ხელმისაწვდომია მხოლოდ ქვემოთ დაწერის შემდეგ
const sayHi = function() {
  console.log("Hello from expression!");
};



//ARROW FUNCTION უფრო მოკლე სინტაქსი და მარტივად გამოყენებადი
const sayYo = () => {
  console.log("Hello from arrow!");
};


// 2)
const numbers = [10, 55, 23, 99, 7, 120, 42];

function returnMax(numbers) {
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];

    if (current >= max) {
      if (current !== max) {
        max = current;
      }
    }
  }

  return max;
}

console.log(returnMax(numbers)); 


console.log(returnMax(numbers)); 

// 3)
// ერთი ხაზი, return ავტომატურია
const checkAge = age => age >= 18 ?'The user is adult' : 'The user is kid'

console.log(checkAge(15)); 
console.log(checkAge(19)); 

// 4)
const words = ["apple", "banana", "orange", "watermelon", "mango"];

const findIndex = function(word) {
  return words.indexOf(word); 
};

console.log(findIndex("orange"));
console.log(findIndex("mango")); 
