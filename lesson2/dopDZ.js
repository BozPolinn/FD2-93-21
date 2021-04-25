var user = prompt('Введите строку:');

function isPalindrome(str) {
    let newStr = str.toLowerCase().replace(/[^а-щыэ-я]/g, '').replace(/ё/g, 'e');
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
    return true;
}

var result = isPalindrome(user);
if (result === true) {
    alert('фраза является палиндромом');
}
else {
    alert('фраза не является палиндромом');
}
