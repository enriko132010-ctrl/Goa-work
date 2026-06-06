function findLongestWord(arr) {
    let longestWord = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }

    return longestWord;
}

const words = ["cat", "javascript", "dog", "elephant"];

console.log(findLongestWord(words));