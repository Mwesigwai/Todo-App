export function updateOnUncheck(storedTasks, taskSpan) {
    storedTasks.forEach(element => {
        if (element.name == taskSpan.textContent) {
            element.completed = false;
            return;
        }
    });
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}
