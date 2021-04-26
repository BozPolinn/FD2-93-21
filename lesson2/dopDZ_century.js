var year = parseInt(prompt('Enter the year'));

function defineYear(number) {
    var century = Math.ceil(number / 100);
    return century;
}

alert(defineYear(year));