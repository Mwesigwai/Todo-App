import { updateTaskList } from "../commonFunctions/updateTaskList.js";
import { getAllPaginationPageBtns } from "./getAllPaginationPageBtns.js";
import { goToNextPage } from "./goToNextPage.js";
import { goToPreviousPage } from "./goToPreviousPage.js";

export function handlePageButtonClick(event) {
    if (event.target != document.querySelector('body > main > nav') ) {
        let pageNumber = event.target.textContent;
        switch (pageNumber) {
            case '<':
                goToPreviousPage();
            break;

            case '>':
                goToNextPage();
            break;

            default:
                let page = Number(pageNumber);
                updateTaskList(page);
                handleActivePageButton(event.target)
            break;
        }
    }
}

export function handleActivePageButton(button) {
    const pageButtons = getAllPaginationPageBtns();
    for (const btn of pageButtons) {
        btn.classList.remove('activePage');
    }
    button.classList.add('activePage');
}