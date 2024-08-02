import { getTotalCompletedTasks } from "./completedTasks.js";
import { getTotalTasks } from "./totalTasks.js";

export function remainingTasks() {
    
    const totalTasks = getTotalTasks();
    const completedTasks = getTotalCompletedTasks();
    const remainingTasks = totalTasks - completedTasks;
    return remainingTasks;
}
