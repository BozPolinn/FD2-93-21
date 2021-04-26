var user = prompt('Введите строку на русском языке:');

function isPalindrome(str) {
    let newStr = str.toLowerCase().replace(/ё/g, 'е').replace(/[^а-щыэ-я]/g, '');
    console.log(newStr);
    for (let i=0; i < Math.floor(0.5*newStr.length); i++) {
        console.log(newStr[i], newStr[newStr.length - i - 1]);
        if (newStr[i] === newStr[newStr.length - i - 1]) {
            continue;
        }
        else {
            return false;
        }
    }
    if (newStr === '') {
        return 'Вы ввели недопустимые символы';
    }
    return true;
}

var result = isPalindrome(user);
if (result === true) {
    alert('фраза является палиндромом');
}
else if (result === 'Вы ввели недопустимые символы') {
    alert('Вы ввели недопустимые символы, попробуйте снова');
}
else {
    alert('фраза не является палиндромом');
}
