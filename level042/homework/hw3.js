function reverseSentence(sentence) {
  return sentence
    .split(" ")              // ვყოფთ სიტყვებად
    .map(word => word.split("").reverse().join("")) // თითოეული სიტყვის შებრუნება
    .reverse()               // სიტყვების რიგის შებრუნება
    .join(" ");
}

console.log(reverseSentence('Hello My name is Nino'));

