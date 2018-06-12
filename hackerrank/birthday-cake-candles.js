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
// https://www.hackerrank.com/challenges/birthday-cake-candles/problem
// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    let highest = ar[0];
    let candle = {};
    candle[highest] = 1;
    for (let i = 1; i < ar.length; i++) {
        if (ar[i] >= highest) {
            highest = ar[i];
            if (candle.hasOwnProperty(highest)) {
                candle[highest]++;
            } else {
                candle[highest] = 1;
            }
        }
    }
    return candle[highest];

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = birthdayCakeCandles(ar);

    ws.write(result + "\n");

    ws.end();
}