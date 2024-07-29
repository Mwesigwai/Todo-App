import { getTasks } from "../commonFunctions/getTasks.js";

export function completedTasks() {
    let completed = getTotalCompletedTasks();
    return completed;
}

export function getTotalCompletedTasks() {
    let tasks = getTasks();
    let total = 0;
    tasks.forEach(task => {
        if(tasks.length > 0 && task.completed == true){
            total += 1;
        }
    });
    return total;
}