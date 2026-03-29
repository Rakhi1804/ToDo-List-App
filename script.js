function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") return;

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = taskText;

    
    span.onclick = function () {
        span.classList.toggle("completed");
    };

    
    let actions = document.createElement("div");
    actions.className = "actions";

    
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";
    editBtn.onclick = function () {
        let newTask = prompt("Edit task:", span.innerText);
        if (newTask) span.innerText = newTask;
    };

    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "❌";
    deleteBtn.onclick = function () {
        li.remove();
    };

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}