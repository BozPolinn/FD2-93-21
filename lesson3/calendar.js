//     Проверьте правильную работу кода серией вызовов этой функции с различными аргументами,
//     обязательно с вариантом февраля в високосном и невисокосном году.

// let year = prompt('Введите год (числом)');
// let month = prompt('Введите месяц (числом от 1 до 12)');
// alert(getDaysNum(year, month));

function getDaysNum(year, month) {
    const monthArr = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31};
    let yearNum = Math.abs(parseInt(year));
    let monthNum =Math.abs( parseInt(month));

    if ( isNaN(yearNum) || isNaN(monthNum)) {
        return 'Неверно! Введите числовое значение месяца и года';
    }
    // високосный год
    if (yearNum%4===0 && monthNum===2) {
        if (yearNum%100===0 && yearNum%400!==0) {
            return monthArr[monthNum];
        }
        else {
            return monthArr[monthNum] + 1;
        }
    } else {
        // невисикосный год
        return monthArr[monthNum];
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



