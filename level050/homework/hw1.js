const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Add button click
addBtn.addEventListener("click", () => {
    const taskText = input.value; // input-დან ვიღებთ ტექსტს

    if (taskText === "") return; // ცარიელი არ დაემატოს

    // ვქმნით li ელემენტს
    const li = document.createElement("li");

    // ვქმნით span-ს ტექსტისთვის
    const span = document.createElement("span");
    span.textContent = taskText;

    // EDIT ღილაკი
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    // DELETE ღილაკი
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // EDIT ფუნქცია
    editBtn.addEventListener("click", () => {
        const newTask = prompt("Edit task:", span.textContent);
        if (newTask !== null && newTask !== "") {
            span.textContent = newTask;
        }
    });

    // DELETE ფუნქცია
    deleteBtn.addEventListener("click", () => {
        li.remove(); // მთლიანად შლის ელემენტს
    });

    // ვამატებთ li-ში ყველაფერს
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // ul-ში დამატება
    list.appendChild(li);

    // input-ის გასუფთავება
    input.value = "";
});