let user = prompt('Введите строку').split('');
const letterArray = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'];

let vowerNum = user.reduce(function(total, arr) {
    return letterArray.includes(arr) === true ? total+1 : total;
}, 0);
console.log(vowerNum);
