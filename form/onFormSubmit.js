import { checkStatus } from "./checkStatus.js";
import { getTasks } from "../commonFunctions/getTasks.js";
import { paginateTasks } from "../commonFunctions/paginateTasks.js";
import { saveTaskToStorage } from "../localStorageStuff/saveTaskToStorage.js";
import { taskComplete } from "./taskComplete.js";
import { updatePagination } from "../pagination/updatePagination.js";
import { clearTaskNameInput } from "../commonFunctions/clearTaskNameInput.js";


const todoItemsDisplay = document.querySelector('.todoItemsDisplay');


export function onFormSubmit(event) {
    event.preventDefault();


    if (event.submitter.value === 'ADD NEW TASK') {
        saveTaskToStorage();
        updateTaskList(1);
        clearTaskNameInput();
        updatePagination();
    }
}


export function updateTaskList(page) {
    todoItemsDisplay.innerHTML = '';
    let tasks = getTasks().reverse();
    let paginatedTasks = paginateTasks(tasks, page);
        
    paginatedTasks.forEach(task => {
        todoItemsDisplay.innerHTML += `
            <div class="itemContainer">
                <div class="itemDetails">
                    <input class="checkBox" type="checkBox" ${checkStatus(task.completed)}>
                    <span class="item ${taskComplete(task.completed)}">${task.name}</span>
                </div>
                <div>
                    <button class="editButton">Edit</button>
                    <button class="deleteButton">Delete</button>
                </div>
            </div>          
        `;
    });
}