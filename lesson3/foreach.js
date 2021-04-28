let user = prompt('Введите строку').split('');

function qweVowel(arr) {
    const letterArray = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'];
    let arrayCounter = 0;

    function isVowel(arr) {
        if (letterArray.includes(arr) === true) {
            return arrayCounter = arrayCounter + 1;
        }
        else {
            return arrayCounter;
        }
    }
    let result = user.forEach(isVowel);
    return arrayCounter;
}

console.log(qweVowel(user));

// аеёиоуыэюя