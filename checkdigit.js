/**
 * @prop {string} membershipId: The customer's membership ID.
 * @return {number} The check digit.
 */
function createCheckDigit(membershipId) {
  // Write the code that goes here.

  var digit = membershipId
    .split('')
    .map(a => parseInt(a))
    .reduce((a, b) => a + b);

  if (parseInt(digit) > 10) {
    return createCheckDigit(digit.toString());
  }

  return digit;
}

console.log(createCheckDigit('55555'));
