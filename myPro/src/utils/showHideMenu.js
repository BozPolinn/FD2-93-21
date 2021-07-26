export function addMenu() {
    const menuButton = document.getElementById('showMenu');
    const removeNavigationWindow = document.getElementById('hideMenu');

    if (menuButton && removeNavigationWindow) {
        menuButton.addEventListener('click', showMenu, false);
        removeNavigationWindow.addEventListener('click', hideMenu, false);
        document.addEventListener('touchstart', swipeStart, false);
        document.addEventListener('touchend', swipeEnd, false);
    }
}

export function removeMenu() {
    const menuButton = document.getElementById('showMenu');
    const removeNavigationWindow = document.getElementById('hideMenu');

    if (menuButton && removeNavigationWindow) {
        menuButton.removeEventListener('click', showMenu, false);
        removeNavigationWindow.removeEventListener('click', hideMenu, false);
        document.removeEventListener('touchstart', swipeStart, false);
        document.removeEventListener('touchend', swipeEnd, false);
    }
}

function showMenu() {
    const container = document.querySelector('.container');
    container.classList.remove('menuInVisible');
    container.classList.add('menuVisible');
}

function hideMenu() {
    const container = document.querySelector('.container');
    container.classList.add('menuInVisible');
    container.classList.remove('menuVisible');
}

const touches = [];

function swipeStart(event) {
    if (window.innerWidth <= 610) {
        const touch = event.changedTouches;
        touches.push(touch[0].screenX);
        document.addEventListener('onmousewheel', noWheel, false);
    }
}

function swipeEnd(event) {
    if (window.innerWidth <= 610) {
        const touch = event.changedTouches;
        touches.push(touch[0].screenX);
        if (touches[1] - touches[0] >= 100) {
            showMenu();
        } else if (touches[1] - touches[0] <= -100) {
            hideMenu();
        }
        touches.pop();
        touches.pop();
        document.removeEventListener('mousewheel', noWheel, false);
    }
}

function noWheel(event) {
    console.log('noo')
    event.preventDefault();
}
