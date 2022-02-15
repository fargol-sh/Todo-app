// VARIABLES
let changeMode = document.querySelector(".header-icon");
let body = document.querySelector("body");
let header = document.querySelector(".header");
let todoNew = document.querySelector(".todo__new");
let todoNewCheckboxButton = document.querySelector(".todo__new--checkbox-button");
let todoNewInput = document.querySelector(".todo__new--input");
let todoList = document.querySelector(".todo__list");
let todoListCheckboxButtons = document.querySelectorAll(".todo__list--checkbox-button");
let todoListItems = document.querySelectorAll(".todo__list--item");
let todoListLabels = document.querySelectorAll(".todo__list--checkbox-labelText");
let todoListInputs = document.querySelectorAll(".todo__list--checkbox-input");
let todoStatusItems = document.querySelectorAll('.todo__list--footer-statusItems');
let todoClear = document.querySelector('.todo__list--footer-clearText');
let sunIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>';
let moonIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>';
let mode = 0; // light mode by default


//HANDLERS
const changeModeHandler = function() {
  if(mode === 0) { // change to dark mode
    mode = 1;
    header.style.backgroundImage = "url(../images/bg-desktop-dark.jpg)";
    changeMode.innerHTML = sunIcon;
    body.style.backgroundColor = "#161722";
    todoNew.style.backgroundColor = "#25273c";
    todoNewInput.style.backgroundColor = "#25273c";
    todoList.style.backgroundColor = "#25273c";
    todoList.style.boxShadow = "0 2.5rem 10rem rgba(#000, 1);"
    for(let i = 0; i < todoListItems.length; i++) {
      todoListItems[i].style.borderBottom = "1px solid #3A3C5A";
      todoListLabels[i].style.color = "hsl(236, 9%, 61%)";
      if(todoListInputs[i].checked === true) {
        todoListLabels[i].style.color = '#4E4A5F';
      }
    }
    todoNewCheckboxButton.style.border = '1px solid #3A3C5A';
    todoNewCheckboxButton.style.background = '#25273c'; //"linear-gradient(#25273c, #25273c) padding-box, linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box";
    for(let i = 0; i < todoListCheckboxButtons.length; i++) {
      todoListCheckboxButtons[i].style.border = '1px solid #3A3C5A';
      todoListCheckboxButtons[i].style.background = '#25273c'; //"linear-gradient(#25273c, #25273c) padding-box, linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box";
    }
} else {   // change to light mode
    mode = 0;
    header.style.backgroundImage = "url(../images/bg-desktop-light.jpg)";
    changeMode.innerHTML = moonIcon;
    body.style.backgroundColor = "hsl(0, 0%, 98%)";
    todoNew.style.backgroundColor = "#fff";
    todoNewInput.style.backgroundColor = "#fff";
    todoList.style.backgroundColor = "#fff";
    for(let i = 0; i < todoListItems.length; i++) {
      todoListItems[i].style.borderBottom = "1px solid hsl(236, 33%, 92%)";
      todoListLabels[i].style.color = "hsl(235, 19%, 35%)";
      if(todoListInputs[i].checked === true) {
        todoListLabels[i].style.color = 'hsl(233, 11%, 84%)';
      }
    }
    todoNewCheckboxButton.style.background = '#fff';//"linear-gradient(#fff, #fff) padding-box, linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box";
    todoNewCheckboxButton.style.border = '1px solid hsl(236, 33%, 92%)';
    for(let i = 0; i < todoListCheckboxButtons.length; i++) {
      todoListCheckboxButtons[i].style.background = '#fff';//"linear-gradient(#fff, #fff) padding-box, linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box";
      todoListCheckboxButtons[i].style.border = '1px solid hsl(236, 33%, 92%)';
    }
  }
}


// EVENT LISTENRES
// change mode
changeMode.addEventListener("click", changeModeHandler);

// change checkbox state
for(let i = 0; i < todoListInputs.length; i++) {
  todoListInputs[i].addEventListener("change", (event) => {
    if(event.currentTarget.checked === true) { // checked
      if(mode === 0) { // light mode
        todoListLabels[i].style.color = 'hsl(233, 11%, 84%)';
      } else { // dark mode
        todoListLabels[i].style.color = '#4E4A5F';
      }
    } else {   // unchecked
      if(mode === 0) { // light mode
        todoListLabels[i].style.color = 'hsl(235, 19%, 35%)';
      } else { // dark mode
        todoListLabels[i].style.color = 'hsl(236, 9%, 61%)';
      }
    }
  });
}

//status and clear hover state
for(let i = 0; i < todoStatusItems.length; i++) {
  todoStatusItems[i].addEventListener('mouseenter', (event) => {
    if(mode == 0) { // light mode
      todoStatusItems[i].style.color = '#4E4A5F';
    } else { // dark mode
      todoStatusItems[i].style.color = 'hsl(0, 0%, 98%)';
    }
  });
  todoStatusItems[i].addEventListener('mouseleave', (event) => {
      todoStatusItems[i].style.color = 'hsl(236, 9%, 61%)';
  });
}
todoClear.addEventListener('mouseenter', (event) => {
  if(mode == 0) { // light mode
    todoClear.style.color = '#4E4A5F';
  } else { // dark mode
    todoClear.style.color = 'hsl(0, 0%, 98%)';
  }
});
todoClear.addEventListener('mouseleave', (event) => {
  todoClear.style.color = 'hsl(236, 9%, 61%)';
});

// checkbox hover state
for(let i = 0; i < todoListItems.length; i++) {
  todoListItems[i].addEventListener('mouseenter', (event) => {
    if(mode == 0) {
      todoListCheckboxButtons[i].style.background = "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box";
    } else {
      todoListCheckboxButtons[i].style.background = "linear-gradient(#25273c, #25273c) padding-box, linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box";
    }
    todoListCheckboxButtons[i].style.border = '1px solid transparent';
  });

  todoListItems[i].addEventListener('mouseleave', (event) => {
    if(mode == 0) { // light mode
      todoListCheckboxButtons[i].style.background = "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right bottom, hsl(236, 33%, 92%), hsl(236, 33%, 92%)) border-box";
      todoListCheckboxButtons[i].style.border = '1px solid hsl(236, 33%, 92%)';
    } else { // dark mode
      todoListCheckboxButtons[i].style.background = "linear-gradient(#25273c, #25273c) padding-box, linear-gradient(to right bottom, #3A3C5A, #3A3C5A) border-box";
      todoListCheckboxButtons[i].style.border = '1px solid #3A3C5A';
    }
  });
}

















////
