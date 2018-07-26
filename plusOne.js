/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 < 10) {
      digits[i] = digits[i] + 1;
      break;
    } else {
      digits[i] = 0;
      if (i == 0) {
        digits.unshift(1);
      }
    }
  }
  return digits;
};

console.log(plusOne([1, 2, 3])); // [1, 2, 4]
console.log(plusOne([1, 2, 9])); // [1, 3, 0]
console.log(plusOne([9])); // [1, 0]
