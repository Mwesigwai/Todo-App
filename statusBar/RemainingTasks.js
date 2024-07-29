import { getTotalCompletedTasks } from "./completedTasks.js";
import { getTotalTasks } from "./totalTasks.js";

export function remainingTasks() {
    
    let totalTasks = getTotalTasks();
    let completedTasks = getTotalCompletedTasks();
    let remainingTasks = totalTasks - completedTasks;
    return remainingTasks;
}
