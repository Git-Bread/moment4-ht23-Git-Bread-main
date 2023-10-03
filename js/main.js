"use strict"

//variables
let newTodoInput;
let saveButton = document.getElementById("newtodobutton");

//on button press function
saveButton.addEventListener("click", function(){
    //gets value of field
    newTodoInput = document.getElementById("newtodo").value;

    //if value is empty exit function
    if (!newTodoInput) {
        return;
    }

    console.log(newTodoInput);
});
