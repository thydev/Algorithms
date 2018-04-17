
function rFibonacci(num) {
    if (num == 0) return 0;
    if (num == 1) return 1;
    var result = 0;
    result = rFibonacci(num -1) + rFibonacci(num -2);
    return result;
}

console.log(rFibonacci(0)); // 0
console.log(rFibonacci(1)); // 1
console.log(rFibonacci(2)); // 1 + 0 = 1
console.log(rFibonacci(3)); // 1 + 1 = 2
console.log(rFibonacci(5)); // 1 + 2 = 3; 2 + 3 = 5
console.log(rFibonacci(10));
console.log(rFibonacci(22));