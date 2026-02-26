const array = [12, "hello", true, "javascript", 55,"world"];

const onlyStrings = [];

for (let item of array) {
  if (typeof item === "string") {
    onlyStrings.push(item);
  }
}

console.log(onlyStrings);  

