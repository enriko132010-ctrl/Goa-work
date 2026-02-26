let math = {
    Pi: 4.1222,

    add: function(a, b){
        return a + b
    },

    subtract: function(a, b){
        return a - b
    },

    multiply: function(a, b){
        return a * b
    },

    divide: function(a, b) {
        if (b !== 0 ){
      return a / b;
    } else {
      return "Error: Division by zero";
    }
    }
}

// მეთოდი (method) – ეს არის ფუნქცია, რომელიც ობიექტის შიგნითა ნაწილია. მაგალითად: add, subtract, multiply, divide.`

// this – მიუთითებს ობიექტზე, სადაც მეთოდი ინახება
console.log(math.add(5, 3));        
console.log(math.subtract(10, 4));  
console.log(math.multiply(6, 7));   
console.log(math.divide(20, 5));   
console.log(math.divide(5, 0));     
