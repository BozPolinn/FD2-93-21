// Написать функцию, получающую два слова, и строящую за несколько шагов из первого слова второе,
// за каждый шаг меняя не более одной буквы, так, чтобы на каждом шаге получалось допустимое слово (слово из словаря).
// Функция должна вернуть самую короткую цепочку шагов в виде строки.
//     Например, при работе со следующим словарём:
//     ["ЛУЖА","МУЗА","ЛИРА","МЕХА","ЛИГА","ТАРА","ЛИПА","ТУРА","ПАРК","ЛОЖЬ","ЛУПА","ПЛОТ","МУРА","ПАУК",
//     "ПАУТ","ПЛУТ","ЛОЖА","СЛОТ","ПАРА"]
// при вызове со словами "ЛИСА" и "ЛОСЬ", функция должна вернуть строку:
//     "ЛИСА-ЛИПА-ЛУПА-ЛУЖА-ЛОЖА-ЛОЖЬ-ЛОСЬ"
// а при вызове со словами "МУХА" и "СЛОН" - строку:
// "МУХА-МУРА-ТУРА-ТАРА-ПАРА-ПАРК-ПАУК-ПАУТ-ПЛУТ-ПЛОТ-СЛОТ-СЛОН"

// let s1 = 'abc';
// let s2 = 'abc';
//
// let m = s1.length;
// let n = s2.length;
//
// console.log(D(0,m,n));

function D(o,i,j) {
    console.log(' '.repeat(o),s1[i-1], s2[j-1]);
    if (i===0 && j===0) {
        return 0;
    } else if (i>0 && j===0) {
        return i;
    } else if (i===0 && j>0) {
        return j;
    } else {
        return Math.min(
            D(o+3,i,(j-1)) + 1,
            D(o+3,(i-1),j) + 1,
            D(o+3,(i-1),(j-1)) + M(s1[i-1], s2[j-1])
        )
    }
}

function M(a,b) {
    return (a === b) ? 0 : 1;
}

function deleteSymb(input, symbol, index) {
    let newInput = '';
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== symbol) {
            newInput += input[i];
        } else if (i === index && input[i] === symbol) {
            counter += 1;
        }
    }
    // return new word and counter
    return [newInput, counter];
}
// console.log(deleteSymb('обои', 'б', 1));
// console.log(deleteSymb('мортаделла', 'д', 5));


function insertSymb(input, symbol, index) {
    let newInput = '';
    let counter = 0;
    if (index >= input.length) {
        for (let i = 0; i < (input.length+1); i++) {
            if (i === index) {
                if (input[i] === undefined) {
                    newInput += '';
                } else {
                    newInput += input[i];
                }
                newInput += symbol;
                counter += 1;
            }
            else {
                newInput += input[i];
            }
        }
    } else {
        for (let i = 0; i < input.length; i++) {
            if (i === index) {
                newInput += symbol;
                counter += 1;
                if (input[i] === undefined) {
                    newInput += '';
                } else {
                    newInput += input[i];
                }
            } else {
                newInput += input[i];
            }
        }
    }
    return [newInput, counter];
}

// console.log(insertSymb('мама', 'н', 4));
// console.log(insertSymb('аэродром', 'п', 5));
// console.log(insertSymb('мама', 'а', 0));

function replaceSymb(input, symbol, newSymbol, index) {
    let newInput = '';
    let counter = 0;
    for (let i = 0; i < input.length; i ++) {
        if (input[i] === symbol && i === index) {
            newInput += newSymbol;
            counter += 1;
        } else {
            newInput += input[i];
        }
    }
    return [newInput, counter];
}

console.log(replaceSymb('мама', 'м', 'п', 0));
console.log(replaceSymb('мама', 'а', 'о', 1));
console.log(replaceSymb('мама', 'а', 'с', 3));

function compareSymb(a, b) {
    if (a === b) {
        return 0;
    } else {
    //    возврат 1 - вызов функций удаления, замены и вставки
        return 1;
    }
}

console.log(compareSymb('f', 'а'));
console.log(compareSymb('а', 'а'));
console.log(compareSymb('f', 'f'));
