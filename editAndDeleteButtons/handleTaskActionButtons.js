import { handleDeleteAction } from "./handleDeleteAction.js";
import { handleEditAction } from "./handleEditAction.js";

export function handleTaskActionButtons(event) {
    if (event.target.classList.contains('editButton')) {
        handleEditAction(event.target.parentElement.parentElement.children[0].children[1]);
    }else if (event.target.classList.contains('deleteButton')) {
        handleDeleteAction(event);
    }
}