import { saveTaskToStorage } from "../localStorageStuff/saveTaskToStorage.js";
import { updatePagination } from "../pagination/updatePagination.js";
import { clearTaskNameInput } from "../commonFunctions/clearTaskNameInput.js";
import { updateTaskList } from "../commonFunctions/updateTaskList.js";


export const todoItemsDisplay = document.querySelector('.todoItemsDisplay');


export function onFormSubmit(event) {
    event.preventDefault();


    if (event.submitter.value === 'ADD NEW TASK') {
        saveTaskToStorage();
        updateTaskList(1);
        clearTaskNameInput();
        updatePagination();
    }
}