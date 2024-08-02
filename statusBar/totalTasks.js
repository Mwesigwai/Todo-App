import { getTasks } from "../commonFunctions/getTasks.js";

export function totalTasks() {
    // let total = getTotalTasks();
    // return total;
    return getTotalTasks();
}

export function getTotalTasks() {
    const total =  getTasks();
    return total.length;
}

