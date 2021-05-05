function deepCopy(value) {
    if (Array.isArray(value)) {
        let arr = [];
        for (let i = 0; i < value.length; i++) {
            // if (Array.isArray(value[i])) {
            //     arr.push(deepCopy(value[i]));
            // } else
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
            // if (Array.isArray(value[k])) {
            //     obj[k] = deepCopy(value[k]);
            // } else
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
console.log('тест на Object');
console.log(h1===h2);
console.log(h1.a===h2.a);
console.log(h1.b===h2.b);
console.log(h1.b.b1===h2.b.b1);
console.log(h1.c===h2.c);
console.log(h1.c[0]===h2.c[0]);
console.log(h1.d===h2.d);
console.log(h1.e===h2.e);
console.log(isNaN(h2.f));
console.log(h2.c instanceof Array);

// + h1===h2 будет false
// + h1.a===h2.a будет true
// + h1.b===h2.b будет false
// + h1.b.b1===h2.b.b1 будет true
// + h1.c===h2.c будет false
// + h1.c[0]===h2.c[0] будет true
// + h1.d===h2.d будет true
// + h1.e===h2.e будет true
// + isNaN(h2.f) будет true
// + h2.c instanceof Array будет true

//          ok
var a1=[ 5, {b1:6,b2:7}, [33,22], null, undefined, Number.NaN];
var a2=deepCopy(a1);

console.log('тест на Array');
console.log(a1===a2);
console.log(typeof(a2)===typeof(a1));
console.log(a1[0]===a2[0]);
console.log(a1[1]===a2[1]);
console.log(a1[1].b1===a2[1].b1);
console.log(a1[2]===a2[2]);
console.log(a1[2][0]===a2[2][0]);
console.log(a1[3]===a2[3]);
console.log(a1[4]===a2[4]);
console.log(isNaN(a2[5]));
console.log(a2[2] instanceof Array);

// + a1===a2 будет false
// + typeof(a2)===typeof(a1) будет true
// + a1[0]===a2[0] будет true
// + a1[1]===a2[1] будет false
// + a1[1].b1===a2[1].b1 будет true
// + a1[2]===a2[2] будет false
// + a1[2][0]===a2[2][0] будет true
// + a1[3]===a2[3] будет true
// + a1[4]===a2[4] будет true
// + isNaN(a2[5]) будет true
// + a2[2] instanceof Array будет true

//          ok
var v1="sss";
var v2=deepCopy(v1);

console.log('тест на String');
console.log(typeof(v2)===typeof(v1));
console.log(v1===v2);

// + typeof(v2)===typeof(v1) будет true
// + v1===v2 будет true

//          ok
var z1=null;
var z2=deepCopy(z1);

console.log('тест на Null');
console.log(typeof(z2)===typeof(z1));
console.log(z1===z2);

// + typeof(z2)===typeof(z1) будет true
// + z1===z2 будет true

//          ok
var n1=Number.NaN;
var n2=deepCopy('тест на NaN');

console.log(n2);
console.log(typeof(n2)===typeof(n1));
console.log(isNaN(n2));

// typeof(n2)===typeof(n1) будет true
// isNaN(n2) будет true
