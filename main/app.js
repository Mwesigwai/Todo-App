import { onFormSubmit } from "../form/onFormSubmit.js";
import { updateStatusBar } from "../statusBar/updateStatusBar.js";
import { showTasks } from "../commonFunctions/showTasks.js";
import { confirmLocalStorageTasksArrayExists } from "../localStorageStuff/confirmLocalTasksArrayExists.js";
import { handleCheck } from "../checkBoxStuff.js/handleCheck.js";
import { handleTaskActionButtons } from "../editAndDeleteButtons/handleTaskActionButtons.js";
import { clearTaskNameInput } from "../commonFunctions/clearTaskNameInput.js";
import { showPagination } from "../pagination/showPagination.js";
import { handlePageButtonClick } from "../pagination/handlePageButtonClick.js";

confirmLocalStorageTasksArrayExists();
const form = document.querySelector('.form');
const todoItemDisplay = document.querySelector('.todoItemsDisplay');
const paginationArea = document.querySelector('.paginationArea');


clearTaskNameInput();
form.addEventListener('submit', onFormSubmit); 
todoItemDisplay.addEventListener('click', handleTaskActionButtons);
paginationArea.addEventListener('click', handlePageButtonClick);

updateStatusBar();
showPagination();
showTasks(1);
handleCheck();