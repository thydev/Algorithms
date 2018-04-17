

function rSigma(num) {
    var result = 0;
    if ( num >= 1 ) {
        result = num + rSigma(num - 1);
    }
    return result;
}

console.log(rSigma(5)); // 15
console.log(rSigma(2)); // 3
console.log(rSigma(3)); // 6