export function getActiveButton() {
    const pageButtons = document.querySelectorAll('.pageNum');
    for (const btn of pageButtons) {
        if (btn.classList.contains('activePage')) {
            return btn;
        }
    }
}