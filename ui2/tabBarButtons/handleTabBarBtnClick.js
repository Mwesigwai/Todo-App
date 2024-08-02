export function handleTabBarButtonClick() {
    const tabBar = document.querySelector('main .taskListMainContent .tabBar');
    const tabBarButtons = document.querySelectorAll('.tabBarButton');
    
    tabBar.addEventListener('click', event =>{
        if (event.target.className != 'tabBar' && event.target.nodeName != 'SPAN') {
        
            for (const button of tabBarButtons) {
                if(button.classList.contains('activeTab')){
                    button.classList.remove('activeTab');
                    break;
                }
            }
    
            event.target.classList.add('activeTab');
        } 
    });
}