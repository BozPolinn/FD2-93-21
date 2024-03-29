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

let array1 = ["ЛУЖА","МУЗА","ЛИРА","МЕХА","ЛИГА","ТАРА","ЛИПА","ТУРА","ПАРК","ЛОЖЬ","ЛУПА","ПЛОТ","МУРА","ПАУК",
    "ПАУТ","ПЛУТ","ЛОЖА","СЛОТ","ПАРА"];

let input1 = "ЛИСА";
let output1 = "ЛОСЬ";

function compareUnits(input, output) {
    let counter = 0;
    for (let j = 0; j < input.length; j++) {
        if (input[j] !== output[j]) {
            counter = counter + 1;
        }
    }
    return counter;
}
console.log(compareUnits(input1, output1));

function getNeighbour(input, array) {
    let neighbours = {};
    for (let i = 0; i < array.length; i++) {
        if (compareUnits(input, array[i]) === 1) {
            neighbours[array[i]] = 1;
        }
    }
    return neighbours;
}
console.log(getNeighbour(input1, array1));



