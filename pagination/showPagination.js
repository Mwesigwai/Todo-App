import { getTasks } from "../commonFunctions/getTasks.js";

export function showPagination() {

    const totalTasks = getTasks().length;
    const tasksPerPage = 3;
    const pageCount = Math.ceil((totalTasks/tasksPerPage));
    const pageNumbers = document.querySelector('.pageNumbers');
    
    for(let i = 0; i< pageCount; i++){
        let btn = document.createElement('button');
        btn.classList.add('pageNum');
        btn.textContent = i + 1;
        if(i == 0){
            btn.classList.add('activePage');
        }
        pageNumbers.appendChild(btn);
    }
}