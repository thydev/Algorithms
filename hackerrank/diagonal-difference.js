'use strict';

const fs = require('fs');

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

// https://www.hackerrank.com/challenges/diagonal-difference/problem
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// Complete the diagonalDifference function below.
function diagonalDifference(a) {
    console.log(a)
    let diagonal1 = 0;
    let diagonal2 = 0;
    const len = a[0].length - 1;
    for (let i = 0; i <= len; i++) {
        console.log(parseInt(a[i][i], 10), 'i', i, 'a', a[i][i]);
        diagonal1 += parseInt(a[i][i], 10);
        diagonal2 += parseInt(a[i][len - i], 10);
        console.log(diagonal1, diagonal2);
    }
    console.log(diagonal1, diagonal2);
    let difference = Math.abs(diagonal1 - diagonal2);
    console.log(difference);
    return difference;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let a = Array(n);

    for (let i = 0; i < n; i++) {
        a[i] = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    }

    let result = diagonalDifference(a);

    ws.write(result + "\n");

    ws.end();
}