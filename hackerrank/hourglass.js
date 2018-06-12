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

// https://www.hackerrank.com/challenges/30-2d-arrays/problem
function hourglass(arr) {
    let max = sumAtPos(arr, 1, 1);
    for (let i = 1; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length - 1; j++) {
            const temp = sumAtPos(arr, i, j);
            if (temp > max) {
                max = temp;
            }
        }
    }
    console.log(max);
    // return max;
}

function sumAtPos(arr, r, c) {
    let sum =
        arr[r - 1][c - 1] + arr[r - 1][c] + arr[r - 1][c + 1] +
        arr[r][c] +
        arr[r + 1][c - 1] + arr[r + 1][c] + arr[r + 1][c + 1];
    // [r - 1][c - 1] [r - 1][c] [r - 1][c + 1]
    //                  [r][c]
    // [r + 1][c - 1] [r + 1][c] [r + 1][c + 1]
    return sum;
}

function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    hourglass(arr);
}