function rTribonacci(num) {
    if (num == 0) return 0;
    if (num == 1) return 0;
    if (num == 2) return 1;
    var result = 0;
    if (num >= 3) {
        result = rTribonacci(num -1) + rTribonacci(num -2) + rTribonacci(num -3);
    }

    return result;
}

console.log(rTribonacci(0)); // 0
console.log(rTribonacci(1)); // 0
console.log(rTribonacci(2)); // 1
console.log(rTribonacci(3)); // 1
console.log(rTribonacci(4)); // 2
console.log(rTribonacci(5)); // 4
console.log(rTribonacci(6)); // 7
console.log(rTribonacci(7)); // 13