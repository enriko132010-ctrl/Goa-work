const filter = (arr, fn) => {
    const result = [];
    for (const item of arr) {
        if (fn(item)) {
            result.push(item);
        }
    }
    return result;
}

const persons = [
  { name: 'Enriko', lastname: 'Mgeladze', age: 17 },
  { name: 'Nia', lastname: 'Beridze', age: 22 },
  { name: 'Giorgi', lastname: 'lomadze', age: 19 },
  { name: 'Lile', lastname: 'qarcivadze', age: 16 },
  { name: 'Valeri', lastname: 'Tsereteli', age: 25 },
];

const isAdult = person => person.age >= 18;

// გამოყენება
const adults = filter(persons, isAdult);
console.log(adults);