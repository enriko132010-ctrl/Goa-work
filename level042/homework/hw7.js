let nested = [
  ["Giorgi", "Mari", "Tazo"],
  ["Luka", "Nika"],
  ["Enriko", "Dato"], 
  ["Ana", "Saba"]
];

let myName = "Enriko";

let foundIndex = -1;

for (let i = 0; i < nested.length; i++) {
  if (nested[i].includes(myName)) {
    foundIndex = i;
    break;
  }
}

if (foundIndex !== -1) {
  console.log("Your name is in array index:", foundIndex);
  console.log("That array:", nested[foundIndex]);
} else {
  console.log("Your name wasn't found");
}
