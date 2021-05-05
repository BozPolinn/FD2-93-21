function deepCopy(value) {
    if (Array.isArray(value)) {
        let arr = [];
        for (let i = 0; i < value.length; i++) {
            if (typeof(value[i]) === 'object' && value[i] !== null) {
                arr.push(deepCopy(value[i]));
            } else {
                arr.push(value[i]);
            }
        }
        return arr;
    }
    else if (typeof(value) === 'object' && value !== null) {
        let obj = {};
        for (let k in value) {
            if (typeof(value[k]) === 'object' && value[k] !== null) {
                obj[k] = deepCopy(value[k]);
            } else {
                obj[k] = value[k];
            }
        }
        return obj;
    }
    return value;
}

//          ok
var h1={ a:5, b:{b1:6,b2:7}, c:[33,22], d:null, e:undefined, f:Number.NaN };
var h2=deepCopy(h1);

function test(name, obj, compare) {
    let result = deepCopy(obj);
    console.log( name, compare(obj, result) ? '✔️' : '❌')
}

console.log('тест на Object');
test('h1!==h2', h1, (obj, result) => (obj !== result));
test('h1.a===h2.a', h1, (obj, result) => (obj.a === result.a));
test('h1.b!==h2.b', h1, (obj, result) => (obj.b !== result.b));
test('h1.b.b1===h2.b.b1', h1, (obj, result) => (obj.b.b1 === result.b.b1));
test('h1.c!==h2.c', h1, (obj, result) => (obj.c !== result.c));
test('h1.c[0]===h2.c[0]', h1, (obj, result) => (obj.c[0] === result.c[0]));
test('h1.d===h2.d', h1, (obj, result) => (obj.d === result.d));
test('h1.e===h2.e', h1, (obj, result) => (obj.e === result.e));
test('isNaN(h2.f)', h1, (obj, result) => (isNaN(result.f)));
test('h2.c instanceof Array', h1, (obj, result) => (result.c instanceof Array));

//          ok
var a1=[ 5, {b1:6,b2:7}, [33,22], null, undefined, Number.NaN];
var a2=deepCopy(a1);

console.log('тест на Array');
test('a1!==a2', a1, (obj, result) => (obj !== result));
test('typeof(a2)===typeof(a1)', a1, (obj, result) => (typeof obj === typeof result));
test('a1[0]===a2[0]', a1, (obj, result) => (obj[0] === result[0]));
test('a1[1]!==a2[1]', a1, (obj, result) => (obj[1] !== result[1]));
test('a1[1].b1===a2[1].b1', a1, (obj, result) => (obj[1].b1 === result[1].b1));
test('a1[2]===a2[2]', a1, (obj, result) => (obj[2] !== result[2]));
test('a1[2][0]===a2[2][0]', a1, (obj, result) => (obj[2][0] === result[2][0]));
test('a1[3]===a2[3]', a1, (obj, result) => (obj[3] === result[3]));
test('a1[4]===a2[4]', a1, (obj, result) => (obj[4] === result[4]));
test('isNaN(a2[5])', a1, (obj, result) => (isNaN(result[5])));
test('a2[2] instanceof Array', a1, (obj, result) => (result[2] instanceof Array));

//          ok
var v1="sss";
var v2=deepCopy(v1);

console.log('тест на String');
test('typeof(v2)===typeof(v1)', v1, (obj, result) => (typeof obj === typeof result));
test('v1===v2', v1, (obj, result) => (obj === result));

//          ok
var z1=null;
var z2=deepCopy(z1);

console.log('тест на Null');
test('typeof(z2)===typeof(z1)', z1, (obj, result) => (typeof obj === typeof result));
test('z1===z2', z1, (obj, result) => (obj === result));

//          ok
var n1=Number.NaN;
var n2=deepCopy('тест на NaN');

console.log(n2);
test('typeof(n2)===typeof(n1)', n2, (obj, result) => (typeof obj === typeof result));
test('isNaN(n2)', n2, (obj, result) => (isNaN(result)));
