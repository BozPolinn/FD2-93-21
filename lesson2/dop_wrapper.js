function buildWrapper(tag) {
    // var mnemSymb = {'<': '&#60;', '>': '&#62;', '\'': '&#39;', '\"': '&#34;', '&': '&#38;'};
    let regexp = /[<>\'\"&]/g;

    return function(str, arr) {
        function convertMnem(str) {
            return str.replace(regexp, function changeSymb(s) {
                switch(s) {
                    case '&':
                        return '&#38;';
                    case '<':
                        return '&#60;';
                    case '>':
                        return '&#62;';
                    case '\'':
                        return '&#39;';
                    case '\"':
                        return '&#34;';
                }
                
            })
        }
        var newStr = convertMnem(str);
        var hash = '';

        for (var k in arr) {
            var corrMean = convertMnem(arr[k])
            hash = hash + ' ' + k + '="' +  corrMean + '"';
        }
        return '<' + tag + hash + '>' + newStr + '</' + tag + '>';
    }
}

var wrapP = buildWrapper("P"); 
var wrapH1 = buildWrapper("H1"); 
console.log(wrapP('example&<">'));
console.log(wrapP("Однажды в студёную зимнюю пору",{lang:"ru"}));
console.log(wrapH1('example2'));
console.log(wrapH1("СТИХ<>И",{align:"center",title:"M&M's"}) );