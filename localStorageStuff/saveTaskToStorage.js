import { getTasks } from "../commonFunctions/getTasks.js";
import { updateStatusBar } from "../statusBar/updateStatusBar.js";


export function saveTaskToStorage() {
    let taskName = document.querySelector('input[name = todoItem]');
    let taskObj = {
        name:taskName.value,
        completed:false
    };

    let tasks = getTasks();
    tasks.push(taskObj);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateStatusBar();
}