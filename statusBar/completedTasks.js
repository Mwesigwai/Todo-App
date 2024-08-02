import { getTasks } from "../commonFunctions/getTasks.js";

export function completedTasks() {
    // let completed = getTotalCompletedTasks();
    // return completed;
    return getTotalCompletedTasks();
}

export function getTotalCompletedTasks() {
    let tasks = getTasks();
    let total = 0;
    if(tasks.length > 0){
        tasks.forEach(task => {
            if(task.completed === true){
                total += 1;
            }
        });
    }
    return total;
}