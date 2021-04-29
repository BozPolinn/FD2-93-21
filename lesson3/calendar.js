let year = Math.abs(parseInt(prompt('Введите год (числом)')));
let month = parseInt(prompt('Введите месяц (числом от 1 до 12)'));
if (isNaN(year) || isNaN(month)) {
    alert('Введены некорректные значения. Попробуйте снова. Введите числа');
}
else {
    alert(getDaysNum(year, month));
}
function getDaysNum(year, month) {
    const monthArr = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31};
    // високосный год
    if (year%4===0 && month===2) {
        if (year%100===0 && year%400!==0) {
            return monthArr[month];
        }
        else {
            return monthArr[month] + 1;
        }
    } else {
        // невисикосный год
        return monthArr[month];
    }
}
console.log('feb 1994' + ' : ' + getDaysNum(1994, 2));
console.log('feb 1700' + ' : ' + getDaysNum(1700, 2));
console.log('feb 2000' + ' : ' + getDaysNum(2000, 2));
console.log('feb 4' + ' : ' + getDaysNum(4, 2));
console.log('jan 313' + ' : ' + getDaysNum(313, 1));
console.log('march 837' + ' : ' + getDaysNum(837, 3));
console.log('may 2021' + ' : ' + getDaysNum(2021, 5));
console.log('june 1375' + ' : ' + getDaysNum(1375, 6));
console.log('july 1256' + ' : ' + getDaysNum(1256, 7));
console.log('aug 1580' + ' : ' + getDaysNum(1580, 8));
console.log('sept 1861' + ' : ' + getDaysNum(1861, 9));
console.log('oct 1918' + ' : ' + getDaysNum(1918, 10));
console.log('nov 540' + ' : ' + getDaysNum(540, 11));
console.log('dec 1730' + ' : ' + getDaysNum(1730, 12));



