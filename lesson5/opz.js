'use strict';

function readNumber(str, ind) {
    let container = [];
    let number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    let operSign = ['+', '-', '/', '*'];
    let i = ind;
    if ((!number.includes(str[i]) || str[i] === '.') && str[i] !== '-') {
        let newStr = str.substring(ind, ind + 1);
        throw new Error('Invalid number format: ' + newStr);
    } else {
        do {
            i++;
        } while (number.includes(str[i]) || (str[ind] === '-' && (operSign.includes(str[ind-1]))))
        let num = parseFloat(str.substring(ind, i));
        container.push(num, i);
    }
    return container;
}

// function testReadNumber(input, index, expected, expectedInd) {
//     try {
//         let actual = readNumber(input, index);
//         console.log(actual[0] === expected && actual[1] === expectedInd, input, index, actual)
//     } catch (e) {
//         console.log(false, input, index, e);
//     }
// }

function getTokens(input) {
    let tokens = [];
    let expectNumber = true;
    let expectOpenBracket = true;
    let expectCloseBracket = false;
    let expectOperator = false;

    let i = 0;
    do {
        let token = input[i];
        if (expectNumber || expectOpenBracket) {
            if (token === '(') {
                tokens.push({value: token, type: 'openedBracket'});
                expectNumber = true;
                expectOpenBracket = false;
                expectCloseBracket = false;
                expectOperator = false;
                i++;

            } else {
                let readyNum = readNumber(input, i);
                tokens.push({value: readyNum[0], type: 'number'});
                i = readyNum[1];
                expectNumber = false;
                expectOpenBracket = false;
                expectCloseBracket = true;
                expectOperator = true;
            }
        } else if (expectCloseBracket || expectOperator) {
            if (token === ')') {
                tokens.push({value: token, type: 'closedBracket'});
                expectNumber = false;
                expectOpenBracket = false;
                expectCloseBracket = false;
                expectOperator = true;
                i++;

            } else {
                tokens.push({value: token, type: 'operator'});
                expectNumber = true;
                expectOpenBracket = true;
                expectCloseBracket = false;
                expectOperator = false;
                i++;

            }
        }
    } while (i < input.length);
    return tokens;
}
console.log(getTokens('(-1-4)*5'));
let tokenArray = getTokens('(-1.5/2+3)*5');
console.log(tokenArray);
// '(-1.5/2+3)*5'

function buildReversePolishNotation(tokens) {
    let priorities = {
        '(': 1,
        '+': 2,
        '-': 2,
        ':': 3,
        '/': 3
    };
    let stack = [];
    let result = [];

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        switch (token.type) {
            case 'number':
                result.push(token.value);
                break;
            case 'operator':
                const priority = priorities[token.value];
                while (priorities[stack[stack.length - 1]] >= priority) {
                    result.push(stack.pop());
                }
                stack.push(token.value);
                break;
            case 'openedBracket':
                stack.push(token.value);
                break;
            case 'closedBracket':
                do {
                    result.push(stack.pop());
                }
                while (stack[stack.length - 1] !== '(')
                stack.pop();
                break;
        }
    }
    while (stack.length !== 0) {
        result.push(stack.pop());
    }
    return result;
}

let tokenPolish = buildReversePolishNotation(tokenArray)
console.log(tokenPolish);

function calculate(input) {
    let operSign = ['+', '-', '/', '*'];
    let stack = [];

    for (let i = 0; i < input.length; i++) {
        let token = input[i];
        switch (token) {
            case '+': {
                let a = stack.pop();
                let b = stack.pop();
                let sum = b + a;
                stack.push(sum);
                break;
            }

            case '-': {
                let a = stack.pop();
                let b = stack.pop();
                let sum = b - a;
                stack.push(sum);
                break;
            }

            case '*': {
                let a = stack.pop();
                let b = stack.pop();
                let sum = b * a;
                stack.push(sum);
                break;
            }

            case '/': {
                let a = stack.pop();
                let b = stack.pop();
                let sum = b / a;
                stack.push(sum);
                break;
            }

            default: {
                stack.push(token);
                break;
            }
        }
    }

    return stack[0];
}

console.log(calculate(tokenPolish));