
//Slow
function rFibonacci(num) {
    // if (num == 0) return 0;
    // if (num == 1) return 1;
    if (num < 2) return num;
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

//fast
function rFib(num, arr) {
    arr = arr || [0, 1];
    if (arr.length == num + 1) {
        return arr[num];
    } else {
        let newval = arr[arr.length -1] + arr[arr.length -2];
        arr.push(newval);
        return rFib(num, arr);
    }
}

console.log(rFib(3));
console.log(rFib(4));
console.log(rFib(5));
//fast
function rFib3(num, a=0, b=1) {
    if (num == 0) return 0;
    if (num == 1) return 1;
    return rFib3(num-1, b, a+b);
}

console.log(rFib3(3));
console.log(rFib3(4));
console.log(rFib3(5));