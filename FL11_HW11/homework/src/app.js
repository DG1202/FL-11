let rootNode = document.getElementById('root');

const input = document.querySelector('input.input');
const addBtn = document.querySelector('.add-btn');
const actionList = document.querySelector('.action-list');
const fullListErr = document.querySelector('p.message');
const maxAction = 10;
let actions = 0;
let dragElem = null;

const activeBtn = () => {
	if(input.value.trim()) {
		addBtn.removeAttribute('disabled');
	} else {
		addBtn.setAttribute('disabled', 'disabled');
	}
};

input.oninput = activeBtn;

const addAction = () => {
	const actionRow = document.createElement('li');
	actionRow.classList.add('action-row');
	actionRow.setAttribute('draggable', true)

	const action = document.createElement('div');
	action.classList.add('action');

	const delAction = document.createElement('i');
	delAction.classList.add('material-icons');
	const delActionText = document.createTextNode('delete');
	delAction.appendChild(delActionText);

	const checkBox = document.createElement('i');
	checkBox.classList.add('material-icons');
	let checkBoxText = document.createTextNode('check_box_outline_blank');
	checkBox.appendChild(checkBoxText);

	const actionText = document.createElement('p');
	actionText.textContent = input.value;

	const editItem = document.createElement('i');
	editItem.classList.add('material-icons');
	let editItemText = document.createTextNode('edit');
	editItem.appendChild(editItemText);

	const editItemInput = document.createElement('input');
	editItemInput.classList.add('edit-input');

	const saveEditedItem = document.createElement('i');
	saveEditedItem.classList.add('material-icons');
	let saveEditedItemText = document.createTextNode('save');
	saveEditedItem.appendChild(saveEditedItemText);

	actionList.appendChild(actionRow);
	actionRow.appendChild(action);
	action.appendChild(checkBox);
	action.appendChild(actionText);
	action.appendChild(editItemInput);
	action.appendChild(editItem);
	action.appendChild(saveEditedItem);
	actionRow.appendChild(delAction);
	saveEditedItem.style.display = 'none';
	editItemInput.style.display = 'none';

	checkBox.onclick = () => {
		checkBox.innerHTML = 'done'
	};

	editItem.onclick = () => {
		editItem.style.display = 'none';
		actionText.style.display = 'none';
		checkBox.style.display = 'none';
		saveEditedItem.style.display = 'block';
		editItemInput.style.display = 'block';
		editItemInput.value = actionText.textContent;
	};

	saveEditedItem.onclick = () => {
		saveEditedItem.style.display = 'none';
		editItemInput.style.display = 'none';
		editItem.style.display = 'block';
		actionText.style.display = 'block';
		checkBox.style.display = 'block';
		actionText.textContent = editItemInput.value;
	};

	delAction.onclick = () => {
		actionList.removeChild(actionRow);
		fullListErr.style.visibility = 'hidden';
		input.removeAttribute('disabled');
		actions--;
	};


	input.value = '';
	activeBtn();
	actions++;

	if (actions === maxAction) {
		fullListErr.style.visibility = 'visible';
		input.setAttribute('disabled', 'disabled');
	}

};

addBtn.onclick = addAction;

actionList.addEventListener('dragstart', event => {
	dragElem = event.target;
});
actionList.addEventListener('dragover', event => {
	if (event.target.className === 'action-row') {
		event.preventDefault();
		const two = 2;
		const bounding = event.target.getBoundingClientRect();
		const offset = bounding.y + bounding.height / two;
		if(event.target >= offset) {
			event.target.style.borderTop = '';
			event.target.style.borderBottom = '0.5px solid blue';
		}else {
			event.target.style.borderTop = '0.5px solid blue';
			event.target.style.borderBottom = '';
		}
	}
});
actionList.addEventListener('dragleave', event => {
	event.target.style.borderBottom = '';
	event.target.style.borderTop = '';
});
actionList.addEventListener('drop', event => {
	if(event.target.className === 'action-row') {
		event.preventDefault();
		if(event.target.style.borderBottom) {
			event.target.style.borderBottom = '';
			actionList.insertBefore(dragElem, event.target.nextSibling);
		}else {
			event.target.style.borderTop = '';
			actionList.insertBefore(dragElem, event.target);
		}
	}
});