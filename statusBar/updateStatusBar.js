import { remainingTasks } from "./RemainingTasks.js";
import { completedTasks } from "./completedTasks.js";
import { totalTasks } from "./totalTasks.js";


export function updateStatusBar(){
    const totalTaksDisplay = document.querySelector('.totalTasks');
    const remainingTasksDisplay = document.querySelector('.remainingTasks');
    const completedTasksDisplay = document.querySelector('.completedTasks');


    totalTaksDisplay.textContent = totalTasks();
    completedTasksDisplay.textContent = completedTasks();
    remainingTasksDisplay.textContent = remainingTasks();
}