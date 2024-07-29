import { getTasks } from "../commonFunctions/getTasks.js";
import { updateStatusBar } from "../statusBar/updateStatusBar.js";
import { updateOnCheck } from "./updateOnCheck.js";
import { updateOnUncheck } from "./updateOnUncheck.js";

export function handleInputEvent(event) {
    const editButton = event.target.parentElement.parentElement.children[1].children[0];
    console.log(editButton);

    const taskGroup = event.target.parentElement.children;
    let checkBoxChecked = taskGroup[0].checked;
    let taskSpan = taskGroup[1];
    let storedTasks = getTasks();

    if (checkBoxChecked) {
        editButton.hidden = true;
        taskSpan.classList.add('completedTask');
        updateOnCheck(storedTasks, taskSpan);
        updateStatusBar();
    }
    else {
        editButton.hidden = false;
        taskSpan.classList.remove('completedTask');
        updateOnUncheck(storedTasks, taskSpan);
        updateStatusBar();
    }
}
