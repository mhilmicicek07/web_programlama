
// ToDo Eleman Ekleme

// Eleman Seçimi

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let todos;


// Load Items Fonskiyonu
loadItems();


eventListeners();

function eventListeners() {
    // Submit Event
    form.addEventListener("submit", addNewItem);
    // Delete an Item
    taskList.addEventListener("click", deleteItem);
    // Delete all Item
    btnDeleteAll.addEventListener("click", deleteItems);

}

function loadItems() {
    todos = getItemsFromLS();
    todos.forEach(function (item) {
        createItem(item);
    })

}


// Get Items From Local Storage
function getItemsFromLS(){
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;

}
// Set Item To Local Storage
function setItemToLS(newTodo){
    todos = getItemsFromLS();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));

}

function createItem(newTodo) {
    // li(liste elemanı) oluşturma

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(newTodo));

    // a(link) oluşturmak

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    // Birbiriyle Bağlantılama 

    li.appendChild(a);

    taskList.appendChild(li);
}

function addNewItem(e) {
    if (input.value === '') {
        alert("add new item");
        // console.log("submit");
    }

    // Create Item

    createItem(input.value);

    setItemToLS(input.value);




    input.value = "";

    e.preventDefault();

}

// Eleman Silme

function deleteItem(e) {


    if (e.target.className === "fas fa-times") {
        if (confirm("Silmek İstediğinize Emin Misiniz?")) {
            // console.log(e.target);
            e.target.parentElement.parentElement.remove();
            deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        }
    }
    e.preventDefault();

}

function deleteTodoFromStorage(deletetodo){
    let todos = getItemsFromLS();

    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));

}

// Tüm Elemanları Silme

function deleteItems(e) {
    if (confirm("Tüm Elemanlari Silmek İstediğinize Emin Misiniz?")) {

        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();

    }
    // taskList.innerHTML=""; // Alternatif Yöntem
}





