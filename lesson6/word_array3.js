const inputArray = ["ЛУЖА","МУЗА","ЛИРА","МЕХА","ЛИГА","ТАРА","ЛИПА","ТУРА","ПАРК","ЛОЖЬ","ЛУПА","ПЛОТ","МУРА","ПАУК",
    "ПАУТ","ПЛУТ","ЛОЖА","СЛОТ","ПАРА"];

function compareUnits(input, output) {
    let counter = 0;
    for (let j = 0; j < input.length; j++) {
        if (input[j] !== output[j]) {
            counter = counter + 1;
        }
    }
    return counter;
}

function getAllWordDistance(array) {
    let systemOfWordsRelations = {
        words : array,
        distance : getElementOfArray(array)
    }

    function getElementOfArray(array) {
        let storage = [];
        for (let i = 0; i < array.length; i++) {
            for (let j = (i+1); j < array.length; j++) {
                if (compareUnits(array[i], array[j]) === 1) {
                    storage.push([array[i], array[j]]);
                }
            }
        }
        return storage;
    }
    return systemOfWordsRelations;
}

let result = getAllWordDistance(inputArray);
console.log(result);

function createAnswerArr(input, array, output) {
    //array = result.words

    let answerArr = [];
    answerArr.push(input);

    for (let i = 0; i < array.length; i++) {
        // let result = compareCurrentElement(input, array[i], output);
        if (result === null) {
            continue;
        } else {
            for (let j = 0; j < result.length; j++) {
                answerArr.push(result[j]);
            }
        }
    }

    return answerArr;
}


// function compareCurrentElement(input, arrElem, output) {
//     // looks for this pair in result.distance
//     function ifInDistance(a, b) {
//         for (let i = 0; i < result.distance.length; i++) {
//             if (result.distance[i].includes(a) && result.distance[i].includes(b)) {
//                 return true;
//             }
//         }
//         return false;
//     }
//
//     if (compareUnits(arrElem, output) === 1) {
//         return [arrElem, output];
//     }
//
//     if (result.words.includes(input) && result.words.includes(input)) {
//         // looks for this pair in result words
//         let a = ifInDistance(input, arrElem);
//         if (a === true) {
//             return [arrElem];
//         } else {
//             return null;
//         }
//     } else {
//         // new element came. search for distance
//         let b = compareUnits(input, arrElem);
//         if (b === 1) {
//             return [arrElem];
//         } else {
//             return null;
//         }
//     }
// }


console.log(createAnswerArr('ЛИСА', result.words, 'ЛОСЬ'));

// при вызове со словами "ЛИСА" и "ЛОСЬ", функция должна вернуть строку:
//     "ЛИСА-ЛИПА-ЛУПА-ЛУЖА-ЛОЖА-ЛОЖЬ-ЛОСЬ"
// а при вызове со словами "МУХА" и "СЛОН" - строку:
// "МУХА-МУРА-ТУРА-ТАРА-ПАРА-ПАРК-ПАУК-ПАУТ-ПЛУТ-ПЛОТ-СЛОТ-СЛОН"