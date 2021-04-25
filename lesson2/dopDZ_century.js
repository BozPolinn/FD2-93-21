var year = parseInt(prompt('Enter the year'));

function defineYear(number) {
    var century = (Math.floor(number / 100)) + 1;
    return century;
}

alert(defineYear(year));