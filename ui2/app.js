import { handleControlButtonClick } from "./controlButtons/handleControlBtnClick.js";
import { handleTabBarButtonClick } from "./tabBarButtons/handleTabBarBtnClick.js";
import { updateTaskNumbers } from "./updateTaskNumbers.js";


const controlButtons = document.querySelector('.controls');
const tabBar = document.querySelector('main .taskListMainContent .tabBar');


controlButtons.addEventListener('click', handleControlButtonClick);
updateTaskNumbers();
tabBar.addEventListener('click', handleTabBarButtonClick())