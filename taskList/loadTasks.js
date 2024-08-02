import { createElements } from "../commonFunctions/createElements.js";

let index = 0;
export function loadTasks(task) {
    createElements();
    const taskNameDisplay = document.querySelectorAll('.item');
    const checkBoxes = document.querySelectorAll('.checkBox');
    const editButtons = document.querySelectorAll('.editButton');
    
    if (task.completed === true) {
        taskNameDisplay[index].classList.add('completedTask');
        checkBoxes[index].checked = true;
        editButtons[index].hidden = true;
    }
    taskNameDisplay[index].textContent = task.name;
    index++;
}
