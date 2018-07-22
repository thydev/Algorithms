/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  // find a substring
  // if it find the same character, start count that character till the end of the previous character
  if (s.length < 2) return false;
  var hl = Math.floor(s.length / 2);

  for (var i = hl; i >= 0; i--) {
    if (s.length % i != 0) continue;

    var sub = s.substring(0, i);
    var subtotal = '';
    for (var j = 0; j < Math.floor(s.length / i); j++) {
      subtotal += sub;
    }
    if (subtotal === s) {
      return true;
    }
  }
  return false;
};

console.log(repeatedSubstringPattern('abab')); // true
console.log(repeatedSubstringPattern('aba')); // false
console.log(repeatedSubstringPattern('abcabcabc')); // true
console.log(repeatedSubstringPattern('abaababaab')); // true
