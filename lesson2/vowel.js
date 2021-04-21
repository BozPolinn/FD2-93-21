let userString = prompt('Введите строку');

function countVowel(param) {
    let lowStr = param.toLowerCase();
    let i = 0;
    let counter = 0;
    while (i < lowStr.length) {
        if (lowStr[i] === 'а' || lowStr[i] === 'е' || lowStr[i] === 'ё' || lowStr[i] === 'и' || 
            lowStr[i] === 'о' || lowStr[i] === 'у' || lowStr[i] === 'ы' || lowStr[i] === 'э' || 
            lowStr[i] === 'ю' || lowStr[i] === 'я' ) {
            counter++;
            i++;
        } else {
            counter = counter;
            i++;
        }
    }
    return counter;
}

let answer = countVowel(userString);

console.log('Количество гласных букв в строке: ' + answer);