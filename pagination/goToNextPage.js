import { updateTaskList } from "../commonFunctions/updateTaskList.js";
import { getActiveButton } from "./getActiveButton.js";
import { getAllPaginationPageBtns } from "./getAllPaginationPageBtns.js";

export function goToNextPage() {
    const activeButton = getActiveButton();
    const allPagePaginationBtns = getAllPaginationPageBtns();
    const paginationBtnsArray = Array.from(allPagePaginationBtns);
    let indexOfButtonInfront = (paginationBtnsArray.indexOf(activeButton) + 1);
    const nextPageBtn = allPagePaginationBtns[indexOfButtonInfront]
    
    if (indexOfButtonInfront != paginationBtnsArray.length) {
        activeButton.classList.remove('activePage');
        nextPageBtn.classList.add('activePage');
        updateTaskList(Number(nextPageBtn.textContent));
    }
}