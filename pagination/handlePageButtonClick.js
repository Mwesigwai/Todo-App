import { updateTaskList } from "../form/onFormSubmit.js";
import { getAllPaginationPageBtns } from "./getAllPaginationPageBtns.js";
import { goToPreviousPage } from "./goToPreviousPage.js";

export function handlePageButtonClick(event) {
    let pageNumber = event.target.textContent;
    switch (pageNumber) {
        case '<':
            goToPreviousPage(event.target);
            break;

        case '>':
            goToNextPage(event.target);
            break;

        default:
            let page = Number(pageNumber);
            updateTaskList(page);
            handleActivePageButton(event.target)
            break;
    }
}

export function handleActivePageButton(button) {
    const pageButtons = getAllPaginationPageBtns();
    for (const btn of pageButtons) {
        btn.classList.remove('activePage');
    }
    button.classList.add('activePage');
}