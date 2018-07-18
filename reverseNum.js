/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // can't use string
  // take the digit by mod by 10
  // then divide by 10
  // increase digit counter to calculate back the value
  // resutl

  var result = [];
  var isNegative = false;
  if (x < 0) {
    isNegative = true;
    x = Math.abs(x);
  }
  if (x < 10) {
    return isNegative ? x * -1 : x;
  }

  console.log(Number.MAX_SAFE_INTEGER);
  if (x > 2147483647) {
    return 0;
  }

  while (x >= 10) {
    result.push(x % 10);
    x = Math.floor(x / 10);
  }
  result.push(x);

  var num = 0;
  for (var i = 0; i < result.length; i++) {
    num += result[i] * Math.pow(10, result.length - i - 1);
  }
  if (num > 2147483647) {
    return 0;
  }
  return isNegative ? num * -1 : num;
};

/*
Example 1:
Input: 123
Output: 321

Example 2:
Input: -123
Output: -321

Example 3:
Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers 
within the 32-bit signed integer range: [−2^31,  2^31 − 1]. 
For the purpose of this problem, assume that your function returns 0 
when the reversed integer overflows.
*/

console.log(reverse(10)); // 1
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(1534236469)); // 0
