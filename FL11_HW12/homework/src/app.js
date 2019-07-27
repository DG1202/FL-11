const rootNode = document.getElementById('root');

let todoItems = [];
let todoDoneItems = [];
let itemsIndex = null;
const errMessageTimeOut = 2000;

const addTodoItem = (name) => {
  if(!todoItems.every(v => v.name !== name)){
    rootNode.appendChild(errMessage);
    errText.innerHTML = 'You can\'t add already exist item !';
    setTimeout(removeErrMessage, errMessageTimeOut)
  }else if(name === ''){
    rootNode.appendChild(errMessage);
    errText.innerHTML = 'You can\'t add empty item !';
    setTimeout(removeErrMessage, errMessageTimeOut)
  }else{
    const item = {name: name, completed: false};
    todoItems.push(item);
    location.hash = '';
    addPageInput.value = '';
    listTodoItems();
  }
};

const removeTodoItem = (index) => {
  todoItems.splice(index,1);
};

const saveTodoItems = () => {
  let strItems = JSON.stringify(todoItems);
  let strDoneItems = JSON.stringify(todoDoneItems);
  localStorage.setItem('todoItems', strItems);
  localStorage.setItem('todoDoneItems', strDoneItems);
};
const getTodoItems = () => {
  let strItems = localStorage.getItem('todoItems');
  let strDoneItems = localStorage.getItem('todoDoneItems');
  todoItems = JSON.parse(strItems);
  todoDoneItems = JSON.parse(strDoneItems);
  if(!todoItems){
    todoItems = [];
  }
  if(!todoDoneItems){
    todoDoneItems = [];
  }
};

getTodoItems();

const mainPage = document.createElement('div');
mainPage.classList.add('main-page');

const title = document.createElement('h1');
title.innerHTML = 'Simple TODO application';

const addTaskBtn = document.createElement('button');
addTaskBtn.innerHTML = 'Add new task';
addTaskBtn.onclick = () => {
  location.hash = 'add-page';
};

const toDoList = document.createElement('ul');
const emptyList = document.createElement('p');
emptyList.innerHTML = 'TODO is empty';

rootNode.appendChild(mainPage);
mainPage.appendChild(title);
mainPage.appendChild(addTaskBtn);
mainPage.appendChild(toDoList);
mainPage.appendChild(emptyList);

const listTodoItems = () => {
  toDoList.innerHTML = '';
  todoItems = todoItems.filter(v => !v.completed);
  todoDoneItems = todoDoneItems.filter(v => v.completed);
  todoItems = todoItems.concat(todoDoneItems);
  todoItems.length ? emptyList.style.visibility = 'hidden' : emptyList.style.visibility = 'visible';
  for(let item = 0;item < todoItems.length;item++) {
    const toDoItem = document.createElement('li');
    const checkItem = document.createElement('img');
    checkItem.onclick = () => {
      if(!todoItems[item].completed){
        todoItems[item].completed = true;
        todoDoneItems.push(todoItems[item]);
        listTodoItems();
      }else{
        todoItems[item].completed = false;
        listTodoItems();
      }
    };
    checkItem.src = todoItems[item].completed ? './assets/img/done-s.png' : './assets/img/todo-s.png';

    let itemText = document.createElement('span');
    itemText.innerHTML = todoItems[item].name;
    itemText.onclick = () => {
      if(!todoItems[item].completed){
        modifyPageInput.value = todoItems[item].name;
        location.hash = 'modify-page';
        itemsIndex = item;
      }else{
          rootNode.appendChild(errMessage);
          errText.innerHTML = 'You can\'t edit already done item !';
          setTimeout(removeErrMessage, errMessageTimeOut)
      }
    };
    const removeItem = document.createElement('img');
    removeItem.src = './assets/img/remove-s.jpg';

    removeItem.onclick = () => {
      removeTodoItem(item);
      todoDoneItems = todoItems.filter(v => v.completed);
      listTodoItems();
    };

    toDoItem.appendChild(checkItem);
    toDoItem.appendChild(itemText);
    toDoItem.appendChild(removeItem);
    toDoList.appendChild(toDoItem);

    if(todoItems[item].completed){
      toDoItem.style.backgroundColor = 'grey';
    }
  }
  saveTodoItems();
};
listTodoItems();

// Add item
const addPage = document.createElement('div');
addPage.classList.add('add-page');

const titleAddPage = document.createElement('h1');
titleAddPage.innerHTML = 'Add task';

const addPageInput = document.createElement('input');

const buttonsRow = document.createElement('div');
buttonsRow.classList.add('buttons-row');

const cancelBtn = document.createElement('button');
cancelBtn.innerHTML = 'Cancel';
cancelBtn.onclick = () => {
  addPageInput.value = '';
  location.hash = '';
};

const saveBtn = document.createElement('button');
saveBtn.innerHTML = 'Save changes';

saveBtn.addEventListener('click', function(){
  addTodoItem(addPageInput.value);
});

rootNode.appendChild(addPage);
addPage.appendChild(titleAddPage);
addPage.appendChild(addPageInput);
addPage.appendChild(buttonsRow);
buttonsRow.appendChild(cancelBtn);
buttonsRow.appendChild(saveBtn);


// Modify item
const modifyPage = document.createElement('div');
modifyPage.classList.add('modify-page');

const titleModifyPage = document.createElement('h1');
titleModifyPage.innerHTML = 'Modify item';

const modifyPageInput = document.createElement('input');

const modifyButtonsRow = document.createElement('div');
buttonsRow.classList.add('buttons-row');

const modifyCancelBtn = document.createElement('button');
modifyCancelBtn.innerHTML = 'Cancel';
modifyCancelBtn.onclick = () => {
  modifyPageInput.value = '';
  location.hash = '';
};

const modifySaveBtn = document.createElement('button');
modifySaveBtn.innerHTML = 'Save changes';
modifySaveBtn.onclick = () => {
  let todoItemsFiltred = todoItems.filter(v => v.name !== modifyPageInput.value);
  if(modifyPageInput.value !== '' &&
    (todoItemsFiltred.length === todoItems.length || todoItems[itemsIndex].name === modifyPageInput.value)) {
      todoItems[itemsIndex].name = modifyPageInput.value;
      listTodoItems();
      itemsIndex = null;
      location.hash = '';
  }else if(modifyPageInput.value === ''){
      rootNode.appendChild(errMessage);
      errText.innerHTML = 'You can\'t add empty item !';
      setTimeout(removeErrMessage, errMessageTimeOut)
  }else{
    rootNode.appendChild(errMessage);
    errText.innerHTML = 'You can\'t add already exist item !';
    setTimeout(removeErrMessage, errMessageTimeOut)
  }
};

rootNode.appendChild(modifyPage);
modifyPage.appendChild(titleModifyPage);
modifyPage.appendChild(modifyPageInput);
modifyPage.appendChild(modifyButtonsRow);
modifyButtonsRow.appendChild(modifyCancelBtn);
modifyButtonsRow.appendChild(modifySaveBtn);

// error message
const errMessage = document.createElement('div');
errMessage.classList.add('err-message');

if(!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) {
  errMessage.classList.add('chrome-err-message');
}
const errHeader = document.createElement('h4');
errHeader.innerHTML = 'Danger!';

const errText = document.createElement('p');

errMessage.appendChild(errHeader);
errMessage.appendChild(errText);

const removeErrMessage = () => {
  if(rootNode.contains(errMessage)) {
    rootNode.removeChild(errMessage);
  }
};

//Navigation
const navigation = () => {
  if(location.hash === '#add-page'){
    document.querySelector('div.add-page').style.display = 'block';
    document.querySelector('div.main-page').style.display = 'none';
    document.querySelector('.modify-page').style.display = 'none';
  }else if(location.hash === '#modify-page'){
    document.querySelector('div.add-page').style.display = 'none';
    document.querySelector('div.main-page').style.display = 'none';
    document.querySelector('.modify-page').style.display = 'block';
  }else{
    document.querySelector('div.main-page').style.display = 'block';
    document.querySelector('div.add-page').style.display = 'none';
    document.querySelector('.modify-page').style.display = 'none';
  }
};

window.onhashchange = navigation;


