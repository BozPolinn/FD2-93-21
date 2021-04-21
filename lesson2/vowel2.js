let userString = prompt('Введите строку');

function countVowel(param) {
    let lowStr = param.toLowerCase();
    let counter = 0;
    const letterArray = ['а', 'e', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    
    for (let i = 0; i < lowStr.length;  i++) {
        if (letterArray.includes(lowStr[i])) {
            counter++;
        } 
    }
    return counter;
}

let answer = countVowel(userString);

console.log('Количество гласных букв в строке: ' + answer);