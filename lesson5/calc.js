// B3+
// Написать функцию-калькулятор вручную введённого выражения.
// Должны работать операции + - * / и скобки, числа должны приниматься целые, дробные, отрицательные
// Например, вызываем функцию, передавая ей строку "2*(-3+1)", функция возвращает -4.

function convertString(str) {
    let arr = [];
    let operSign = ['+', '-', '/', '*'];
    let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '-'];
    let expectOper = false;

    let i = 0;
    while (i < str.length) {
        let countEnd;
        if (expectOper === false && num.includes(str[i])) {
            countEnd = i;
            do {
                countEnd++
            } while (num.includes(str[countEnd]) && str[countEnd] !== '-');
            let isNum = str.substring(i, countEnd);
            arr.push(isNum);
            i = countEnd;
            expectOper = true;
        } else if (operSign.includes(str[i])) {
            arr.push(str[i]);
            i += 1;
            expectOper = false;
        } else if (str[i] === '(') {
            countEnd = i;
            do {
                countEnd++
            } while (str[countEnd] !== ')');
            let newStr = str.substring(i + 1, countEnd);
            arr.push(convertString(newStr));
            i = countEnd;
            expectOper = true;
        } else {
            i += 1;
        }
    }

    function modArray(arr) {
        let storage = [];
        for (let unit = 0; unit < arr.length; unit++) {
            let newUnit = parseFloat(arr[unit]);
            if (isNaN(newUnit)) {
                storage.push(arr[unit]);
            } else if (Array.isArray(arr[unit])) {
                storage.push(modArray(arr[unit]));
            } else {
                storage.push(newUnit);
            }
        }
        return storage;
    }

    return modArray(arr);
}

let x = convertString('-53/-1-(7*8)');
console.log(Array.isArray(x[4]));
console.log(x);

function calcExpr(data) {
    let operations = {
        mult: function multiFn(a, b) {
            gen = a * b;
            return gen;
        },
        divid: function divideFn(a, b) {
            gen = a / b;
            return gen;
        },
        sum: function plusFn(a, b) {
            sum = a + b;
            return sum;
        },
        dif: function minusFn(a, b) {
            sum = a - b;
            return sum;
        }
    }
    for (let ind3 = 0; ind3 < data.length; ind3++) {
        if (Array.isArray(data[ind3])) {
            let curr = data.splice(ind3);
            calcExpr(data[ind3]);
            data.splice(ind3, 0, curr);
        }
    }
    for (let ind = 0; ind < data.length; ind++) {
        if (data[ind] === '*') {
            let curr = data.splice((ind - 1), 3);
            let count = operations.mult(curr[0], curr[2]);
            data.splice(2, 0, count);
        }
        else if (data[ind] === '/') {
            let curr = data.splice((ind - 1), 3);
            let count = operations.divid(curr[0], curr[2]);
            data.splice(2, 0, count);
        }
    }
    for (let ind2 = 0; ind2 < data.length; ind2++) {
        if (data[ind2] === '+') {
            let curr = data.splice((ind2 - 1), 3);
            let count = operations.sum(curr[0], curr[2]);
            data.splice(2, 0, count);
        }
        else if (data[ind2] === '-') {
            let curr = data.splice((ind2 - 1), 3);
            let count = operations.dif(curr[0], curr[2]);
            data.splice(2, 0, count);
        }
    }
    return data;
}

let data4 = [-1, [7, '*', 8]];
let data3 = [-53, '/', -1];
let data2 = [8, '-', 4, '*', 5];
let data = [8, '+', 4, '/', 5];

// console.log(calcExpr(data));
// console.log(calcExpr(data2));
// console.log(calcExpr(data3));
console.log(calcExpr(data4));


// console.log(calcExpr(x));

