let user = prompt('Введите строку').toLowerCase().split('');

function isVowel(elem) {
    let letterArray = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    return letterArray.includes(elem) === true;
}
let vowelSearch = user.filter (isVowel);

isVowel(user);
console.log(vowelSearch);
console.log(vowelSearch.length);

// аеёиоуыэюя