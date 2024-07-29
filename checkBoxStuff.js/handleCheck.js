import { handleInputEvent } from "./handleInputEvent.js";



export function handleCheck() {
    const taskLIstParent = document.querySelector('.todoItemsDisplay');
    taskLIstParent.addEventListener('input', (event)=> handleInputEvent(event))
}