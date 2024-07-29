import { getTasks } from "../commonFunctions/getTasks.js";
import { updateStatusBar } from "../statusBar/updateStatusBar.js";
import { updateOnCheck } from "./updateOnCheck.js";
import { updateOnUncheck } from "./updateOnUncheck.js";

export function handleInputEvent(event) {
    const taskGroup = event.target.parentElement.children;
    let checkBoxChecked = taskGroup[0].checked;
    let taskSpan = taskGroup[1];
    let storedTasks = getTasks();

    if (checkBoxChecked) {
        taskSpan.classList.add('completedTask');
        updateOnCheck(storedTasks, taskSpan);
        updateStatusBar();
    }
    else {
        taskSpan.classList.remove('completedTask');
        updateOnUncheck(storedTasks, taskSpan);
        updateStatusBar();
    }
}
