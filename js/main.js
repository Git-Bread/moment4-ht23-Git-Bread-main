"use strict"

//variables
let todoItems = ["dwa", "nan"];
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

    todoItems.push(newTodoInput);
    console.log(todoItems);
    location.reload();
});

//loads the todolist on load
window.addEventListener("load", function() { 
    //creates a article for every value in todoItems and inserts those under todo
    for (let index = 0; index < todoItems.length; index++) {
        let newTodoItem = document.createElement("article");
        newTodoItem.innerHTML = todoItems[index];
        todoList.appendChild(newTodoItem);
    }
});

//clear button
clear.addEventListener("click", function(){
    todoItems = [];
    location.reload();
});
