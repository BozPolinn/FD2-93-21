export function on() {
    const label = document.querySelector('#soundCheck');
    label.classList.remove('checked');
    label.classList.add('unChecked');
}

export function off() {
    const label = document.querySelector('#soundCheck');
    label.classList.remove('unChecked');
    label.classList.add('checked');
}
