"use strict"

//variables
let todoItems = [];
let newTodoInput;
let saveButton = document.getElementById("newtodobutton");
let todoList = document.getElementById("todolist");
let clear = document.getElementById("clearbutton");

//on button press function
saveButton.addEventListener("click", function(){
    //gets value of field
    newTodoInput = document.getElementById("newtodo").value;

    //if value is empty exit function
    if (!newTodoInput) {
        return;
    }

    //adds value to localstorage
    todoItems.push(newTodoInput);
    localStorage.todoItemsList = JSON.stringify(todoItems);
    location.reload();
});

//loads the todolist on load
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

//clear button
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});
