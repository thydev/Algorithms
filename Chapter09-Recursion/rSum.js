function rSum(n) {
    if (n === 1) {
        return 1;
    } else {
        return rSum(n - 1) + n;
    }
}

console.log(rSum(1)); // => 1
console.log(rSum(2)); // => 3
console.log(rSum(3)); // => 6
console.log(rSum(4)); // => 10
console.log(rSum(5)); // => 15
console.log(rSum(51)); // => 1326
// console.log(rSum(91551)); // => error: Maximum call stack size exceeded