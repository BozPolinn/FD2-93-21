let user = prompt('Введите строку');

function findVowel(str) {
    let strArr = str.split('');
    const letterArray = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'];

    function isVowel(elem) {
        return letterArray.includes(elem) === true;
    }
    let vowelSearch = strArr.filter(isVowel);
    return vowelSearch.length;
}

console.log(findVowel(user));

// аеёиоуыэюя