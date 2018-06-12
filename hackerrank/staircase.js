'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// https://www.hackerrank.com/challenges/staircase/problem
// Complete the staircase function below.
function staircase(n) {
    for (let i = 0; i < n; i++) {
        // console.log(spaces((n-i)/2) + symbols(i+1) + spaces((n-i)/2));
        console.log(spaces(n - i - 1) + symbols(i + 1));
    }

}

function spaces(num) {
    let str = '';
    for (let i = 0; i < num; i++) {
        str += ' ';
    }
    return str;
}

function symbols(num) {
    let str = '';
    for (let i = 0; i < num; i++) {
        str += '#';
    }
    return str;
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}