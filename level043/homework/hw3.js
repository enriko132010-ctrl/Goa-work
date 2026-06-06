function reverseSentence(sentence) {
    return sentence
        .split(" ")
        .reverse()
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseSentence("Hello My name is Nino"));