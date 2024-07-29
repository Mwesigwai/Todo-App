import { clearTaskNameInput } from "../commonFunctions/clearTaskNameInput.js";
import { getTasks } from "../commonFunctions/getTasks.js";



let taskFormInput = document.querySelector('#todoItem');
const form = document.querySelector('.form');
const submitBtn = document.querySelector('#submitBtn');
const updateBtnValue = 'UPDATE';
const addNewTaskBtnValue = 'ADD NEW TASK';

  
export function handleEditAction(taskItemSpan) {
    submitBtn.value = updateBtnValue;
    taskFormInput.value = taskItemSpan.textContent;
    
    form.onsubmit = (event)=>{
        if (submitBtn.value === updateBtnValue) {
            allowUserToEdit(taskItemSpan);
        }
    }
}

function updateLocalStorageOnEdit(oldTaskName, newTaskName) {
    let storedTasks = getTasks();

    for (const task of storedTasks) {
        if (task.name === oldTaskName) {
            task.name = newTaskName;
            break;
        }
    }

    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}


function allowUserToEdit(taskItemSpan) {
    updateLocalStorageOnEdit(taskItemSpan.textContent, taskFormInput.value);
    taskItemSpan.textContent = taskFormInput.value;
    submitBtn.value = addNewTaskBtnValue;
    clearTaskNameInput();
}