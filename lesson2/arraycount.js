let myArray = [5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
];

function countSum(array) {
    let sum = 0;
    for (var i=0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            sum = sum + countSum(array[i]);
        } else {
            sum = sum + array[i];
        }
    }
    return sum;
}

var commonSum = countSum(myArray);
console.log(commonSum);