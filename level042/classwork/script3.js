const numbers = [];

for (let i = 0; i < 5; i++) {
  const num = Number(prompt("Enter the number:"));
  numbers.push(num);
}

const sum = numbers.reduce((total, item) => total + item, 0);  //reduce — მასივის ყველა ელემენტს აბამს და ერთ საბოლოო 
// მნიშვნელობად აქცევს.

console.log("total is:", sum);
