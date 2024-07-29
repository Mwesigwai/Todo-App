export function paginateTasks(tasks, page) {
    const rowsPerPage = 3;
    let start = (page - 1) * rowsPerPage;
    let end = start + rowsPerPage;

    const paginatedTasks = tasks.slice(start, end);
    return paginatedTasks;
}
