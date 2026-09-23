// const { act } = require("react");

let defaultTodos = [{
    id : Date.now() +  1,
    text : "Go to Gym",
    isCompleted : false,
}, {
     id : Date.now() + 2,
    text : "I will complete my lecture at 8 P.M",
    isCompleted : false,
}, {
     id : Date.now() + 3,
    text : "Drinking 2L water",
    isCompleted : false,
}];

let todos = JSON.parse(localStorage.getItem("todos")) || defaultTodos;


const todoform = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const formBtn = document.querySelector("#form-btn");
let taskCount = document.querySelector("#task-count");
let completeCount = document.querySelector("#complete-count");
let cancelBtn = document.querySelector("#cancel-btn");

let editTodoId = null;

//helper function to scae crnt state to browser storage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

//form submit
todoform.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoValue = todoInput.value.trim();
    // todos.push(todoValue); //this for saving
    // console.log(todoValue);
    if(!todoValue) {
        return;
    }

    console.log({editTodoId, todoValue});

    if(editTodoId) {
        //editing
        todos = todos.map((todo) => {
            if(todo.id === Number(editTodoId)) {
                return {
                    ...todo, 
                    text : todoValue
                }
            }
            return todo;
        }) 

    } else {
        //adding
        let newTodo = {
         id: Date.now(),
        text: todoValue,
        isCompleted : false
        }
        todos.push(newTodo); //adding new todo to existing todos list 
    }
    saveTodos();
    cancelEdit();
    renderTodo();
    
    // let newTodo = { //adding new in the exisitng array instead of reloading entire array
    //     id: Date.now(),
    //     text: todoValue,
    //     isCompleted : false
    // }

    // addtodo(newTodo); //new add 
});

function renderTodo() {
    todoList.innerHTML = ""
    todos.forEach((todo) => {
//         console.log(todos);
//    addtodo(todo);
  const li = document.createElement("li");
// 
    li.className = `flex gap-2 border border-slate-300 p-4 rounded-xl`
     
    li.dataset.id = todo.id;

    li.innerHTML = ` 
        <input data-action="toogle" ${todo.isCompleted ? "checked" : ""} type="checkbox">
                    <p class="flex-1 ${todo.isCompleted ? "line-through text-red-400" : ""}">${todo.text}</p>
                    <div class="flex gap-2">
                        <button data-action="edit" class="px-2.5 py-1 text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 rounded transition-colors cursor-pointer" >Edit</button>
                        <button data-action="delete" class="px-2.5 py-1 text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded transition-colors cursor-pointer" >Delete</button>
                    </div>`

                    todoList.append(li); 
});

    taskCount.textContent = `TASKS (${todos.length})`;
    completeCount.textContent = `COMPLETED: ${todos.filter((todo) => todo.isCompleted).length}`
}

// renderTodo(); // first time render 

// function addtodo(todo) {
//  const li = document.createElement("li");
    
//     li.dataset.id = todo.id;
//     li.className = `flex gap-2 borde border-slate-300 p-4 rounded-xl`;
//     li.innerHTML = ` 
//     <input data-id=${todo.id} ${todo.isCompleted === true ? 'checked' : ""} type="checkbox">
//     <p class="flex-1"> ${todo.text} </p>
//      <div class="flex gap-2">
//                         <button data-action="edit" data-id=${todo.id}>Edit</button>
//                         <button data-action="delete" data-id=${todo.id}>Delete</button>
//                     </div>    
//                     `

//     todoList.append(li); //ul - li parent exact valid html code
// }
//event delegation

todoList.addEventListener('click', (e) => {
    // e.stopPropagation();
  

    let li = e.target.closest('li'); 
    if(!li) return;

    let id = li.dataset.id; 
    // let btn = e.target.closest('button');
    let action = e.target.dataset.action;
    
    // let checkbox = e.target.closest('input[type="checkbox"]');

    if(action === "delete") {
        deleteTodo(id);
    } 


    if(action === "edit") {
        //edit
        startEdit(id);
    }
        // console.log("editing...");
    //     let currentTodo = todos.find((todo) => {
    //         if(todo.id === Number(id)) {
    //             return todo;
    //         }
            
    //     })

    //     todoInput.value = currentTodo.text;
    //     formBtn.textContent = "update";
    // }

    if(action === "toogle") {
       todos = todos.map((todo) => {
        if(todo.id === Number(id)) {
            return {
                ...todo,
                isCompleted: !todo.isCompleted
            }
        }
        return todo;
       })
       saveTodos();
       renderTodo()
    }
    });

//     if(checkbox) {
//         todos = todos.map((todo) => {
//             if(todo.id === Number(id)) {
//                 // console.log("hi");
//                 return {
//                     ...todo,
//                     isCompleted: !todo.isCompleted
//                 }
//             }

//             return todo;
//         })
//         console.log(todos);
//     }
// })
function deleteTodo(id) {
    // e.target.closest('li').remove();
    if(editTodoId === id) {
        cancelEdit();
    }
    todos = todos.filter((todo) => todo.id !== Number(id));

    saveTodos();
    renderTodo();
}

function startEdit(id) {
    editTodoId = id;

    let currentTodo = todos.find((todo) => todo.id === Number(id));    

    todoInput.value = currentTodo.text;
    todoInput.focus();

    formBtn.textContent = "update";
    formBtn.className =  "px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors cursor-pointer";

    cancelBtn.classList.remove("hidden");
}

function cancelEdit() {
    editTodoId = null;
    
    todoInput.value = "";

    formBtn.textContent = "Add";
    formBtn.className = "px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors cursor-pointer";

    cancelBtn.classList.add("hidden");
}

cancelBtn.addEventListener("click", () => {
    cancelEdit();
});

renderTodo();