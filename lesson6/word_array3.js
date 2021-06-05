const inputArray = ["ЛУЖА","МУЗА","ЛИРА","МЕХА","ЛИГА","ТАРА","ЛИПА","ТУРА","ПАРК","ЛОЖЬ","ЛУПА","ПЛОТ","МУРА","ПАУК",
    "ПАУТ","ПЛУТ","ЛОЖА","СЛОТ","ПАРА"];

//gets graph - array of words -
// returns system with one-letter-distances between elements
function getAllWordDistance(array) {
    let systemOfWordsRelations = {
        words : array,
        distance : getElementOfArray(array)
    }
    function compareUnits(input, output) {
        let counter = 0;
        for (let j = 0; j < input.length; j++) {
            if (input[j] !== output[j]) {
                counter = counter + 1;
            }
        }
        return counter;
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



// при вызове со словами "ЛИСА" и "ЛОСЬ", функция должна вернуть строку:
//     "ЛИСА-ЛИПА-ЛУПА-ЛУЖА-ЛОЖА-ЛОЖЬ-ЛОСЬ"
// а при вызове со словами "МУХА" и "СЛОН" - строку:
// "МУХА-МУРА-ТУРА-ТАРА-ПАРА-ПАРК-ПАУК-ПАУТ-ПЛУТ-ПЛОТ-СЛОТ-СЛОН"