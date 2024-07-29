import { getTasks } from "../commonFunctions/getTasks.js";

export function totalTasks() {
    let total = getTotalTasks();
    return total;
}

export function getTotalTasks() {
    let total =  getTasks();
    return total.length;
}

