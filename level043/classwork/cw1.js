const person = {
  name: "Enriko",
  age: 15,
  city: "batumi"
};

console.log(Object.keys(person));   


console.log(Object.values(person)); 

const numbers = [1, 2, 3, 4];

for(const num of numbers) {
    console.log(num)
}

const car = {
    brand: 'BMW',
    year: 2019,
    color: 'black'
};

for (const key in car) {
  console.log(key, car[key]);
}

