// function buildWrapper(arg) {
//     var mnemSymb = {'<': '&#60;', '>': '&#62;', '\'': '&#39;', '\"': '&#34;', '&': '&#38;'};
//     return function wrapP(str, str2) {
//         for (var i = 0; i < str.length; i++) {
//             if (str[i] in mnemSymb) {
//                 str = str.replace(str[i], mnemSymb[str[i]]);
//             }
//         }
//         var h = '';
//         for (var atr in str2) {
//             console.log(atr + "=" + '\"' + str2[atr] + '\"');
//             h = h + ' ' + atr + "=" + '\"' + str2[atr] + '\"';
//         }
//         console.log(h);
//         return '<' + arg  + h + '>' + str + '</' + arg + '>';
//     };

// }
// var wrapP = buildWrapper('p');
// var result = wrapP('example', {lang:"ru", color:"black"});
// console.log(result);



//   Напишите функцию для оборачивания текста в тег с атрибутами, с которой можно было бы работать в следующем стиле:
//   var wrapP=buildWrapper("P");   // строим функцию для оборачивания текста в тег P
//   console.log( wrapP("Однажды в студёную зимнюю пору") );
//   // в консоль выводится строка "<P>Однажды в студёную зимнюю пору</P>"

//   console.log( wrapP("Однажды в студёную зимнюю пору",{lang:"ru"}) );
//   // в консоль выводится строка "<P lang='ru'>Однажды в студёную зимнюю пору</P>"

//   Функция должна учитывать, что некоторые символы надо заменять на HTML-мнемоники (а именно - символы < > ' " &):
//   console.log( wrapP("Однажды в <студёную> зимнюю пору") );
//   // в консоль выводится строка "<P>Однажды в &lt;студёную&gt; зимнюю пору</P>"

//   var wrapH1=buildWrapper("H1"); // строим функцию для оборачивания текста в тег H1
//   console.log( wrapH1("СТИХИ",{align:"center",title:"M&M's"}) );
//   // в консоль выводится строка "<H1 align='center' title='M&amp;M&apos;s'>СТИХИ</H1>"

// var wrapH1 = buildWrapper('H1');
// // '<p>example</p>'


// function createAdder(num) {
//     let sum = num;
//     return function addNumber(N) {
//         sum = sum + N;
//         return sum;
//     };
// }
// var add = createAdder(7);

// console.log(add(8));
// console.log(add(5));

// function createSubtractor(num) {
//     let delt = num;
//     return function countSub(N) {
//         return delt = delt - N;
//     }
// }

// var subtract = createSubtractor(7);
// console.log(subtract(5));
// console.log(subtract(1)); 

var calculator = createCalc(7);
console.log(calculator.add(8));
// 15
console.log(calculator.subtract(13));
// 2

function createCalc(num) {
    let sum = num;
    let operations = {
        add: function countSum(N) {
            sum = sum + N;
            return sum;
        },
        subtract: function subSum(N) {
            sum = sum - N;
            return sum;
        }
    };
    return operations;
}