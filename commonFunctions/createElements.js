export function createElements() {
    const todoItemsDisplay = document.querySelector('.todoItemsDisplay');
    let itemDetails = document.createElement('div');
    let itemOperations = document.createElement('div');
    let itemContainer = document.createElement('div');
    let checkBox = document.createElement('input');
    let itemName = document.createElement('span');
    let editBtn = document.createElement('img');
    let deleteBtn = document.createElement('img');

    itemContainer.classList.add('itemContainer');
    itemName.classList.add('item');
    checkBox.classList.add('checkBox');
    checkBox.type = 'checkBox';

    editBtn.src = './images/edit.svg';
    deleteBtn.src = './images/redDelete.svg';
    editBtn.classList.add('editButton');
    deleteBtn.classList.add('deleteButton');

    itemDetails.appendChild(checkBox);
    itemDetails.appendChild(itemName);
    itemDetails.classList.add('itemDetails');

    itemOperations.appendChild(editBtn);
    itemOperations.appendChild(deleteBtn);
    itemContainer.appendChild(itemDetails);
    itemContainer.appendChild(itemOperations);

    todoItemsDisplay.appendChild(itemContainer);
}