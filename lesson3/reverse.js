let user = prompt('Enter your string');

function getReverse(str) {
    let strArr = str.split('');
    strArr = strArr.reverse();
    return strArr.join('');
}

alert(getReverse(user));