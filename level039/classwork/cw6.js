function filterLongWords(words) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 4) {
            console.log("long words array")
        } else {
            console.log("short")
        }
    }
}

filterLongWords(["hi", "world", "cat", "javascript", "sun"]);

/*
const numbers = [3, 8, 12, 5, 20, 17];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

*/