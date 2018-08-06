function validBraces(str) {
  var brace = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  var orders = [];
  for (var i = 0; i < str.length; i++) {
    if (orders.length === 0) {
      // if this is the right part, return false
      if (!brace[str[i]]) {
        return false;
      }

      // if this is the left part, add it to the array
      orders.push(str[i]);
    } else {
      // if there is a left and the next char is the right, then remove it from the array orders
      if (brace[orders[orders.length - 1]] === str[i]) {
        orders.splice(orders.length - 1, 1);
      } else {
        // this is the left brace
        orders.push(str[i]);
      }
    }
  }
  // if there is nothing inside the array, this is valid
  return orders.length === 0;
}

console.log(validBraces('()()[[[]]]'));
console.log(validBraces('()()[[[]]]]]'));
console.log(validBraces(']'));
console.log(validBraces('['));
console.log(validBraces('[)'));
console.log(validBraces('[{()}]{}'));

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var characters = {
    '{': '}',
    '(': ')',
    '[': ']'
  };

  var stack = [];
  for (var i = 0; i < s.length; i++) {
    console.log(stack);
    if (stack.length == 0) {
      if (!characters[s[i]]) {
        return false;
      }
      stack.push(s[i]);
    } else {
      if (characters[stack[stack.length - 1]] == s[i]) {
        stack.splice(stack.length - 1, 1);
      } else {
        // push the left part to the stack;
        stack.push(s[i]);
      }
    }
  }

  return stack.length == 0;
};
console.log('=================');
console.log(isValid('(]'));
