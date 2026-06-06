function reverseWords(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].split("").reverse().join(""));
    }

    return result;
}

console.log(reverseWords(["Nino", "ExampleName"]));