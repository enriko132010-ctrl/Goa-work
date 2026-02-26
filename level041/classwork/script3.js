let people = [
    {firstname: 'Luka ', lastname: 'Varshanidze', age: 17 },
    {firstname: 'giorgi', lastname: 'lomadze', age: 18},
    {firstname: 'andria', lastname: 'malaymadze', age: 20},
    {firstname: "Tamar", lastname: "Lomidze", age: 16 },
    {firstname: "Ani", lastname: "beroshvili", age: 19 }
];

function filter(array, callback) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    
    if (callback(item)) {
      result.push(item); 
    }
  }

  return result; 
}

let adults = filter(people, (person) => person.age >= 18);

console.log(adults);

