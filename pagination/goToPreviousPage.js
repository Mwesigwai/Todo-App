import { getActiveButton } from "./getActiveButton.js";
import { getAllPaginationPageBtns } from "./getAllPaginationPageBtns.js";

export function goToPreviousPage() {
    const activeButton = getActiveButton();
    const allPagePaginationBtns = getAllPaginationPageBtns();
    let indexOfButtonAtBack = allPagePaginationBtns.indexof(activeButton)
    
    console.log(indexOfButtonAtBack);
}