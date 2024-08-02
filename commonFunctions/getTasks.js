
export function getTasks() {
    let storedItems = [];
    if (localStorage.length > 0) {
        const storedItemString = localStorage.getItem('tasks');
        storedItems = JSON.parse(storedItemString);
        return storedItems;
    }
    return storedItems;
}
