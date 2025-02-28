import { getTasks } from "../commonFunctions/getTasks.js"
import { updatePagination } from "../pagination/updatePagination.js";
import { updateStatusBar } from "../statusBar/updateStatusBar.js";

export function handleDeleteAction(event) {
    const taskNameSpan = event.target.parentElement.parentElement.children[0].children[1];
    let taskContainer = event.target.parentElement.parentElement;
    const todoItemDisplay = document.querySelector('.todoItemsDisplay');
    const deleteDialog = document.querySelector('#deleteDialog');
    
    const okButton = document.getElementById('dialogOkBtn');
    const cancelButton = document.getElementById('cancel');
    const taskName = taskNameSpan.textContent;

    const tasks = getTasks();
    deleteDialog.showModal();

    cancelButton.addEventListener('click',()=>{
        deleteDialog.close();
    });

    okButton.addEventListener('click', ()=>{
        deleteDialog.close();
        const index = getIndex(taskName, tasks);
        todoItemDisplay.removeChild(taskContainer)

        tasks.splice(index,1);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        updateStatusBar();
        updatePagination();
    });
}

function getIndex(taskName, tasks) {
    const index = tasks.findIndex(task => task.name === taskName);
    return index;
}