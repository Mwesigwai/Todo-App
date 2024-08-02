import { displayRelativeContent } from "../mainContent/displayRelativeContent.js";
import { updateTaskNumbers } from "../updateTaskNumbers.js";


const controlHeading = document.querySelector('.controlHeading h1');
const controlButtons = document.querySelector('.controls').children;
const mainContent = document.querySelector('.mainContent');

export function handleControlButtonClick(event) {
    if (event.target.className !== 'controls') {
        controlHeading.textContent = event.target.textContent;
        
        for (const button of controlButtons) {
            if (button.classList.contains('activeControl')) {
                button.classList.remove('activeControl');
                break; 
            }
        }
        event.target.classList.add('activeControl');
        displayRelativeContent(mainContent, event.target.textContent);
        updateTaskNumbers();
    }
}
