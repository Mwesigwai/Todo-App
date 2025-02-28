import { updateTaskList } from "../commonFunctions/updateTaskList.js";
import { getActiveButton } from "./getActiveButton.js";
import { getAllPaginationPageBtns } from "./getAllPaginationPageBtns.js";

export function goToPreviousPage() {
    const activeButton = getActiveButton();
    const allPagePaginationBtns = getAllPaginationPageBtns();
    const paginationBtnsArray = Array.from(allPagePaginationBtns);
    let indexOfButtonAtBack = (paginationBtnsArray.indexOf(activeButton) - 1);
    const backPageBtn = allPagePaginationBtns[indexOfButtonAtBack]
    
    if (indexOfButtonAtBack != -1) {
        activeButton.classList.remove('activePage');
        backPageBtn.classList.add('activePage');
        updateTaskList(Number(backPageBtn.textContent));
    }
    
}