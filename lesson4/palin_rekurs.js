let user = prompt('Введите фразу для проверки на палиндром:');
function isPalindrom(user) {
    function modStr(value) {
        let regexp = /[^а-еж-щыэ-я]/g;
        let newVal = value.toLowerCase();
        newVal = newVal.replace('ё', 'е').replace(regexp, '');
        return newVal;
    }
    let newUser = modStr(user);
    console.log(newUser);

    let sum = 0;
    function recPalindrom(val) {
        if (val[sum] === val[val.length - sum - 1]) {
            sum = sum + 1;
            if (sum === Math.ceil(val.length / 2)) {
                return true;
            }
            else {
                return recPalindrom(val);
            }
        } else {
            return false;
        }
    }
    return recPalindrom(newUser);
}

// isPalindrom(user);
if (isPalindrom(user)) {
    alert('Это палиндром!');
} else {
    alert('Это не палиндром!');
}
