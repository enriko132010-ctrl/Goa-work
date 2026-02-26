/*function checkAge() {
  const age = document.getElementById("ageInput").value;

  if (age >= 18) {
    alert("You can enter the website ");
  } else {
    alert("You can't enter website ");
  }
}*/


// switch უფრო კომფორტულია მაშინ,
// როცა ერთ და იმავე ცვლადს ვადარებთ ბევრ ზუსტ მნიშვნელობას.
// კოდი უფრო სუფთა და წაკითხვადია.
/*let grade = "C";

switch (grade) {
  case "A":
    console.log("Excellent!");
    break;

  case "B":
    console.log("Good!");
    break;

  case "C":
    console.log("Passed");
    break;

  case "D":
    console.log("Bad");
    break;

  default:
    console.log("Invalid grade");
}

// if/else ჯობია მაშინ,
// როცა გვჭირდება შედარებები

let age = 17;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}*/


function greet(name) {
  if (name) { 
    console.log("Hello, " + name + "!");
  } else {   
    console.log("Hello Guest!");
  }
}



let userName = prompt("Please enter your name:");

greet(userName);

//2)
function isEven(number) {
  if (number % 2 === 0) { 
    return "Even";
  } else {
    return "Odd";
  }
}


console.log(isEven(4)); 
console.log(isEven(7)); 

//3)

function gradeChecker(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}


console.log(gradeChecker(83)); 
console.log(gradeChecker(24)); 
console.log(gradeChecker(65)); 
console.log(gradeChecker(70)); 

//4)
function filterLongWords(words) {
  let longWords = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      longWords.push(words[i])
    }
  }
  return longWords
}

console.log(filterLongWords(["hi", "world", "cat", "javascript", "sun"]))






