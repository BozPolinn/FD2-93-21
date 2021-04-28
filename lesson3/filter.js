let user = prompt('Введите строку').split('');

function isVowel(elem) {
    const letterArray = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'];
    return letterArray.includes(elem) === true;
}
let vowelSearch = user.filter (isVowel);

isVowel(user);
console.log(vowelSearch);
console.log(vowelSearch.length);

// аеёиоуыэюя