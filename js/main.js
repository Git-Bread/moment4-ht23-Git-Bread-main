"use strict"

//----------------------- base variables -----------------------
let todoItems = [];
let newTodoInput;
let saveButton = document.getElementById("newtodobutton");
let todoList = document.getElementById("todolist");
let clear = document.getElementById("clearbutton");
let readyToAdd = false;

//----------------------- on button press function -----------------------
saveButton.addEventListener("click", function(){
    //gets value of field
    newTodoInput = document.getElementById("newtodo").value;

    //if value is empty exit function
    if (!newTodoInput) {
        return;
    }
    if (!readyToAdd) {
        alert("it needs to be atleast 5 characters");
        return;
    }

    //adds value to localstorage
    todoItems.push(newTodoInput);
    localStorage.todoItemsList = JSON.stringify(todoItems);
    location.reload();
});


//----------------------- loads the todolist on load -----------------------
window.addEventListener("load", function() { 

    //gets list of items as a array, needs json parse since localstorage does not store arrays
    if(localStorage.getItem("todoItemsList")) {
        todoItems = JSON.parse(localStorage.getItem("todoItemsList"));
    }
    else {
        localStorage.setItem("todoItemsList", JSON.stringify(todoItems));
    }

    //creates a article for every value in todoItems and inserts those under todo
    for (let index = 0; index < todoItems.length; index++) {
        let newTodoItem = document.createElement("article");
        newTodoItem.innerHTML = todoItems[index];
        todoList.appendChild(newTodoItem);
    }
    
});


//----------------------- clear button -----------------------
clear.addEventListener("click", function(){
    //adds a warning so the list wont be unintentionaly deleted
    if (confirm("are you sure you want to delete all the items?")) {
        localStorage.clear();
        location.reload();
    }
    else {
        return;
    }
});


//----------------------- removal of singular elements -----------------------

//onload instead of an event listener, is there any point to not doing it this way? (keeping the other one as is since i dont know if this counts as an eventhandler)
window.onload = function() {

    //gets all articles
    let articleArray = document.querySelectorAll("article");

    //tracks the position of element for removal
    let index = -1;

    articleArray.forEach(function(item) {
        index++;
        let elementPosition =  index;

        //adds event listener to each that removes itself (removes element from array that is at its current position)
        item.addEventListener("click", function() {
            todoItems.splice(elementPosition, 1);
            console.log(todoItems);
            localStorage.todoItemsList = JSON.stringify(todoItems);
            location.reload();
        });
    });
}


//----------------------- inputSizeCounter ----------------------

//checks if input lenght is 5 or above
document.getElementById("newtodo").addEventListener("input", function() {
    let input = this.value;
    console.log(input);
    if(5 > input.length) {
        readyToAdd = false;
    }
    else {
        readyToAdd = true
    }
});
