//функции вложены в функцию. черновик

function copy(value) {
    function copyArr(value) {
        let arr = [];
        for (let i = 0; i < value.length; i++) {
            if (Array.isArray(value[i])) {
                arr.push(copyArr(value[i]));
            } else if (typeof(value[i]) === 'object' && value[i] !== null) {
                arr.push(copyObj(value[i]));
            } else {
                arr.push(value[i]);
            }
        }
        return arr;
    }
    function copyObj(value) {
        let obj = {};
        for (let k in value) {
            if (Array.isArray(value[k])) {
                obj[k] = copyArr(value[k]);
            } else if (typeof(value[k]) === 'object' && value[k] !== null) {
                obj[k] = copyObj(value[k]);
            }
            obj[k] = value[k];
        }
        return obj;
    }
    if (Array.isArray(value)) {
        copyArr(value);
    } else if (typeof(value[k]) === 'object' && value[k] !== null) {
        copyObj(value);
    }
    return value;
}

let val1 = [null, 'hbg', ['a', 43, {'a': 5, 'b': undefined}, [true, 'k']], {a:54, b:['a', null], c:undefined, d:
        {a:'kjnjk', b:true}}];
var simple1 = copy(val1);
console.log(simple1);