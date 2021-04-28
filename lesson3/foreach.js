let user = prompt('Введите строку');

function qweVowel(str) {
    let strArr = str.split('');
    const letterArray = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'];
    let arrayCounter = 0;

    function isVowel(sym) {
        if (letterArray.includes(sym) === true) {
            return arrayCounter = arrayCounter + 1;
        }
        else {
            return arrayCounter;
        }
    }
    strArr.forEach(isVowel);
    return arrayCounter;
}

console.log(qweVowel(user));

// аеёиоуыэюя