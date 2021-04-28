let user = prompt('Введите строку');

function isVowel(str) {
    const letterArray = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'];
    let strArr = str.split('');
    return strArr.reduce(function(total, arr) {
        return letterArray.includes(arr) === true ? total+1 : total;
    }, 0);
}

let vowel = isVowel(user);
console.log(vowel);
