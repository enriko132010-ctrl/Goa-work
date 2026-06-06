// Hoisting არის JavaScript-ის მექანიზმი,
// რომლის დროსაც ცვლადების და ფუნქციების დეკლარაციები
// კოდის შესრულებამდე "აიწევა" (გადაინაცვლებს) თავში.

// function hoisting

// ფუნქციის გამოძახება დეკლარაციამდე მუშაობს

sayHello();

function sayHello() {
    console.log("Hello");
}

// ზემოთ მოცემული კოდი იმუშავებს,
// რადგან function declaration სრულად hoistდება.