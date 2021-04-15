// объявляем переменную
var user; 
// запрашиваем строку у пользователя
do {
    user = prompt('Введите строку', 'Ваша строка');
    boolEnter = Boolean(user);
} while (boolEnter !== true);

function cutEmpty(param) {
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
            // б) выявление пробелов в конце строки
            // обозначаем индекс последнего символа строки
    var firstEnd;
    for (var indexNumEnd = length - 1; param[indexNumEnd] === ' '; indexNumEnd--) {
        firstEnd = indexNumEnd;
    }
    return ('&' + param.substring(numStart, firstEnd) + '&');
}
var result = cutEmpty(user);
console.log(result);
