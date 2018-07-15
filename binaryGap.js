/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
  // convert to binary
  // loop for the gap
  // 110 => 1, set isone then get the index at position 1, then next... is 1 again take the index at that positon
  // then last postion - first position = gap
  // then reset
  //
  var bstr = N.toString(2);
  var gap = 0;
  var iFirstOne = -1;
  console.log(bstr);
  for (var i = 0; i < bstr.length; i++) {
    if (bstr[i] == '1') {
      if (iFirstOne == -1) {
        iFirstOne = i;
      } else {
        if (i - iFirstOne > gap) {
          gap = i - iFirstOne;
        }
        iFirstOne = i;
      }
    }
  }
  return gap;
};

console.log(binaryGap(22)); // Output: 2
console.log(binaryGap(13)); // Output: 2
