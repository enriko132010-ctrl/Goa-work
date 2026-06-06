const button = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

button.addEventListener("click", () => {
    const task = prompt("Enter task:");

    const li = document.createElement("li");

    li.textContent = task;

    taskList.appendChild(li);
});