function buildWrapper(tag) {
    var mnemSymb = {'<': '&#60;', '>': '&#62;', '\'': '&#39;', '\"': '&#34;', '&': '&#38;'};
    return function(str, arr) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] in mnemSymb) {
                str = str.replace(str[i], mnemSymb[str[i]]);
            }
        }
        var hash = '';
        for (var k in arr) {
            hash = hash + ' ' + k + '=' + arr[k];
            console.log(k + ' = ' + arr[k]);
        }
        return '<' + tag + hash + '>' + str + '</' + tag + '>';
    }
}

// var wrapP = buildWrapper("P"); 
// var wrapH1 = buildWrapper("H1"); 
// console.log(wrapP('example&<">'));
// console.log(wrapP("Однажды в студёную зимнюю пору",{lang:"ru"}));
// console.log(wrapH1('example2'));
// console.log(wrapH1("СТИХИ",{align:"center",title:"M&M's"}) );