function cutAll(str) {
    // удаление пробела в начале
    function shortStartName(str) {
        if (str.startsWith(' ')) {
            return str.substring(1);
        } else {
            return str;
        }
    };
    // удаление пробела в конце
    function shortEndName(str) {
        if (str.endsWith(' ')) {
            return str.substring(0, (str.length-1));
        }
        else {
            return str;
        }
    }
    // удаление всех пробелов
    do {
        str = shortStartName(str);
    } while (str.startsWith(' '));
    do {
        str = shortEndName(str);
    } while (str.endsWith(' '));
    return str;
}
// объявляем переменную
var user; 
// запрашиваем строку у пользователя
do {
    user = prompt('Введите строку', 'Ваша строка');
    boolEnter = Boolean(user);
} while (boolEnter !== true);
// проверяем наличие пробелов в начале и в конце и убираем их
user = cutAll(user);
console.log('&' + user + '&');