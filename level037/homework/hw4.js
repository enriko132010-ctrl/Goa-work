/*
4) შექმენით ცვლადი სადაც შეინახავთ 1 - 10 - მდე random - რიცხვს (გამოიყენეთ Math ბიბლიოთეკა 
და მასზე შესაბამისი მეთოდი), შექმენით მეორე 
ცვლადი სადაც შეინახავთ თქვენთვის სასურველ რიცხვს 1 - 10 - მდე, თქვენი დავალებაა, რომ 
შეამოწმოთ თუ თქვენს მიერ შემოტანილი რიცხვი უდრის 
random რიცხვს გამოიტანეთ text - 'You have guessed the random number' სხვა შემთხვევაში კი 'You 
have not guessed the random number. Please 
try again later'
*/

const randomNums = Math.floor(Math.random() * 11);

const myNumber = 5;

if (randomNums === myNumber) {
    console.log('You have guessed the random number');
} else {
    console.log('You have not guessed the random number. Please try again later')
};