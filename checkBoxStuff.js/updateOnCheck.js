export function updateOnCheck(storedTasks, taskSpan) {
    storedTasks.forEach(element => {
        if (element.name == taskSpan.textContent) {
            element.completed = true;
            return;
        }
    });
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}
