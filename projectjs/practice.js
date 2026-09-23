const todoform = document.querySelector("#todo-form");
const todoInput = document.getElementById("todo-input");
let todoList = document.querySelector("#todo-list");
let formBtn = document.querySelector("#form-btn");
let cancelBtn = document.querySelector("#cancel-btn");
let tastCount = document.querySelector("#task-count");
let completeCount = document.querySelector("#complete-count");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// let todos = [{ id: 1, text: "going to gym", isCompleted: false },
//     { id: 2, text: "drink water", isCompleted: false }
// ];

let editTodoId = null;

todoform.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoValue = todoInput.value.trim();

    if(!todoValue) {
        return;
    }

    console.log({editTodoId, todoValue});

    if(editTodoId) {
        todos = todos.map((todo) => {
            if(todo.id === Number(editTodoId)) {
                return {
                    ...todo,
                    text : todoValue
                }
            }
            return todo;
        })

        localStorage.setItem("todos", JSON.stringify(todos));

    } else {
        let newTodo = {
            id : Date.now(),
            text: todoValue,
            isCompleted : false
        }
        todos.push(newTodo);
          localStorage.setItem("todos", JSON.stringify(todos));
        
    }
    cancelEdit();
    renderTodo();
});

todoList.addEventListener('click', (e) => {
    e.stopPropagation();

    let li = e.target.closest('li');
    if(!li) return;

    let id = li.dataset.id;
    let action = e.target.dataset.action;

    if(action === "delete") {
        deleteTodo(id);
    }

    if(action === "edit") {
        startEdit(id);
    }

    if(action === "toggle") {
        todos = todos.map((todo) => {
            if(todo.id === Number(id)) {
                return {
                    ...todo,
                    isCompleted : !todo.isCompleted
                }
            }
            return todo;
        })

        renderTodo();
    }
})

function renderTodo() {
    todoList.innerHTML = "";

    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.className = `flex gap-2 border border-slate-300 p-4 rounded-xl font-times-new-roman text-xm`

        li.dataset.id = todo.id;
        li.innerHTML = `<input data-action="toggle" ${todo.isCompleted ? "checked" : ""} type="checkbox">
        <p class="flex-1 ${todo.isCompleted ? "line-through text-red-500" : ""}"> ${todo.text}</p>
        <div class="flex gap-2">
        <button data-action="edit" class="px-2.5 py-1 text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 rounded transition-colors cursor-pointer"> Edit </button>
       <button data-action="delete" class="px-2.5 py-1 text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded transition-colors cursor-pointer">Delete </button>
       </div>
        `
        todoList.append(li);

    });

    tastCount.textContent=`Tasks (${todos.length})`;
    completeCount.textContent = `Completed: (${todos.filter((todo) => todo.isCompleted).length})`;
}
renderTodo();


function startEdit(id) {
    editTodoId = id;

    let currentTodo = todos.find((todo) => {
        if(todo.id === Number(id)) {
            return todo;
        }
    });

    todoInput.value = currentTodo.text;
    // console.log(todoInput);

    formBtn.textContent = "update";

    formBtn.className = "px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors cursor-pointer";

    cancelBtn.classList.remove("hidden");
}

function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== Number(id));
    localStorage.setItem("todos" , JSON.stringify(todos));
    renderTodo();
}

function cancelEdit() {
    editTodoId = null;
    
    todoInput.value = "";

    formBtn.textContent = "ADD";

    formBtn.className = "px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors cursor-pointer";

    cancelBtn.classList.add("hidden");
}

cancelBtn.addEventListener('click', () => {
    cancelEdit();
})

// renderTodo();
