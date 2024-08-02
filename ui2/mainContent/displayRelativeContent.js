import { handleControlButtonClick } from "../controlButtons/handleControlBtnClick.js";
import { handleTabBarButtonClick } from "../tabBarButtons/handleTabBarBtnClick.js";
import { taskListHtml } from "./taskListHtml.js";

const tabBar = document.querySelector('main .taskListMainContent .tabBar');

export function displayRelativeContent(mainContentDisplayArea, controlButtonText) {
    mainContentDisplayArea.innerHTML = '';
    switch (controlButtonText) {
        case 'Task List':
            mainContentDisplayArea.innerHTML = taskListHtml();
            handleTabBarButtonClick();
            break;
    
        default:
            mainContentDisplayArea.innerHTML = 'Still working on this feature'
            break;
    }
}