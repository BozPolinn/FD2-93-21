// Написать чистую функцию, проверяющую, что переданная ей фраза является палиндромом.
// (Палиндром - это фраза, которая слева направо читается так же как справа налево)
// Массивы при решении не использовать.
// При проверке должны игнорироваться:
//  + регистр букв;
//  + пробелы;
//  + знаки препинания;
//  + мягкие и твёрдые знаки;
//  + разница между буквами "е" и "ё".
// Спросить у пользователя строку. Вывести через alert сообщение "это палиндром" или "это не палиндром".

var user = prompt('Введите строку:');

function isPalindrome(str) {
    let newStr = str.toLowerCase().replace(/[^а-щыэ-я]/g, '').replace(/ё/g, 'e');
    console.log(newStr);
    for (let i=0; i < Math.floor(0.5*newStr.length); i++) {
        console.log(newStr[i], newStr[newStr.length - i - 1]);
        if (newStr[i] === newStr[newStr.length - i - 1]) {
            continue;
        }
        else {
            return 'Не палиндром';
        }
    }
    return 'Палиндром';
}

alert(isPalindrome(user));
