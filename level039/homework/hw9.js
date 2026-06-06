function countLetterB(text) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === "B" || text[i] === "b") {
            count++;
        }
    }

    return count;
}

console.log(countLetterB("BaBaBBa"));