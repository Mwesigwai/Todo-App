import { getTasks } from "../commonFunctions/getTasks.js";
import { updateStatusBar } from "../statusBar/updateStatusBar.js";


export function saveTaskToStorage() {
    const taskName = document.querySelector('input[name = todoItem]');
    const taskObj = {
        name:taskName.value,
        completed:false
    };

    const tasks = getTasks();
    tasks.push(taskObj);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateStatusBar();
}