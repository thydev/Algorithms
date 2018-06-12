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

// https://www.hackerrank.com/challenges/mini-max-sum/problem
// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let min = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let temp = 0;
        for (let j = 0; j < arr.length; j++) {
            if (j !== i) {
                temp += parseInt(arr[j], 10);
            }
        }
        if (i === 0) {
            min = temp;
            max = temp;
        }
        if (temp < min) min = temp;
        if (temp > max) max = temp;
    }

    console.log(min, max);

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}