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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// https://www.hackerrank.com/challenges/time-conversion/problem
/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    let time = s.substr(0, s.length - 2);
    console.log(s[s.length - 2])
    let hh = s.substr(0, 2);
    if (s[s.length - 2] === 'P') {
        if (hh < 12) hh = parseInt(hh, 10) + 12;
        time = hh + s.substr(2, s.length - 4);
    } else {
        if (hh === '12') hh = '00'
        time = hh + s.substr(2, s.length - 4);
    }
    return time;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}