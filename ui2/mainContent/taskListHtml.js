export function taskListHtml() {
    return `
        <div class="taskListMainContent">
                <div class="tabBar">
                    <button class="tabBarButton activeTab" id="allTasks">all tasks: </button>
                    <button class="tabBarButton" id="completedTasks">Completed: </button>
                    <button class="tabBarButton" id="pendingTasks">Pending: </button>
                </div>
                <div class = "taskTable"></div>
            </div>
    `;
}