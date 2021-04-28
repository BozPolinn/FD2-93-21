let user = prompt('Введите строку').split('');

function qweVowel(arr) {
    const letterArray = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'];
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