//queryselector finds the element by its class name which is passed as argument in the querySelector.
const todoinput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');
const filter = document.querySelector('.filter-todo');



todoButton.addEventListener("click", addtodo)
todolist.addEventListener("click", deleteCheck)
filter.addEventListener("click", filterTodo)


function  deleteCheck(e) {
    const item = e.target;
    //DELETE TODO
    if (item.classList[0] === "trash-btn")
    {
        const todelete = item.parentElement;
        todelete.classList.add("fall")
        setTimeout(() => { todelete.remove();}, 500);
        
      }
    //CHECK MARK
    if (item.classList[0] === "complete-btn") {
        const tocheck = item.parentElement;
        tocheck.classList.toggle('completed');
    }
}

function addtodo(event) {
    //Prevent Form From Submitting When Submit Button Clicked
    event.preventDefault();
    console.log("Phase 1 works")
    //Add todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo")
    //Add a Li(list)
    const newtodo = document.createElement('li');
    newtodo.innerText = todoinput.value;
    newtodo.classList.add("todo-item");
    todoDiv.appendChild(newtodo);
    //Adding Buttons
    //CHeck Button
    const completebutton = document.createElement("button");
    completebutton.innerHTML = '<i class="fas fa-check"></i>';
    completebutton.classList.add("complete-btn");
    todoDiv.appendChild(completebutton);
    //Trash button
     const trashbutton = document.createElement("button");
    trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
    trashbutton.classList.add("trash-btn");
    todoDiv.appendChild(trashbutton);
    //APPEND DIV TO TODOLIST UL
    todolist.appendChild(todoDiv);
    //Clear Input Value
    todoinput.value = "";




}
function filterTodo(e) {
    const todos = todolist.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display ='flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                  if (todo.classList.contains('completed')) {
                    todo.style.display = 'none';
                } else {
                    todo.style.display = 'flex';
                }
                break;

            
        }
    });
    
}