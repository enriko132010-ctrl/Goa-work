let text = "      heLLo WoRld       ";

text = text.trim(); 

let words = text.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] =
        words[i][0].toUpperCase() +
        words[i].slice(1).toLowerCase();
}

console.log(words.join(" "));