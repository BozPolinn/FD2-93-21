let newString = prompt('Введите строку');

// индекс последнего пробела в начале строки
// let counter = -1;
// for (; newString.startsWith(' ');) {
//     newString = newString.substring(1);
//     counter = counter + 1;
// }
// console.log(counter);

// индекс последнего пробела в начале
var last = 0;
for (var amount = 0; newString[amount] === ' '; amount++) {
    last = amount;
}
console.log(last);
console.log(last+1);
console.log(newString.length - (last+1))

// индекс первого пробела в конце
var lastEnd = newString.length - 1;
for (var endAmount = newString.length - 1; newString[endAmount] === ' '; endAmount--) {
    lastEnd = endAmount;
}
console.log(lastEnd);
console.log(newString.length - lastEnd);
console.log(lastEnd);

console.log(last+1);
console.log(newString.length - (newString.length - lastEnd) - (last+1));

// посчитать все символы строки и вывести с индексом
// for (var number = 0; number + 1 <= newString.length; number++) {
//     console.log('№: ' + number + ' символ ' + newString[number] + '\n' );
// }

// счетчик от 0 до 10 и наоборот
// for (var number=0; number <= 10; number++) {
//     console.log(number);
// }

// for (var count=10; count >= 0; count--) {
//     console.log(count);
// }


var arrNew = [4, 7, 8, 9];
// lifo - last in first out
// fifo - first in first out