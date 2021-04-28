// Напишите "чистую" функцию, получающую номер года и номер месяца,
// и возвращающую количество дней в этом месяце.
//     Проверьте правильную работу кода серией вызовов этой функции с различными аргументами,
//     обязательно с вариантом февраля в високосном и невисокосном году.

let year = prompt('Введите год (числом)');
let month = prompt('Введите месяц (числом от 1 до 12)');

function getDaysNum(year, month) {
    // const monthArr = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31};
    const monthArr = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31, 13:29};
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

alert(getDaysNum(year, month));

//проверка: февраль 1900, 1700, 2000, 2004, 4, 1560, 1757, 833, 1024