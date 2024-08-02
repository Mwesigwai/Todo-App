import { totalTasks } from "../statusBar/totalTasks.js";
import { completedTasks } from "../statusBar/completedTasks.js";
import { remainingTasks } from "../statusBar/RemainingTasks.js";

export function updateTaskNumbers() {
    const allTasks = document.querySelector('#allTasks');
    const pendingTasks = document.querySelector('#pendingTasks');
    const completed = document.querySelector('#completedTasks');


    allTasks.textContent += totalTasks();
    completed.textContent += completedTasks();
    pendingTasks.textContent += remainingTasks();
}