import { loadTasks } from "../taskList/loadTasks.js";
import { getTasks } from "./getTasks.js";
import { paginateTasks } from "./paginateTasks.js";


export function showTasks(page){
    let tasks = getTasks().reverse();
    let paginatedTasks = paginateTasks(tasks, page);

    if (paginatedTasks.length > 0) {
        for (const task of paginatedTasks) {
            loadTasks(task);
        }
    }
}

