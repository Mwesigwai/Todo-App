export function confirmLocalStorageTasksArrayExists() {
    let tasks = [];
    if (localStorage.length === 0) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}