// inpout 5
// 1 2 3 4 5 6 7  8
// 1 1 2 3 5 8 13 21
function fibonacci(num) {
    if (num <= 2) {
        return 1;
    } else {
        var preValues = [1, 1];
        for (var i = 2; i < num; i++) {
            var temp = preValues[0] + preValues[1];
            preValues[0] = preValues[1];
            preValues[1] = temp;
        }
        return preValues[1];
    }
}
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));