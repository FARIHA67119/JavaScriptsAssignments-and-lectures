
const todoform = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const formBtn = document.querySelector("#form-btn");
let taskCount = document.querySelector("#task-count");
let completeCount = document.querySelector("#complete-count");
let cancelBtn = document.querySelector("#cancel-btn");




let todos = JSON.parse(localStorage.getItem("todos")) || [];

let editTodoId = null; //flag

//add & update the todos
todoform.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoValue = todoInput.value.trim();
    // todos.push(todoValue); //this for saving
    // console.log(todoValue);
    if (!todoValue) {
        return;
    }

    console.log({ editTodoId, todoValue });

    if (editTodoId) {
        //editing
        todos = todos.map((todo) => {
            if (todo.id === Number(editTodoId)) {
                return {
                    ...todo,
                    text: todoValue
                }
            }
            return todo;
        })

        localStorage.getItem("todos", JSON.stringify(todos));

    } else {
        //adding
        let newTodo = {
            id: Date.now(),
            text: todoValue,
            isCompleted: false
        }
        todos.push(newTodo); //adding new todo to existing todos list 
        localStorage.getItem("todos", JSON.stringify(todos));
    }

    cancelEdit();
    renderTodo();


});

function renderTodo() {
    todoList.innerHTML = "";

    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.className = `flex gap-2 border border-slate-300 p-4 rounded-xl font-serif text-xl`

        li.dataset.id = todo.id;

        li.innerHTML = ` 
       <input data-action="toogle" ${todo.isCompleted ? "checked" : ""} type="checkbox">
                    <p class="flex-1 ${todo.isCompleted ? "line-through text-red-400" : ""}">${todo.text}</p>
                    <div class="flex gap-2">
                        <button data-action="edit" class="px-2.5 py-1 text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 rounded transition-colors cursor-pointer ">Edit</button>
                        <button data-action="delete" class="px-2.5 py-1 text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded transition-colors cursor-pointer" >Delete</button>
                    </div>`

        todoList.append(li);
    });

    taskCount.textContent = `TASKS (${todos.length})`;
    completeCount.textContent = `COMPLETED: ${todos.filter((todo) => todo.isCompleted).length}`
}

renderTodo(); // first time render 


//event delegation
todoList.addEventListener('click', (e) => {
    e.stopPropagation();


    let li = e.target.closest('li');
    // console.log(li);
    let id = li.dataset.id;

    let action = e.target.dataset.action;

    // console.log(action);

   
    if (action === "delete") {
        deleteTodo(id);
    }


    if (action === "edit") {    //edit
        startEdit(id);
    }


    if (action === "toogle") {
        todos = todos.map((todo) => {
          
            if (todo.id === Number(id)) {
                // console.log(todo.id);
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            } //its checking the check box and seeing whether check box is checked, if checked then giving red mark on the list
            return todo;
        })
        localStorage.getItem("todos", JSON.stringify(todos));
        renderTodo()
    }
});



function deleteTodo(id) {

    todos = todos.filter((todo) => todo.id !== Number(id));

    localStorage.getItem("todos", JSON.stringify(todos));
    renderTodo();
}

function startEdit(id) {
    editTodoId = id;

    let currentTodo = todos.find((todo) => {
        if (todo.id === Number(id)) {
            return todo;
        }
    });


    todoInput.value = currentTodo.text;


    formBtn.textContent = "update";

    formBtn.className = "px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors cursor-pointer";

    cancelBtn.classList.remove("hidden");
}

function cancelEdit() {
    editTodoId = null;

    todoInput.value = "";

    formBtn.textContent = "Add";
    formBtn.className = "px-5 py-2 bg-indigo-600 hover:bg-pink-500 text-white font-medium rounded-lg transition-colors cursor-pointer";

    cancelBtn.classList.add("hidden");
//    console.log(check);
}

cancelBtn.addEventListener("click", () => {
    cancelEdit();
});

// renderTodo();