function rFactorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * rFactorial(n - 1);
    }
}

console.log(rFactorial(5)); // => 120
console.log(rFactorial(3)); // => 6