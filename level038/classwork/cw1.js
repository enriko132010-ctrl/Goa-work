// var
var name = "Enriko";
var name = "Giorgi"; 
console.log(name); // Giorgi

// var-ს არ აქვს block scope

// შეიძლება შემთხვევით თავიდან გამოაცხადო და ხშირად იწვევს ბაგებს





// let-ის მნიშვნელობის შეცვლა შეიძლება
let city = "Tbilisi";

city = "Batumi";

console.log(city); // Batumi

// let-ს აქვს block scope

// უფრო უსაფრთხოა ვიდრე var და მნიშვნელობის შეცვლა შესაძლებელია



// const-ის მნიშვნელობის შეცვლა არ შეიძლება
const country = "Georgia";

country = "Armenia";
// Error!

console.log(country); // Error!

// ყველაზე უსაფრთხოა, შემთხვევით ვერ შეცვლი მნიშვნელობას და კოდის წაკითხვა უფრო მარტივია
