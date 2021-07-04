window.addEventListener('hashchange', changePage, false);
const routes = {'#/1' : 'text1', '#/2': 'text2'};

function changePage() {
    const hash = window.location.hash;
    document.querySelector('#ex').innerHTML = routes[hash];
}

const defaultHash = '#/2';

if (window.location.hash === defaultHash) {
    changePage();
} else {
    window.location.hash = defaultHash;
}