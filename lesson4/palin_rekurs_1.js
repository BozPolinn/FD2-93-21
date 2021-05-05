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

    function recPalindrom(val) {
        if (val.length <= 1) {
            return true;
        } else if (val[0] === val[val.length-1]) {
            let newVal = val.substring(1,(val.length-1));
            return recPalindrom(newVal);
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
