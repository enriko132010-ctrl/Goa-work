
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   info() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age); 
//     this.grade = grade; 
//   }

//   study() {
//     console.log("Student is studying");
//   }
// }

// const student1 = new Student("Luka", 16, "10th grade");
// student1.info();   
// console.log(student1.grade); 
// student1.study();




// მემკვიდრეობის გამოყენების პლიუსები
//კოდის გამეორება აღარ გვჭირდება 
//კოდი ხდება უფრო სუფთა და მარტივად წასაკითხი
//თუ მომავალში ცვლილება დაგვჭირდება (მაგალითად Person კლასში), ცვლილება ერთ ადგილას კეთდება და ყველა შვილ კლასზე აისახება.











let count = 0;

const paragraph = document.getElementById("counter");

const button = document.getElementById("btn");

button.addEventListener("click", function() {
  count++; 
  paragraph.textContent = count; 
});



