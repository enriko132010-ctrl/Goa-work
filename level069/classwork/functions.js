// named export გამოიყენება რამოდენიმე ფუნქციის დაესპორტების დროს და ასევე მას არ შეიძლება იმპორტის დროს სხვა სახელი ფქონდეს ხოლო
// default export გამოიყენება მხოლოდ ერთი ფუნქციის გადასატანად მაგრამ სახელს არ ააქვს ამ შემთხვევაში მნიშვნელობა

function sumOfNumbers(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function factorial(n) {
    let result = 1
    if (n == 0)
        return 1;

    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result;
}

function guessNumber(userNum) {
    const random = Math.floor(Math.random() * 10) + 1;
    
    if (userNum === random) {
    return "You have guessed the number correctly";
  } else {
    return "You lost, try again";
  }
}

function returnLengthOfArr(arr) {
  return arr.length;
}

// module.exports, გარეთ (ვაგზავნით) ფუნქციებს რომ სხვა ფაილში require-ით გამოვიყენოთ
module.exports = {
  sumOfNumbers,
  factorial,
  guessNumber,
  returnLengthOfArr
};