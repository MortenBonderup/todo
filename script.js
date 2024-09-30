let todos = [];

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
        todos.push(todoText);
        todoInput.value = "";
        renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        todoList.innerHTML += `
            <li>
                ${todos[i]}
                <button class="delete-btn" onclick="deleteTodo(${i})">Delete</button>
            </li>
        `;
    }
}
