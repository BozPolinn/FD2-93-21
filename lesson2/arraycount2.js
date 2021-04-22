let myArray = [5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
];

function countSum2(array) {
    if (!Array.isArray(array)) {
        return array;
    }

    let sum = 0;
    for (var i=0; i < array.length; i++) {
        sum = sum + countSum2(array[i]);
    }
    return sum;
}

var commonSum = countSum2(myArray);
console.log(commonSum);
