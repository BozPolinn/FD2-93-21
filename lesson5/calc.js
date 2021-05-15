function calc(expr) {
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
                let count = 1;
                countEnd = i;
                do {
                    countEnd++;
                    if (str[countEnd] === '(') {
                        count ++;
                    } else if (str[countEnd] === ')') {
                        count--;
                    }
                } while (count >= 1);
                let newStr = str.substring((i + 1), (countEnd));
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

    let newExpr = convertString(expr);

    function calcExpr(data) {
        let operations = {
            mult: function (a, b) {
                return a * b;
            },
            divid: function (a, b) {
                return a / b;
            },
            sum: function (a, b) {
                return a + b;
            },
            dif: function (a, b) {
                return a - b;
            }
        }
        for (let ind3 = 0; ind3 < data.length; ind3++) {
            if (Array.isArray(data[ind3])) {
                let curr = data.splice(ind3, 1);
                let newCurr = calcExpr(curr[0]);
                data.splice(ind3, 0, newCurr);
            }
        }
        let ind = 0;
        while (ind < data.length) {
            if (data[ind] === '*') {
                let curr = data.splice((ind - 1), 3);
                let count = operations.mult(curr[0], curr[2]);
                data.splice((ind - 1), 0, count);
                ind--;
            } else if (data[ind] === '/') {
                let curr = data.splice((ind - 1), 3);
                let count = operations.divid(curr[0], curr[2]);
                data.splice((ind - 1), 0, count);
                ind--;
            }
            ind++;
        }
        let ind2 = 0;
        while (ind2 < data.length) {
            if (data[ind2] === '+') {
                let curr = data.splice((ind2 - 1), 3);
                let count = operations.sum(curr[0], curr[2]);
                data.splice((ind2 - 1), 0, count);
                ind2--;
            } else if (data[ind2] === '-') {
                let curr = data.splice((ind2 - 1), 3);
                let count = operations.dif(curr[0], curr[2]);
                data.splice((ind2 - 1), 0, count);
                ind2--;
            }
            ind2++;
        }
        return data[0];
    }

    return calcExpr(newExpr);
}

function test(expr, expected) {
    let actual = calc(expr);
    let result = actual === expected;
    console.log(result + ' for ' + expr + ' = ' + expected);
}

test('((2+4)*(3*6))/4-17', 10);
test('(((2+4)-2)*(3*6))/4-17', 1);
test('(2+15)*1', 17);
test('(((2-(2+0)+4)-2)*(3*6))/4-17', -8);
test('(-1-4)*5', -25);
test('(-1.5*2+3)*5', 0);

//10
let a = calc('((2+4)*(3*6))/4-17');
console.log(a);
//1
let d = calc('(((2+4)-2)*(3*6))/4-17');
console.log(d);
//17
let b = calc('(2+15)*1');
console.log(b);
//-8
let e = calc('(((2-(2+0)+4)-2)*(3*6))/4-17');
console.log(e);
//-25
let f = calc('(-1-4)*5');
console.log(f);
//0
let g = calc('(-1.5*2+3)*5');
console.log(g);
