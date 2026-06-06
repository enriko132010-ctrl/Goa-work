// const pairs = new Map([
//     ["key1", "value1"],
//     ["key2", "value2"],
//     ["key3", "value3"]
// ]);
// //აბრუნებს მითითებული key_ს value_ს
// console.log(pairs.get("key1")) //value1

// //set()_ამატებს ახალ key_value_ს წყვილს
// pairs.set("key4", "value4");
// console.log(pairs);

// // has() – ამოწმებს არსებობს თუ არა კონკრეტული key true ან false
// console.log(pairs.has("key2")); // true
// console.log(pairs.has("key5")); // false


// // keys() – აბრუნებს ყველა key-ს (Iterator)
// console.log(pairs.keys());


// // values() – აბრუნებს ყველა value-ს (Iterator)
// console.log(pairs.values());


// // delete() – შლის კონკრეტულ key-value წყვილს
// pairs.delete("key3");
// console.log(pairs);


// // clear() – მთლიანად ასუფთავებს Map-ს
// pairs.clear();
// console.log(pairs);


const mySet = new Set();

mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);
mySet.add(50);

// ჩვენ თუ იგივე მნიშვნელობას დავამატებთ აქ, არ დაემატება (რადგან Set უნიკალურია)
mySet.add

console.log(mySet);

// has() – ამოწმებს არსებობს თუ არა კონკრეტული მნიშვნელობა Set-ში
console.log(mySet.has(30)); // true
console.log(mySet.has(60)); // false

// values() – აბრუნებს ყველა მნიშვნელობას (Iterator)
console.log(mySet.values())
// დააბრუნებს SetIterator {10, 20, 30, 40, 50}

// delete შლის კონკრეტულ ელემენტს ამ შემთხვევაში 40_ს
mySet.delete(40);

console.log(mySet); // Set(4) {10, 20, 30, 50}


// clear() – შლის Set-ში არსებულ ყველა ელემენტს
mySet.clear();
console.log(mySet);