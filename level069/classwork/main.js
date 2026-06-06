
// require_ით სხვა ფაილიდან ვიღებთ exports-ს
// const { sumOfNumbers, factorial, guessNumber, returnLengthOfArr } = require("./functions.js");


// console.log(sumOfNumbers([1, 2, 3, 4])); 

// console.log(factorial(5)); 

// console.log(guessNumber(7));

// console.log(returnLengthOfArr([10, 20, 30]));

/*

npm არის ხელსაწყო, რომელიც გვაძლევს საშუალებას:
1) რომ დავაინსტალიროთ სხვისი კოდი რომ ჩვენ ბევრი აღარ ვიწვალოთ იმისთვის 
2) შევქმნათ და ვმართოთ პროექტი


package.json არის პროექტის მთავარი ფაილი 

ინახავს:
პროექტის სახელს, ვერსიას, scripts


კოდი უფრო სუფთა და მოწესრიგებულია
ფაილები პატარა და გასაგებია
ფუნქციების ხელახლა გამოყენება შეგვიძლია
დროის დაზოგვა 

*/

const randomQuotes = require('random-quotes');

// console.log(`Quote: ${randomQuotes.default().body}`);
// console.log(`Author: ${randomQuotes.default().author}`);

// console.log(randomQuotes.byAuthor('Unknown'));