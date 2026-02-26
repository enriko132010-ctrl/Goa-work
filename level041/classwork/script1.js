// const robot = {
//     name: 'Samsung XB1GFD',
//     batery: 80,
//     greet: function(firstname){
//         console.log(`Hello ${firstname}, my name is ${this.name}`);
//     }
// }

const robot = {
    name: 'Samsung XB1GFD',
    batery: 80,
    greet(firstname){
        console.log(`Hello ${firstname}, my name is ${this.name}`);
    }
}


robot.greet('Luka');
robot.greet('Lile');
robot.greet('Nia');





// ობიექტის შექმნა
let robo = {
  name: "RoboX",   // კუთვნილება: სახელი
  model: "RX100",  // კუთვნილება: მოდელი
  isActive: true   // კუთვნილება: აქტიური მდგომარეობა
};

// კუთვნილების შეცვლა
robot.name = "RoboY"; // ახლა სახელია "RoboY"

// ახალი კუთვნილების დამატება
robot.color = "red";  // დამატებულია ახალი კუთვნილება "color"

// კუთვნილების წაშლა
delete robot.isActive; // წაშლილია "isActive"

console.log(robot);

// ობიექტი არის მონაცემების და ფუნქციების ერთიანი ჯგუფი, რომელიც აღწერს რაღაცას

