// hw 5
// const btn = document.getElementById("changeColor");

// btn.addEventListener("click", () => {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// })

// hw6

const btn = document.getElementById("addTask");
const list = document.getElementById("taskList");

btn.addEventListener("click", () => {
    const task = prompt("Enter the task: ")

    if(task) {
        const li = document.createElement("li");
        li.textConstent = task;
        list.appendChild(li);
    }
})

// hw8

// const subtract = document.getElementById('subtract');
// const add = document.getElementById('add');
// const multiply = document.getElementById('multiply');
// const division = document.getElementById('division');

// const result = document.getElementById('result');

// const num1 = parseInt(prompt('Enter Number one:'));
// const num2 = parseInt(prompt('Enter Number two:'));

// subtract.addEventListener('click', () => {
//     if(num1 > num2){
//         result.textContent = `Result: ${num1 - num2}`;
//     } else {
//         result.textContent = `Result: ${num2 - num1}`;
//     };
// });

// add.addEventListener('click', () => {
//     result.textContent = `Result: ${num1 + num2}`;
// });

// multiply.addEventListener('click', () => {
//     result.textContent = `Result: ${num1 * num2}`;
// });

// division.addEventListener('click', () => {
//     if(num1 === 0 || num2 === 0){
//         console.log("Can't devide by 0");
//     } else {
//         result.textContent = `Result: ${Math.round(num1 / num2)}`;
//     };
// });


