// объявляем переменную
var user;
// запрашиваем строку у пользователя
user = prompt('Введите строку', 'Ваша строка');

function cutEmpty(param) {
        if (param === '') {
            console.log('Передана пустая строка');
            return param;
        }
        // определение длины строки и сохранение значения в переменную
        var length = param.length;
        // определение пробелов
        // а) выявление пробелов в начале строки
        var lastStart = -1;
        for (var indexNumStart = 0; param[indexNumStart] === ' '; indexNumStart++) {
            lastStart = indexNumStart;
        }
        // определяем количество пробелов в начале строки
        var numStart = lastStart + 1;
                // console.log(numStart);
        if (numStart === param.length) {
            console.log('Строка состоит из пробелов');
            return '';
        }
        // б) выявление пробелов в конце строки
        // обозначаем индекс последнего символа строки
        var firstEnd;
        for (var indexNumEnd = length - 1; param[indexNumEnd] === ' '; indexNumEnd--) {
            firstEnd = indexNumEnd;
        }
        // определяем количество пробелов в конце строки
        numEnd = param.length - (indexNumEnd + 1);
                // console.log(numEnd);
        // длина строки без пробелов
        pureStringLength = param.length - numStart - numEnd;
                // x = 8 - 2 - 3, x=3
                // console.log(pureStringLength);
        if (pureStringLength === param.length) {
            console.log('Строка не содержит пробелов');
            return param;
        }
        return (param.substring(numStart, firstEnd));
}

var result = cutEmpty(user);
console.log('&' + result + '&');
