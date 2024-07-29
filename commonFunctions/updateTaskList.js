import { getTasks } from "../commonFunctions/getTasks.js";
import { paginateTasks } from "../commonFunctions/paginateTasks.js";
import { checkStatus } from "../form/checkStatus.js";
import { todoItemsDisplay } from "../form/onFormSubmit.js";
import { taskComplete } from "../form/taskComplete.js";



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
                    <img src = './images/edit.svg' class = 'editButton' ${editHidden(task.completed)}>
                    <img src = './images/redDelete.svg' class = 'deleteButton'>
                </div>
            </div>          
        `;
    });
}

function editHidden(booleanValue) {
    if(booleanValue === true){
        return 'hidden'
    }
}