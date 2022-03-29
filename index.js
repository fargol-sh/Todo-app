// VARIABLES
let changeMode = document.getElementsByClassName("header-icon")[0];
let body = document.getElementsByTagName("body")[0];
let header = document.getElementsByClassName("header")[0];
let todoNew = document.getElementsByClassName("todo__new")[0];
let todoNewCheckboxButton = document.getElementsByClassName("todo__new--checkbox-button")[0];
let todoNewInput = document.getElementsByClassName("todo__new--input")[0];
let todoList = document.getElementsByClassName("todo__list")[0];
let todoListCheckboxButtons = document.getElementsByClassName("todo__list--checkbox-button");
let todoListItems = document.getElementsByClassName("todo__list--item");
let todoListLabels = document.getElementsByClassName("todo__list--checkbox-labelText");
let todoListInputs = document.getElementsByClassName("todo__list--checkbox-input");
let todoStatusItems = document.getElementsByClassName('todo__list--footer-statusItems');
let todoClear = document.getElementsByClassName('todo__list--footer-clearText')[0];
let sunIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>';
let moonIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>';
let crossIcons = document.getElementsByClassName('todo__list--item-crossIcon');
let mode = 0; // light mode by default
let status = 0; // 0 : All , 1 : Active, 2 : Completed
let index = 7;
let todoItemIds = [0, 1, 2, 3, 4, 5];


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

const newItemHandler = function(ev) {
  if(ev.key === "Enter") {
    let newItem = document.createElement('div');
    newItem.className = 'todo__list--item';
    newItem.innerHTML = `<div class="todo__list--checkbox-group"><input type="checkbox" class="todo__list--checkbox-input" id="small${index + 1}" name="size"><label for="small${index + 1}" class="todo__list--checkbox-label"><span class="todo__list--checkbox-button"></span><div class="todo__list--item-checkIcon"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg></div><h2 class="todo__list--checkbox-labelText">${todoNewInput.value}</h2></label></div><div class="todo__list--item-crossIcon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></div>`;
    // add the new item
    todoList.insertBefore(newItem, todoList.children[todoListItems.length]);
    todoNewInput.value = '';
    todoItemIds.push(index - 1);
    index = index + 1;
    // change mode handler
    if(mode === 0) {
      mode = 1;
      changeModeHandler();
    } else {
      mode = 0;
      changeModeHandler();
    }

    // add event listeners to new item
    todoListItems[todoListItems.length - 1].addEventListener('mouseenter', (event) => {
      if(mode === 0) {
        todoListCheckboxButtons[todoListItems.length - 1].style.background = "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box";
      } else {
        todoListCheckboxButtons[todoListItems.length - 1].style.background = "linear-gradient(#25273c, #25273c) padding-box, linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box";
      }
      todoListCheckboxButtons[todoListItems.length - 1].style.border = '1px solid transparent';
    });

    todoListItems[todoListItems.length - 1].addEventListener('mouseleave', (event) => {
      if(mode === 0) { // light mode
        todoListCheckboxButtons[todoListItems.length - 1].style.background = "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right bottom, hsl(236, 33%, 92%), hsl(236, 33%, 92%)) border-box";
        todoListCheckboxButtons[todoListItems.length - 1].style.border = '1px solid hsl(236, 33%, 92%)';
      } else { // dark mode
        todoListCheckboxButtons[todoListItems.length - 1].style.background = "linear-gradient(#25273c, #25273c) padding-box, linear-gradient(to right bottom, #3A3C5A, #3A3C5A) border-box";
        todoListCheckboxButtons[todoListItems.length - 1].style.border = '1px solid #3A3C5A';
      }
    });

    todoListInputs[todoListItems.length - 1].addEventListener("change", (event) => {
      if(event.currentTarget.checked === true) { // checked
        if(mode === 0) { // light mode
          todoListLabels[todoListItems.length - 1].style.color = 'hsl(233, 11%, 84%)';
        } else { // dark mode
          todoListLabels[todoListItems.length - 1].style.color = '#4E4A5F';
        }
      } else {   // unchecked
        if(mode === 0) { // light mode
          todoListLabels[todoListItems.length - 1].style.color = 'hsl(235, 19%, 35%)';
        } else { // dark mode
          todoListLabels[todoListItems.length - 1].style.color = 'hsl(236, 9%, 61%)';
        }
      }
    });

    crossIcons[todoListItems.length - 1].addEventListener('click', crossIconHandler.bind(this, todoListItems.length - 1));
  }
}

const statusHandler = function(i) {
  for(let j = 0; j < todoStatusItems.length; j++) {
    if(j === i) {
      status = i;
      todoStatusItems[j].style.color = 'hsl(220, 98%, 61%)';
    } else {
      todoStatusItems[j].style.color = 'hsl(236, 9%, 61%)';
    }
  }
  if(status === 0) {
    for(let k = 0; k < todoListInputs.length; k++) {
      todoListItems[k].style.display = 'flex';
    }
  } else if (status === 1) {
    for(let k = 0; k < todoListInputs.length; k++) {
      if(todoListInputs[k].checked === true) {
        todoListItems[k].style.display = 'none';
      } else {
        todoListItems[k].style.display = 'flex';
      }
    }
  } else if (status === 2) {
    for(let k = 0; k < todoListInputs.length; k++) {
      if(todoListInputs[k].checked === true) {
        todoListItems[k].style.display = 'flex';
      } else {
        todoListItems[k].style.display = 'none';
      }
    }
  }
}

const clearHandler = function() {
  for(let i = 0; i < todoListItems.length; i++) {
    if(todoListInputs[i].checked === true) {
      todoList.removeChild(todoListItems[i]);
      todoItemIds.splice(i, 1);
      i--;
    }
  }
}

const crossIconHandler = function(i) {
  todoList.removeChild(todoListItems[i]);
  todoItemIds.splice(i, 1);
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
    if(mode === 0) { // light mode
      todoStatusItems[i].style.color = '#4E4A5F';
    } else { // dark mode
      todoStatusItems[i].style.color = 'hsl(0, 0%, 98%)';
    }
  });
  todoStatusItems[i].addEventListener('mouseleave', (event) => {
      statusHandler(status);
  });
}
todoClear.addEventListener('mouseenter', (event) => {
  if(mode === 0) { // light mode
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
    if(mode === 0) {
      todoListCheckboxButtons[i].style.background = "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box";
    } else {
      todoListCheckboxButtons[i].style.background = "linear-gradient(#25273c, #25273c) padding-box, linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box";
    }
    todoListCheckboxButtons[i].style.border = '1px solid transparent';
  });

  todoListItems[i].addEventListener('mouseleave', (event) => {
    if(mode === 0) { // light mode
      todoListCheckboxButtons[i].style.background = "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right bottom, hsl(236, 33%, 92%), hsl(236, 33%, 92%)) border-box";
      todoListCheckboxButtons[i].style.border = '1px solid hsl(236, 33%, 92%)';
    } else { // dark mode
      todoListCheckboxButtons[i].style.background = "linear-gradient(#25273c, #25273c) padding-box, linear-gradient(to right bottom, #3A3C5A, #3A3C5A) border-box";
      todoListCheckboxButtons[i].style.border = '1px solid #3A3C5A';
    }
  });
}

// todo input
todoNewInput.addEventListener('keyup', newItemHandler.bind(this));



// todo list status
todoStatusItems[0].style.color = 'hsl(220, 98%, 61%)';
for(let i = 0; i < todoStatusItems.length; i++) {
  todoStatusItems[i].addEventListener('click', statusHandler.bind(this, i));
}

// clear todo list
todoClear.addEventListener('click', clearHandler);
for(let i = 0; i < todoListItems.length; i++) {
  crossIcons[i].addEventListener('click', crossIconHandler.bind(this, i));
}

//drag and drop event listeners
// mark draggable items:
for(let i = 0; i < todoListItems.length; i++) {
  todoListItems[i].addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/plain', todoItemIds[i]);
    event.dataTransfer.effectAllowed = 'move';
  });
}
// mark draggable area :
todoList.addEventListener('dragenter', event => {
  if(event.dataTransfer.types[0] === 'text/plain') {
    event.preventDefault();
  }
});
todoList.addEventListener('dragover', event => {
  if(event.dataTransfer.types[0] === 'text/plain') {
    event.preventDefault();
  }
})
todoList.addEventListener('drop', event => {
  const itemId = event.dataTransfer.getData('text/plain');
  for(let i = 0; i < todoListItems.length; i++) {
    if(todoIds[i] === itemId) {
      
    }
  }
})











////
