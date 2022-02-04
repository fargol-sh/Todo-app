// VARIABLES
let changeMode = document.querySelector(".header-icon");
let body = document.querySelector("body");
let header = document.querySelector(".header");
let todoNew = document.querySelector(".todo__new");
let todoNewCheckboxButton = document.querySelector(".todo__new--checkbox-button");
let todoNewInput = document.querySelector(".todo__new--input");
let todoList = document.querySelector(".todo__list");
let todoListCheckboxButtons = document.querySelectorAll(".todo__list--checkbox-button");
let todoListItemsBorder = document.querySelectorAll(".todo__list--item");
let todoListLabels = document.querySelectorAll(".todo__list--checkbox-labelText");
let mode = 0; // light mode by default

//HANDLERS
const changeModeHandler = function() {
  if(mode === 0) {
    mode = 1;
    header.style.backgroundImage = "url(../images/bg-desktop-dark.jpg)";
    body.style.backgroundColor = "#161722";
    todoNew.style.backgroundColor = "#25273c";
    todoNewInput.style.backgroundColor = "#25273c";
    todoList.style.backgroundColor = "#25273c";
    todoList.style.boxShadow = "0 2.5rem 10rem rgba(#000, 1);"
    for(let i = 0; i < todoListItemsBorder.length; i++) {
      todoListItemsBorder[i].style.borderBottom = "1px solid #4E4A5F";
      todoListLabels[i].style.color = "hsl(236, 9%, 61%)";
    }
    //todoNewCheckboxButton.style.background = "linear-gradient(#25273c, #25273c) padding-box, linear-gradient(to right bottom, hsl(236, 33%, 92%), hsl(236, 33%, 92%)) border-box";
    //for(let i = 0; i < todoListCheckboxButtons.length; i++) {
    //  todoListCheckboxButtons[i].style.background = "linear-gradient(#25273c, #25273c) padding-box, linear-gradient(to right bottom, hsl(236, 33%, 92%), hsl(236, 33%, 92%)) border-box";
  //  }
  } else {
    mode = 0;
    header.style.backgroundImage = "url(../images/bg-desktop-light.jpg)";
    body.style.backgroundColor = "hsl(0, 0%, 98%)";
    todoNew.style.backgroundColor = "#fff";
    todoNewInput.style.backgroundColor = "#fff";
    todoList.style.backgroundColor = "#fff";
    for(let i = 0; i < todoListItemsBorder.length; i++) {
      todoListItemsBorder[i].style.borderBottom = "1px solid hsl(236, 33%, 92%)";
      todoListLabels[i].style.color = "hsl(235, 19%, 35%)";
    }
  //  todoNewCheckboxButton.style.background = "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right bottom, hsl(236, 33%, 92%), hsl(236, 33%, 92%)) border-box";
    //for(let i = 0; i < todoListCheckboxButtons.length; i++) {
    //  todoListCheckboxButtons[i].style.background = "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right bottom, hsl(236, 33%, 92%), hsl(236, 33%, 92%)) border-box";
  //  }
  }
}


// EVENT LISTENRES
changeMode.addEventListener("click", changeModeHandler);
