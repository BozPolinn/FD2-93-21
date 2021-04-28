let user = prompt('Введите строку').toLowerCase().split('');

function qweVowel(arr) {
    let letterArray = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    let array = [];
    function isVowel(arr) {
        if (letterArray.includes(arr) === true) {
            return array.push(arr);
        }
        else {
            return;
        }
    }
    let result = user.forEach(isVowel);
    return array.length;
}

console.log(qweVowel(user));

// аеёиоуыэюя