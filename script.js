document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create new task
        const taskItem = document.createElement('li');

        // Task content span
        const taskContent = document.createElement('span');
        taskContent.innerText = taskText;

        // Edit button
        const editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', () => editTask(taskItem, taskContent));

        // Complete button
        const completeBtn = document.createElement('button');
        completeBtn.innerText = 'Complete';
        completeBtn.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskItem.remove();
        });

        // Append elements to task item
        taskItem.appendChild(taskContent);
        taskItem.appendChild(editBtn);
        taskItem.appendChild(completeBtn);
        taskItem.appendChild(deleteBtn);

        // Append task item to task list
        document.getElementById('task-list').appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

function editTask(taskItem, taskContent) {
    const newTaskText = prompt("Edit your task:", taskContent.innerText);
    if (newTaskText !== null) {
        taskContent.innerText = newTaskText;
    }
}
