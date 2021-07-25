export function addMenu() {
    const menuButton = document.getElementById('showMenu');
    const removeNavigationWindow = document.getElementById('hideMenu');

    if (menuButton && removeNavigationWindow) {
        menuButton.addEventListener('click', showMenu, false);
        removeNavigationWindow.addEventListener('click', hideMenu, false);
    }
}

export function removeMenu() {
    const menuButton = document.getElementById('showMenu');
    const removeNavigationWindow = document.getElementById('hideMenu');

    if (menuButton && removeNavigationWindow) {
        menuButton.removeEventListener('click', showMenu, false);
        removeNavigationWindow.removeEventListener('click', hideMenu, false);
    }
}

function showMenu() {
    const container = document.querySelector('.container');
    container.classList.add('menuVisible');
}

function hideMenu() {
    const container = document.querySelector('.container');
    container.classList.remove('menuVisible');
}

