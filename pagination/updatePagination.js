import { getTasks } from "../commonFunctions/getTasks.js";



export function updatePagination() {
    const totalTasks = getTasks().length;
    const tasksPerPage = 5;
    const pageCount = Math.ceil((totalTasks / tasksPerPage));
    const pageNumbers = document.querySelector('.pageNumbers');


    pageNumbers.innerHTML = '';
    for (let i = 0; i < pageCount; i++) {
        pageNumbers.innerHTML += `
            <button class = "pageNum ${handleFirstPage(i)}">${i + 1}</button>
        `;
    }
}

function handleFirstPage(index) {
    if (index === 0) {
        return 'activePage'
    }else{
        return '';
    }
}
