export function preventDoubleClick() {
    document.addEventListener('dblclick', removeDbClick, false);
}

export function removeStopDoubleClick() {
    document.removeEventListener('dblclick', removeDbClick, false);
}

function removeDbClick(event) {
    event.preventDefault();
}
